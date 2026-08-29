import { Router } from 'express';
import puppeteer from 'puppeteer';

const router = Router();

// In-memory cache to prevent getting blocked by Google quickly
let cachedReviews: any[] = [];
let lastFetchTime = 0;
const CACHE_DURATION_MS = 24 * 60 * 60 * 1000; // 24 hours

const GOOGLE_REVIEWS_URL = "https://www.google.co.in/search?q=NERAI+Orthodontic+and+Dental+Studio-+Dr.+Pooja+Desai&ludocid=1248617646377184161&lsig=AB86z5VNwtE5jvJ-zQG6ooWh7PGy#lkt=LocalPoiReviews&lpg=cid:CgIgAQ%3D%3D";

router.get('/', async (req, res) => {
  try {
    const now = Date.now();
    // Return cached reviews if valid
    if (cachedReviews.length > 0 && (now - lastFetchTime) < CACHE_DURATION_MS) {
      return res.json({ success: true, reviews: cachedReviews, cached: true });
    }

    // Otherwise, fetch via Puppeteer
    const browser = await puppeteer.launch({
      headless: true,
      channel: 'chrome', // Use the locally installed Chrome browser
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1920,1080']
    });

    const page = await browser.newPage();
    
    // Set a realistic user agent
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
    
    await page.goto(GOOGLE_REVIEWS_URL, { waitUntil: 'networkidle2' });

    // Extract reviews by looking for common review container patterns.
    // Note: Google's classes are obfuscated, so we look for elements that might contain reviews.
    const reviews = await page.evaluate(() => {
      const results: any[] = [];
      const starElements = Array.from(document.querySelectorAll('[aria-label*="stars"]'));
      
      starElements.forEach((el: Element, idx: number) => {
        const container = el.closest('div[class*="gws-localreviews"]') || el.parentElement?.parentElement?.parentElement;
        if (!container) return;
        
        const textElements = container.querySelectorAll('span');
        let reviewText = '';
        let authorName = 'Google Reviewer';
        let timeText = 'Recently';
        
        const textBlocks = Array.from(textElements).map((s: Element) => (s as HTMLElement).innerText?.trim() || '').filter((t: string) => t.length > 0);
        
        if (textBlocks.length >= 2) {
            authorName = textBlocks[0];
            const longTexts = textBlocks.filter((t: string) => t.length > 20);
            if (longTexts.length > 0) {
                reviewText = longTexts[longTexts.length - 1];
            }
        }

        const aria = el.getAttribute('aria-label') || '';
        const ratingMatch = aria.match(/([0-5])/);
        const rating = ratingMatch ? parseInt(ratingMatch[1], 10) : 5;

        if (reviewText && reviewText.length > 10 && !results.find(r => r.text === reviewText)) {
            results.push({
                id: `google-${idx}-${Date.now()}`,
                name: authorName,
                role: timeText,
                treatmentTag: 'Google Review',
                text: reviewText,
                rating: rating
            });
        }
      });
      
      return results;
    });

    await browser.close();

    if (reviews && reviews.length > 0) {
      cachedReviews = reviews;
      lastFetchTime = now;
      return res.json({ success: true, reviews, cached: false });
    } else {
      // If scraping failed, return the cached ones even if expired, or fallback empty
      return res.json({ success: false, reviews: cachedReviews, error: 'Could not parse reviews from DOM' });
    }

  } catch (error: any) {
    console.error('[Scraper Error]:', error);
    res.status(500).json({ success: false, error: error.message, reviews: cachedReviews });
  }
});

export default router;
