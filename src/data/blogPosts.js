export const blogPosts = [
  {
    id: 'getting-started-with-react-typescript',
    title: 'Getting Started with React and TypeScript',
    titleDe: 'Erste Schritte mit React und TypeScript',
    excerpt: 'Learn how to set up a robust React project with TypeScript, including best practices, component patterns, and tooling recommendations.',
    excerptDe: 'Lernen Sie, wie Sie ein robustes React-Projekt mit TypeScript einrichten, inklusive Best Practices, Komponentenmustern und Tooling-Empfehlungen.',
    content: `
# Getting Started with React and TypeScript

TypeScript has become the de facto standard for building scalable React applications. In this guide, we'll explore how to set up and optimize a React + TypeScript project.

## Why TypeScript?

TypeScript offers several benefits:

- **Type Safety**: Catch errors at compile time
- **Better IDE Support**: Improved autocomplete and refactoring
- **Self-Documenting Code**: Types serve as documentation
- **Easier Refactoring**: Make changes with confidence

## Project Setup

### Using Vite

\`\`\`bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
\`\`\`

### Component Types

Here's a simple typed component:

\`\`\`typescript
interface Props {
  title: string;
  count: number;
  isActive?: boolean;
}

export const MyComponent: React.FC<Props> = ({ title, count, isActive = false }) => {
  return (
    <div className={\`component \${isActive ? 'active' : ''}\`}>
      <h2>{title}</h2>
      <p>Count: {count}</p>
    </div>
  );
};
\`\`\`

## Best Practices

### 1. Use Strict Mode

Always enable strict mode in your \`tsconfig.json\`:

\`\`\`json
{
  "compilerOptions": {
    "strict": true
  }
}
\`\`\`

### 2. Avoid \`any\` Type

Use \`unknown\` instead of \`any\` when you don't know the type:

\`\`\`typescript
// Bad
const data: any = fetchData();

// Good
const data: unknown = fetchData();
if (typeof data === 'string') {
  console.log(data.toUpperCase());
}
\`\`\`

### 3. Type Your Hooks

\`\`\`typescript
const useData = () => {
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  return { data, loading, setData };
};
\`\`\`

## Conclusion

TypeScript and React work together beautifully to create robust, maintainable applications. Start with these basics and gradually adopt more advanced patterns as your project grows.
    `,
    author: 'Bastian Giersch',
    date: '2024-01-15',
    readTime: 8,
    category: 'Development',
    tags: ['React', 'TypeScript', 'Tutorial', 'Frontend'],
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=630&fit=crop'
  },
  {
    id: 'optimizing-react-performance',
    title: 'Optimizing React Performance',
    titleDe: 'Optimierung der React-Performance',
    excerpt: 'Discover proven techniques to optimize your React applications for maximum performance, including code splitting, memoization, and lazy loading.',
    excerptDe: 'Entdecken Sie bewährte Techniken zur Optimierung Ihrer React-Anwendungen für maximale Performance, inklusive Code Splitting, Memoization und Lazy Loading.',
    content: `
# Optimizing React Performance

Performance is crucial for user experience. Let's explore effective strategies to make your React apps blazingly fast.

## Code Splitting

Split your code into smaller chunks that load on demand:

\`\`\`typescript
import { lazy, Suspense } from 'react';

const Dashboard = lazy(() => import('./Dashboard'));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Dashboard />
    </Suspense>
  );
}
\`\`\`

## Memoization

### React.memo

Prevent unnecessary re-renders:

\`\`\`typescript
const ExpensiveComponent = React.memo(({ data }) => {
  return <div>{/* expensive rendering */}</div>;
});
\`\`\`

### useMemo

Cache expensive calculations:

\`\`\`typescript
const filteredData = useMemo(() => {
  return data.filter(item => item.active);
}, [data]);
\`\`\`

### useCallback

Memoize functions:

\`\`\`typescript
const handleClick = useCallback((id: string) => {
  console.log('Clicked', id);
}, []);
\`\`\`

## Virtualization

For long lists, use react-window or react-virtual:

\`\`\`typescript
import { FixedSizeList } from 'react-window';

const Row = ({ index, style }) => (
  <div style={style}>Item {index}</div>
);

const MyList = () => (
  <FixedSizeList
    height={400}
    itemCount={1000}
    itemSize={50}
    width="100%"
  >
    {Row}
  </FixedSizeList>
);
\`\`\`

## Image Optimization

Use modern formats and lazy loading:

\`\`\`tsx
<img
  src="/image.webp"
  loading="lazy"
  decoding="async"
  alt="Description"
/>
\`\`\`

## Conclusion

Apply these techniques strategically based on your specific performance bottlenecks. Always measure before optimizing!
    `,
    author: 'Bastian Giersch',
    date: '2024-01-10',
    readTime: 6,
    category: 'Performance',
    tags: ['React', 'Performance', 'Optimization', 'Best Practices'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop'
  },
  {
    id: 'building-scalable-apis',
    title: 'Building Scalable APIs with Node.js',
    titleDe: 'Erstellung skalierbarer APIs mit Node.js',
    excerpt: 'Learn how to design and implement scalable RESTful APIs using Node.js, Express, and best practices for production environments.',
    excerptDe: 'Lernen Sie, wie Sie skalierbare RESTful APIs mit Node.js, Express und Best Practices für Produktionsumgebungen entwerfen und implementieren.',
    content: `
# Building Scalable APIs with Node.js

Creating APIs that scale requires careful planning and the right architecture. Let's dive into the essential concepts.

## Project Structure

Organize your code by feature:

\`\`\`
src/
├── controllers/
│   ├── user.controller.ts
│   └── auth.controller.ts
├── services/
│   ├── user.service.ts
│   └── auth.service.ts
├── routes/
│   ├── user.routes.ts
│   └── auth.routes.ts
├── middleware/
│   ├── auth.middleware.ts
│   └── validation.middleware.ts
├── models/
│   └── user.model.ts
└── utils/
    └── logger.ts
\`\`\`

## Best Practices

### 1. Use Async/Await

\`\`\`typescript
export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
\`\`\`

### 2. Input Validation

Use libraries like Joi or Zod:

\`\`\`typescript
import { z } from 'zod';

const userSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().min(2)
});
\`\`\`

### 3. Rate Limiting

Protect your endpoints:

\`\`\`typescript
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use('/api', limiter);
\`\`\`

## Performance Tips

### Database Indexing

\`\`\`typescript
// MongoDB example
userSchema.index({ email: 1 });
userSchema.index({ createdAt: -1 });
\`\`\`

### Caching

\`\`\`typescript
import Redis from 'ioredis';

const redis = new Redis();

export const getCachedData = async (key: string) => {
  const cached = await redis.get(key);
  if (cached) return JSON.parse(cached);

  const data = await fetchFromDB();
  await redis.setex(key, 3600, JSON.stringify(data));
  return data;
};
\`\`\`

## Conclusion

Building scalable APIs requires attention to detail in architecture, performance, and security. Start with these foundations and iterate based on your needs.
    `,
    author: 'Bastian Giersch',
    date: '2024-01-05',
    readTime: 10,
    category: 'Backend',
    tags: ['Node.js', 'API', 'Express', 'Backend', 'Scalability'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=630&fit=crop'
  },
  {
    id: 'modern-css-techniques',
    title: 'Modern CSS Techniques You Should Know',
    titleDe: 'Moderne CSS-Techniken, die Sie kennen sollten',
    excerpt: 'Explore powerful modern CSS features like Grid, Flexbox, Custom Properties, and Container Queries that will revolutionize your styling workflow.',
    excerptDe: 'Entdecken Sie leistungsstarke moderne CSS-Features wie Grid, Flexbox, Custom Properties und Container Queries, die Ihren Styling-Workflow revolutionieren werden.',
    content: `
# Modern CSS Techniques You Should Know

CSS has evolved significantly. Let's explore powerful features that make styling easier and more efficient.

## CSS Grid

Create complex layouts with ease:

\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
\`\`\`

## Flexbox Gap

No more negative margins:

\`\`\`css
.flex-container {
  display: flex;
  gap: 1rem;
}
\`\`\`

## Custom Properties (CSS Variables)

Dynamic theming made easy:

\`\`\`css
:root {
  --primary-color: #3b82f6;
  --spacing-unit: 8px;
  --transition-speed: 0.3s;
}

.button {
  background: var(--primary-color);
  padding: calc(var(--spacing-unit) * 2);
  transition: all var(--transition-speed);
}
\`\`\`

## Container Queries

Responsive components based on container size:

\`\`\`css
@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
\`\`\`

## CSS-in-JS vs Utility-First

### Tailwind CSS (Utility-First)

\`\`\`html
<div class="flex items-center gap-4 p-6 bg-white rounded-lg shadow-lg">
  <img src="avatar.jpg" class="w-12 h-12 rounded-full" />
  <div>
    <h3 class="font-bold text-lg">John Doe</h3>
    <p class="text-gray-600">Developer</p>
  </div>
</div>
\`\`\`

### Styled Components (CSS-in-JS)

\`\`\`typescript
const Card = styled.div\`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
\`;
\`\`\`

## Conclusion

Modern CSS provides powerful tools for building beautiful, responsive interfaces. Stay updated with the latest features to write cleaner, more maintainable styles!
    `,
    author: 'Bastian Giersch',
    date: '2023-12-28',
    readTime: 7,
    category: 'Frontend',
    tags: ['CSS', 'Frontend', 'Web Development', 'Design'],
    image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=1200&h=630&fit=crop'
  }
];
