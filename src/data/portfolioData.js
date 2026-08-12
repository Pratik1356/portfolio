export const profile = {
  name: "Pratik Singh",
  title: "Full Stack Developer",
  tagline: "B.E. Computer Engineering student who builds responsive, user-friendly web applications and keeps shipping side projects to learn the next tool.",
  email: "pratiksingh1409@gmail.com",
  location: "Mumbai, India",
  linkedin: "https://linkedin.com/in/pratik-singh-6a333a38b",
  github: "https://github.com/Pratik1356",
  githubHandle: "Pratik1356",
};

export const sections = [
  { id: "hero", file: "hero.jsx", label: "hero" },
  { id: "about", file: "about.jsx", label: "about" },
  { id: "skills", file: "skills.jsx", label: "skills" },
  { id: "projects", file: "projects.jsx", label: "projects" },
  { id: "education", file: "education.jsx", label: "education" },
  { id: "contact", file: "contact.jsx", label: "contact" },
];

export const aboutList = [
  "React applications",
  "Interactive, responsive UI",
  "API-based applications",
  "Modern frontend experiences",
];

export const skillGroups = [
  {
    label: "Frontend",
    color: "keyword",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS", "Responsive Web Design"],
  },
  {
    label: "Backend",
    color: "string",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    label: "Tools",
    color: "number",
    skills: ["Git", "GitHub", "VS Code", "npm", "Vite"],
  },
  {
    label: "Languages",
    color: "tag",
    skills: ["JavaScript", "C", "Java"],
  },
];

export const projects = [
  {
    name: "SkyMart",
    file: "skymart.jsx",
    type: "E-Commerce Marketplace",
    description:
      "A responsive e-commerce marketplace with reusable components for product listings, product cards, navigation, and a full shopping cart flow.",
    bullets: [
      "Client-side routing with React Router for seamless navigation",
      "Reusable product listing, product card & cart components",
      "Responsive UI tuned for mobile, tablet and desktop",
      "Built with Vite for fast dev and optimized production builds",
    ],
    stack: ["React.js", "React Router", "Tailwind CSS", "Vite"],
  },
  {
    name: "Weather Forecast Web App",
    file: "weather.jsx",
    type: "Weather Application",
    description:
      "A responsive weather app that pulls real-time temperature, humidity and wind-speed data and updates the UI dynamically.",
    bullets: [
      "Integrated the OpenWeatherMap API for live weather data",
      "Dynamic UI updates driven by JavaScript API requests",
      "Responsive layout for desktop and mobile",
    ],
    stack: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
  },
  {
    name: "AI Smart Caption Generator",
    file: "caption-gen.js",
    type: "AI-Powered Web App",
    description:
      "An AI-powered app that generates captions from user-provided content, with a separate frontend/backend architecture.",
    bullets: [
      "REST APIs built with Node.js and Express.js",
      "File handling and third-party API integration for generation",
      "Clean separation between frontend and backend layers",
    ],
    stack: ["Node.js", "Express.js", "REST API", "AI Integration"],
  },
];

export const education = [
  {
    year: "2021",
    title: "Secondary School Certificate (SSC)",
    institute: "Sanskardham Vidyalaya English Medium",
    meta: "73.60%",
    location: "Mumbai, India",
  },
  {
    year: "2021 – 2023",
    title: "Higher Secondary Certificate (HSC) – Science",
    institute: "Sanskardham Junior College of Science",
    meta: "57.50%",
    location: "Mumbai, India",
  },
  {
    year: "2023 – 2027",
    title: "B.E. Computer Engineering",
    institute: "Rizvi College of Engineering",
    meta: "in progress",
    location: "Mumbai, India",
  },
];
