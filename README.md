<p align="center">
  <img src="./public/logo.png" alt="PJSOFONIC ERP Logo" width="200" />
</p>

# 🏢 PJSOFONIC ERP — Express Backend API Server

[![Render Backend](https://img.shields.io/badge/Render-Backend_Live-brightgreen?logo=render)](https://pjsofonic-erp-backend.onrender.com)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green?logo=node.js)](https://nodejs.org/)
[![CockroachDB](https://img.shields.io/badge/CockroachDB-PostgreSQL-blue?logo=cockroachlabs)](https://www.cockroachlabs.com/)

Production Node.js & Express REST API Server for **PJSOFONIC ERP System**.

---

## 🔗 Live Production API Endpoints

- 🌐 **Root Health Check**: `GET https://pjsofonic-erp-backend.onrender.com/`
- 🌐 **Base Router**: `GET https://pjsofonic-erp-backend.onrender.com/api`
- 💓 **Health Endpoint**: `GET https://pjsofonic-erp-backend.onrender.com/api/health`
- 🔐 **EMS Staff Authentication**: `POST https://pjsofonic-erp-backend.onrender.com/api/auth/login`
- 👥 **EMS Staff Roster**: `GET https://pjsofonic-erp-backend.onrender.com/api/employees`
- 📁 **CRM Approved Projects**: `GET https://pjsofonic-erp-backend.onrender.com/api/crm/projects`
- 🧪 **Quality Testing Queue**: `GET https://pjsofonic-erp-backend.onrender.com/api/quality/testing-queue`

---

## 🔑 Key Architecture & Integrations

- **EMS System Integration**: Authentication and employee metadata are fetched directly from live EMS API (`https://erp-backend-1-02lc.onrender.com/api`).
- **CRM System Integration**: Customer project approvals auto-sync from CRM (`https://pjsofonic-crm-backend.onrender.com`).
- **CockroachDB Database**: Cloud PostgreSQL database for persistent ERP tasks, project state, and quality testing status.

---

## 🛠️ Environment Variables (`.env`)

```env
PORT=5000
NODE_ENV=production
DATABASE_URL="postgresql://mr_coder_04:ak29SiBp5TG-gy1DBpPYcg@pjsofonicerp-31535.j77.aws-ap-south-1.cockroachlabs.cloud:26257/PJsofonic_erp?sslmode=verify-full"
EMS_BACKEND_URL="https://erp-backend-1-02lc.onrender.com/api"
CRM_BACKEND_URL="https://pjsofonic-crm-backend.onrender.com"
```

---

## 🚀 Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build typescript bundle
npm run build
```
