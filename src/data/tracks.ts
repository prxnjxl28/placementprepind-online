export interface TrackQuestion {
  id: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  question: string;
  adaptiveFollowUp: string;
  rubricFocus: string[];
  keyConcepts: string[];
  sampleOutline: string;
}

export interface TrackData {
  slug: string;
  name: string;
  shortName: string;
  category: "Core CS" | "Frontend & Web" | "Security" | "Behavioural";
  tagline: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  campusRelevance: string;
  targetCompanies: string[];
  difficultyBreakdown: {
    beginner: string[];
    intermediate: string[];
    advanced: string[];
  };
  questions: TrackQuestion[];
  faqs: Array<{ question: string; answer: string }>;
  relatedSlugs: string[];
}

export const INTERVIEW_TRACKS: TrackData[] = [
  {
    slug: "dsa",
    name: "Data Structures & Algorithms (DSA)",
    shortName: "DSA",
    category: "Core CS",
    tagline: "Explain time-space trade-offs, edge cases, and optimal patterns aloud under interview pressure.",
    seoTitle: "DSA Mock Interview Practice Online Free | PlacementPrep India",
    seoDescription:
      "Practice spoken Data Structures & Algorithms (DSA) mock interviews for Indian campus placements. Explain complexity trade-offs aloud with adaptive AI follow-ups and 0–10 rubric feedback.",
    keywords: [
      "DSA mock interview online",
      "data structures algorithms interview questions India",
      "spoken DSA practice",
      "campus placement DSA interview",
    ],
    campusRelevance:
      "DSA rounds eliminate over 60% of B.Tech candidates in product-based and tier-1 service campus drives. Interviewers evaluate how clearly you articulate brute-force baselines, bottleneck elimination, and Big-O complexity aloud — not just whether code compiles.",
    targetCompanies: ["Amazon", "Microsoft", "Flipkart", "Atlassian", "Adobe", "TCS Digital", "Infosys SP"],
    difficultyBreakdown: {
      beginner: ["Arrays & Two Pointers", "Hash Maps & Frequency Counting", "Stacks, Queues & Linked Lists", "Basic Recursion"],
      intermediate: ["Binary Search on Answer", "Trees, BST & Traversals", "Sliding Window & Prefix Sums", "Heaps & Greedy Strategies"],
      advanced: ["Graphs (BFS/DFS, Dijkstra, Topo Sort)", "Dynamic Programming State Optimization", "Tries & Segment Trees", "Amortized & Space Trade-offs"],
    },
    questions: [
      {
        id: "dsa-1",
        difficulty: "Beginner",
        question: "How would you detect a cycle in a singly linked list without using extra memory, and why does your approach guarantee termination?",
        adaptiveFollowUp: "Now suppose you also need to return the exact node where the cycle begins. Walk me through the math proving why resetting one pointer to the head works.",
        rubricFocus: ["States Floyd's tortoise-and-hare pointers accurately", "Proves O(1) space and O(n) time complexity", "Handles empty list and single-node edge cases"],
        keyConcepts: ["Floyd's Cycle Detection", "Two Pointers", "O(1) Space", "Fast & Slow Pointer", "Edge Cases"],
        sampleOutline: "Start with the hash-set baseline (O(n) time, O(n) space), then introduce fast (2x) and slow (1x) pointers. Explain that inside a cycle the relative speed is 1 node per step so they must collide in O(n) time with O(1) extra space.",
      },
      {
        id: "dsa-2",
        difficulty: "Intermediate",
        question: "Explain how you would design an LRU (Least Recently Used) Cache supporting O(1) get and O(1) put operations.",
        adaptiveFollowUp: "What happens if the cache needs to be thread-safe in a high-concurrency backend service? How would locking affect your O(1) claim?",
        rubricFocus: ["Combines HashMap with Doubly Linked List cleanly", "Explains eviction order and pointer updates step by step", "Discusses sentinel head/tail nodes to simplify edge cases"],
        keyConcepts: ["HashMap", "Doubly Linked List", "O(1) Lookup", "Eviction Policy", "Sentinel Nodes"],
        sampleOutline: "Map keys to doubly linked list nodes for O(1) lookup. Move accessed nodes to the front (most recent) and evict from the tail (least recent) when capacity is exceeded, maintaining O(1) for both get and put.",
      },
      {
        id: "dsa-3",
        difficulty: "Intermediate",
        question: "When would you choose Merge Sort over Quick Sort in production or campus-interview scenarios, and what are the exact trade-offs?",
        adaptiveFollowUp: "Quick Sort has O(n²) worst-case time — how do real standard libraries prevent that worst case while preserving cache locality?",
        rubricFocus: ["Contrasts stability, worst-case time, and auxiliary space", "Mentions cache locality and in-place partitioning", "Gives concrete use cases such as linked lists vs arrays"],
        keyConcepts: ["Stability", "Worst-Case O(n^2)", "Cache Locality", "Auxiliary Space", "Randomized Pivot"],
        sampleOutline: "Compare Merge Sort (guaranteed O(n log n), stable, O(n) extra space, great for linked lists/external sorting) against Quick Sort (O(n log n) average, in-place, superior cache locality, unstable, O(n²) worst case mitigated by randomized/median-of-three pivot or Introsort).",
      },
      {
        id: "dsa-4",
        difficulty: "Advanced",
        question: "Why does Dijkstra's shortest-path algorithm fail with negative edge weights, and which algorithm would you use instead?",
        adaptiveFollowUp: "If the graph is a Directed Acyclic Graph (DAG) with negative edges, can you beat Bellman-Ford's O(VE) time complexity?",
        rubricFocus: ["Explains the greedy invariant violation clearly", "Contrasts Dijkstra with Bellman-Ford and negative cycle detection", "Correctly identifies topological sort relaxation in O(V+E) for DAGs"],
        keyConcepts: ["Greedy Invariant", "Priority Queue", "Bellman-Ford", "Negative Cycle", "Topological Sort"],
        sampleOutline: "Dijkstra permanently locks a node's shortest distance once popped from the min-heap, assuming future edges only add non-negative weight. A negative edge can later yield a shorter path. Use Bellman-Ford (O(VE)) to handle negative weights and detect negative cycles, or Topological Sort + relaxation (O(V+E)) if it's a DAG.",
      },
    ],
    faqs: [
      {
        question: "Why practice spoken DSA interviews if I already solve LeetCode daily?",
        answer: "Coding platforms test written code against test cases, creating a 'modality gap'. In live campus placements, interviewers grade how clearly you explain brute-force baselines, time-space trade-offs, and follow-up optimizations aloud.",
      },
      {
        question: "How does PlacementPrep India score my DSA answers?",
        answer: "Powered by AcePrep's transparent 0–10 rubric, every DSA response is graded on Technical Accuracy, Depth & Trade-Off Reasoning (complexity & edge cases), and Communication Structure.",
      },
    ],
    relatedSlugs: ["os", "dbms", "javascript"],
  },
  {
    slug: "os",
    name: "Operating Systems (OS)",
    shortName: "OS",
    category: "Core CS",
    tagline: "Master processes, threads, deadlocks, virtual memory, and CPU scheduling for core CS rounds.",
    seoTitle: "Operating Systems (OS) Mock Interview Questions | PlacementPrep India",
    seoDescription:
      "Prepare for Operating Systems technical interviews in Indian campus placements. Practice spoken answers on processes, threads, deadlocks, paging, and synchronization with AI rubric feedback.",
    keywords: [
      "Operating Systems interview questions India",
      "OS mock interview",
      "process vs thread interview question",
      "deadlock virtual memory campus placement",
    ],
    campusRelevance:
      "Operating Systems is a staple across SDE, Systems Engineer, and Embedded campus placements in India. Interviewers probe beyond textbook definitions into concurrency bugs, paging overheads, and real Linux kernel mechanics.",
    targetCompanies: ["Microsoft", "Qualcomm", "Cisco", "Oracle", "Amazon", "Samsung R&D", "TCS Prime"],
    difficultyBreakdown: {
      beginner: ["Process vs Thread & PCB", "CPU Scheduling (FCFS, SJF, RR)", "System Calls & User/Kernel Mode", "Context Switching"],
      intermediate: ["Mutex vs Semaphore & Race Conditions", "Deadlock Conditions & Avoidance (Banker's)", "Paging, Segmentation & Page Faults", "Thrashing & Working Set"],
      advanced: ["Copy-on-Write (fork)", "TLB Misses & Multi-Level Page Tables", "Priority Inversion & Lock-Free Primitives", "Virtual File Systems & Inodes"],
    },
    questions: [
      {
        id: "os-1",
        difficulty: "Beginner",
        question: "What is the practical difference between a process and a thread, and why is context switching between threads cheaper?",
        adaptiveFollowUp: "If threads share heap memory and open file descriptors, what is the biggest reliability risk compared to multi-process architectures like Chrome tabs?",
        rubricFocus: ["Identifies shared vs private memory spaces accurately", "Explains TLB flush and address-space overhead in process switching", "Highlights fault isolation vs communication overhead trade-off"],
        keyConcepts: ["Address Space", "Shared Heap", "Private Stack", "Context Switch", "TLB Flush", "Fault Isolation"],
        sampleOutline: "A process has an isolated virtual address space, PCB, and resources; threads within a process share code, heap, and file descriptors while keeping their own stack and registers. Thread context switches avoid switching page tables and flushing the TLB, making them faster — at the cost of weaker fault isolation.",
      },
      {
        id: "os-2",
        difficulty: "Intermediate",
        question: "State the four Coffman conditions required for a deadlock, and explain how real operating systems usually handle deadlocks in practice.",
        adaptiveFollowUp: "Why do general-purpose OSes like Linux or Windows choose the 'ostrich algorithm' rather than running Banker's algorithm on every resource request?",
        rubricFocus: ["Names all four conditions (Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait)", "Distinguishes prevention, avoidance, detection, and recovery", "Explains runtime overhead of Banker's algorithm vs lock ordering"],
        keyConcepts: ["Mutual Exclusion", "Hold and Wait", "No Preemption", "Circular Wait", "Lock Ordering", "Banker's Algorithm"],
        sampleOutline: "List Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait. Breaking Circular Wait via strict global lock ordering is the most practical prevention technique in engineering; general OSes avoid Banker's algorithm because future resource claims are rarely known in advance and checking safe states on every allocation is too costly.",
      },
      {
        id: "os-3",
        difficulty: "Intermediate",
        question: "Walk me through what happens step by step when a CPU accesses a virtual memory address that causes a page fault.",
        adaptiveFollowUp: "What is thrashing, and how can an OS detect and mitigate it before system throughput collapses?",
        rubricFocus: ["Traces MMU -> TLB -> Page Table -> Trap to OS -> Disk I/O -> Page Table update -> Instruction restart", "Mentions page replacement policies (LRU/Clock)", "Connects working-set size to thrashing"],
        keyConcepts: ["MMU", "TLB", "Page Table", "Page Fault Trap", "Disk Swap", "Thrashing"],
        sampleOutline: "The MMU checks the TLB, misses, checks the page table, sees the valid bit is 0, and triggers a page fault trap to the OS kernel. The OS locates the page on disk, selects a victim frame if RAM is full, schedules disk I/O, updates the page table and TLB, and restarts the faulting instruction.",
      },
      {
        id: "os-4",
        difficulty: "Advanced",
        question: "How does a Mutex differ from a Binary Semaphore, and when can a Binary Semaphore lead to subtle bugs that a Mutex prevents?",
        adaptiveFollowUp: "Explain priority inversion and how priority inheritance solves it.",
        rubricFocus: ["Emphasizes ownership semantics of a Mutex", "Distinguishes locking vs signaling use cases", "Explains priority inheritance clearly"],
        keyConcepts: ["Ownership", "Mutual Exclusion", "Signaling", "Priority Inversion", "Priority Inheritance"],
        sampleOutline: "A Mutex enforces ownership — only the thread that locked it can unlock it, enabling priority inheritance. A Semaphore is a signaling counter with no ownership, so another thread can post/signal it, which is great for producer-consumer coordination but unsafe as a drop-in lock if accidental double-release occurs.",
      },
    ],
    faqs: [
      {
        question: "Which OS topics are asked most frequently in B.Tech campus placements?",
        answer: "Processes vs threads, synchronization (mutex/semaphore), deadlocks, virtual memory (paging, TLB, page faults), and CPU scheduling make up over 80% of OS interview questions.",
      },
      {
        question: "Does the AI ask OS follow-up questions based on my answer?",
        answer: "Yes. AcePrep adapts follow-ups directly to what you say — for example, probing TLB overhead or fault isolation if you explain process vs thread switching.",
      },
    ],
    relatedSlugs: ["networks", "dbms", "dsa"],
  },
  {
    slug: "networks",
    name: "Computer Networks (CN)",
    shortName: "Networks",
    category: "Core CS",
    tagline: "Articulate TCP/UDP, HTTP/HTTPS, DNS resolution, TLS handshakes, and latency bottlenecks clearly.",
    seoTitle: "Computer Networks (CN) Mock Interview Practice | PlacementPrep India",
    seoDescription:
      "Ace Computer Networks interviews for Indian software placements. Practice spoken answers on OSI/TCP-IP, HTTP/HTTPS, DNS, TLS, and congestion control with instant rubric scoring.",
    keywords: [
      "Computer Networks interview questions",
      "CN mock interview India",
      "TCP vs UDP interview question",
      "what happens when you type a URL interview",
    ],
    campusRelevance:
      "Every backend, cloud, and full-stack campus interview tests networking fundamentals — especially 'What happens when you type a URL?', TCP reliability vs latency, HTTPS/TLS security, and REST/WebSocket trade-offs.",
    targetCompanies: ["Cisco", "Amazon", "Cloudflare", "Zscaler", "Microsoft", "Paytm", "Swiggy"],
    difficultyBreakdown: {
      beginner: ["OSI vs TCP/IP 4-Layer Model", "IP, MAC, ARP & Subnetting Basics", "TCP vs UDP Characteristics", "HTTP Methods & Status Codes"],
      intermediate: ["TCP 3-Way Handshake & Teardown", "DNS Recursive Resolution & Caching", "HTTPS & TLS Handshake", "NAT, Proxies & Load Balancers"],
      advanced: ["TCP Congestion Control (Slow Start, AIMD)", "HTTP/2 Multiplexing vs HTTP/3 QUIC", "CDN Anycast Routing", "WebSockets vs SSE vs Long Polling"],
    },
    questions: [
      {
        id: "cn-1",
        difficulty: "Beginner",
        question: "Walk me through what happens at the network layer when you type https://placementprepind.online into your browser and press Enter.",
        adaptiveFollowUp: "Where are the biggest latency hops in that flow, and how do DNS caching, keep-alive, and TLS 1.3 reduce them?",
        rubricFocus: ["Covers DNS lookup, TCP handshake, TLS handshake, HTTP request/response, and rendering", "Orders layers accurately without skipping TLS", "Explains RTT optimization techniques"],
        keyConcepts: ["DNS Resolution", "TCP 3-Way Handshake", "TLS Handshake", "HTTP GET", "RTT", "Caching"],
        sampleOutline: "Browser checks caches -> DNS resolves domain to IP -> TCP 3-way handshake establishes reliable connection -> TLS handshake verifies certificate and negotiates symmetric session keys -> encrypted HTTP GET request sent -> server returns HTML/assets -> browser parses DOM and renders page.",
      },
      {
        id: "cn-2",
        difficulty: "Intermediate",
        question: "Compare TCP and UDP in terms of reliability, ordering, and overhead — and justify which one you would choose for a live voice mock interview app.",
        adaptiveFollowUp: "HTTP/3 runs over QUIC on top of UDP. Why did engineers rebuild reliability over UDP instead of upgrading TCP directly?",
        rubricFocus: ["Contrasts connection-oriented vs connectionless delivery", "Explains why real-time voice tolerates tiny packet loss better than head-of-line blocking", "Understands QUIC and OS kernel ossification"],
        keyConcepts: ["Reliable Delivery", "Head-of-Line Blocking", "Low Latency", "WebRTC / UDP", "QUIC"],
        sampleOutline: "TCP guarantees ordered, reliable delivery via ACKs and retransmissions, adding latency on packet loss. UDP is connectionless and lightweight. Real-time audio prefers UDP (via WebRTC) because waiting to retransmit a stale 20ms audio packet causes audible jitter; QUIC solves TCP head-of-line blocking in user space.",
      },
      {
        id: "cn-3",
        difficulty: "Intermediate",
        question: "How does HTTPS use both asymmetric and symmetric encryption during a TLS handshake, and why doesn't it use asymmetric encryption for the entire session?",
        adaptiveFollowUp: "How does your browser know the server's public key actually belongs to placementprepind.online and not an attacker?",
        rubricFocus: ["Distinguishes key exchange (asymmetric) vs bulk data encryption (symmetric)", "Explains CPU performance cost of RSA/ECC vs AES", "Explains Certificate Authorities (CA) and chain of trust"],
        keyConcepts: ["Asymmetric Encryption", "Symmetric Session Key", "Certificate Authority", "Digital Signature", "TLS 1.3"],
        sampleOutline: "Asymmetric cryptography (e.g., ECDHE + signed X.509 certificate) authenticates the server via a trusted CA chain and safely derives a shared symmetric key. Symmetric encryption (AES-GCM/ChaCha20) then encrypts all application traffic because it is orders of magnitude faster.",
      },
    ],
    faqs: [
      {
        question: "Is Computer Networks asked for web developer roles too?",
        answer: "Yes. Full-stack and frontend interviews frequently ask about CORS, cookies, HTTP caching headers, HTTPS/TLS, WebSockets, and DNS latency.",
      },
    ],
    relatedSlugs: ["cybersecurity", "web-dev", "os"],
  },
  {
    slug: "dbms",
    name: "Database Management Systems (DBMS)",
    shortName: "DBMS",
    category: "Core CS",
    tagline: "Defend schema design, normalization, ACID transactions, indexing, and SQL vs NoSQL choices aloud.",
    seoTitle: "DBMS & SQL Mock Interview Practice Free | PlacementPrep India",
    seoDescription:
      "Prepare for DBMS campus placement interviews with voice AI mock rounds. Practice normalization, ACID properties, B+ tree indexing, isolation levels, and MongoDB vs SQL trade-offs.",
    keywords: [
      "DBMS interview questions campus placement",
      "SQL vs NoSQL interview question",
      "ACID properties indexing interview",
      "DBMS mock interview online",
    ],
    campusRelevance:
      "DBMS appears in almost every software engineering interview in India. Candidates often recite 1NF/2NF/3NF definitions but struggle when asked to justify indexing trade-offs, isolation anomalies, or why a project chose MongoDB over PostgreSQL.",
    targetCompanies: ["Oracle", "SAP Labs", "Amazon", "Goldman Sachs", "JP Morgan", "Razorpay", "Zomato"],
    difficultyBreakdown: {
      beginner: ["Keys (Primary, Foreign, Candidate)", "SQL Joins & Group By / Having", "Normalization (1NF, 2NF, 3NF, BCNF)", "Basic CRUD & Constraints"],
      intermediate: ["ACID Properties & WAL", "B-Tree / B+ Tree Indexing & Composite Indexes", "SQL vs NoSQL Data Modeling", "Query Execution Plans (EXPLAIN)"],
      advanced: ["Transaction Isolation Levels & MVCC", "Phantom Reads, Dirty Reads & Lost Updates", "Sharding, Replication & CAP Theorem", "Denormalization for Read-Heavy Workloads"],
    },
    questions: [
      {
        id: "dbms-1",
        difficulty: "Beginner",
        question: "What are ACID properties in a relational database, and can you give a real example (like a UPI payment) showing why each letter matters?",
        adaptiveFollowUp: "How does a database actually recover Durability and Atomicity if the server loses power mid-transaction?",
        rubricFocus: ["Defines Atomicity, Consistency, Isolation, Durability with concrete UPI transfer example", "Mentions Write-Ahead Logging (WAL) for crash recovery", "Avoids confusing Consistency in ACID with CAP consistency"],
        keyConcepts: ["Atomicity", "Consistency", "Isolation", "Durability", "Write-Ahead Log (WAL)"],
        sampleOutline: "Using a ₹500 UPI transfer: Atomicity ensures debit and credit both succeed or both roll back; Consistency maintains account balance invariants; Isolation prevents concurrent transfers from reading partial balances; Durability ensures committed transfers survive a crash via Write-Ahead Logging (WAL).",
      },
      {
        id: "dbms-2",
        difficulty: "Intermediate",
        question: "How does a B+ Tree index speed up SQL queries, and why shouldn't you put an index on every column in a table?",
        adaptiveFollowUp: "Suppose you create a composite index on (domain, difficulty, created_at). Will a query filtering only by difficulty use that index?",
        rubricFocus: ["Explains O(log n) lookup and sequential leaf-node scans", "Identifies write amplification, extra storage, and index maintenance overhead", "Correctly explains the leftmost-prefix rule for composite indexes"],
        keyConcepts: ["B+ Tree", "Write Amplification", "Leftmost Prefix Rule", "Leaf Linked List", "Selectivity"],
        sampleOutline: "B+ trees keep keys sorted with high fan-out for shallow O(log n) disk lookups and linked leaf nodes for fast range scans. Over-indexing slows INSERT/UPDATE/DELETE operations and consumes RAM/disk. Composite indexes follow the leftmost-prefix rule, so filtering only by the middle column cannot leverage the index effectively.",
      },
      {
        id: "dbms-3",
        difficulty: "Intermediate",
        question: "Why might an interview platform like AcePrep choose MongoDB over PostgreSQL, and what trade-offs does that introduce?",
        adaptiveFollowUp: "How do you mitigate weaker relational integrity in MongoDB when storing nested interview transcripts and rubric scores?",
        rubricFocus: ["Connects nested document model (questions, answers, scores, events) to MongoDB", "Acknowledges weaker relational joins and multi-document transaction overhead", "Proposes strict Mongoose schema validation and application-level invariants"],
        keyConcepts: ["Document Model", "Nested Data", "Relational Integrity", "Schema Validation", "PostgreSQL Trade-off"],
        sampleOutline: "Interview records are naturally hierarchical documents containing questions, transcripts, sub-scores, and focus events, making MongoDB's document model fast to read/write as a unit. The trade-off is weaker relational integrity and complex cross-collection joins, mitigated via strict Mongoose schema validation.",
      },
    ],
    faqs: [
      {
        question: "Are SQL vs NoSQL questions common when I list MongoDB on my resume?",
        answer: "Extremely common! If your B.Tech capstone uses MERN (MongoDB, Express, React, Node), interviewers almost always ask why you picked MongoDB over PostgreSQL and how you handle schema validation.",
      },
    ],
    relatedSlugs: ["web-dev", "os", "dsa"],
  },
  {
    slug: "web-dev",
    name: "Web Development",
    shortName: "Web Dev",
    category: "Frontend & Web",
    tagline: "Explain full-stack architecture, REST APIs, SSR vs CSR, SEO fundamentals, auth, and web performance.",
    seoTitle: "Web Development Mock Interview Practice | PlacementPrep India",
    seoDescription:
      "Practice full-stack Web Development mock interviews online free. Cover REST APIs, JWT auth, CORS, SSR vs SPA SEO trade-offs, and Core Web Vitals with AI voice feedback.",
    keywords: [
      "Web Development interview questions India",
      "full stack mock interview free",
      "SSR vs CSR SEO interview question",
      "JWT cookie auth interview",
    ],
    campusRelevance:
      "Full-stack web projects dominate Indian engineering resumes. Interviewers test whether you genuinely understand HTTP, authentication security, browser rendering, and architectural trade-offs beyond copy-pasting boilerplate.",
    targetCompanies: ["Flipkart", "Razorpay", "Meesho", "Zoho", "Freshworks", "CRED", "Startups"],
    difficultyBreakdown: {
      beginner: ["Semantic HTML5 & Accessibility (WCAG)", "CSS Box Model, Flexbox & Grid", "REST API Principles & Status Codes", "Cookies vs LocalStorage vs SessionStorage"],
      intermediate: ["CORS & Preflight Requests", "JWT in HttpOnly Cookies vs Bearer Tokens", "SSR vs SSG vs CSR (SEO & Performance)", "Rate Limiting & Error Handling"],
      advanced: ["Core Web Vitals (LCP, INP, CLS)", "Caching Layers (Browser, CDN, Redis)", "WebSockets & Circuit Breakers", "OWASP Top 10 & CSRF Mitigation"],
    },
    questions: [
      {
        id: "web-1",
        difficulty: "Intermediate",
        question: "Compare Client-Side Rendering (SPA like React Vite) with Server-Side Rendering / Static Generation (like Next.js). When does each make sense?",
        adaptiveFollowUp: "If an authenticated app uses a React SPA, how can a team still capture organic Google search traffic effectively?",
        rubricFocus: ["Explains HTML delivery, Time to First Byte, hydration, and crawler indexing", "Connects SSG/SSR to public SEO landing pages and CSR to authenticated live apps", "Proposes splitting public SSG marketing/content site from authenticated SPA"],
        keyConcepts: ["CSR", "SSR", "SSG", "SEO Crawlability", "Core Web Vitals", "Hydration"],
        sampleOutline: "SPAs ship a minimal HTML shell and render in JS, which is snappy for authenticated dashboards and live tools but weakens SEO and initial paint. SSG/SSR sends pre-rendered HTML immediately for fast LCP and full search-engine indexing — ideal for public content hubs like placementprepind.online.",
      },
      {
        id: "web-2",
        difficulty: "Intermediate",
        question: "Why is storing a JWT inside an HttpOnly cookie safer than localStorage, and what new security risk do you need to defend against when using cookies?",
        adaptiveFollowUp: "Some mobile browsers like Safari restrict third-party cookies across separate frontend and API domains. How would you architect authentication to stay reliable?",
        rubricFocus: ["Contrasts XSS exposure in localStorage vs CSRF exposure in cookies", "Mentions SameSite, Secure flags, and CSRF tokens", "Discusses dual-token / silent refresh fallback patterns"],
        keyConcepts: ["HttpOnly Cookie", "XSS", "CSRF", "SameSite", "Dual-Token Refresh"],
        sampleOutline: "localStorage is readable by any injected script (XSS risk), whereas HttpOnly cookies are inaccessible to JavaScript. However, cookies are auto-sent on cross-site requests, introducing CSRF risk — mitigated with SameSite=Lax/Strict and CSRF tokens. Cross-origin cookie limits can be handled via a same-site proxy or dual-token refresh fallback.",
      },
      {
        id: "web-3",
        difficulty: "Advanced",
        question: "Your Node.js backend calls an external LLM API that occasionally times out or hits rate limits. How would you design resilience so users aren't stuck on a spinner?",
        adaptiveFollowUp: "Explain the three states of a Circuit Breaker and how you decide thresholds.",
        rubricFocus: ["Combines timeouts, exponential backoff with jitter, circuit breaker, and graceful fallback", "Explains Closed, Open, and Half-Open circuit states", "Ties architecture directly to user experience"],
        keyConcepts: ["Exponential Backoff", "Circuit Breaker", "Graceful Degradation", "Rate Limiting", "Timeouts"],
        sampleOutline: "Set strict request timeouts, retry transient 5xx/429 errors with capped exponential backoff + jitter, wrap the upstream provider in a Circuit Breaker (Closed -> Open on failure threshold -> Half-Open probe), and serve a fallback question bank or browser speech synthesis when tripped.",
      },
    ],
    faqs: [
      {
        question: "Does this track cover both frontend and backend web questions?",
        answer: "Yes — it tests end-to-end web architecture including semantic HTML, HTTP, REST, authentication, caching, SEO/rendering trade-offs, and backend resilience.",
      },
    ],
    relatedSlugs: ["react", "javascript", "cybersecurity"],
  },
  {
    slug: "react",
    name: "React.js",
    shortName: "React",
    category: "Frontend & Web",
    tagline: "Explain reconciliation, hooks, stale closures, state architecture, and rendering performance cleanly.",
    seoTitle: "React.js Mock Interview Practice Free | PlacementPrep India",
    seoDescription:
      "Prepare for React.js frontend interviews in India. Practice spoken answers on Virtual DOM, hooks, useEffect pitfalls, memoization, and Server Components with rubric scoring.",
    keywords: [
      "React interview questions India",
      "React mock interview free",
      "useEffect stale closure interview",
      "React frontend placement prep",
    ],
    campusRelevance:
      "React is the single most common frontend framework listed on Indian student resumes. Recruiters quickly separate candidates who built tutorials from those who understand rendering lifecycles, hook rules, and performance trade-offs.",
    targetCompanies: ["Flipkart", "Swiggy", "Atlassian", "Razorpay", "Groww", "Zoho", "Startups"],
    difficultyBreakdown: {
      beginner: ["JSX, Props vs State & One-Way Data Flow", "Keys in Lists & Reconciliation", "Controlled vs Uncontrolled Inputs", "useState & Basic useEffect"],
      intermediate: ["Stale Closures & Cleanup Functions", "useMemo, useCallback & React.memo Trade-offs", "Context API vs Zustand/Redux", "Custom Hooks & Error Boundaries"],
      advanced: ["Concurrent Rendering & useTransition", "React Server Components vs Client Components", "Preventing Re-render Cascades", "Browser API Integration (Web Speech / Media)"],
    },
    questions: [
      {
        id: "react-1",
        difficulty: "Beginner",
        question: "Why does React warn against using array indices as `key` props in dynamic lists, and what actual UI bugs can happen if you ignore it?",
        adaptiveFollowUp: "When IS it completely safe to use an index as a key?",
        rubricFocus: ["Explains how React matches Fiber nodes across renders via key", "Gives concrete bug: wrong input state/focus staying attached after prepend/delete", "Correctly states static, never-reordered lists as the safe exception"],
        keyConcepts: ["Reconciliation", "Fiber Identity", "Component State Corruption", "Stable Unique ID"],
        sampleOutline: "React uses keys to match elements between renders. If items are inserted, deleted, or reordered, index keys shift and React reuses existing component instances for the wrong data — scrambling uncontrolled input values or animations. Index keys are only safe for static lists that never reorder or mutate.",
      },
      {
        id: "react-2",
        difficulty: "Intermediate",
        question: "What is a stale closure in `useEffect` or event callbacks, and how do you fix it cleanly when integrating a browser API like SpeechRecognition?",
        adaptiveFollowUp: "Why shouldn't you blindly suppress the exhaustive-deps ESLint rule?",
        rubricFocus: ["Explains JavaScript lexical capture of old render-scope state", "Shows functional state updates (`setState(prev => ...)`) and `useRef` sync patterns", "Explains cleanup function role to prevent duplicate listeners"],
        keyConcepts: ["Stale Closure", "Functional Updates", "useRef", "Effect Cleanup", "Dependency Array"],
        sampleOutline: "Callbacks created during an earlier render close over that render's state snapshot. For long-lived browser listeners like SpeechRecognition `onresult`, either use functional updates (`setTranscript(prev => ...)`), store mutable latest state in a `useRef`, or properly register and tear down listeners in `useEffect` cleanup.",
      },
      {
        id: "react-3",
        difficulty: "Advanced",
        question: "When does wrapping everything in `useMemo` and `useCallback` actually hurt performance instead of helping?",
        adaptiveFollowUp: "How would you systematically diagnose a sluggish React screen before adding memoization?",
        rubricFocus: ["Identifies memory & dependency-comparison overhead", "Highlights structural fixes first (colocating state, lifting content as children)", "Mentions React DevTools Profiler and Chrome Performance tab"],
        keyConcepts: ["Premature Optimization", "Referential Equality", "State Colocation", "React Profiler"],
        sampleOutline: "Every `useMemo`/`useCallback` allocates closure/array memory and runs dependency comparisons on every render. If a component is cheap to render or its child isn't memoized, memoization adds pure overhead. Always profile first with React DevTools, colocate state down to leaf components, and memoize only proven expensive computations or referentially sensitive props.",
      },
    ],
    faqs: [
      {
        question: "Does this track include React 19 and Next.js concepts?",
        answer: "Yes. Intermediate and advanced questions cover modern React hooks, concurrent transitions, and Server vs Client component trade-offs.",
      },
    ],
    relatedSlugs: ["javascript", "web-dev", "dsa"],
  },
  {
    slug: "javascript",
    name: "JavaScript",
    shortName: "JavaScript",
    category: "Frontend & Web",
    tagline: "Master the event loop, closures, promises, prototypes, and async edge cases in spoken rounds.",
    seoTitle: "JavaScript Mock Interview Practice Free | PlacementPrep India",
    seoDescription:
      "Ace JavaScript campus placement interviews. Practice spoken answers on event loop, microtasks, closures, prototypes, `this` binding, and async/await with AI rubric feedback.",
    keywords: [
      "JavaScript interview questions India",
      "JS event loop mock interview",
      "closures promises interview practice",
      "JavaScript fresher placement prep",
    ],
    campusRelevance:
      "JavaScript internals — especially the event loop, microtask vs macrotask priority, closures, and debouncing — are favorite elimination questions in frontend and Node.js interviews across Indian tech companies.",
    targetCompanies: ["Amazon", "Flipkart", "Atlassian", "Uber", "Swiggy", "Paytm", "TCS Digital"],
    difficultyBreakdown: {
      beginner: ["var vs let vs const & TDZ", "Hoisting & Lexical Scope", "== vs === & Type Coercion", "Array Methods (map, filter, reduce)"],
      intermediate: ["Closures & Memory Leaks", "Event Loop: Call Stack, Microtasks & Macrotasks", "Promises, async/await & Promise.allSettled", "`this` Binding, call/apply/bind"],
      advanced: ["Prototypal Inheritance & Object.create", "Debounce vs Throttle Implementation", "Garbage Collection & WeakMap", "Event Delegation & Bubbling"],
    },
    questions: [
      {
        id: "js-1",
        difficulty: "Intermediate",
        question: "Explain how the JavaScript Event Loop prioritizes synchronous code, Promise callbacks, and `setTimeout(..., 0)`.",
        adaptiveFollowUp: "What happens to UI rendering if a recursive Promise microtask chain keeps scheduling new microtasks endlessly?",
        rubricFocus: ["Traces Call Stack -> Microtask Queue (Promises, queueMicrotask) -> Macrotask Queue (setTimeout, I/O)", "Explains that the microtask queue drains completely before the next paint/macrotask", "Identifies UI starvation risk"],
        keyConcepts: ["Call Stack", "Microtask Queue", "Macrotask Queue", "Event Loop", "Starvation"],
        sampleOutline: "Synchronous code runs on the call stack to completion first. Next, the event loop drains the entire microtask queue (Promise `.then`/`.catch`, `queueMicrotask`) before picking a single macrotask (`setTimeout`, DOM events) or letting the browser repaint. Infinite microtasks therefore starve rendering and freeze the tab.",
      },
      {
        id: "js-2",
        difficulty: "Intermediate",
        question: "What is a JavaScript closure, give a practical engineering use case, and explain how closures can accidentally cause memory leaks.",
        adaptiveFollowUp: "Compare `debounce` and `throttle` — how do both rely on closures, and where would you use each in an interview web app?",
        rubricFocus: ["Defines lexical environment persistence after outer function returns", "Gives real example (private state, memoization, debounce/throttle)", "Explains retained references to detached DOM nodes or large objects"],
        keyConcepts: ["Lexical Scope", "Private State", "Debounce", "Throttle", "Retained Reference"],
        sampleOutline: "A closure is a function bundled with references to its surrounding lexical scope even after the outer function finishes. Practical uses include debouncing search inputs, throttling scroll handlers, and encapsulating private state. Memory leaks happen when long-lived closures keep references to detached DOM nodes or large buffers.",
      },
      {
        id: "js-3",
        difficulty: "Beginner",
        question: "Compare `Promise.all`, `Promise.allSettled`, and `Promise.race` — and choose the right one when firing parallel API calls with a fallback.",
        adaptiveFollowUp: "Does `Promise.race` cancel the losing network requests automatically? How would you actually cancel them?",
        rubricFocus: ["Accurately contrasts fail-fast vs wait-all vs first-settled semantics", "Mentions `AbortController` to cancel in-flight fetch requests", "Gives concrete engineering scenario"],
        keyConcepts: ["Promise.all", "Promise.allSettled", "Promise.race", "Fail-Fast", "AbortController"],
        sampleOutline: "`Promise.all` resolves when all succeed and rejects immediately on the first error. `Promise.allSettled` waits for every promise and returns each status/value/reason — great for partial fallbacks. `Promise.race` settles with whichever finishes first, useful for timeouts, paired with `AbortController` to actually abort losing fetches.",
      },
    ],
    faqs: [
      {
        question: "Are Node.js backend JS questions covered too?",
        answer: "Yes! Event loop mechanics, async error handling, streams, and non-blocking concurrency are relevant to both browser JavaScript and Node.js Express interviews.",
      },
    ],
    relatedSlugs: ["react", "web-dev", "dsa"],
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    shortName: "Cybersecurity",
    category: "Security",
    tagline: "Defend OWASP Top 10 mitigations, auth hardening, password hashing, encryption, and DPDP privacy principles.",
    seoTitle: "Cybersecurity Mock Interview Questions Free | PlacementPrep India",
    seoDescription:
      "Prepare for Cybersecurity & AppSec placement interviews in India. Practice spoken answers on OWASP Top 10, XSS, CSRF, SQLi, bcrypt, JWT security, and DPDP Act 2023 privacy.",
    keywords: [
      "Cybersecurity interview questions India",
      "OWASP Top 10 mock interview",
      "XSS CSRF SQL injection interview",
      "application security placement prep",
    ],
    campusRelevance:
      "Security awareness is increasingly tested not just for Security Analyst roles, but in every backend and full-stack SDE interview. Understanding OWASP Top 10, password hashing, and India's DPDP Act 2023 sets candidates apart.",
    targetCompanies: ["Palo Alto Networks", "CrowdStrike", "Cisco", "Zscaler", "Deloitte", "EY", "PwC", "Bank Tech"],
    difficultyBreakdown: {
      beginner: ["CIA Triad & Authentication vs Authorization", "Hashing vs Encryption vs Encoding", "SQL Injection & Parameterized Queries", "XSS (Stored, Reflected, DOM)"],
      intermediate: ["CSRF Mitigation & SameSite Cookies", "bcrypt / Argon2 Salting & Work Factors", "OTP Verification & Rate Limiting", "Security Headers (CSP, HSTS, Helmet)"],
      advanced: ["OWASP Top 10 Threat Modeling", "JWT Pitfalls (alg:none, Rotation, Revocation)", "Zero-Trust & Least Privilege", "DPDP Act 2023 & Privacy by Design"],
    },
    questions: [
      {
        id: "sec-1",
        difficulty: "Beginner",
        question: "Why should you never store user passwords with plain SHA-256, and why are bcrypt or Argon2 preferred instead?",
        adaptiveFollowUp: "What is a cryptographic salt, and what specific attack does a unique per-user salt defeat?",
        rubricFocus: ["Explains SHA-256 is designed to be fast (vulnerable to GPU brute force)", "Highlights adaptive work factor / memory hardness in bcrypt & Argon2", "Correctly links unique per-user salts to defeating rainbow tables and identical-hash collisions"],
        keyConcepts: ["Slow Hash / Work Factor", "bcrypt / Argon2", "Unique Salt", "Rainbow Tables", "GPU Brute-Force"],
        sampleOutline: "SHA-256 is optimized for speed, allowing attackers with GPUs to test billions of guesses per second. Password hashers like bcrypt and Argon2 are intentionally slow with configurable cost factors (and memory-hardness for Argon2). Pairing them with a unique random salt per user prevents precomputed rainbow-table attacks.",
      },
      {
        id: "sec-2",
        difficulty: "Intermediate",
        question: "Explain the difference between XSS (Cross-Site Scripting) and CSRF (Cross-Site Request Forgery), and how you mitigate each in a modern web app.",
        adaptiveFollowUp: "If a site has an XSS vulnerability, can a CSRF token alone still protect the user?",
        rubricFocus: ["Distinguishes attacker running JS in victim's browser (XSS) vs tricking browser into sending authenticated request (CSRF)", "Lists output encoding + CSP for XSS, SameSite + anti-CSRF token for CSRF", "Explains why XSS bypasses CSRF tokens (script can read the token)"],
        keyConcepts: ["XSS", "CSRF", "Content Security Policy (CSP)", "SameSite Cookie", "Output Encoding"],
        sampleOutline: "XSS injects malicious JavaScript into a trusted origin (defended via contextual output escaping, React auto-escaping, and strict CSP). CSRF exploits automatic cookie submission from another site (defended via SameSite cookies and unpredictable anti-CSRF tokens). If XSS exists, the attacker script can read the CSRF token anyway.",
      },
      {
        id: "sec-3",
        difficulty: "Advanced",
        question: "How would you harden an OTP email registration flow against brute-force guessing, replay attacks, and account enumeration?",
        adaptiveFollowUp: "What does atomic OTP verification mean in a database, and what race condition happens without it?",
        rubricFocus: ["Covers rate limiting, short expiry, attempt lockouts, and hashed OTP storage", "Explains atomic single-use consume (`findOneAndUpdate`) preventing parallel replay races", "Mentions constant-time responses to avoid email enumeration"],
        keyConcepts: ["Atomic Verification", "Rate Limiting", "Short TTL", "Race Condition", "Account Enumeration"],
        sampleOutline: "Enforce per-IP and per-account rate limits, short TTL (5–10 min), max retry cap, and store hashed OTPs. Verify and mark the OTP consumed in a single atomic database operation so concurrent requests cannot race to reuse one OTP, and issue auth tokens only after verification succeeds.",
      },
    ],
    faqs: [
      {
        question: "Does this track cover web application security for SDE roles?",
        answer: "Yes. Every question connects security concepts directly to real web engineering patterns like OWASP Top 10, JWT cookies, OTP flows, and DPDP Act 2023 data minimization.",
      },
    ],
    relatedSlugs: ["networks", "web-dev", "os"],
  },
  {
    slug: "hr",
    name: "HR & Behavioural (STAR Method)",
    shortName: "HR & STAR",
    category: "Behavioural",
    tagline: "Structure compelling project stories, conflict resolution, and leadership answers using the STAR framework.",
    seoTitle: "HR & Behavioural Mock Interview (STAR Method) | PlacementPrep India",
    seoDescription:
      "Practice HR and behavioural mock interviews for Indian campus placements. Master the STAR method (Situation, Task, Action, Result) with spoken AI follow-ups and rubric feedback.",
    keywords: [
      "HR interview questions for freshers India",
      "STAR method interview examples",
      "behavioural mock interview free",
      "campus placement HR round preparation",
    ],
    campusRelevance:
      "Many strong coders get rejected in the final HR or hiring-manager round because their answers ramble, take credit vaguely ('we did'), or lack measurable impact. AcePrep replaces the technical dimension with STAR structure scoring specifically for HR rounds.",
    targetCompanies: ["Amazon (Leadership Principles)", "Microsoft", "TCS", "Infosys", "Wipro", "Deloitte", "All Campus Drives"],
    difficultyBreakdown: {
      beginner: ["Tell Me About Yourself (60–90s Pitch)", "Strengths, Weaknesses & Self-Awareness", "Why This Company / Role?", "Walkthrough of Your Best Project"],
      intermediate: ["Handling Team Conflict or Uneven Workload", "A Time You Failed or Missed a Deadline", "Learning a New Technology Under Pressure", "Making a Tough Technical Trade-Off"],
      advanced: ["Disagreeing with a Senior / Mentor Respectfully", "Ambiguous Requirements & Ownership", "Prioritizing Under Tight Scope Cuts", "Bar-Raiser Follow-Up Probing (Metrics & Retrospectives)"],
    },
    questions: [
      {
        id: "hr-1",
        difficulty: "Beginner",
        question: "Tell me about yourself and walk me through the project on your resume that you are most proud of.",
        adaptiveFollowUp: "In that project, what was the single hardest bug or architectural trade-off that YOU personally owned?",
        rubricFocus: ["Crisp 60–90 second present-past-future arc without reciting entire resume", "Clearly states personal contribution ('I built') rather than vague 'we'", "Quantifies outcome or learning clearly"],
        keyConcepts: ["Present-Past-Future", "Personal Ownership", "Quantified Impact", "Concise Delivery"],
        sampleOutline: "Open with your degree, core engineering focus, and one standout project with a concrete metric (e.g., latency reduced, tests written, users served). Clearly separate your personal responsibility from team work, and connect your motivation to the role you are interviewing for.",
      },
      {
        id: "hr-2",
        difficulty: "Intermediate",
        question: "Tell me about a time a teammate wasn't pulling their weight or disagreed strongly with your technical approach. How did you handle it?",
        adaptiveFollowUp: "Looking back, is there anything you would handle differently in how you communicated early on?",
        rubricFocus: ["Follows Situation -> Task -> Action -> Result cleanly", "Shows empathy, objective criteria, and constructive resolution — no blaming", "Ends with measurable project outcome and reflection"],
        keyConcepts: ["STAR Method", "Conflict Resolution", "Objective Trade-Offs", "Psychological Safety", "Reflection"],
        sampleOutline: "Situation: Capstone sprint falling behind due to disagreements on database/scope. Task: Deliver milestone on time without hurting team morale. Action: Scheduled a brief 1:1 sync, broke tasks into clear MoSCoW owners with objective criteria, and paired on blockers. Result: Shipped on schedule with 100% test pass rate.",
      },
      {
        id: "hr-3",
        difficulty: "Advanced",
        question: "Describe a time you had to make a difficult decision with incomplete information or cut scope to meet a hard deadline.",
        adaptiveFollowUp: "How did you communicate that scope cut to stakeholders, and how did you ensure the deferred work wasn't forgotten?",
        rubricFocus: ["Demonstrates prioritization framework (Must vs Should/Could)", "Quantifies risk and trade-off transparently", "Shows proactive stakeholder communication"],
        keyConcepts: ["Prioritization", "MoSCoW Scope", "Risk Mitigation", "Stakeholder Communication", "STAR Result"],
        sampleOutline: "Explain the deadline constraint (Situation/Task), how you prioritized core 'Must-have' requirements while deferring risky 'Could-have' features with clear documentation (Action), and the measurable delivery outcome plus follow-up plan (Result).",
      },
    ],
    faqs: [
      {
        question: "How is the HR track scored differently from technical tracks?",
        answer: "As defined in AcePrep's Section 7.3 rubric, HR answers are scored from 0–10 on STAR Structure (replacing Technical Accuracy), Depth & Reflection, and Communication Clarity.",
      },
      {
        question: "How long should a spoken STAR answer be?",
        answer: "Aim for 90 to 120 seconds: ~15% Situation, ~15% Task, ~50% Action (focusing on what YOU did), and ~20% measurable Result.",
      },
    ],
    relatedSlugs: ["dsa", "web-dev", "dbms"],
  },
];

export function getTrackBySlug(slug: string): TrackData | undefined {
  return INTERVIEW_TRACKS.find((track) => track.slug === slug);
}
