import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { apiRouter } from './routes/api';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: '*' }));
app.use(express.json());

// API Router
app.use('/api', apiRouter);

// Alias /health at root level
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    service: 'PJSOFONIC ERP Express Backend Server',
    timestamp: new Date().toISOString(),
  });
});

// Root Overview Endpoint
app.get('/', (req, res) => {
  res.json({
    name: 'PJSOFONIC ERP Express Backend API Server',
    status: 'ACTIVE',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      authLogin: '/api/auth/login',
      employees: '/api/employees',
      crmProjects: '/api/crm/projects',
      qualityTesting: '/api/quality/testing-queue',
    },
  });
});

app.listen(PORT, () => {
  console.log(`🚀 PJSOFONIC ERP Express API Server running on port ${PORT}`);
  console.log(`🔗 Health Check: http://localhost:${PORT}/api/health`);
});
