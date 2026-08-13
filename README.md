# PJSOFONIC ERP - Backend Express API Server

![PJSOFONIC ERP Logo](../frontend/logo/Erp.png)

> Official Repository: [https://github.com/mrCoderPj04/PJSOFONIC-ERP-Backend.git](https://github.com/mrCoderPj04/PJSOFONIC-ERP-Backend.git)

PJSOFONIC ERP Backend is a high-performance **Node.js / Express TypeScript** server that orchestrates data synchronization between PJSOFONIC Enterprise Management System (EMS), Customer Relationship Management (CRM) backends, and ERP client interfaces.

---

## 🔌 API Endpoints & Core Services

### 1. EMS Authentication Service (`/api/auth/login`)
- **POST** `/api/auth/login`
  - Validates credentials against live EMS Backend (`https://erp-backend-1-02lc.onrender.com/api`).
  - Returns authenticated session tokens, verified employee roles, and profile metadata.

### 2. Registered Staff Directory (`/api/employees`)
- **GET** `/api/employees`
  - Retrieves registered EMS staff directly from EMS backend.
  - Automatically categorizes staff by department (Software Engineering, Quality Assurance, UI/UX Design, Finance).

### 3. CRM Approved Projects (`/api/crm/projects`)
- **GET** `/api/crm/projects`
  - Ingests approved customer projects live from PJSOFONIC CRM (`https://pjsofonic-crm-backend.onrender.com`).
  - Auto-routes approved projects to Team Leaders for milestone decomposition.

### 4. Quality & AGM Audit Queue (`/api/quality/testing-queue`)
- **GET** `/api/quality/testing-queue`
  - Provides testing queue endpoints for Quality Assurance and AGM Quality department staff.

---

## 🛠️ Environment Setup & Running

### 1. Environment Variables (`.env`)
Create a `.env` file in the `backend` directory:
```env
PORT=5000
EMS_BACKEND_URL=https://erp-backend-1-02lc.onrender.com/api
CRM_BACKEND_URL=https://pjsofonic-crm-backend.onrender.com
NODE_ENV=development
```

### 2. Installation & Run
```bash
git clone https://github.com/mrCoderPj04/PJSOFONIC-ERP-Backend.git
cd PJSOFONIC-ERP-Backend
npm install
npm run build
npm start
```

---

## 📜 Repository Link
- **Backend Repository**: [https://github.com/mrCoderPj04/PJSOFONIC-ERP-Backend.git](https://github.com/mrCoderPj04/PJSOFONIC-ERP-Backend.git)
