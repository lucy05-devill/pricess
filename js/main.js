(() => {
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
const ic = (n, c = '') => `<svg class="ic ${c}" aria-hidden="true"><use href="#${n}"/></svg>`;

/* ---------- reusable components ---------- */
const pol = (id, cap, r = 0, tape = '', cls = '') => { const p = PH[id];
  return `<figure class="pol ${cls}" style="--r:${r}deg"><span class="tape ${tape}"></span><button class="ph" data-lb="${id}" data-cap="${cap}" aria-label="Open photo: ${cap}"><img src="${p.s}" width="${p.w}" height="${p.h}" alt="${cap}" loading="lazy" decoding="async"></button><figcaption>${cap}</figcaption></figure>`; };
const rv = (k, kind = '') => { const n = T.notes[k];
  const label = kind === 'env' ? `<span class="mail">${ic('h')}</span><span><b>${n.btn}</b><small>${n.sub}</small></span>` : `<span>${n.btn}</span>`;
  return `<div class="rv ${kind}"><button class="rbtn" data-reveal="${k}" aria-expanded="false" aria-controls="n-${k}">${label}</button>${note(k)}</div>`; };
const note = k => { const n = T.notes[k];
  return `<article class="note" id="n-${k}" hidden>${n.t ? `<h4>${n.t}</h4>` : ''}${n.b.map(x => x[0] === '★' ? `<p class="vow">${x.slice(1)}</p>` : `<p>${x}</p>`).join('')}</article>`; };
const head = i => `<header class="ch"><span class="k">Chapter ${i + 1} of ${T.ch.length}</span><h2>${T.ch[i][0]}</h2><p>${T.ch[i][1]}</p><div class="sp" aria-hidden="true">${ic('s')} ${ic('cr')} ${ic('s')}</div></header>`;
const nxt = i => `<a class="next" href="#c${i + 2}">Agla: ${T.ch[i + 1][0]} ↓</a>`;
const sub = (t, i) => `<h3 class="sub">${ic(i)} ${t} ${ic(i)}</h3>`;

/* ---------- build the scrapbook ---------- */
$('#gt').textContent = T.gate.h;
$('#gp').innerHTML = T.gate.p.map(x => `<p>${x}</p>`).join('');
$('#open').innerHTML = `<span>${T.gate.btn}</span>`;

$('#app').innerHTML = `
<section class="chap" id="c1">${head(0)}
  <div class="one">${pol('n18', 'Princess ka royal page', -3, 't1')}<span class="crwn">${ic('cr')}</span></div>
  <div class="tags"><span>#devi-ji</span><span>#royalvibes</span><span>#meethi-smile</span><span>#photodump</span></div>
  ${rv('welcome')}
  <aside class="card guide"><h3>How this works</h3><ul>${T.guide.map(x => `<li>${x}</li>`).join('')}</ul></aside>
  ${nxt(0)}
</section>

<section class="chap" id="c2">${head(1)}
  <div class="scrap">
    ${pol('n11', 'Ye wali smile. Haan, wahi.', -3, 't1')}${pol('n13', 'Funny face, expert level', 3, 't2')}
    ${pol('n05', 'Deep thinking ya bas aesthetic?', 2, 't3')}
  </div>
  ${rv('tiny1')}${rv('tiny2')}
  ${nxt(1)}
</section>

<section class="chap" id="c3">${head(2)}
  ${sub('Golden Hour ✨', 'f')}
  <div class="edit">${pol('n08', 'Golden hour tumhari fan hai', -1.5, 't2')}${pol('n09', 'Ek pout, poora mood', 2.5, 't1')}${pol('n10', 'Dreamy mode on', -2.5, 't3')}</div>
  ${rv('surprise')}
  ${sub('Quiet Mood', 's')}
  <div class="strip"><button class="ph" data-lb="n14" data-cap="Soch rahi hoon..." aria-label="Open photo"><img src="${PH.n14.s}" width="${PH.n14.w}" height="${PH.n14.h}" alt="Thinking" loading="lazy" decoding="async"></button><button class="ph" data-lb="n15" data-cap="Abhi bhi soch rahi hoon..." aria-label="Open photo"><img src="${PH.n15.s}" width="${PH.n15.w}" height="${PH.n15.h}" alt="Still thinking" loading="lazy" decoding="async"></button><button class="ph" data-lb="n16" data-cap="Okay, soch liya." aria-label="Open photo"><img src="${PH.n16.s}" width="${PH.n16.w}" height="${PH.n16.h}" alt="Done thinking" loading="lazy" decoding="async"></button><p class="cap">Teen frames, ek deep thinker</p></div>
  ${rv('memory')}
  ${sub('Royal Glam 👑', 'f')}
  <div class="wall">${pol('n01', 'Laal rang, full stunner', -2, 't1', 'big')}${pol('o01', 'Green aur gold ka jaadu', 2, 't2', 'big')}</div>
  ${sub('Chhoti Princess 👑', 'b')}
  <div class="cmp" id="cmp" style="--p:50%"><img src="${PH.n11.s}" width="${PH.n11.w}" height="${PH.n11.h}" alt="Ashi aaj" loading="lazy" decoding="async"><img class="then" src="${PH.o06.s}" width="${PH.o06.w}" height="${PH.o06.h}" alt="Chhoti Ashi" loading="lazy" decoding="async"><span class="lbl l1">Bachpan</span><span class="lbl l2">Ab</span><i class="knob" aria-hidden="true">↔</i><input type="range" min="0" max="100" value="50" id="cmpr" aria-label="Bachpan se ab tak slider"></div>
  <p class="swipe">slider ko drag karo: chhoti princess se aaj tak ↔</p>
  <div class="roll" tabindex="0" aria-label="Bachpan ki photos, side mein swipe karo">${pol('o02', 'Chhoti Princess, badi smile', -2, 't1')}${pol('o04', 'Chhatri ready hai!', 2, 't2')}${pol('o06', 'Wo sharmeeli hansi', -2, 't3')}</div>
  <p class="swipe">side mein swipe karo →</p>
  ${rv('little')}
  ${nxt(2)}
</section>

<section class="chap" id="c4">${head(3)}
  ${rv('l1', 'env')}${rv('l2', 'env')}${rv('l3', 'env')}
  <div class="vowcard">${ic('cr')}<p>${VOW}</p><p class="vow2">${VOW2}</p></div>
  ${nxt(3)}
</section>

<section class="chap" id="c5">${head(4)}
  ${['c1', 'c2', 'c3', 'c4', 'c5'].map(k => rv(k)).join('')}
  ${nxt(4)}
</section>

<section class="chap" id="c6">${head(5)}
  <div class="one wide">${pol('food', 'Shahi bhoj, sirf Devi ji ke liye 🍽️', -1.5, 't2')}</div>
  <div class="tags foods"><span>🍚 Rajma Chawal</span><span>🫓 Chole Bhature</span><span>🥟 Momos</span><span>🍮 Rasmalai</span><span>🍔 Burger</span><span>🍕 Pizza</span><span>🥛 Milk</span></div>
  ${rv('bhoj')}
  ${nxt(5)}
</section>

<section class="chap" id="c7">${head(6)}
  <div class="fin" id="fin">
    <p class="lockt" id="lockt"></p>
    <div class="rv"><button class="rbtn" id="finbtn" data-final aria-expanded="false" aria-controls="n-final" disabled><span>${T.notes.final.btn}</span></button>
    ${note('final').replace('</article>', `<p class="sign">${T.from} ♡</p><span class="fl1">${ic('f')}</span><span class="fl2">${ic('f')}</span><span class="bigheart crowned">${ic('cr')}</span></article>`)}</div>
    <div class="end" id="end" hidden>Happy Princess Day, ${T.her}! 👑<br><button id="top">Phir se shuru karo ↑</button></div>
  </div>
</section>`;

$('#dots').innerHTML = T.ch.map((c, i) => `<button data-go="c${i + 1}" aria-label="Chapter ${i + 1}: ${c[0]}"></button>`).join('');

/* ---------- floating hearts ---------- */
if (!calm) { const cols = ['#f7a8bd', '#d9c6f5', '#ffc9b0', '#f2859f'];
  $('#fl').innerHTML = Array.from({ length: 9 }, (_, i) => `<svg class="ic" style="left:${5 + i * 11}%;font-size:${14 + (i % 4) * 7}px;--d:${12 + i * 1.6}s;--w:-${i * 1.7}s;--c:${cols[i % 4]}"><use href="#${['h', 'f', 's'][i % 3]}"/></svg>`).join(''); }
const burst = el => { if (calm) return; const r = el.getBoundingClientRect(), x0 = r.left + r.width / 2, y0 = r.top + r.height / 2;
  for (let i = 0; i < 9; i++) { const b = document.createElement('span'); b.className = 'burst'; b.innerHTML = ic(['h', 'f', 's'][i % 3]);
    b.style.cssText = `left:${x0 - 10}px;top:${y0 - 10}px;--x:${(Math.random() - .5) * 220}px;--y:${-40 - Math.random() * 130}px`; document.body.appendChild(b); setTimeout(() => b.remove(), 1200); } };

/* ---------- progress + reveals ---------- */
const total = $$('[data-reveal]').length, read = new Set();
$('#garden').innerHTML = Array.from({ length: total }, () => ic('f')).join('');
const nextBtn = () => $$('[data-reveal]').find(b => b.getAttribute('aria-expanded') === 'false');
function update() {
  const n = read.size, left = total - n;
  $('#cnt').textContent = `💌 ${n}/${total} padhe`;
  $$('#garden .ic').forEach((f, i) => f.classList.toggle('bloom', i < n));
  const fb = $('#finbtn'), done = fb.getAttribute('aria-expanded') === 'true';
  $('#nextn').textContent = left ? `Agla note kholo 💌 (${left} baaki)` : done ? 'Aakhri chitthi par jao 💗' : 'Aakhri chitthi kholo 💗';
  $('#lockt').textContent = left ? `🔒 Aakhri chitthi tab khulegi jab saare ${total} notes padh loge. Abhi ${left} baaki hain!` : '💗 Sab padh liya! Tumhari aakhri chitthi ready hai.';
  fb.disabled = left > 0;
}
function reveal(b) {
  const k = b.dataset.reveal || 'final', n = $('#n-' + k);
  n.hidden = false; n.classList.add('in'); b.setAttribute('aria-expanded', 'true'); b.classList.add('done');
  burst(b); if (b.dataset.reveal) read.add(k);
  update(); n.scrollIntoView({ behavior: calm ? 'auto' : 'smooth', block: 'nearest' });
  if (b.hasAttribute('data-final')) celebrate();
}
function celebrate() { $('#end').hidden = false; if (calm) return;
  const f = document.createDocumentFragment();
  for (let i = 0; i < 26; i++) { const p = document.createElement('span'); p.className = 'petal'; p.innerHTML = ic(['f', 'h', 'cr', 's'][i % 4]);
    p.style.cssText = `left:${Math.random() * 100}%;font-size:${14 + Math.random() * 14}px;color:${['#f7a8bd', '#e9688f', '#d9c6f5', '#ffd36e'][i % 4]};--d:${4 + Math.random() * 3}s;--w:${Math.random() * 2.5}s;--x:${(Math.random() - .5) * 120}px`; f.appendChild(p); setTimeout(() => p.remove(), 9000); }
  document.body.appendChild(f);
  const bf = document.createElement('span'); bf.className = 'bfly'; bf.innerHTML = ic('bf'); bf.firstChild.style.cssText = 'width:44px;height:44px'; document.body.appendChild(bf); setTimeout(() => bf.remove(), 7500); }

/* ---------- lightbox ---------- */
let list = [], cur = 0, from = null; const lb = $('#lb');
function show() { const b = list[cur]; $('#lbi').src = PH[b.dataset.lb].s; $('#lbi').alt = b.dataset.cap; $('#lbc').textContent = b.dataset.cap; $('#lbn').textContent = `${cur + 1} / ${list.length}`; }
function openLb(b) { list = $$('[data-lb]'); cur = list.indexOf(b); from = b; show(); lb.classList.add('open'); document.body.style.overflow = 'hidden'; $('#lbx').focus(); }
function closeLb() { lb.classList.remove('open'); document.body.style.overflow = ''; from && from.focus(); }
const step = d => { cur = (cur + d + list.length) % list.length; show(); };
$('#lbx').onclick = closeLb; $('#lbp').onclick = () => step(-1); $('#lbn2').onclick = () => step(1);
lb.addEventListener('click', e => { if (e.target === lb || e.target.tagName === 'FIGURE') closeLb(); });
document.addEventListener('keydown', e => { if (!lb.classList.contains('open')) return; if (e.key === 'Escape') closeLb(); if (e.key === 'ArrowLeft') step(-1); if (e.key === 'ArrowRight') step(1); });
let sx = 0; lb.addEventListener('touchstart', e => sx = e.touches[0].clientX, { passive: true });
lb.addEventListener('touchend', e => { const d = e.changedTouches[0].clientX - sx; if (Math.abs(d) > 50) step(d < 0 ? 1 : -1); }, { passive: true });

/* ---------- clicks ---------- */
document.addEventListener('click', e => {
  const r = e.target.closest('[data-reveal],[data-final]'); if (r && !r.disabled && r.getAttribute('aria-expanded') === 'false') return reveal(r);
  const p = e.target.closest('[data-lb]'); if (p) return openLb(p);
  const g = e.target.closest('[data-go]'); if (g) $('#' + g.dataset.go).scrollIntoView({ behavior: calm ? 'auto' : 'smooth' });
});
$('#up').onclick = $('#top').onclick = () => scrollTo({ top: 0, behavior: calm ? 'auto' : 'smooth' });
$('#nextn').onclick = () => { const b = nextBtn() || $('#finbtn'); b.scrollIntoView({ behavior: calm ? 'auto' : 'smooth', block: 'center' });
  b.classList.remove('nudge'); void b.offsetWidth; b.classList.add('nudge'); b.focus({ preventScroll: true }); };

/* ---------- chapter indicator ---------- */
const secs = $$('.chap'), dots = $$('#dots button');
const io = new IntersectionObserver(es => es.forEach(en => { if (!en.isIntersecting) return; const i = secs.indexOf(en.target);
  $('#chl').textContent = `${i + 1}/${T.ch.length} · ${T.ch[i][0]}`; dots.forEach((d, j) => d.classList.toggle('on', j === i)); }), { rootMargin: '-35% 0px -55% 0px' });
secs.forEach(s => io.observe(s));
$('#chl').textContent = `1/${T.ch.length} · ${T.ch[0][0]}`; dots[0].classList.add('on');

/* ---------- open the gate ---------- */
$('#open').onclick = () => { $('#site').hidden = false; $('#dock').hidden = false; document.body.classList.remove('lock'); scrollTo(0, 0);
  const g = $('#gate'); burst($('#open')); g.classList.add('out'); setTimeout(() => g.remove(), 950); };
const cmp = $('#cmp'), cr = $('#cmpr');
const setP = v => { v = Math.max(0, Math.min(100, v)); cmp.style.setProperty('--p', v + '%'); cr.value = v; };
const mv = e => { const r = cmp.getBoundingClientRect(); setP((e.clientX - r.left) / r.width * 100); };
cmp.addEventListener('pointerdown', e => { cmp.setPointerCapture(e.pointerId); mv(e); });
cmp.addEventListener('pointermove', e => { if (cmp.hasPointerCapture(e.pointerId)) mv(e); });
cr.oninput = () => setP(+cr.value);

/* sparkles wherever she taps */
if (!calm) addEventListener('pointerdown', e => { if ($('#site').hidden) return;
  for (let i = 0; i < 4; i++) { const s = document.createElement('span'); s.className = 'trail'; s.innerHTML = ic(['s', 'h', 'f', 's'][i]);
    s.style.cssText = `left:${e.clientX + (Math.random() - .5) * 46}px;top:${e.clientY + (Math.random() - .5) * 46}px`; document.body.appendChild(s); setTimeout(() => s.remove(), 900); } });
update();
})();
