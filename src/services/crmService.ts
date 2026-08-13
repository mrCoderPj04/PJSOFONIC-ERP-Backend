import dotenv from 'dotenv';
dotenv.config();

export const CRM_API_BASE = process.env.CRM_BACKEND_URL || 'https://pjsofonic-crm-backend.onrender.com';

export interface CrmProject {
  id: string;
  projectCode: string;
  projectName: string;
  customerName: string;
  customerEmail: string;
  departmentScope: string;
  requirements: string;
  budget: number;
  status: string;
}

export async function fetchCrmProjects(): Promise<CrmProject[]> {
  try {
    const res = await fetch(`${CRM_API_BASE}/api/v1/projects`);
    if (!res.ok) return [];
    const data = await res.json();
    const list = Array.isArray(data) ? data : data.projects || data.data || [];

    return list.map((p: any) => ({
      id: p.id || `crm-${Date.now()}`,
      projectCode: p.projectCode || `CRM-${Math.floor(100 + Math.random() * 900)}`,
      projectName: p.projectName || p.name || 'CRM Customer Project',
      customerName: p.customerName || p.clientName || 'CRM Client',
      customerEmail: p.customerEmail || p.email || 'client@crm.com',
      departmentScope: p.departmentScope || 'Software Engineering',
      requirements: p.requirements || p.description || 'Submitted scope from CRM',
      budget: p.budget || 15000,
      status: p.status || 'PENDING_TL_REVIEW',
    }));
  } catch (err) {
    console.error('CRM Projects fetch error:', err);
    return [];
  }
}
