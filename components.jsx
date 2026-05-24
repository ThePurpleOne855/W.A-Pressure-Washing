// Icons — minimal, consistent, 24px strokes
const Icon = {
  Menu: (p) => <svg width={p.size||20} height={p.size||20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
  X: (p) => <svg width={p.size||20} height={p.size||20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  Phone: (p) => <svg width={p.size||18} height={p.size||18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
  Mail: (p) => <svg width={p.size||20} height={p.size||20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  MapPin: (p) => <svg width={p.size||20} height={p.size||20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  Clock: (p) => <svg width={p.size||20} height={p.size||20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  Check: (p) => <svg width={p.size||16} height={p.size||16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  ChevronRight: (p) => <svg width={p.size||16} height={p.size||16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>,
  ChevronLeft: (p) => <svg width={p.size||16} height={p.size||16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>,
  ArrowRight: (p) => <svg width={p.size||16} height={p.size||16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
  Star: (p) => <svg width={p.size||16} height={p.size||16} viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"/></svg>,
  SlidersH: (p) => <svg width={p.size||22} height={p.size||22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 3 12 9 6"/><polyline points="15 6 21 12 15 18"/></svg>,
  Shield: (p) => <svg width={p.size||22} height={p.size||22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  Leaf: (p) => <svg width={p.size||22} height={p.size||22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 22c1.5-1 3-2 5-2 4 0 8-4 8-10V3s-2 2-7 2-7 4-7 7c0 2 1 4 3 5"/><path d="M6 22c4-6 8-9 13-9"/></svg>,
  Heart: (p) => <svg width={p.size||22} height={p.size||22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
  Zap: (p) => <svg width={p.size||22} height={p.size||22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  Home: (p) => <svg width={p.size||26} height={p.size||26} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12L12 3l9 9"/><path d="M5 10v10a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V10"/></svg>,
  Road: (p) => <svg width={p.size||26} height={p.size||26} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22L9 2"/><path d="M20 22L15 2"/><line x1="12" y1="6" x2="12" y2="8"/><line x1="12" y1="12" x2="12" y2="14"/><line x1="12" y1="18" x2="12" y2="20"/></svg>,
  Deck: (p) => <svg width={p.size||26} height={p.size||26} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="8" width="20" height="12" rx="1"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="16" x2="22" y2="16"/><line x1="7" y1="4" x2="7" y2="8"/><line x1="17" y1="4" x2="17" y2="8"/></svg>,
  Droplet: (p) => <svg width={p.size||22} height={p.size||22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>,
  Award: (p) => <svg width={p.size||22} height={p.size||22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>,
  Facebook: (p) => <svg width={p.size||16} height={p.size||16} viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>,
  Instagram: (p) => <svg width={p.size||16} height={p.size||16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
  Google: (p) => <svg width={p.size||16} height={p.size||16} viewBox="0 0 24 24" fill="currentColor"><path d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81z"/></svg>,
};

// ============ NAV ============
function Nav({ page, goto }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn, { passive: true });
    fn();
    return () => window.removeEventListener('scroll', fn);
  }, []);
  const links = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];
  const handleNav = (id) => { setOpen(false); goto(id); };
  return (
    <React.Fragment>
      <nav className={'nav' + (scrolled ? ' scrolled' : '')}>
        <div className="container nav-inner">
          <a className="logo" onClick={() => goto('home')} style={{cursor:'pointer'}}>
            <span className="logo-mark"><img src="assets/wa-icon-v2.png" alt="W.A Pressure Washing" /></span>
            <span>
              W.A Pressure Washing
              <span className="logo-sub" style={{display:'block', marginTop:1}}>Kissimmee · FL</span>
            </span>
          </a>
          <div className="nav-links">
            {links.map(l => (
              <a key={l.id} className={'nav-link' + (page === l.id ? ' active' : '')} onClick={() => handleNav(l.id)} style={{cursor:'pointer'}}>{l.label}</a>
            ))}
          </div>
          <div className="nav-cta-group">
            <a className="phone-pill" href="tel:+14076841194">
              <Icon.Phone size={15} />
              <span>(407) 684-1194</span>
            </a>
            <span className="nav-divider" aria-hidden="true" />
            <button className="btn btn-primary btn-sm" onClick={() => goto('quote')}>Get a Free Quote</button>
            <button className="hamburger" onClick={() => setOpen(o => !o)} aria-label="Menu">
              {open ? <Icon.X /> : <Icon.Menu />}
            </button>
          </div>
        </div>
      </nav>
      <div className={'mobile-drawer' + (open ? ' open' : '')}>
        {links.map(l => (
          <a key={l.id} className={page === l.id ? 'active' : ''} onClick={() => handleNav(l.id)} style={{cursor:'pointer'}}>{l.label}</a>
        ))}
        <a onClick={() => handleNav('quote')} style={{cursor:'pointer', color:'var(--blue-500)', fontWeight:700}}>Get a Free Quote →</a>
      </div>
    </React.Fragment>
  );
}

// ============ SERVICE REFERENCE MEDIA ============
function serviceMediaUrl(kind, file) {
  const base = (window.SERVICE_REFERENCE_MEDIA && window.SERVICE_REFERENCE_MEDIA.basePath) || 'assets/service-reference';
  const folder = kind === 'video' ? 'videos' : 'images';
  return `${base}/${folder}/${encodeURIComponent(file)}`;
}

function useServiceReferenceMedia() {
  return window.SERVICE_REFERENCE_MEDIA || { images: [], videos: [], featured: { images: [], videos: [] } };
}

function JobPhoto({ file, className = '' }) {
  const src = serviceMediaUrl('image', file);
  const label = file.replace(/\.[^.]+$/, '').replace(/[_-]+/g, ' ');
  return (
    <figure className={'job-photo ' + className}>
      <img src={src} alt={'Pressure washing job — ' + label} loading="lazy" decoding="async" />
    </figure>
  );
}

function JobVideo({ file }) {
  const src = serviceMediaUrl('video', file);
  const label = file.replace(/\.[^.]+$/, '').replace(/[_-]+/g, ' ');
  return (
    <figure className="job-video">
      <video
        src={src}
        controls
        playsInline
        preload="metadata"
        aria-label={'Job footage — ' + label}
      />
    </figure>
  );
}

function RealWorkPhotos({ files, limit }) {
  const list = (files || []).slice(0, limit || files.length);
  if (!list.length) return null;
  return (
    <div className="job-photo-grid">
      {list.map(f => <JobPhoto key={f} file={f} />)}
    </div>
  );
}

function RealWorkVideos({ files, limit }) {
  const list = (files || []).slice(0, limit || files.length);
  if (!list.length) return null;
  return (
    <div className="job-video-grid">
      {list.map(f => <JobVideo key={f} file={f} />)}
    </div>
  );
}

// ============ BEFORE/AFTER SLIDER ============
function BeforeAfter({ scene, beforeSrc, afterSrc, caption, meta, beforeAlt, afterAlt }) {
  const [pos, setPos] = React.useState(50);
  const ref = React.useRef(null);
  const dragging = React.useRef(false);

  const update = (clientX) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };

  const onMove = (e) => {
    if (!dragging.current) return;
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    update(x);
  };
  const onUp = () => { dragging.current = false; document.body.style.userSelect = ''; };
  const onDown = (e) => {
    dragging.current = true;
    document.body.style.userSelect = 'none';
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    update(x);
  };

  React.useEffect(() => {
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchmove', onMove, { passive: true });
    window.addEventListener('touchend', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onUp);
    };
  }, []);

  const SceneCmp = SCENES[scene] || SCENES.driveway;
  const usePhotos = beforeSrc && afterSrc;

  return (
    <div>
      <div
        className={'ba-wrapper' + (usePhotos ? ' ba-wrapper--photo' : '')}
        ref={ref}
        onMouseDown={onDown}
        onTouchStart={onDown}
        style={{ '--pos': pos + '%', cursor: 'ew-resize' }}
      >
        <div className="ba-layer before">
          {usePhotos ? (
            <img className="ba-photo" src={beforeSrc} alt={beforeAlt || 'Before pressure washing'} draggable={false} />
          ) : (
            <SceneCmp state="dirty" />
          )}
        </div>
        <div className="ba-layer after" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
          {usePhotos ? (
            <img className="ba-photo" src={afterSrc} alt={afterAlt || 'After pressure washing'} draggable={false} />
          ) : (
            <SceneCmp state="clean" />
          )}
        </div>
        <span className="ba-label before">Before</span>
        <span className="ba-label after">After</span>
        <div className="ba-handle" style={{ left: pos + '%' }} />
        <div className="ba-knob" style={{ left: pos + '%' }}>
          <Icon.SlidersH size={18} />
        </div>
      </div>
      {(caption || meta) && (
        <div className="ba-caption">
          <span className="title">{caption}</span>
          <span className="meta">{meta}</span>
        </div>
      )}
    </div>
  );
}

// Scenes — CSS-rendered stylized before/after
const SCENES = {
  driveway: ({ state }) => (
    <div className={'scene scene-driveway ' + state}>
      <div className="sky"></div>
      <div className="ground"></div>
      <div className="house"></div>
      <div className="roof"></div>
      <div className="window-1"></div>
      <div className="window-2"></div>
      <div className="tree"></div>
      <div className="grime-spot g1"></div>
      <div className="grime-spot g2"></div>
    </div>
  ),
  siding: ({ state }) => (
    <div className={'scene scene-siding ' + state}>
      <div className="streak s1"></div>
      <div className="streak s2"></div>
      <div className="streak s3"></div>
      <div className="streak s4"></div>
      <div className="window-sash w1"></div>
      <div className="window-sash w2"></div>
    </div>
  ),
  deck: ({ state }) => (
    <div className={'scene scene-deck ' + state}>
      <div className="rail"></div>
      <div className="post p1"></div>
      <div className="post p2"></div>
      <div className="post p3"></div>
      <div className="leaf l1"></div>
      <div className="leaf l2"></div>
      <div className="leaf l3"></div>
    </div>
  ),
};

// ============ SERVICE CARD ============
function ServiceCard({ icon, title, desc, priceFrom, onClick }) {
  return (
    <div className="service-card" onClick={onClick} style={{cursor:'pointer'}}>
      <div className="service-icon-wrap">{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <div className="price-from">
        <span className="label">Starting at</span>
        <span className="amount">${priceFrom}</span>
      </div>
      <p className="price-note">Final price depends on area size, surface condition, and job complexity.</p>
      <a className="learn">Learn more <Icon.ArrowRight size={14} /></a>
    </div>
  );
}

// ============ TESTIMONIAL CAROUSEL ============
function Testimonials() {
  const [idx, setIdx] = React.useState(0);
  const items = [
    { name: 'Marcus T.', area: 'Poinciana, FL', stars: 5, quote: '"Wade and his crew transformed our driveway — we honestly thought we\'d need to repour the concrete. Five-star service, showed up on time, cleaned up after. Can\'t recommend them enough."' },
    { name: 'Priya S.', area: 'Celebration, FL', stars: 5, quote: '"Our house looked brand new the moment they were done. No high-pressure tactics on the quote, super honest pricing, and they even washed our front patio without me asking. Just good folks."' },
    { name: 'Jonah R.', area: 'Buenaventura Lakes', stars: 5, quote: '"Got three quotes before picking W.A — they weren\'t the cheapest but they spent 20 minutes walking the property with me before quoting. That\'s when I knew. Worth every dollar."' },
    { name: 'Elena M.', area: 'Kissimmee, FL', stars: 5, quote: '"Had them do the pool deck and fence together. The wood looks like we just stained it. They use soft-wash on anything that needs it, which matters when your HOA is picky."' },
    { name: 'Trevor B.', area: 'St. Cloud, FL', stars: 5, quote: '"Third year in a row using them for annual house wash. Same guys every time, which tells you they treat their people right. My kids wave at the truck now."' },
  ];
  const max = items.length - 3;
  const clamp = (n) => Math.max(0, Math.min(max, n));
  React.useEffect(() => {
    const onResize = () => setIdx(i => Math.max(0, Math.min(max, i)));
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return (
    <div>
      <div className="t-viewport">
        <div className="t-track" style={{ transform: `translateX(calc(${-idx} * (100% / 3) - ${idx} * 8px))` }}>
          {items.map((t, i) => (
            <article key={i} className="t-card">
              <div className="t-stars">
                {Array.from({length: t.stars}).map((_, s) => <Icon.Star key={s} size={14} />)}
              </div>
              <p className="t-quote">{t.quote}</p>
              <div className="t-author">
                <div className="t-avatar">{t.name.split(' ').map(n=>n[0]).join('')}</div>
                <div>
                  <div className="t-name">{t.name}</div>
                  <div className="t-meta">{t.area} · Verified review</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="t-controls">
        <div className="t-dots">
          {Array.from({length: max + 1}).map((_, i) => (
            <button key={i} className={'t-dot' + (i === idx ? ' active' : '')} onClick={() => setIdx(i)} aria-label={`Go to slide ${i+1}`} />
          ))}
        </div>
        <div className="t-arrows">
          <button className="t-arrow" onClick={() => setIdx(i => clamp(i-1))} disabled={idx === 0}><Icon.ChevronLeft size={18} /></button>
          <button className="t-arrow" onClick={() => setIdx(i => clamp(i+1))} disabled={idx === max}><Icon.ChevronRight size={18} /></button>
        </div>
      </div>
    </div>
  );
}

// ============ FOOTER ============
function Footer({ goto }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand footer-col">
            <div className="logo" style={{color:'white'}}>
              <span className="logo-mark"><img src="assets/wa-icon-v2.png" alt="W.A" /></span>
              <span style={{color:'white'}}>W.A Pressure Washing</span>
            </div>
            <p>Family-owned, fully insured, and proudly serving Osceola County. We show up on time, treat your home like ours, and leave everything cleaner than we found it.</p>
            <div className="social">
              <a href="#" aria-label="Facebook"><Icon.Facebook /></a>
              <a href="#" aria-label="Instagram"><Icon.Instagram /></a>
              <a href="#" aria-label="Google"><Icon.Google /></a>
            </div>
          </div>
          <div className="footer-col">
            <h5>Services</h5>
            <a onClick={() => goto('services')} style={{cursor:'pointer'}}>House Washing</a>
            <a onClick={() => goto('services')} style={{cursor:'pointer'}}>Driveway & Sidewalk</a>
            <a onClick={() => goto('services')} style={{cursor:'pointer'}}>Deck & Fence</a>
            <a onClick={() => goto('services')} style={{cursor:'pointer'}}>All Services</a>
          </div>
          <div className="footer-col">
            <h5>Service Areas</h5>
            <a>Kissimmee</a>
            <a>Celebration</a>
            <a>St. Cloud</a>
            <a>Poinciana</a>
            <a>Buenaventura Lakes</a>
          </div>
          <div className="footer-col">
            <h5>Contact</h5>
            <a href="tel:+14076841194">(407) 684-1194</a>
            <a href="mailto:lucasaragon602@gmail.com">lucasaragon602@gmail.com</a>
            <a>Mon–Sat · 7am–6pm</a>
            <a onClick={() => goto('quote')} style={{cursor:'pointer', color:'var(--blue-400)', fontWeight:600}}>Get a Free Quote →</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 W.A Pressure Washing LLC · Licensed & Insured in FL</span>
          <span>Built with care in Kissimmee, FL</span>
        </div>
      </div>
    </footer>
  );
}

// ============ FLOATING CTA ============
function FloatingCTA({ goto, page }) {
  // Hide on quote page
  if (page === 'quote') return null;
  return (
    <button className="float-cta" onClick={() => goto('quote')}>
      <Icon.Droplet size={18} />
      Get a Free Quote
    </button>
  );
}

// Share to window
Object.assign(window, {
  Icon, Nav, BeforeAfter, SCENES, ServiceCard, Testimonials, Footer, FloatingCTA,
  useServiceReferenceMedia, JobPhoto, JobVideo, RealWorkPhotos, RealWorkVideos,
});
