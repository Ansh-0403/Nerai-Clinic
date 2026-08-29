import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import appointmentsRouter from './routes/appointments';
import reviewsRouter from './routes/reviews';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security and utility middleware
app.use(helmet());
app.use(cors({
  origin: '*', // For development, allow all. In production, restrict to frontend domain.
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Routes
app.use('/api/appointments', appointmentsRouter);
app.use('/api/reviews', reviewsRouter);

// Healthcheck
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`[NERAI Backend] Server running on http://localhost:${PORT}`);
});
