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

let REALTIME_CRM_PROJECTS: CrmProject[] = [];

export function addCrmProject(project: Partial<CrmProject>): CrmProject {
  const newProj: CrmProject = {
    id: project.id || `crm-${Date.now()}`,
    projectCode: project.projectCode || `CRM-PRJ-${Math.floor(100 + Math.random() * 900)}`,
    projectName: project.projectName || 'CRM Active Customer Project',
    customerName: project.customerName || 'CRM Client',
    customerEmail: project.customerEmail || 'client@crm.com',
    departmentScope: project.departmentScope || 'Software Engineering',
    requirements: project.requirements || 'Submitted scope from CRM',
    budget: project.budget || 15000,
    status: project.status || 'ACTIVE',
  };
  REALTIME_CRM_PROJECTS = [newProj, ...REALTIME_CRM_PROJECTS];
  return newProj;
}

export async function fetchCrmProjects(): Promise<CrmProject[]> {
  try {
    const res = await fetch(`${CRM_API_BASE}/api/v1/projects`);
    if (res.ok) {
      const data = await res.json();
      const list = Array.isArray(data) ? data : data.projects || data.data || [];
      if (Array.isArray(list) && list.length > 0) {
        const fetched = list.map((p: any) => ({
          id: p.id || `crm-${Date.now()}`,
          projectCode: p.projectCode || `CRM-${Math.floor(100 + Math.random() * 900)}`,
          projectName: p.projectName || p.name || 'CRM Customer Project',
          customerName: p.customerName || p.clientName || 'CRM Client',
          customerEmail: p.customerEmail || p.email || 'client@crm.com',
          departmentScope: p.departmentScope || 'Software Engineering',
          requirements: p.requirements || p.description || 'Submitted scope from CRM',
          budget: p.budget || 15000,
          status: p.status || 'ACTIVE',
        }));
        return [...REALTIME_CRM_PROJECTS, ...fetched];
      }
    }
  } catch (err) {
    console.warn('CRM API real-time query:', err);
  }

  return REALTIME_CRM_PROJECTS;
}


