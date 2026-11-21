// ===== Blog index =====
// To add a post: copy any file in /posts, edit it, then add an entry at the TOP of this list.
const POSTS = [
  {
    slug: "single-html-file",
    title: "Why I ship every analysis as a single HTML file",
    date: "2026-11-19",
    tag: "Ideas",
    read: "5 min",
    excerpt: "No server, no login, no 'can you send me the dashboard link again'. Here's the case for one self-contained page per question."
  },
  {
    slug: "odometer-with-calculus",
    title: "Checking a vehicle's odometer with first-year calculus",
    date: "2026-11-17",
    tag: "Fleet",
    read: "6 min",
    excerpt: "Distance is the area under the speed curve. I integrated one trip three different ways and got three different answers. Here's why that's fine."
  },
  {
    slug: "fuel-heatmap-idling",
    title: "The fuel wasn't on the highway. It was in the parking lot.",
    date: "2026-08-27",
    tag: "Fleet",
    read: "6 min",
    excerpt: "I set out to find the fleet's most expensive route. The heat map pointed somewhere else: city idling."
  },
  {
    slug: "device-survival-analysis",
    title: "577 devices that never said hello: survival analysis for GPS trackers",
    date: "2026-08-20",
    tag: "Statistics",
    read: "7 min",
    excerpt: "Averaging failure times gives the wrong answer when most devices haven't failed yet. Kaplan–Meier handles that, and it surfaced a problem I wasn't looking for."
  }
];

function fmtDate(d) {
  return new Date(d + "T00:00:00").toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

function postCard(p, root) {
  const base = root || "";
  return `<a class="card post-card reveal in" href="${base}posts/${p.slug}.html">
    <div class="tags"><span class="tag">${p.tag}</span></div>
    <div class="meta">${fmtDate(p.date)} · ${p.read} read</div>
    <h3>${p.title}</h3>
    <p>${p.excerpt}</p>
    <span class="more">Read post →</span>
  </a>`;
}
