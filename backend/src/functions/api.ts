import express from 'express';
import serverless from 'serverless-http';
import cors from 'cors';
import helmet from 'helmet';
import appointmentsRouter from '../routes/appointments';

const app = express();

app.use(helmet());
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// In Netlify, the route will be /api/appointments if rewritten, 
// or /.netlify/functions/api/appointments
// We'll map /api/appointments -> /.netlify/functions/api in netlify.toml
// However, the router itself is mounted here:
app.use('/api/appointments', appointmentsRouter);

// Fallback health check
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'healthy', timestamp: new Date().toISOString() });
});

export const handler = serverless(app);
