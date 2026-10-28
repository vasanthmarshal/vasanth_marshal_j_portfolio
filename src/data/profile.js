export const profile = {
  name: 'J Vasanth Marshal',
  shortName: 'Vasanth Marshal',
  initials: 'VM',
  role: 'Senior Software Engineer · Full Stack · GenAI',
  email: 'vasanthmarshal2020@gmail.com',
  phone: '+91 73971 06325',
  phoneHref: 'tel:+917397106325',
  linkedin: 'https://www.linkedin.com/in/vasanth-marshal-j/',
  linkedinLabel: 'linkedin.com/in/vasanth-marshal-j',
  location: 'Chennai, Tamil Nadu, India',
  resume: '/assets/VasanthMarshalJ_Resume.pdf',
  photo: '/assets/profile.jpg',
};

export const navLinks = [
  ['Skills', '#skills'],
  ['AI Engineering', '#ai'],
  ['Experience', '#experience'],
  ['Recognition', '#recognition'],
  ['Projects', '#projects'],
  ['Contact', '#contact'],
];

// [label, sub-label, devicon path | null, badge text when there is no logo]
export const skills = {
  'Backend & Languages': [
    ['JavaScript', 'Language', 'javascript/javascript-original'],
    ['TypeScript', 'Language', 'typescript/typescript-original'],
    ['C++', 'Language', 'cplusplus/cplusplus-original'],
    ['Node.js', 'Runtime', 'nodejs/nodejs-original'],
    ['Express.js', 'Web framework', 'express/express-original'],
    ['REST APIs', 'Design & integration', null, 'API'],
    ['JWT Auth', 'Authentication', null, 'JWT'],
  ],
  Frontend: [
    ['React.js', 'UI library', 'react/react-original'],
    ['Vue.js', 'Framework', 'vuejs/vuejs-original'],
    ['Next.js', 'React framework', 'nextjs/nextjs-original'],
    ['Redux', 'State · Redux-Saga', 'redux/redux-original'],
    ['Storybook', 'Component docs', 'storybook/storybook-original'],
    ['Tailwind CSS', 'Styling · Shadcn UI', 'tailwindcss/tailwindcss-original'],
    ['HTML5', 'Markup', 'html5/html5-original'],
    ['CSS3', 'Styling', 'css3/css3-original'],
  ],
  'AI Engineering': [
    ['Claude Code', 'Agentic coding', '/assets/icons/claude-code.svg', 'CC'],
    ['Cursor', 'AI IDE', '/assets/icons/cursor.svg', 'CU'],
    ['GitHub Copilot', 'AI pair programmer', '/assets/icons/github-copilot.svg', 'GC'],
    ['MCP', 'Model Context Protocol', '/assets/icons/mcp.svg', 'MCP'],
    ['Prompt Engineering', 'Prompting', null, 'PE'],
    ['Context Engineering', 'Agent context', null, 'CE'],
    ['AI Agents', 'Skills · Hooks · Commands', null, 'AI'],
    ['CLAUDE.md', 'Cursor Rules', '/assets/icons/claude.svg', 'MD'],
  ],
  'Data & Cloud': [
    ['PostgreSQL', 'Database', 'postgresql/postgresql-original'],
    ['MySQL', 'Database', 'mysql/mysql-original'],
    ['MongoDB', 'Database', 'mongodb/mongodb-original'],
    ['Redis', 'Caching', 'redis/redis-original'],
    ['AWS', 'S3 · SQS · SNS · SES · Lambda', 'amazonwebservices/amazonwebservices-original'],
    ['Docker', 'Containers', 'docker/docker-original'],
  ],
  'Testing & Monitoring': [
    ['Jest', 'Unit testing', 'jest/jest-plain'],
    ['Vitest', 'Unit testing', 'vitest/vitest-original'],
    ['Testing Library', 'Component tests', null, 'RTL'],
    ['New Relic', 'Monitoring · RCA', 'newrelic/newrelic-original'],
  ],
  'Tools & Platforms': [
    ['Git', 'Version control', 'git/git-original'],
    ['GitHub', 'Collaboration', 'github/github-original'],
    ['Bitbucket', 'Collaboration', 'bitbucket/bitbucket-original'],
    ['Jira', 'Agile tracking', 'jira/jira-original'],
    ['Slack', 'Collaboration', 'slack/slack-original'],
    ['Contentful', 'CMS', '/assets/icons/contentful.svg', 'CF'],
    ['Braze', 'Customer engagement', '/assets/icons/braze.png', 'BZ'],
    ['DocuSign', 'E-signature', '/assets/icons/docusign.png', 'DS'],
    ['Adobe Acrobat', 'Documents', '/assets/icons/adobe-acrobat.svg', 'AA'],
    ['Acquia DXP', 'Digital experience', '/assets/icons/acquia.png', 'AQ'],
  ],
};

export const aiProjects = [
  {
    icon: '⚙',
    title: 'Release verification agent',
    text: 'An AI agent wired to Jira, GitHub and Slack through MCP. It cross-checks repository branches against sprint tickets, flags mismatches between planned and shipped work, and posts the release report automatically.',
    impact: '≈ ½ day of developer effort saved per release',
    tags: ['MCP', 'Jira', 'GitHub', 'Slack', 'AI Agents'],
  },
  {
    icon: '🗄',
    title: 'Database MCP server',
    text: 'A custom MCP server exposing database tools so Claude can query data through tool calls and analyse issues directly — speeding up debugging and root-cause analysis.',
    impact: 'Faster incident triage and RCA',
    tags: ['MCP Server', 'PostgreSQL', 'Node.js', 'Tool use'],
  },
  {
    icon: '🧩',
    title: 'Reusable AI dev workflows',
    text: 'Team-wide conventions built from CLAUDE.md, Cursor Rules, Skills, Commands, Hooks and sub-agents — accelerating feature work, debugging, refactoring and documentation with consistent output.',
    impact: 'Higher productivity, consistent engineering',
    tags: ['Claude Code', 'Cursor', 'Copilot', 'Skills & Hooks'],
  },
  {
    icon: '📸',
    title: 'PostgreSQL snapshot & restore tool',
    text: 'An internal tool that captures and restores transaction-specific test data, making issues easy to reproduce and cutting the time developers and QA spend on test setup.',
    impact: '30% less developer & QA testing time',
    tags: ['PostgreSQL', 'Tooling', 'QA'],
  },
];

export const career = [
  { title: 'Software Developer Intern', dates: 'Feb 2024 – Sep 2024' },
  { title: 'Software Analyst', dates: 'Oct 2024 – Jun 2025' },
  { title: 'Senior Software Engineer', dates: 'Jul 2025 – Present', current: true },
];

export const jobBullets = [
  'Delivered enterprise-grade full-stack web applications across multiple client engagements.',
  'Designed reusable AI development workflows with Claude Code, Cursor and GitHub Copilot — CLAUDE.md, Skills, Commands, Hooks, Rules, AI Agents and MCP integrations.',
  'Built an AI-powered release verification agent and a database-access MCP server (see AI Engineering).',
  'Engineered a PostgreSQL snapshot and restoration tool, reducing developer and QA testing time by 30%.',
  'Integrated enterprise platforms including JPMorgan Chase, Braze, Contentful, Acertus, RunBuggy, Slack APIs and Provider Exchange Network.',
  'Worked with AWS S3, SQS, SNS, SES, Lambda, ElastiCache and Secrets Manager.',
  'Improved performance with Redis caching, the Single Flight pattern, optimized queries and API enhancements.',
  'Managed production support by analyzing incidents using New Relic, assessing severity, performing root cause analysis (RCA), and coordinating hotfixes to resolve production issues.',
];

export const education = {
  school: 'SASTRA Deemed University',
  degree: 'B.Tech in Computer Science and Engineering · CGPA 8.58',
  place: 'Thanjavur, Tamil Nadu',
  dates: 'Oct 2020 – May 2024',
};

export const featuredProject = {
  kicker: 'Feb 2025 – Present · Bounteous x Accolite',
  title: 'End-to-End Vehicle Purchase Digital Checkout Platform',
  summary:
    'A digital platform that streamlines private-party vehicle transactions — payments, financing, title transfers, document signing and delivery — built and maintained in production.',
  bullets: [
    'Wrote Engineering Requirements Documents and drove features from requirements to delivery.',
    'Built full-stack features with Node.js, Vue.js, PostgreSQL, Redis and AWS.',
    'Automated customer email & SMS with Braze and built reusable campaign POCs — 90% less campaign effort.',
    'Implemented the Single Flight pattern to coalesce up to 100 concurrent requests, removing redundant function and database calls.',
    'Engineered REST APIs, webhooks and third-party integrations to automate business workflows.',
    'Used Redis and Contentful CMS to improve performance and content management.',
    'Delivered DocuSign and Adobe Acrobat document generation and e-signature flows.',
    'Handled production support: incident analysis with New Relic, severity assessment and hotfix coordination.',
  ],
  tags: ['Node.js', 'Vue.js', 'PostgreSQL', 'Redis', 'AWS', 'Braze', 'DocuSign', 'Contentful', 'New Relic'],
};

export const otherProjects = [
  {
    kicker: 'Oct 2024 – Jan 2025',
    title: 'Founder Networking & Collaboration Platform',
    summary:
      'Responsive, reusable React interfaces for a founder networking product, built with design and backend teams.',
    bullets: [
      'Reusable UI component library documented in Storybook.',
      'Scalable async workflows with Redux & Redux-Saga.',
      'Unit and component tests with Vitest and React Testing Library.',
    ],
    tags: ['React.js', 'Redux-Saga', 'Storybook', 'Vitest'],
  },
  {
    kicker: 'Personal project',
    title: 'Logistics Load Matching Platform',
    summary: 'Connects truck owners directly with load owners, removing intermediary dependency.',
    bullets: [
      'REST APIs and backend services on Node.js, Express and MongoDB.',
      'Authentication, load posting, vehicle listing and booking workflows.',
      'Integrated external APIs for fuel prices and vehicle tracking.',
    ],
    tags: ['Node.js', 'Express', 'MongoDB', 'EJS', 'Bootstrap'],
  },
];

export const awards = [
  ['🏆', '2× Emerging Icon Award', 'High-impact solutions and outstanding performance across multiple client engagements.'],
  ['🤝', 'Collaboration Champion Award', 'Driving cross-functional collaboration for successful project delivery.'],
  ['⭐', 'Customer Success Award', 'Rapidly adopting new technologies to deliver high-quality customer outcomes.'],
];

export const certs = [
  { title: 'Claude Certified Architect – Foundations (CCA-F)', sub: 'Anthropic', highlight: true },
  { title: 'Claude Certified Developer – Foundations (CCDV-F)', sub: 'Anthropic', highlight: true },
  {
    title: 'Anthropic Academy',
    sub: 'AI Fluency Framework & Foundations · Introduction to Claude Cowork · Model Context Protocol · Claude 101 · Claude Code in Action · Claude Code 101 · Introduction to Agentic Skills · Introduction to Sub-Agents',
  },
  { title: 'AWS Certified Cloud Practitioner', sub: 'Udemy' },
  {
    title: 'AI & Developer Productivity',
    sub: 'AI for Developers with GitHub Copilot, Claude, Cursor AI & ChatGPT · GitHub Copilot: The Complete Guide (2025)',
  },
  {
    title: 'Software Engineering',
    sub: 'System Design · The Complete Web Development Bootcamp (Udemy) · LinkedIn Learning: Git, Next.js, React with TypeScript, React Testing & Debugging',
  },
];
