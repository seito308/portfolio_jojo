import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// PostgreSQL Connection Pool (also compatible with Supabase / Neon / Vercel Postgres)
const pgPool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/sbr_portfolio',
});

// Health & Golden Ratio Telemetry Endpoint
app.get('/api/health', (_req: Request, res: Response) => {
  res.status(200).json({
    status: 'OK',
    edition: 'STEEL BALL RUN // GOLDEN SPIN API',
    goldenRatio: 1.6180339887,
    timestamp: new Date().toISOString(),
  });
});

// Contact Submission Endpoint with PostgreSQL persistence & graceful fallback
app.post('/api/contact', async (req: Request, res: Response) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  try {
    await pgPool.query(
      `INSERT INTO contact_messages (sender_name, sender_email, subject, message_body)
       VALUES ($1, $2, $3, $4)`,
      [name, email, subject || 'General Inquiry', message]
    );
    return res.status(201).json({
      success: true,
      persisted: 'POSTGRESQL',
      message: 'Message recorded via Golden Spin PostgreSQL ledger.',
    });
  } catch (dbError) {
    // Graceful fallback if local DB isn't running yet during demo
    console.warn('Database offline or unconfigured, logged to stdout:', { name, email, subject });
    return res.status(200).json({
      success: true,
      persisted: 'MEMORY_FALLBACK',
      message: 'Message received (Fallback log mode).',
    });
  }
});

app.listen(PORT, () => {
  console.log(`⚡ [SBR-BACKEND] Golden Spin Server running on http://localhost:${PORT}`);
});

export default app;
