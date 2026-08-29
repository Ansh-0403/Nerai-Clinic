const puppeteer = require('puppeteer');

(async () => {
    const GOOGLE_REVIEWS_URL = "https://www.google.co.in/search?q=NERAI+Orthodontic+and+Dental+Studio-+Dr.+Pooja+Desai&ludocid=1248617646377184161&lsig=AB86z5VNwtE5jvJ-zQG6ooWh7PGy#lkt=LocalPoiReviews";
    const browser = await puppeteer.launch({ headless: true, channel: 'chrome', args: ['--no-sandbox'] });
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
    await page.goto(GOOGLE_REVIEWS_URL, { waitUntil: 'networkidle2' });
    
    const reviews = await page.evaluate(() => {
        const results = [];
        const starElements = Array.from(document.querySelectorAll('[aria-label*="stars"]'));
        starElements.forEach((el, idx) => {
            const container = el.closest('div[class*="gws-localreviews"]') || el.parentElement?.parentElement?.parentElement;
            if (!container) return;
            const textElements = container.querySelectorAll('span');
            let reviewText = '';
            let authorName = 'Google Reviewer';
            const textBlocks = Array.from(textElements).map(s => s.innerText.trim()).filter(t => t.length > 0);
            if (textBlocks.length >= 2) {
                authorName = textBlocks[0];
                const longTexts = textBlocks.filter(t => t.length > 20);
                if (longTexts.length > 0) {
                    reviewText = longTexts[longTexts.length - 1];
                }
            }
            if (reviewText && reviewText.length > 10 && !results.find(r => r.text === reviewText)) {
                results.push({ name: authorName, text: reviewText });
            }
        });
        return results;
    });
    console.log(JSON.stringify(reviews, null, 2));
    await browser.close();
})();
