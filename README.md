# 🏢 PJSOFONIC ERP — Express Backend API Server

Live Deployed Render Backend API: **`https://pjsofonic-erp-backend.onrender.com`**

---

## 🔗 Live API Endpoints

- **Root API Overview**: `GET https://pjsofonic-erp-backend.onrender.com/`
- **Base Router**: `GET https://pjsofonic-erp-backend.onrender.com/api`
- **Health Check**: `GET https://pjsofonic-erp-backend.onrender.com/api/health` or `GET https://pjsofonic-erp-backend.onrender.com/health`
- **EMS Live Auth**: `POST https://pjsofonic-erp-backend.onrender.com/api/auth/login`
- **Registered Employees**: `GET https://pjsofonic-erp-backend.onrender.com/api/employees`
- **CRM Customer Projects**: `GET https://pjsofonic-erp-backend.onrender.com/api/crm/projects`
- **Quality Testing Queue**: `GET https://pjsofonic-erp-backend.onrender.com/api/quality/testing-queue`

---

## 🛠️ Environment Variables
```env
PORT=5000
NODE_ENV=production
DATABASE_URL=postgresql://mr_coder_04:ak29SiBp5TG-gy1DBpPYcg@pjsofonicerp-31535.j77.aws-ap-south-1.cockroachlabs.cloud:26257/PJsofonic_erp?sslmode=verify-full
EMS_BACKEND_URL=https://erp-backend-1-02lc.onrender.com/api
CRM_BACKEND_URL=https://pjsofonic-crm-backend.onrender.com
```

---

## 🚀 Running Locally
```bash
npm install
npm run dev
```
