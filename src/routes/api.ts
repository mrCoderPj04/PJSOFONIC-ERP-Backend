import { Router, Request, Response } from 'express';
import { loginEmsUser, getEmsEmployees } from '../services/emsService';
import { fetchCrmProjects } from '../services/crmService';

export const apiRouter = Router();

apiRouter.get('/health', (req: Request, res: Response) => {
  res.json({
    status: 'OK',
    service: 'PJSOFONIC ERP Express Backend Server',
    timestamp: new Date().toISOString(),
  });
});

// EMS Auth Endpoint
apiRouter.post('/auth/login', async (req: Request, res: Response) => {
  const { employeeId, email, password } = req.body;
  const identifier = employeeId || email;

  if (!identifier || !password) {
    return res.status(400).json({ error: 'EMS Employee ID or email and password are required' });
  }

  const result = await loginEmsUser(identifier, password);
  if (!result.success) {
    return res.status(401).json({ error: result.error });
  }

  res.json({
    message: 'EMS Authentication Verified',
    token: result.token,
    user: result.user,
  });
});

// Registered Staff List & Department Divisions
apiRouter.get('/employees', async (req: Request, res: Response) => {
  const employees = await getEmsEmployees();

  const departmentsMap: Record<string, typeof employees> = {};
  employees.forEach((emp) => {
    const dept = emp.department || 'Software Engineering';
    if (!departmentsMap[dept]) {
      departmentsMap[dept] = [];
    }
    departmentsMap[dept].push(emp);
  });

  res.json({
    totalEmployees: employees.length,
    departments: Object.keys(departmentsMap),
    employees,
    employeesByDepartment: departmentsMap,
  });
});

// CRM Approved Customer Projects
apiRouter.get('/crm/projects', async (req: Request, res: Response) => {
  const crmProjects = await fetchCrmProjects();
  res.json({
    totalProjects: crmProjects.length,
    projects: crmProjects,
  });
});

// Quality / AGM Quality Testing Queue Route
apiRouter.get('/quality/testing-queue', async (req: Request, res: Response) => {
  const employees = await getEmsEmployees();
  const qualityStaff = employees.filter(
    (e) => e.department.toUpperCase().includes('QUALITY') || e.department.toUpperCase().includes('AGM QUALITY')
  );

  res.json({
    qualityStaff,
    testingStatusOptions: ['IN PROCESS', 'DONE'],
  });
});
