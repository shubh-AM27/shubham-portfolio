export type Project = {
  title: string;
  description: string;
  details: string;
  tags: string[];
  github: string;
  demo: string;
  mode: "devops" | "security" | "fullstack";
};

export const projects: Project[] = [
  {
    title: "ArchFlow — Interactive System Design Simulator",
    description: "System design simulator for building architectures and analyzing traffic flow real time.",
    details:
      "Built a visual system architecture simulator using React and ReactFlow. Users can create distributed systems with components then simulate traffic propagation and monitor metrics with real-time visual feedback.",
    tags: ["React", "ReactFlow", "JavaScript", "CSS", "Graph-Based Simulation Logic"],
    github: "https://github.com/shubh-AM27/System-Design-Simulator.git",
    demo: "https://system-design-simulator-lemon.vercel.app/",
    mode: "fullstack",
  },
  {
    title: "ArchFlow — Interactive System Design Simulator",
    description: "System design simulator for building architectures and analyzing traffic flow real time.",
    details:
      "Built a visual system architecture simulator using React and ReactFlow. Users can create distributed systems with components then simulate traffic propagation and monitor metrics with real-time visual feedback.",
    tags: ["React", "ReactFlow", "JavaScript", "CSS", "Graph-Based Simulation Logic"],
    github: "https://github.com/shubh-AM27/System-Design-Simulator.git",
    demo: "https://system-design-simulator-lemon.vercel.app/",
    mode: "security",
  },
  {
    title: "Sorting Algorithm Visualizer",
    description: "Application that visually demonstrates how different sorting algorithms work.",
    details:
      "An interactive web application that visually demonstrates how different sorting algorithms work through animated bar comparisons and swaps.",
    tags: ["HTML5", "CSS3", "JavaScript (ES6+)","Material UI","Dynamic DOM Manipulation"],
    github: "https://github.com/shubh-AM27/Simple-Sorting-Visualizer.git",
    demo: "https://shubh-am27.github.io/Simple-Sorting-Visualizer/",
    mode: "security",
  },
  {
    title: "Sorting Algorithm Visualizer",
    description: "Application that visually demonstrates how different sorting algorithms work.",
    details:
      "An interactive web application that visually demonstrates how different sorting algorithms work through animated bar comparisons and swaps.",
    tags: ["HTML5", "CSS3", "JavaScript (ES6+)","Material UI","Dynamic DOM Manipulation"],
    github: "https://github.com/shubh-AM27/Simple-Sorting-Visualizer.git",
    demo: "https://shubh-am27.github.io/Simple-Sorting-Visualizer/",
    mode: "fullstack",
  },
  {
    title: "Weather Forecast Website",
    description: "A responsive weather forecast website.",
    details:
      "A responsive weather forecast website that provides real-time weather updates and a 5-day forecast using the OpenWeather API.",
    tags: ["HTML5", "CSS3", "JavaScript (ES6)","REST API Integration","OpenWeather API"],
    github: "https://github.com/shubh-AM27/weather-appt",
    demo: "https://shubh-am27.github.io/weather-app/",
    mode: "fullstack",
  },
  {
    title: "Weather Forecast Website",
    description: "A responsive weather forecast website.",
    details:
      "A responsive weather forecast website that provides real-time weather updates and a 5-day forecast using the OpenWeather API.",
    tags: ["HTML5", "CSS3", "JavaScript (ES6)","REST API Integration","OpenWeather API"],
    github: "https://github.com/shubh-AM27/weather-app",
    demo: "https://shubh-am27.github.io/weather-app/",
    mode: "security",
  },
  {
    title: "Interactive Developer Portfolio Deployment",
    description: "A modern interactive developer portfolio.",
    details:
      "Featuring animated UI components, node-based navigation, responsive layouts, and smooth transitions and deployed on Vercel",
    tags: ["React","TypeScript","Vite","Tailwind CSS","React Flow","Framer Motion","Vercel Deployment","GitHub Deployment"],
    github: "https://github.com/shubh-AM27/weather-app",
    demo: "https://shubh-am27.github.io/weather-app/",
    mode: "security",
  },
  {
    title: "Interactive Developer Portfolio Deployment",
    description: "A modern interactive developer portfolio.",
    details:
      "Featuring animated UI components, node-based navigation, responsive layouts, and smooth transitions and deployed on Vercel",
    tags: ["React","TypeScript","Vite","Tailwind CSS","React Flow","Framer Motion","Vercel Deployment","GitHub Deployment"],
    github: "https://github.com/shubh-AM27/weather-app",
    demo: "https://shubh-am27.github.io/weather-app/",
    mode: "fullstack",
  },
];
