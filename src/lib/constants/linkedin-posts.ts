export interface LinkedInPost {
  title: string;
  description?: string;
  publishedDate: string;
  tags?: string[];
  embedCode: string;
}

// Posts ordered from LATEST to OLDEST
export const LINKEDIN_POSTS: LinkedInPost[] = [
  {
    title: "IP Intelligence Playbook (From Building My Own Tool)", 
    description: "IP Intelligence: The Skill That Helps You Catch Threats Before They Become Incidents",
    publishedDate: "2025-12-24",
    tags: [],
    embedCode: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7408917562006155265?collapsed=1" height="600" width="100%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>`,
  },
  {
    title: "My Real AI Bot Stack (Q, Copilot, Power Automate)",
    description: "The Automations I Use To Run Workflows Without Writing Code",
    publishedDate: "2025-12-23",
    tags: [],
    embedCode: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7408913716185866240?collapsed=1" height="600" width="100%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>`,
  },
  {
    title: "Detecting Anomalies From Traffic Logs",
    description: "Detecting Anomalies From Traffic Logs: The First Real Signal Before Any Attack Happens",
    publishedDate: "2025-12-22",
    tags: [],
    embedCode: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7408910068127211520?collapsed=1" height="600" width="100%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>`,
  },
  {
    title: "Retool — Internal Tools That Scale Fast",
    description: "The Fastest Way To Build Internal Tools That Don't Break Your Engineering Team",
    publishedDate: "2025-12-19",
    tags: [],
    embedCode: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7407511836134346753?collapsed=1" height="600" width="100%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>`,
  },
  {
    title: "Mixpanel Funnels & Product Truth",
    description: "Mixpanel Funnels: The Closest You Will Ever Get To Seeing Real User Behavior",
    publishedDate: "2025-12-18",
    tags: [],
    embedCode: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7407330009914179584?collapsed=1" height="600" width="100%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>`,
  },
  {
    title: "Using Sentry & Grafana For Stability",
    description: "Sentry + Grafana: The Two Tools That Tell You When Your System Is Dying",
    publishedDate: "2025-12-17",
    tags: [],
    embedCode: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7406796340317392896?collapsed=1" height="600" width="100%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>`,
  },
  {
    title: "Metabase, Retool, Data Studio — Building Insights Fast",
    description: "How I Build High-Impact Dashboards Using Metabase, Retool, and Data Studio",
    publishedDate: "2025-12-16",
    tags: [],
    embedCode: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7406795749964906496?collapsed=1" height="600" width="100%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>`,
  },
  {
    title: "Databricks + Databrain Practical Playbook",
    description: "Databricks + Databrain: The Practical Playbook For Real Data Workflows",
    publishedDate: "2025-12-15",
    tags: [],
    embedCode: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7406080631929118720?collapsed=1" height="600" width="100%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>`,
  },
  {
    title: "BigQuery For Non-Data Engineers",
    description: "BigQuery For People Who Aren't Data Engineers — My Practical Guide",
    publishedDate: "2025-12-12",
    tags: [],
    embedCode: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7404998141567143937?collapsed=1" height="600" width="100%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>`,
  },
  {
    title: "How To Build A Full AI Product Solo",
    description: "How I Build Full AI Products Alone. The Practical Playbook.",
    publishedDate: "2025-12-11",
    tags: [],
    embedCode: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7404757079497871361?collapsed=1" height="600" width="100%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>`,
  },
  {
    title: "Choosing The Right Model For The Right Job",
    description: "Choosing The Right Model For The Right Job — The Decision Framework Most Developers Lack",
    publishedDate: "2025-12-10",
    tags: [],
    embedCode: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7404243815714492416?collapsed=1" height="600" width="100%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>`,
  },
  {
    title: "GPU vs CPU Inference: Real Truths",
    description: "GPU vs CPU Inference: The Truth They Never Tell You",
    publishedDate: "2025-12-09",
    tags: [],
    embedCode: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7403813048181850112?collapsed=1" height="600" width="100%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>`,
  },
  {
    title: "RAG That Actually Works (And Common Failures)",
    description: "RAG That Actually Works — And Why 90 Percent of People Implement It Wrong",
    publishedDate: "2025-12-08",
    tags: [],
    embedCode: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7403484309631860736?collapsed=1" height="600" width="100%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>`,
  },
  {
    title: "Coding Models: Qwen2.5 vs GPT vs Claude",
    description: "Coding Models: Qwen2.5 vs GPT vs Claude — Why Claude 4.5 Changes the Entire Game",
    publishedDate: "2025-12-05",
    tags: [],
    embedCode: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7401343555564277760?collapsed=1" height="600" width="100%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>`,
  },
  {
    title: "Cloud LLM Playbook (OpenRouter, Cost vs Latency)",
    description: "Cloud LLM Playbook: When You Should Use Cloud Instead of Local Models",
    publishedDate: "2025-12-04",
    tags: [],
    embedCode: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7401297546297458688?collapsed=1" height="600" width="100%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>`,
  },
  {
    title: "Local LLM Playbook (Ollama, GGUF, Quantized Models)",
    description: "Local LLM Playbook: Run Strong Models On Your Machine Without a GPU",
    publishedDate: "2025-12-03",
    tags: [],
    embedCode: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7401289193966080000?collapsed=1" height="600" width="100%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>`,
  },
  {
    title: "KV Cache: Why Models Become Fast",
    description: "KV Cache: The Secret Weapon That Makes LLMs Feel Instant",
    publishedDate: "2025-12-02",
    tags: [],
    embedCode: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7400475901576179712?collapsed=1" height="600" width="100%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>`,
  },
  {
    title: "How Tokenization Actually Works",
    description: "How Tokenization Actually Works (The Hidden Layer Behind Every LLM)",
    publishedDate: "2025-12-01",
    tags: [],
    embedCode: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7400339898840522752?collapsed=1" height="600" width="100%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>`,
  },
];