// Mobile menu
const menuBtn = document.querySelector('.menu-btn');
const navList = document.querySelector('.nav ul');
if (menuBtn) menuBtn.addEventListener('click', () => navList.classList.toggle('open'));
document.querySelectorAll('.nav ul a').forEach(a => a.addEventListener('click', () => navList.classList.remove('open')));

// Reveal on scroll
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Project filters
const filterBtns = document.querySelectorAll('.filters button');
filterBtns.forEach(btn => btn.addEventListener('click', () => {
  filterBtns.forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  const f = btn.dataset.f;
  document.querySelectorAll('.project').forEach(p => {
    p.classList.toggle('hide', f !== 'all' && !p.dataset.cat.split(' ').includes(f));
  });
}));

// Year
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

// Hero background: drifting "GPS trails" — a nod to the fleet telemetry work
const cv = document.getElementById('trails');
if (cv && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const ctx = cv.getContext('2d');
  let W, H, pts = [];
  const resize = () => {
    const r = devicePixelRatio || 1;
    W = cv.clientWidth; H = cv.clientHeight;
    cv.width = W * r; cv.height = H * r; ctx.setTransform(r, 0, 0, r, 0, 0);
  };
  resize(); addEventListener('resize', resize);
  const N = Math.min(46, Math.floor(W / 28));
  for (let i = 0; i < N; i++) pts.push({
    x: Math.random() * W, y: Math.random() * H,
    a: Math.random() * Math.PI * 2, v: .25 + Math.random() * .5,
    c: Math.random() < .22 ? '255,138,61' : '61,214,198', trail: []
  });
  const tick = () => {
    ctx.clearRect(0, 0, W, H);
    for (const p of pts) {
      p.a += (Math.random() - .5) * .12;
      p.x += Math.cos(p.a) * p.v; p.y += Math.sin(p.a) * p.v;
      if (p.x < -20) p.x = W + 20; if (p.x > W + 20) p.x = -20;
      if (p.y < -20) p.y = H + 20; if (p.y > H + 20) p.y = -20;
      p.trail.push([p.x, p.y]); if (p.trail.length > 60) p.trail.shift();
      ctx.beginPath();
      for (let i = 1; i < p.trail.length; i++) {
        const [x0, y0] = p.trail[i - 1], [x1, y1] = p.trail[i];
        if (Math.abs(x1 - x0) > 50 || Math.abs(y1 - y0) > 50) { ctx.moveTo(x1, y1); continue; }
        ctx.lineTo(x1, y1);
      }
      ctx.strokeStyle = `rgba(${p.c},.18)`; ctx.lineWidth = 1.2; ctx.stroke();
      ctx.beginPath(); ctx.arc(p.x, p.y, 1.8, 0, 7); ctx.fillStyle = `rgba(${p.c},.8)`; ctx.fill();
    }
    requestAnimationFrame(tick);
  };
  tick();
}
