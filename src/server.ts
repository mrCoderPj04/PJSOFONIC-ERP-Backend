import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { apiRouter } from './routes/api';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: '*' }));
app.use(express.json());

// API Routes
app.use('/api', apiRouter);

// Root Route
app.get('/', (req, res) => {
  res.json({
    name: 'PJSOFONIC ERP Express Backend API',
    status: 'ACTIVE',
    version: '1.0.0',
    documentation: '/api/health',
  });
});

app.listen(PORT, () => {
  console.log(`🚀 PJSOFONIC ERP Express API Server running on port ${PORT}`);
  console.log(`🔗 Health Check: http://localhost:${PORT}/api/health`);
});
