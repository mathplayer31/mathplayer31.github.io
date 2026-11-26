// Animations au scroll. Chaque bloc ne s'active que si ses éléments sont sur la page.
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const clamp = (v: number, a = 0, b = 1) => Math.max(a, Math.min(b, v));
const $ = <T extends Element = HTMLElement>(s: string) => document.querySelector<T & HTMLElement>(s);
const $$ = (s: string) => [...document.querySelectorAll<HTMLElement>(s)];

requestAnimationFrame(() => document.body.classList.add('loaded'));

const io = new IntersectionObserver(
  (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }),
  { threshold: 0.2 },
);
$$('[data-reveal]').forEach((el) => io.observe(el));

const fmt = (n: number) => n.toLocaleString(document.documentElement.lang);
const co = new IntersectionObserver(
  (es) => es.forEach((e) => {
    if (!e.isIntersecting) return;
    co.unobserve(e.target);
    const el = e.target as HTMLElement, end = Number(el.dataset.count), t0 = performance.now();
    if (reduce) { el.textContent = fmt(end); return; }
    const tick = (t: number) => {
      const k = Math.min(1, (t - t0) / 1400);
      el.textContent = fmt(Math.round(end * (1 - Math.pow(1 - k, 3))));
      if (k < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }),
  { threshold: 0.6 },
);
$$('[data-count]').forEach((el) => co.observe(el));

const nav = $('.nav'), heroInner = $('.hero-inner'), about = $('.about-text');
const words = about ? $$('.about-text .wd') : [];
const feature = $('.feature'), steps = $$('.step'), scrs = $$('.scr'), bars = $$('.progress b'), phone = $('.feature .phone');
const tl = $('.timeline');

function onScroll() {
  const vh = innerHeight, y = scrollY;
  nav?.classList.toggle('scrolled', y > 20);
  if (heroInner && !reduce) {
    const k = clamp(y / vh);
    heroInner.style.transform = `translateY(${k * -60}px) scale(${1 - k * 0.05})`;
    heroInner.style.opacity = String(1 - k * 1.1);
  }
  if (about) {
    const r = about.getBoundingClientRect(), p = reduce ? 1 : clamp((vh * 0.85 - r.top) / (r.height + vh * 0.35));
    words.forEach((w, i) => w.classList.toggle('on', i < p * words.length));
  }
  if (feature && steps.length) {
    const fr = feature.getBoundingClientRect(), fp = clamp(-fr.top / (fr.height - vh));
    const idx = Math.min(steps.length - 1, Math.floor(fp * steps.length));
    steps.forEach((s, i) => s.classList.toggle('on', i === idx));
    scrs.forEach((s, i) => s.classList.toggle('on', i === idx));
    bars.forEach((b, i) => b.style.setProperty('--f', String(clamp(fp * steps.length - i))));
    if (phone && !reduce) {
      phone.style.setProperty('--r', String((1 - clamp(fp * 4)) * 14));
      phone.style.setProperty('--y', String((fp - 0.5) * -30));
    }
  }
  if (tl) {
    const tr = tl.getBoundingClientRect();
    tl.style.setProperty('--p', String(reduce ? 1 : clamp((vh * 0.7 - tr.top) / tr.height)));
  }
}
addEventListener('scroll', onScroll, { passive: true });
addEventListener('resize', onScroll);
onScroll();
