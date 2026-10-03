const { name, gifts, memories, memoryFormUrl } = window.KEEPSAKE;
const app = document.getElementById("app");
const esc = (s = "") => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const PLAY = '<svg viewBox="0 0 24 24"><path d="M8 5.14v13.72L19 12 8 5.14z"/></svg>';

let view = { phase: "intro", gift: 0, anchor: "" };
let unlocked = false; // the top navigation appears once the guided tour has been completed
const go = (phase, gift = view.gift, anchor = "") => {
  view = { phase, gift, anchor };
  if (phase === "keepsake") unlocked = true;
  render();
  const target = anchor && document.getElementById(anchor);
  target ? target.scrollIntoView() : window.scrollTo({ top: 0 });
};

function navBar() {
  const home = view.phase === "keepsake" && view.anchor !== "memories";
  const mem = view.phase === "keepsake" && view.anchor === "memories";
  const link = (go, label, active) =>
    `<button class="navlink${active ? " on" : ""}" data-go="${go}"${active ? ' aria-current="page"' : ""}>${esc(label)}</button>`;
  const links = [
    link("keepsake", "Home", home),
    ...gifts.map((g, i) => link("gift:" + i, g.nav || g.from, view.phase === "gift" && view.gift === i)),
    link("keepsake::memories", "Memories", mem),
  ].join("");
  return `<nav class="topnav" aria-label="Keepsake navigation"><div class="inner">
    <button class="logo" data-go="keepsake" aria-label="Back to the keepsake home">${esc(name || "Keepsake")}</button>
    <div class="links">${links}</div></div></nav>`;
}

function intro() {
  return `<section class="screen center intro rise">
    <p class="eyebrow">A memorable gift from driven</p>
    <h1 class="display">Happy<span class="italic gold glowtext">Birthday${name ? ", " + esc(name) : ""}</span></h1>
    <p class="lead">Four little films, made with love, then a wall full of memories from the people whose lives you have touched.</p>
    <button class="btn" data-go="gift:0">Begin your celebration</button>
    <small>.a few minutes of love.</small>
  </section>`;
}

function giftStep(i) {
  const g = gifts[i], n = gifts.length, last = i === n - 1;
  const bars = gifts.map((_, k) => `<b class="${k <= i ? "on" : ""}"></b>`).join("");
  const media = g.src
    ? `<img src="${esc(g.poster)}" alt="${esc(g.title)}"><button class="play" data-play aria-label="Play video"><span class="circle">${PLAY}</span></button>`
    : `<img src="${esc(g.poster)}" alt="${esc(g.title)}"><div class="play"><span class="wrapping">This gift is still being wrapped</span></div>`;
  return `<section class="screen step rise">
    <div class="head"><div><p class="from">${esc(g.from)}</p><p class="count">Gift ${i + 1} of ${n}</p></div><div class="bars">${bars}</div></div>
    ${i > 0 ? `<button class="link back" data-go="gift:${i - 1}">← Previous gift</button>` : ""}
    <h1 class="display">${esc(g.title)}</h1>
    <p class="sub">${esc(g.subtitle)}</p>
    <div class="player" data-player="${esc(g.src)}">${media}</div>
    <div class="next">
      <button class="btn block" data-go="${last ? "keepsake" : "gift:" + (i + 1)}">${last ? "Open your memories" : "Next gift"} →</button>
      <p>${last ? "This is the part that never ends." : `${n - i - 1} more gift${n - i - 1 === 1 ? "" : "s"} waiting for you`}</p>
    </div>
  </section>`;
}

function keepsake() {
  const films = gifts.map((g, i) => `<button class="film rise" style="animation-delay:${i * 80}ms" data-go="gift:${i}">
    <div class="thumb"><img src="${esc(g.poster)}" alt="${esc(g.title)}" loading="lazy"><span class="tag">${esc(g.from)}</span></div>
    <div class="info"><b>${esc(g.title)}</b><span>${esc(g.subtitle)}</span></div></button>`).join("");
  const fmt = (d) => d ? new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" }) : "";
  const cards = memories.map((m, i) => `<article class="mem rise" style="animation-delay:${Math.min(i, 12) * 45}ms">
    <q>${esc(m.message)}</q>
    <footer><span class="avatar" style="background:color-mix(in oklab, var(--blush) ${25 + ((i * 23) % 45)}%, var(--ember))">${esc(m.name.trim().charAt(0).toUpperCase())}</span>
    <div><p class="who">${esc(m.name)}${m.relation ? ` <span>· ${esc(m.relation)}</span>` : ""}</p><p class="when">${fmt(m.date)}</p></div></footer></article>`).join("");
  return `<div class="screen keepsake rise">
    <header><p class="eyebrow">The keepsake</p><h1 class="display glowtext">Yours to return to</h1>
      <p>The films and the memories stay here for good. Come back whenever you want to feel loved again.</p></header>
    <section class="section"><p class="eyebrow">The films</p><h2>Watch again, anytime</h2><div class="grid">${films}</div></section>
    <section class="section" id="memories"><div class="row"><div><p class="eyebrow">The memory wall</p><h2>Words that never expire</h2></div><span class="pill">${memories.length} notes</span></div>
      <div class="grid">${cards}</div>
      ${memoryFormUrl ? `<div class="add"><b>Add your memory</b><p>Write something from the heart.</p><a class="btn" href="${esc(memoryFormUrl)}" target="_blank" rel="noopener">Share a memory</a></div>` : ""}
    </section>
    <footer class="foot"><p>Made with love, for someone who deserves every word.</p><p>${new Date().getFullYear()} · The Birthday Keepsake</p></footer>
  </div>`;
}

function render() {
  const body = view.phase === "intro" ? intro() : view.phase === "gift" ? giftStep(view.gift) : keepsake();
  const showNav = unlocked && view.phase !== "intro";
  document.body.classList.toggle("has-nav", showNav);
  app.innerHTML = (showNav ? navBar() : "") + body;
  const active = app.querySelector(".navlink.on");
  if (active) active.scrollIntoView({ inline: "center", block: "nearest" });
}

app.addEventListener("click", (e) => {
  const goBtn = e.target.closest("[data-go]");
  if (goBtn) {
    const [p, i, anchor] = goBtn.dataset.go.split(":");
    return go(p, i === undefined || i === "" ? view.gift : Number(i), anchor || "");
  }
  if (e.target.closest("[data-play]")) {
    const box = app.querySelector("[data-player]");
    box.classList.add("playing");
    box.innerHTML = `<video src="${esc(box.dataset.player)}" controls autoplay playsinline></video>`;
  }
});

render();
