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
    title: "Orbit Pipeline",
    description: "Self-healing CI/CD platform with predictive rollback.",
    details:
      "GitOps-driven deployment engine running 12k+ pipelines/day across multi-cloud Kubernetes clusters. Includes drift detection, canary analysis, and ML-based failure prediction.",
    tags: ["Kubernetes", "ArgoCD", "Terraform", "Go"],
    github: "https://github.com",
    demo: "https://example.com",
    mode: "devops",
  },
  {
    title: "Nebula Mesh",
    description: "Zero-trust service mesh with eBPF observability.",
    details:
      "mTLS-everywhere mesh with real-time flow analytics. Reduced p99 latency by 38% while enforcing strict pod-to-pod policies.",
    tags: ["eBPF", "Istio", "Rust", "Prometheus"],
    github: "https://github.com",
    demo: "https://example.com",
    mode: "devops",
  },
  {
    title: "Eventide IDS",
    description: "Real-time intrusion detection across encrypted traffic.",
    details:
      "Behavioral anomaly engine analyzing 4M events/sec. Uses unsupervised models to flag lateral movement without decryption.",
    tags: ["Python", "Suricata", "Kafka", "ML"],
    github: "https://github.com",
    demo: "https://example.com",
    mode: "security",
  },
  {
    title: "Quantum Vault",
    description: "Post-quantum encrypted secrets manager.",
    details:
      "Kyber + Dilithium hybrid envelope encryption with HSM-backed root keys. SOC2 + FIPS 140-3 compliant.",
    tags: ["Rust", "PQC", "Vault", "WASM"],
    github: "https://github.com",
    demo: "https://example.com",
    mode: "security",
  },
  {
    title: "Stellar Studio",
    description: "Collaborative real-time design + code workspace.",
    details:
      "CRDT-based multiplayer editor with live preview, AI scaffolding, and one-click deploys. 40k MAU.",
    tags: ["Next.js", "tRPC", "Postgres", "Yjs"],
    github: "https://github.com",
    demo: "https://example.com",
    mode: "fullstack",
  },
  {
    title: "Pulsar Commerce",
    description: "Headless commerce stack with edge personalization.",
    details:
      "Sub-50ms global TTFB. AI product recommendations rendered at the edge via streaming SSR.",
    tags: ["React", "TypeScript", "Edge", "GraphQL"],
    github: "https://github.com",
    demo: "https://example.com",
    mode: "fullstack",
  },
];
