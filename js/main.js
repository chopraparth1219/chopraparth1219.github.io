/* ===== EDIT ME: all your content lives here ===== */
const CFG = {
  formspree: "mkjjngqk",
  email: "chopraparth1219@gmail.com",
  links: {
    Gmail: "mailto:chopraparth1219@gmail.com",
    LinkedIn: "https://www.linkedin.com/in/parth-chopra-9871b2378",
    GitHub: "https://github.com/chopraparth1219",
    Unstop: "https://unstop.com/u/parthcho22439",
    Instagram: "https://www.instagram.com/parth.03489",
    WhatsApp: "https://wa.me/918851329844" // contains your number; delete this line to keep it private
  }
};
const SKILLS = [
  ["Python", "End-to-end projects, web apps, data processing and scripting."],
  ["C++", "Problem solving, debugging, optimization and performance analysis. OOP basics."],
  ["Web and UI/UX", "HTML, CSS and JavaScript. Responsive, user-friendly interfaces."],
  ["Data science", "Pandas, NumPy, Matplotlib, Scikit-learn. Cleaning, EDA, ML models."],
  ["Algorithms", "Discrete mathematics implemented and visualized in an interactive game."],
  ["Canva (advanced)", "Presentations, marketing and visual content."],
  ["GitHub", "Repos, branching, pull requests and team collaboration."]
];
const PROJECTS = [
  ["Smart Emergency Vehicle System", "AI-powered traffic assistance that cuts ambulance response times. Gives drivers a live green-corridor route and lets citizens track the ambulance and clear the path.", "Python, HTML, CSS, JS", "https://github.com/chopraparth1219/Smart-Emergency-Vehicle-System"],
  ["Discrete Math Algorithm Game", "An interactive game that teaches and visualizes multiple algorithms.", "Python/JS", "https://github.com/chopraparth1219/City-Roadmap-1"],
  ["GitHub Activity Tracker", "Enter a GitHub repo and see its last commit time and recent activity.", "HTML, CSS, JS, GitHub API", "https://github.com/chopraparth1219/GithubLinkage1"],
  ["Water Quality Monitoring System", "Menu-driven TDS monitor for hostel water blocks with 5 quality categories, full CRUD and a live color-coded bar graph.", "Python, Matplotlib", "https://github.com/chopraparth1219/Water-Quality-Monitoring-System"]
];
const TASKS = [ // title, dataset, approach, result, GitHub link
  ["Task 1: Data preprocessing", "", "", "", ""],
  ["Task 2: Exploratory data analysis", "", "", "", ""],
  ["Task 3: ML fundamentals", "", "", "", ""],
  ["Task 4: Predictive model", "", "", "", ""]
];
const HACKS = [
  ["Smart India Hackathon", "Cleared the internal round and placed among the top teams."],
  ["EFOS Skill Up India Hackathon 2026", "Ranked 44th of 220 teams nationally."],
  ["VIBEHACK 2026", "Organized by the Data Science Club, VIT Bhopal."],
  ["SLAB Hackathon", "Organized by the Office of Student Welfare, VIT Bhopal."],
  ["HackZero'26", "OWASP cybersecurity CTF at VIT Bhopal."]
];
const CERTS = [ // f = file name inside assets/certificates/ (case-sensitive)
  { t: "Data Science Internship", i: "Decode Labs", f: "decode-labs.jpg" },
  { t: "Smart India Hackathon", i: "SIH", f: "sih.png" },
  { t: "EFOS Skill Up India Hackathon 2026", i: "EFOS", f: "EFOS.pdf" },
  { t: "VIBEHACK 2026", i: "VIT Bhopal", f: "Vibehack.png" },
  { t: "HackZero'26", i: "VIT Bhopal", f: "Hackzero.png" },
  { t: "DSC Club", i: "VIT Bhopal", f: "DSC.png" }
];
const REVIEWS = [
  { n: "Ankit Paul", r: 5, c: "Parth stayed calm under hackathon pressure and shipped a working prototype on time." },
  { n: "Saurav Kumar", r: 5, c: "Strong with data: he cleaned messy datasets and explained the results in plain language." },
  { n: "Piyush Chopra", r: 5, c: "As a core club member he was dependable, organized and easy to work with." }
];

/* ===== helpers ===== */
const $ = (s, e = document) => e.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const todo = t => `<span class="todo">${esc(t)}</span>`;
const stars = n => "★".repeat(n) + "☆".repeat(5 - n);
const ago = d => { const m = Math.max(1, (Date.now() - new Date(d)) / 6e4 | 0); return m < 60 ? m + " min ago" : m < 1440 ? (m / 60 | 0) + " h ago" : (m / 1440 | 0) + " days ago"; };

/* ===== render content ===== */
$("#skills-grid").innerHTML = SKILLS.map(([a, b]) => `<div class="card rv"><h3>${a}</h3><p>${b}</p></div>`).join("");
$("#projects-grid").innerHTML = PROJECTS.map(([a, b, c, l]) => `<div class="card rv"><h3>${a}</h3><p>${b}</p><p class="tags">${c}</p>${l ? `<a href="${l}" target="_blank" rel="noopener">View code</a>` : todo("TODO: add repo link")}</div>`).join("");
$("#tasks").innerHTML = TASKS.map(([t, d, a, r, l]) => `<div class="card rv"><h3>${t}</h3><p>Dataset: ${d || todo("TODO")}</p><p>Approach: ${a || todo("TODO")}</p><p>Result: ${r || todo("TODO")}</p>${l ? `<a href="${l}" target="_blank" rel="noopener">View code</a>` : todo("TODO: code link")}</div>`).join("");
$("#hacks").innerHTML = HACKS.map(([a, b]) => `<li class="rv"><h3>${a}</h3><span>${b}</span></li>`).join("");
$("#certs").innerHTML = CERTS.map((c, i) => `<div class="card rv"><h3>${c.t}</h3><p>${c.i}</p><button class="lnk" data-cert="${i}">View certificate</button></div>`).join("");
$("#reviews-list").innerHTML = REVIEWS.map(r => `<div class="card rv"><p aria-label="${r.r} out of 5 stars">${stars(r.r)}</p><p>${esc(r.c)}</p><h3>${esc(r.n)}</h3></div>`).join("");
$("#links").innerHTML = Object.entries(CFG.links).map(([k, v]) => v ? `<a class="btn ghost" href="${v}" target="_blank" rel="noopener">${k}</a>` : "").join("");

/* ===== scroll animations ===== */
document.querySelectorAll(".grid,.tl,#reviews-list").forEach(g => [...g.children].forEach((c, i) => c.style.setProperty("--d", (i % 4) * .1 + "s")));
const count = el => {
  const n = +el.dataset.n, d = +el.dataset.d || 0, s = el.dataset.s || "", t0 = performance.now();
  const f = t => { const p = Math.min(1, (t - t0) / 1400); el.textContent = (n * (1 - Math.pow(1 - p, 3))).toFixed(d) + s; if (p < 1) requestAnimationFrame(f); };
  requestAnimationFrame(f);
};
const io = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  e.target.classList.add("in");
  e.target.querySelectorAll("[data-n]").forEach(count);
  io.unobserve(e.target);
}), { threshold: .12 });
document.querySelectorAll(".rv").forEach(el => io.observe(el));

const links = [...document.querySelectorAll("#menu a")];
const so = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) links.forEach(a => a.classList.toggle("on", a.getAttribute("href") === "#" + e.target.id));
}), { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("main section").forEach(s => so.observe(s));

const bar = $("#bar");
addEventListener("scroll", () => { bar.style.transform = `scaleX(${scrollY / Math.max(1, document.documentElement.scrollHeight - innerHeight)})`; }, { passive: true });

if (!matchMedia("(prefers-reduced-motion:reduce)").matches && matchMedia("(hover:hover)").matches) {
  document.addEventListener("mousemove", e => {
    const c = e.target.closest(".card"); if (!c || c.id === "fb") return;
    const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
    c.style.transform = `rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateZ(14px)`;
  });
  document.addEventListener("mouseout", e => { const c = e.target.closest(".card"); if (c) c.style.transform = ""; });
}

/* ===== theme ===== */
const root = document.documentElement;
try { const t = localStorage.getItem("theme"); if (t) root.dataset.theme = t; } catch (e) {}
$("#theme").onclick = () => { root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark"; try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {} };

/* ===== certificates modal ===== */
const modal = $("#modal");
document.addEventListener("click", e => {
  const b = e.target.closest("[data-cert]"); if (!b) return;
  const f = CERTS[b.dataset.cert].f, p = "assets/certificates/" + f;
  $("#mbody").innerHTML = !f ? todo("TODO: add this certificate file") : /\.pdf$/i.test(f) ? `<iframe src="${p}" title="Certificate"></iframe>` : `<img src="${p}" alt="Certificate">`;
  modal.showModal();
});
$("#close").onclick = () => modal.close();

/* ===== live GitHub ===== */
async function loadGh(link) {
  const out = $("#gh"); out.textContent = "Loading...";
  const p = link.trim().replace(/^https?:\/\/(www\.)?github\.com\//i, "").replace(/\.git$/i, "").split("/").filter(Boolean);
  try {
    if (!p.length) throw new Error("Paste a GitHub profile or repo link.");
    const repoMode = p.length > 1;
    const r = await fetch(repoMode ? `https://api.github.com/repos/${p[0]}/${p[1]}/commits?per_page=5` : `https://api.github.com/users/${p[0]}/events/public?per_page=30`);
    if (!r.ok) throw new Error(r.status === 403 ? "GitHub rate limit reached, try again later." : "Profile or repo not found, or not public.");
    const d = await r.json();
    const items = repoMode
      ? d.map(c => ({ m: c.commit.message.split("\n")[0], w: c.commit.author.name, t: c.commit.author.date }))
      : d.filter(e => e.type === "PushEvent").slice(0, 5).map(e => ({ m: (e.payload.commits && e.payload.commits[0] ? e.payload.commits[0].message.split("\n")[0] : "Pushed an update"), w: e.repo.name, t: e.created_at }));
    if (!items.length) throw new Error("No recent public activity found.");
    out.innerHTML = `<p class="big">Last activity ${ago(items[0].t)}</p><ul>` + items.map(i => `<li><b>${esc(i.m)}</b><span>${esc(i.w)}, ${ago(i.t)}</span></li>`).join("") + "</ul>";
  } catch (e) { out.innerHTML = `<p class="todo">${esc(e.message)}</p>`; }
}
$("#repo").value = CFG.links.GitHub;
$("#ghform").onsubmit = e => { e.preventDefault(); loadGh($("#repo").value); };
loadGh(CFG.links.GitHub);

/* ===== reviews form ===== */
let rating = 5;
const sb = $("#stars");
for (let i = 1; i <= 5; i++) { const b = document.createElement("button"); b.type = "button"; b.textContent = "★"; b.setAttribute("role", "radio"); b.setAttribute("aria-label", i + " stars"); b.onclick = () => { rating = i; paint(); }; sb.append(b); }
const paint = () => [...sb.children].forEach((b, i) => { b.classList.toggle("on", i < rating); b.setAttribute("aria-checked", i + 1 === rating); });
paint();
$("#fb").onsubmit = async e => {
  e.preventDefault();
  const n = $("#nm").value, c = $("#cm").value, m = $("#fbmsg");
  if (CFG.formspree) {
    try {
      const r = await fetch("https://formspree.io/f/" + CFG.formspree, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify({ name: n, rating, comment: c }) });
      if (!r.ok) throw 0;
      m.textContent = "Thanks, your review was sent."; e.target.reset(); rating = 5; paint();
    } catch (_) { m.textContent = "Could not send. Please try again or email me."; }
  } else {
    location.href = `mailto:${CFG.email}?subject=${encodeURIComponent("Portfolio review (" + rating + "/5)")}&body=${encodeURIComponent(n + "\n\n" + c)}`;
    m.textContent = "Opening your email app. (Developer: set CFG.formspree to send directly.)";
  }
};