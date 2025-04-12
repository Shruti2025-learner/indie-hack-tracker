
export interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  dueDate?: string;
  projectId: string;
}

export interface Technology {
  id: string;
  name: string;
  color?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'archived' | 'planning' | 'paused';
  githubUrl?: string;
  deploymentUrl?: string;
  technologies: string[];
  tasks: Task[];
  updatedAt: string;
  createdAt: string;
}

export const technologies: Technology[] = [
  { id: '1', name: 'React', color: '#61dafb' },
  { id: '2', name: 'Next.js', color: '#000000' },
  { id: '3', name: 'TypeScript', color: '#007acc' },
  { id: '4', name: 'Node.js', color: '#68a063' },
  { id: '5', name: 'Express', color: '#ffffff' },
  { id: '6', name: 'MongoDB', color: '#13aa52' },
  { id: '7', name: 'PostgreSQL', color: '#336791' },
  { id: '8', name: 'TailwindCSS', color: '#38b2ac' },
  { id: '9', name: 'GraphQL', color: '#e535ab' },
  { id: '10', name: 'Firebase', color: '#ffca28' },
  { id: '11', name: 'AWS', color: '#ff9900' },
  { id: '12', name: 'Docker', color: '#0db7ed' },
  { id: '13', name: 'Supabase', color: '#3ecf8e' },
  { id: '14', name: 'Vercel', color: '#ffffff' },
  { id: '15', name: 'Stripe', color: '#6772e5' },
];

export const projects: Project[] = [
  {
    id: '1',
    name: 'ProjectPilot',
    description: 'A minimal project tracker for solo developers and indie hackers.',
    status: 'active',
    githubUrl: 'https://github.com/username/projectpilot',
    deploymentUrl: 'https://projectpilot.vercel.app',
    technologies: ['2', '3', '8', '13', '14'],
    tasks: [
      {
        id: '101',
        title: 'Setup project structure',
        description: 'Create project directories and initial files',
        completed: true,
        projectId: '1',
      },
      {
        id: '102',
        title: 'Design database schema',
        description: 'Plan Supabase tables and relationships',
        completed: true,
        projectId: '1',
      },
      {
        id: '103',
        title: 'Implement authentication',
        description: 'Add login and signup with Supabase',
        completed: false,
        dueDate: '2025-04-20',
        projectId: '1',
      },
      {
        id: '104',
        title: 'Create dashboard UI',
        description: 'Build the main dashboard interface with project cards',
        completed: false,
        dueDate: '2025-04-25',
        projectId: '1',
      },
    ],
    updatedAt: '2025-04-12T10:30:00Z',
    createdAt: '2025-04-01T08:00:00Z',
  },
  {
    id: '2',
    name: 'AI Content Generator',
    description: 'An AI-powered tool for generating blog content and social media posts.',
    status: 'planning',
    technologies: ['2', '3', '8', '11', '14'],
    tasks: [
      {
        id: '201',
        title: 'Research AI text APIs',
        description: 'Compare OpenAI, Anthropic, and other providers',
        completed: true,
        projectId: '2',
      },
      {
        id: '202',
        title: 'Create wireframes',
        description: 'Design initial user interface mockups',
        completed: false,
        dueDate: '2025-04-30',
        projectId: '2',
      },
    ],
    updatedAt: '2025-04-10T15:45:00Z',
    createdAt: '2025-04-05T12:20:00Z',
  },
  {
    id: '3',
    name: 'E-commerce Dashboard',
    description: 'A dashboard for tracking sales, inventory, and customer data for online stores.',
    status: 'paused',
    githubUrl: 'https://github.com/username/ecommerce-dash',
    technologies: ['1', '3', '7', '8', '15'],
    tasks: [
      {
        id: '301',
        title: 'Integrate Stripe API',
        description: 'Connect payment processing and transactions',
        completed: true,
        projectId: '3',
      },
      {
        id: '302',
        title: 'Build analytics charts',
        description: 'Create sales and inventory visualization components',
        completed: false,
        projectId: '3',
      },
    ],
    updatedAt: '2025-03-25T09:15:00Z',
    createdAt: '2025-03-01T11:30:00Z',
  },
  {
    id: '4',
    name: 'DevJournal',
    description: 'A journal application for developers to track their learning progress and code snippets.',
    status: 'archived',
    githubUrl: 'https://github.com/username/devjournal',
    deploymentUrl: 'https://devjournal.vercel.app',
    technologies: ['1', '3', '8', '10'],
    tasks: [
      {
        id: '401',
        title: 'Implement code snippet storage',
        description: 'Create component for syntax highlighting and saving code',
        completed: true,
        projectId: '4',
      },
      {
        id: '402',
        title: 'Add export functionality',
        description: 'Allow exporting journal entries to markdown',
        completed: true,
        projectId: '4',
      },
    ],
    updatedAt: '2025-02-15T14:10:00Z',
    createdAt: '2025-01-20T16:45:00Z',
  },
  {
    id: '5',
    name: 'MicroSaaS Boilerplate',
    description: 'A starter template for building micro-SaaS applications with subscription billing.',
    status: 'active',
    githubUrl: 'https://github.com/username/microsaas-starter',
    technologies: ['2', '3', '7', '8', '13', '15'],
    tasks: [
      {
        id: '501',
        title: 'Create user roles system',
        description: 'Implement role-based access control',
        completed: true,
        projectId: '5',
      },
      {
        id: '502',
        title: 'Set up subscription tiers',
        description: 'Configure Stripe billing and products',
        completed: false,
        dueDate: '2025-04-22',
        projectId: '5',
      },
      {
        id: '503',
        title: 'Build team invitation system',
        description: 'Allow workspace owners to invite team members',
        completed: false,
        dueDate: '2025-04-28',
        projectId: '5',
      },
    ],
    updatedAt: '2025-04-08T17:30:00Z',
    createdAt: '2025-03-15T13:40:00Z',
  },
];
