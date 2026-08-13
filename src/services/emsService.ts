import dotenv from 'dotenv';
dotenv.config();

export const EMS_API_BASE = process.env.EMS_BACKEND_URL || 'https://erp-backend-1-02lc.onrender.com/api';

export interface EmsEmployee {
  id: string;
  employeeId: string;
  fullName: string;
  email: string;
  phone?: string;
  department: string;
  designation: string;
  role: 'TEAM_LEAD' | 'EMPLOYEE' | 'QA' | 'FINANCE';
  status: 'ACTIVE' | 'INACTIVE';
  avatarUrl?: string;
}

export async function loginEmsUser(employeeIdOrEmail: string, password: string) {
  try {
    const isEmail = employeeIdOrEmail.includes('@');
    const payload = isEmail
      ? { email: employeeIdOrEmail, password }
      : { employeeId: employeeIdOrEmail.toUpperCase(), password };

    const res = await fetch(`${EMS_API_BASE}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    if (!res.ok || data.error) {
      return {
        success: false,
        error: data.error || data.message || 'Access Denied: Account not registered in EMS.',
      };
    }

    return {
      success: true,
      token: data.token || data.accessToken,
      user: data.user || data.employee,
    };
  } catch (err: any) {
    return {
      success: false,
      error: `EMS API Connection Error (${EMS_API_BASE}): ${err.message}`,
    };
  }
}

export async function getEmsEmployees(): Promise<EmsEmployee[]> {
  try {
    const res = await fetch(`${EMS_API_BASE}/employees`);
    if (!res.ok) return [];
    const data = await res.json();
    const list = Array.isArray(data) ? data : data.employees || [];

    return list.map((emp: any, index: number) => {
      const designation = emp.designation || emp.title || 'Software Engineer';
      const dept = emp.department || emp.dept || 'Software Engineering';

      return {
        id: emp.id || emp._id || `ems-${emp.employeeId || index}`,
        employeeId: emp.employeeId || `EMS-100${index + 1}`,
        fullName: emp.fullName || emp.name || `EMS Employee ${index + 1}`,
        email: emp.email || `employee${index + 1}@pjsofonic.com`,
        phone: emp.phone || emp.contact || '+1 (555) 234-5678',
        department: dept,
        designation: designation,
        role: determineRole(designation, dept),
        status: emp.status === 'INACTIVE' ? 'INACTIVE' : 'ACTIVE',
        avatarUrl: emp.avatarUrl || emp.profilePicture,
      };
    });
  } catch (err) {
    console.error('Failed to fetch EMS employees:', err);
    return [];
  }
}

function determineRole(designation: string, department: string): 'TEAM_LEAD' | 'EMPLOYEE' | 'QA' | 'FINANCE' {
  const d = designation.toUpperCase();
  const dept = department.toUpperCase();

  if (dept.includes('QUALITY') || d.includes('QA') || d.includes('TESTING') || d.includes('AGM QUALITY')) {
    return 'QA';
  }
  if (dept.includes('FINANCE') || d.includes('ACCOUNT')) {
    return 'FINANCE';
  }
  if (d.includes('LEAD') || d.includes('MANAGER') || d.includes('TL') || d.includes('DIRECTOR')) {
    return 'TEAM_LEAD';
  }
  return 'EMPLOYEE';
}
