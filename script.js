const data = window.PORTFOLIO;
const app = document.querySelector("#app");

const escapeHTML = (value = "") =>
  String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  })[character]);

const gallery = (project) => `
  <div class="gallery">
    <div class="gallery-tools">
      <span>Details · ${String(project.gallery.length).padStart(2, "0")}</span>
    </div>
    <div class="gallery-stage">
      <div class="gallery-viewport" aria-label="${escapeHTML(project.title)} image gallery">
        <div class="gallery-track">
          <div class="gallery-set">
            ${project.gallery.map(([src, alt]) => `
              <figure>
                <img src="${escapeHTML(src)}" alt="${escapeHTML(alt)}" loading="lazy" />
              </figure>
            `).join("")}
          </div>
          <div class="gallery-set" aria-hidden="true">
            ${project.gallery.map(([src, alt]) => `
              <figure>
                <img src="${escapeHTML(src)}" alt="" loading="lazy" />
              </figure>
            `).join("")}
          </div>
        </div>
      </div>
      <button class="gallery-nav gallery-prev" type="button" aria-label="Previous image">←</button>
      <button class="gallery-nav gallery-next" type="button" aria-label="Next image">→</button>
    </div>
  </div>
`;

const project = (item) => `
  <article class="project" id="${escapeHTML(item.id)}">
    <header class="project-header">
      <div class="project-title">
        <h3>${escapeHTML(item.title)}<small>${escapeHTML(item.subtitle)}</small></h3>
      </div>
      ${item.challenge && item.approach ? `
        <div class="case-copy">
          <div><h4>Challenge</h4><p>${escapeHTML(item.challenge)}</p></div>
          <div><h4>Approach</h4><p>${escapeHTML(item.approach)}</p></div>
        </div>
      ` : `<p class="project-description">${escapeHTML(item.description)}</p>`}
    </header>
    ${gallery(item)}
  </article>
`;

const section = (item) => `
  <section class="discipline" id="${escapeHTML(item.id)}">
    <header class="discipline-header">
      <span>${escapeHTML(item.number)}</span>
      <div><h2>${escapeHTML(item.titleZh)}</h2><h2>${escapeHTML(item.title)}</h2></div>
      <p>${escapeHTML(item.description)}</p>
    </header>
    ${item.projects.map(project).join("")}
  </section>
`;

app.innerHTML = `
  <header class="site-header">
    <button data-jump="top" class="brand">${escapeHTML(data.profile.name)}</button>
    <button class="index-trigger" aria-expanded="false">Index / 目录 <span aria-hidden="true">＋</span></button>
  </header>
  <nav class="index-panel" aria-hidden="true">
    <p>Portfolio Index / 作品集目录</p>
    ${data.sections.map((item) => `
      <div>
        <button data-jump="${escapeHTML(item.id)}">
          <span>${escapeHTML(item.number)}</span>
          <strong>
            <span>${escapeHTML(item.title)}</span>
            <small>${escapeHTML(item.titleZh)}</small>
          </strong>
        </button>
      </div>
    `).join("")}
  </nav>
  <button class="backdrop" aria-label="Close index" hidden></button>
  <section class="hero" id="top">
    <p class="hero-role">${escapeHTML(data.profile.role)}</p>
    <div class="hero-name">
      <h1>${escapeHTML(data.profile.name)}</h1>
      <p class="hero-tagline">${escapeHTML(data.profile.tagline)}</p>
    </div>
    <button data-jump="overview">Scroll to view <span>↓</span></button>
  </section>
  <section class="overview" id="overview">
    <p class="eyebrow">Selected Work · ${escapeHTML(data.profile.year)}</p>
    <ol>${data.sections.map((item) => `
      <li><button data-jump="${escapeHTML(item.id)}"><span>${escapeHTML(item.number)}</span><strong>${escapeHTML(item.title)}</strong><span class="overview-arrow" aria-hidden="true">↘︎</span></button></li>
    `).join("")}</ol>
  </section>
  ${data.sections.map(section).join("")}
  <section class="contact-section" id="contact">
    <h2>Contact Me</h2>
    <a href="mailto:${escapeHTML(data.profile.email)}">${escapeHTML(data.profile.email)}</a>
  </section>
  <footer><span>${escapeHTML(data.profile.name)} · ${escapeHTML(data.profile.role)}</span><button data-jump="top">Back to top ↑</button></footer>
  <div class="contact-widget">
    <div class="contact-bubble" id="contact-bubble" aria-hidden="true">
      <p>Contact Me</p>
      <a href="mailto:${escapeHTML(data.profile.email)}">${escapeHTML(data.profile.email)}</a>
    </div>
    <button class="contact-toggle" type="button" aria-label="Open contact" aria-expanded="false" aria-controls="contact-bubble">
      <span class="phone-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" focusable="false">
          <path d="M7.1 3.5 9.4 7a1.5 1.5 0 0 1-.2 1.8l-1.4 1.4a15.8 15.8 0 0 0 6 6l1.4-1.4a1.5 1.5 0 0 1 1.8-.2l3.5 2.3a1.5 1.5 0 0 1 .6 1.7l-.5 2a1.5 1.5 0 0 1-1.5 1.1C10 21.7 2.3 14 2.3 4.9A1.5 1.5 0 0 1 3.4 3.4l2-.5a1.5 1.5 0 0 1 1.7.6Z" />
        </svg>
      </span>
      <span class="close-icon" aria-hidden="true">×</span>
    </button>
  </div>
`;

const header = document.querySelector(".site-header");
const trigger = document.querySelector(".index-trigger");
const panel = document.querySelector(".index-panel");
const backdrop = document.querySelector(".backdrop");
const contactWidget = document.querySelector(".contact-widget");
const contactToggle = document.querySelector(".contact-toggle");
const contactBubble = document.querySelector(".contact-bubble");

function setMenu(open) {
  panel.classList.toggle("open", open);
  panel.setAttribute("aria-hidden", String(!open));
  trigger.setAttribute("aria-expanded", String(open));
  trigger.firstChild.textContent = open ? "Close / 关闭 " : "Index / 目录 ";
  trigger.querySelector("span").textContent = open ? "×" : "＋";
  backdrop.hidden = !open;
}

function jump(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  setMenu(false);
}

trigger.addEventListener("click", () => setMenu(!panel.classList.contains("open")));
backdrop.addEventListener("click", () => setMenu(false));
document.addEventListener("keydown", (event) => event.key === "Escape" && setMenu(false));
document.querySelectorAll("[data-jump]").forEach((button) =>
  button.addEventListener("click", () => jump(button.dataset.jump))
);

function setContactBubble(open) {
  contactWidget.classList.toggle("open", open);
  contactToggle.setAttribute("aria-expanded", String(open));
  contactToggle.setAttribute("aria-label", open ? "Close contact" : "Open contact");
  contactBubble.setAttribute("aria-hidden", String(!open));
}

contactToggle.addEventListener("click", () =>
  setContactBubble(!contactWidget.classList.contains("open"))
);
document.addEventListener("click", (event) => {
  if (!contactWidget.contains(event.target)) setContactBubble(false);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setContactBubble(false);
});

const galleryPlayers = [];
const galleryAutoplay = window.matchMedia(
  "(min-width: 761px) and (pointer: fine)"
);

document.querySelectorAll(".gallery-viewport").forEach((viewport) => {
  const track = viewport.querySelector(".gallery-track");
  const firstSet = track.querySelector(".gallery-set");
  const galleryElement = viewport.closest(".gallery");
  const previousButton = galleryElement.querySelector(".gallery-prev");
  const nextButton = galleryElement.querySelector(".gallery-next");
  let paused = false;
  let active = false;
  let lastTime = performance.now();
  const speed = 34; // pixels per second

  const setPaused = (value) => {
    paused = value;
    lastTime = performance.now();
  };

  viewport.addEventListener("pointerdown", () => setPaused(true));
  viewport.addEventListener("pointerup", () => setPaused(false));
  viewport.addEventListener("pointercancel", () => setPaused(false));
  viewport.addEventListener("focusin", () => setPaused(true));
  viewport.addEventListener("focusout", () => setPaused(false));

  const moveToImage = (direction) => {
    const figures = [...firstSet.querySelectorAll("figure")];
    const loopWidth = firstSet.offsetWidth;

    if (!figures.length || !loopWidth) return;

    setPaused(true);

    let absolutePosition = viewport.scrollLeft;
    let currentPosition = absolutePosition % loopWidth;

    if (direction < 0 && currentPosition < 8) {
      viewport.scrollLeft += loopWidth;
      absolutePosition += loopWidth;
      currentPosition = 0;
    }

    const positions = figures.map(
      (figure) => figure.offsetLeft - firstSet.offsetLeft
    );
    const targetPosition = direction > 0
      ? positions.find((position) => position > currentPosition + 8) ?? loopWidth + positions[0]
      : [...positions].reverse().find((position) => position < currentPosition - 8) ?? positions[positions.length - 1] - loopWidth;
    const cycleStart = absolutePosition - currentPosition;

    viewport.scrollTo({
      left: cycleStart + targetPosition,
      behavior: "smooth",
    });

    window.setTimeout(() => setPaused(false), 550);
  };

  previousButton.addEventListener("click", () => moveToImage(-1));
  nextButton.addEventListener("click", () => moveToImage(1));

  function animate(time) {
    const elapsed = Math.min(time - lastTime, 50);
    lastTime = time;

    if (active && !paused && galleryAutoplay.matches) {
      viewport.scrollLeft += speed * elapsed / 1000;
      const loopPoint = firstSet.offsetWidth;
      if (loopPoint && viewport.scrollLeft >= loopPoint) {
        viewport.scrollLeft -= loopPoint;
      }
    }

    requestAnimationFrame(animate);
  }

  if (galleryAutoplay.matches) requestAnimationFrame(animate);

  galleryPlayers.push({
    project: viewport.closest(".project"),
    activate(value) {
      active = value;
      lastTime = performance.now();
    },
  });
});

/*
 * Run only the gallery belonging to the current project. A project becomes
 * current when its top is the closest one to the top of the viewport. This
 * works with both the desktop wheel stops and ordinary touch/manual scrolling.
 */
let activeGalleryProject = null;
let galleryScrollFrame = 0;

function updateActiveGallery() {
  galleryScrollFrame = 0;
  const viewportHeight = window.innerHeight;
  const visibleProjects = galleryPlayers
    .map((player) => ({ player, rect: player.project.getBoundingClientRect() }))
    .filter(({ rect }) => rect.bottom > 0 && rect.top < viewportHeight);

  const nextProject = visibleProjects.length
    ? visibleProjects.reduce((closest, item) =>
        Math.abs(item.rect.top) < Math.abs(closest.rect.top) ? item : closest
      ).player.project
    : null;

  if (nextProject === activeGalleryProject) return;
  activeGalleryProject = nextProject;
  galleryPlayers.forEach(({ project, activate }) => activate(project === nextProject));
}

function scheduleActiveGalleryUpdate() {
  if (galleryScrollFrame) return;
  galleryScrollFrame = requestAnimationFrame(updateActiveGallery);
}

updateActiveGallery();
window.addEventListener("scroll", scheduleActiveGalleryUpdate, { passive: true });
window.addEventListener("resize", scheduleActiveGalleryUpdate);

const updateHeader = () => header.classList.toggle("scrolled", window.scrollY > 30);
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

/*
 * Desktop section-by-section scrolling
 *
 * CSS scroll snap feels inactive when a snap target is taller than the
 * viewport (as the portfolio projects are). On desktop, collect one wheel
 * gesture and move to exactly one named stop. Mobile keeps native scrolling.
 */
const desktopWheel = window.matchMedia("(min-width: 761px) and (pointer: fine)");
let wheelTotal = 0;
let wheelLocked = false;
let wheelResetTimer;
let wheelUnlockTimer;
let lockUntil = 0;

const getScrollStops = () => [
  document.querySelector(".hero"),
  document.querySelector(".overview"),
  ...document.querySelectorAll(".discipline-header, .project"),
  document.querySelector(".contact-section"),
  document.querySelector("footer"),
].filter(Boolean);

function closestStopIndex(stops) {
  return stops.reduce((closest, stop, index) =>
    Math.abs(stop.getBoundingClientRect().top) <
    Math.abs(stops[closest].getBoundingClientRect().top)
      ? index
      : closest, 0);
}

function scheduleWheelUnlock() {
  clearTimeout(wheelUnlockTimer);
  const minimumWait = Math.max(0, lockUntil - performance.now());
  wheelUnlockTimer = window.setTimeout(() => {
    wheelLocked = false;
    wheelTotal = 0;
  }, Math.max(240, minimumWait));
}

window.addEventListener("wheel", (event) => {
  if (!desktopWheel.matches || event.ctrlKey || event.metaKey) return;
  if (panel.classList.contains("open")) return;

  // Preserve intentional horizontal trackpad movement in the image gallery.
  if (event.target.closest(".gallery-viewport") && Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
    return;
  }

  event.preventDefault();
  if (wheelLocked) {
    // Keep extending the lock until trackpad/mouse-wheel inertia has stopped.
    // This prevents one gesture from advancing through several projects.
    scheduleWheelUnlock();
    return;
  }
  if (Math.abs(event.deltaY) < Math.abs(event.deltaX)) return;

  wheelTotal += event.deltaY;
  clearTimeout(wheelResetTimer);
  wheelResetTimer = setTimeout(() => { wheelTotal = 0; }, 160);

  if (Math.abs(wheelTotal) < 32) return;

  const stops = getScrollStops();
  const current = closestStopIndex(stops);
  const next = Math.max(0, Math.min(stops.length - 1, current + Math.sign(wheelTotal)));

  wheelTotal = 0;
  if (next === current) return;

  wheelLocked = true;
  lockUntil = performance.now() + 700;
  stops[next].scrollIntoView({ behavior: "smooth", block: "start" });
  scheduleWheelUnlock();
}, { passive: false });
