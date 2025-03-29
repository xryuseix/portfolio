type Row = {
  genre: string;
  often: string[];
  sometimes: string[];
  rarely: string[];
};

type Column = {
  key: string;
  label: string;
};

export const techColumns: Column[] = [
  {
    key: "genre",
    label: "",
  },
  {
    key: "often",
    label: "定期的に使う",
  },
  {
    key: "sometimes",
    label: "時々使う",
  },
  {
    key: "rarely",
    label: "使ったことがある",
  },
];

export const techRows: Row[] = [
  {
    genre: "Languages",
    often: ["Go", "TypeScript", "JavaScript", "Python"],
    sometimes: ["Shell Script", "C/C++", "Ruby", "Rust"],
    rarely: ["C#", "PHP", "Dart"],
  },
  {
    genre: "Frameworks",
    often: ["selenium", "FastAPI", "Flask", "React", "Next.js", "Firebase", "Express", "Vite.js", "Gatsby.js", "wasm-pack", "tailwindcss", "MUI", "fastify", "pnpm", "Echo", "Air", "Kuma-UI", "aspida", "Jotai", "Redux"],
    sometimes: ["numpy", "scikit-learn"],
    rarely: ["Bootstrap", "Flutter", "Laravel", "Ruby on Rails", "TensorFlow", "SQLite", "Vue.js", "Hono"],
  },
  {
    genre: "Tools",
    often: ["Git", "GitHub", "brew", "Mac OS", "Linux", "VSCode", "npm", "yarn", "Burp Suite", "husky", "prettier", "eslint", "Node.js", "Docker", "Deno", "GHA", "Firebase", "esbuild", "MySQL", "Redis"],
    sometimes: ["kali linux", "GCP", "k8s"],
    rarely: ["AWS", "Azure"],
  },
];
