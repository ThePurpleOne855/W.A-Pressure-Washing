// ============ HOME PAGE ============
function HomePage({ goto }) {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">
              <span className="dot"></span>
              Now booking spring cleanings · Kissimmee, FL
            </span>
            <h1>Restore your<br/>property's <em>shine.</em></h1>
            <p className="hero-sub">Friendly, neighborhood pressure washing for homes and small businesses across Osceola County. Soft-wash safe on siding, roofs, and patio furniture — with the grit power where it's needed.</p>
            <div className="hero-ctas">
              <button className="btn btn-primary btn-lg" onClick={() => goto('quote')}>Get a Free Quote <Icon.ArrowRight size={16} /></button>
              <a className="btn btn-ghost btn-lg" href="tel:+14076841194" style={{background:'rgba(255,255,255,0.08)', color:'white', borderColor:'rgba(255,255,255,0.18)'}}>
                <Icon.Phone size={16} /> (407) 684-1194
              </a>
            </div>
            <div className="hero-badges">
              <div className="hero-badge"><Icon.Shield size={16} /> Licensed & Insured</div>
              <div className="hero-badge"><Icon.Star size={14} /> 4.9 average · 320+ reviews</div>
              <div className="hero-badge"><Icon.Leaf size={16} /> Eco-safe detergents</div>
            </div>
          </div>
          <div>
            <BeforeAfter scene="driveway" caption="Driveway & walkway · Poinciana" meta="Drag to compare" />
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="trust-strip">
        <div className="container trust-strip-inner">
          <div className="trust-item"><Icon.Award size={18} /><span>Family-owned since <strong>2014</strong></span></div>
          <div className="trust-item"><Icon.Shield size={18} /><span>$2M liability coverage</span></div>
          <div className="trust-item"><Icon.Check size={18} /><span>Free on-site estimates</span></div>
          <div className="trust-item"><Icon.Clock size={18} /><span>Same-week scheduling</span></div>
          <div className="trust-item"><Icon.Leaf size={18} /><span>Plant & pet safe</span></div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="section-eyebrow">What we do</div>
            <h2>Built for Florida grime.</h2>
            <p>Soft-wash, hot-rinse, and plain old elbow grease — we match the method to your surface so nothing gets chewed up.</p>
          </div>
          <div className="services-grid">
            <ServiceCard
              icon={<Icon.Home size={26} />}
              title="House Washing"
              desc="Soft-wash siding, stucco, brick, and soffits. Removes algae, pollen, and Florida's signature black streaks without damaging paint or plants."
              priceFrom="249"
              onClick={() => goto('services')}
            />
            <ServiceCard
              icon={<Icon.Road size={26} />}
              title="Driveway & Sidewalk"
              desc="Surface cleaner + high-pressure rinse lifts oil stains, tire marks, and ground-in dirt from concrete, pavers, and walkways."
              priceFrom="179"
              onClick={() => goto('services')}
            />
            <ServiceCard
              icon={<Icon.Deck size={26} />}
              title="Deck & Fence"
              desc="Low-pressure wood-safe cleaning restores your deck and fence without raising the grain or stripping stain. Ready for re-seal in 48 hours."
              priceFrom="219"
              onClick={() => goto('services')}
            />
          </div>
          <div style={{textAlign:'center', marginTop:32}}>
            <button className="btn btn-ghost" onClick={() => goto('services')}>See all services <Icon.ArrowRight size={14} /></button>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="section" style={{background:'white', borderTop:'1px solid var(--line)', borderBottom:'1px solid var(--line)'}}>
        <div className="container">
          <div className="section-head">
            <div className="section-eyebrow">Before & After</div>
            <h2>The results speak for themselves.</h2>
            <p>Drag the slider on any photo below. Real jobs from real neighbors — no stock photography.</p>
          </div>
          <div className="gallery-grid">
            <BeforeAfter scene="siding" caption="Two-story vinyl siding" meta="Celebration, FL · Sept '25" />
            <BeforeAfter scene="deck" caption="Cedar deck + railings" meta="St. Cloud, FL · Oct '25" />
          </div>
          <div style={{textAlign:'center', marginTop:40}}>
            <button className="btn btn-navy" onClick={() => goto('gallery')}>Browse the full gallery <Icon.ArrowRight size={14} /></button>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="section-eyebrow">Why neighbors call us</div>
            <h2>Small enough to care, dialed-in enough to deliver.</h2>
          </div>
          <div className="why-grid">
            <div className="why-item">
              <div className="ico"><Icon.Heart size={20} /></div>
              <h4>Family-owned, not franchised</h4>
              <p>Same faces every visit. We answer our own phone, show up when we said we would, and stand by the work.</p>
            </div>
            <div className="why-item">
              <div className="ico"><Icon.Leaf size={20} /></div>
              <h4>Eco-safe by default</h4>
              <p>Biodegradable detergents, careful pre-rinse of your plants, and no runoff into storm drains. Pet-safe.</p>
            </div>
            <div className="why-item">
              <div className="ico"><Icon.Zap size={20} /></div>
              <h4>Right tool, right surface</h4>
              <p>We soft-wash what should be soft-washed. Commercial-grade surface cleaners on flatwork. Never blast your roof.</p>
            </div>
            <div className="why-item">
              <div className="ico"><Icon.Shield size={20} /></div>
              <h4>Fully insured, obviously</h4>
              <p>$2M general liability, workers' comp, and a clean-it-again guarantee if you spot anything we missed.</p>
            </div>
          </div>

          <div className="stats">
            <div className="stat">
              <div className="num">1,840+</div>
              <div className="lbl">Homes cleaned</div>
            </div>
            <div className="stat">
              <div className="num">4.9★</div>
              <div className="lbl">Average rating</div>
            </div>
            <div className="stat">
              <div className="num">12 yrs</div>
              <div className="lbl">Serving Osceola</div>
            </div>
            <div className="stat">
              <div className="num">$0</div>
              <div className="lbl">Estimate fees, ever</div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section testimonials">
        <div className="container">
          <div className="section-head">
            <div className="section-eyebrow">Neighbors talking</div>
            <h2>The word-of-mouth engine.</h2>
            <p>Most of our calls come from the same question: "who washed your house?" Here's what they say after.</p>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="section-sm">
        <div className="container">
          <div className="cta-banner">
            <div>
              <h2>Ready to make your property look new again?</h2>
              <p>Most quotes come back within a few hours. No deposit, no pressure — just a friendly walk-through and an honest number.</p>
            </div>
            <div className="btns">
              <button className="btn btn-white btn-lg" onClick={() => goto('quote')}>Request an Estimate</button>
              <a className="btn btn-lg" href="tel:+14076841194" style={{background:'transparent', color:'white', border:'1px solid rgba(255,255,255,0.4)'}}>
                <Icon.Phone size={16} /> Call (407) 684-1194
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// ============ SERVICES PAGE ============
function ServicesPage({ goto }) {
  const services = [
    {
      icon: <Icon.Home size={56} />,
      title: 'House Washing',
      desc: 'Soft-wash cleaning for vinyl, stucco, brick, Hardie board, and painted wood. Lifts algae, pollen, mildew, and the black streaks Florida humidity creates, without damaging landscaping or finishes.',
      tags: ['Soft-wash safe', 'Vinyl · Stucco · Brick · Hardie', 'Includes soffit & gutter face', 'Plant pre-rinse'],
      price: 249,
    },
    {
      icon: <Icon.Road size={56} />,
      title: 'Driveway & Sidewalk',
      desc: 'Commercial surface cleaner for even, streak-free flatwork. Optional post-treatment seal for pavers. Tackles oil spots, rust stains, and tire marks that a garden hose can\'t touch.',
      tags: ['Concrete · Pavers · Brick', 'Oil & rust spot treatment', 'Optional paver re-sand & seal', 'HOA-compliant'],
      price: 179,
    },
    {
      icon: <Icon.Deck size={56} />,
      title: 'Deck & Fence',
      desc: 'Low-pressure wood-safe wash for cedar, pressure-treated pine, and composite. Removes gray weathering and mildew without raising the grain. Surface ready for stain or seal in ~48 hours.',
      tags: ['Wood-safe pressure', 'Cedar · Pine · Composite', 'Stain-ready in 48 hrs', 'Re-stain add-on available'],
      price: 219,
    },
  ];
  return (
    <main>
      <section className="page-head">
        <div className="container">
          <div className="crumbs">
            <a onClick={() => goto('home')} style={{cursor:'pointer'}}>Home</a>
            <span className="sep">/</span>
            <span>Services</span>
          </div>
          <h1>Every surface, the right way.</h1>
          <p>We don't sell a "package." We match pressure, chemistry, and time-on-surface to what you actually have — so the job is done right the first time and nothing gets damaged along the way.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="svc-detail-list">
            {services.map((s, i) => (
              <div className="svc-detail" key={i}>
                <div className="visual">{s.icon}</div>
                <div>
                  <h3>{s.title}</h3>
                  <p className="desc">{s.desc}</p>
                  <ul>
                    {s.tags.map((t, j) => <li key={j}>{t}</li>)}
                  </ul>
                </div>
                <div className="side">
                  <div className="price"><span className="lbl">Starting at</span>${s.price}</div>
                  <button className="btn btn-primary" onClick={() => goto('quote')}>Get a Quote <Icon.ArrowRight size={14} /></button>
                </div>
              </div>
            ))}
          </div>

          <div style={{marginTop: 48, background: 'white', border: '1px solid var(--line)', borderRadius: 16, padding: 36}}>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:32, alignItems:'center'}} className="faq-shell">
              <div>
                <div className="section-eyebrow">Common questions</div>
                <h3 style={{fontSize:26, fontWeight:800, marginTop:8, letterSpacing:'-0.02em'}}>Answers before you have to ask.</h3>
                <p style={{color:'var(--ink-500)', fontSize:15, marginTop:10}}>Didn't see yours? Give us a call — no call center, just us.</p>
              </div>
              <div style={{display:'grid', gap:12}}>
                {[
                  { q: 'Do I need to be home?', a: 'Not unless you want to be. We just need an outdoor water spigot and gate access.' },
                  { q: 'Will it kill my plants?', a: 'Nope. We pre-rinse all landscaping and use biodegradable detergents. Pets are safe to return 30 min after.' },
                  { q: 'How long does it take?', a: 'Most single-family homes are a 2–4 hour job. Larger properties or full exterior packages run longer.' },
                  { q: 'Do you offer recurring service?', a: 'Yes — annual or semi-annual house washes are 15% off with a standing appointment.' },
                ].map((f, i) => (
                  <details key={i} style={{background:'var(--paper)', border:'1px solid var(--line)', borderRadius:10, padding:'14px 16px'}}>
                    <summary style={{fontFamily:'var(--font-head)', fontWeight:700, fontSize:15, cursor:'pointer', color:'var(--navy-900)'}}>{f.q}</summary>
                    <p style={{marginTop:8, color:'var(--ink-500)', fontSize:14.5, lineHeight:1.6}}>{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div className="cta-banner">
            <div>
              <h2>Not sure which service fits?</h2>
              <p>Tell us a bit about your property and we'll recommend the right approach — no upsells.</p>
            </div>
            <div className="btns">
              <button className="btn btn-white btn-lg" onClick={() => goto('quote')}>Start a Free Quote</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// ============ GALLERY PAGE ============
function GalleryPage({ goto }) {
  const [filter, setFilter] = React.useState('all');
  const items = [
    { id: 1, cat: 'driveway', scene: 'driveway', caption: 'Driveway & walkway', meta: 'Poinciana · Sept \'25' },
    { id: 2, cat: 'house', scene: 'siding', caption: 'Two-story vinyl siding', meta: 'Celebration · Sept \'25' },
    { id: 3, cat: 'deck', scene: 'deck', caption: 'Cedar deck + railings', meta: 'St. Cloud · Oct \'25' },
    { id: 4, cat: 'driveway', scene: 'driveway', caption: 'Paver driveway + apron', meta: 'Buenaventura Lakes · Oct \'25' },
    { id: 5, cat: 'house', scene: 'siding', caption: 'Stucco front elevation', meta: 'Kissimmee · Nov \'25' },
    { id: 6, cat: 'deck', scene: 'deck', caption: 'Pine privacy fence run', meta: 'St. Cloud · Nov \'25' },
  ];
  const filtered = filter === 'all' ? items : items.filter(i => i.cat === filter);
  const filters = [
    { id: 'all', label: 'All Work' },
    { id: 'house', label: 'House Washing' },
    { id: 'driveway', label: 'Driveway & Sidewalk' },
    { id: 'deck', label: 'Deck & Fence' },
  ];
  return (
    <main>
      <section className="page-head">
        <div className="container">
          <div className="crumbs">
            <a onClick={() => goto('home')} style={{cursor:'pointer'}}>Home</a>
            <span className="sep">/</span>
            <span>Gallery</span>
          </div>
          <h1>Before & after, drag to compare.</h1>
          <p>Every photo is a real job from a real Osceola County neighbor. Grab the slider and see the difference.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="filter-row">
            {filters.map(f => (
              <button key={f.id} className={'filter-pill' + (filter === f.id ? ' active' : '')} onClick={() => setFilter(f.id)}>{f.label}</button>
            ))}
          </div>
          <div className="gallery-grid">
            {filtered.map(it => (
              <BeforeAfter key={it.id} scene={it.scene} caption={it.caption} meta={it.meta} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div className="cta-banner">
            <div>
              <h2>Want your place on this wall?</h2>
              <p>Book a free estimate and join the neighborhood showcase.</p>
            </div>
            <div className="btns">
              <button className="btn btn-white btn-lg" onClick={() => goto('quote')}>Get a Free Quote</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// ============ CONTACT PAGE ============
function ContactPage({ goto }) {
  const [form, setForm] = React.useState({ name: '', phone: '', email: '', service: 'House Washing', msg: '' });
  const [errs, setErrs] = React.useState({});
  const [sent, setSent] = React.useState(false);

  const update = (k, v) => setForm(f => ({...f, [k]: v}));

  const submit = (e) => {
    e.preventDefault();
    const n = {};
    if (!form.name.trim()) n.name = 'Please enter your name';
    if (!form.phone.trim()) n.phone = 'We need a way to reach you';
    if (form.email && !/^[^@]+@[^@]+\.[^@]+$/.test(form.email)) n.email = 'Check this email';
    setErrs(n);
    if (Object.keys(n).length === 0) setSent(true);
  };

  return (
    <main>
      <section className="page-head">
        <div className="container">
          <div className="crumbs">
            <a onClick={() => goto('home')} style={{cursor:'pointer'}}>Home</a>
            <span className="sep">/</span>
            <span>Contact</span>
          </div>
          <h1>Say hello.</h1>
          <p>We answer our own phone. No call center, no gatekeeper — just Wade or Abbie on the other end.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Get in touch</h3>
              <div className="info-list">
                <div className="info-item">
                  <div className="ico"><Icon.Phone size={18} /></div>
                  <div>
                    <div className="lbl">Call or text</div>
                    <div className="val">(407) 684-1194</div>
                    <div className="note">Usually answered within a ring or two</div>
                  </div>
                </div>
                <div className="info-item">
                  <div className="ico"><Icon.Mail size={18} /></div>
                  <div>
                    <div className="lbl">Email</div>
                    <div className="val">lucasaragon602@gmail.com</div>
                    <div className="note">Same-day replies Mon–Sat</div>
                  </div>
                </div>
                <div className="info-item">
                  <div className="ico"><Icon.MapPin size={18} /></div>
                  <div>
                    <div className="lbl">Service area</div>
                    <div className="val">Osceola County, FL</div>
                    <div className="note">Kissimmee · Celebration · St. Cloud · Poinciana · BVL</div>
                  </div>
                </div>
                <div className="info-item">
                  <div className="ico"><Icon.Clock size={18} /></div>
                  <div>
                    <div className="lbl">Hours</div>
                    <div className="val">Mon–Sat · 7am – 6pm</div>
                    <div className="note">Closed Sundays. Emergencies — just call.</div>
                  </div>
                </div>
              </div>
              <div className="map-placeholder">
                <svg className="map-pin" width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>
                <div className="map-label">Kissimmee, FL</div>
              </div>
            </div>

            {sent ? (
              <div className="form-card">
                <div className="success-state" style={{padding:'32px 8px'}}>
                  <div className="success-check"><Icon.Check size={32} /></div>
                  <h3>Message received!</h3>
                  <p>Thanks, {form.name.split(' ')[0]}. We'll get back to you within a few hours — usually faster.</p>
                  <button className="btn btn-ghost" style={{marginTop:20}} onClick={() => { setSent(false); setForm({ name: '', phone: '', email: '', service: 'House Washing', msg: '' }); }}>Send another</button>
                </div>
              </div>
            ) : (
              <form className="form-card" onSubmit={submit} noValidate>
                <h3>Send us a note</h3>
                <p className="sub">We'll get back to you within a few hours, usually faster.</p>
                <div className="form-fields">
                  <div className="form-row">
                    <div className={'field' + (errs.name ? ' error' : '')}>
                      <label>Name</label>
                      <input type="text" value={form.name} onChange={e => update('name', e.target.value)} placeholder="First & last" />
                      {errs.name && <span className="err">{errs.name}</span>}
                    </div>
                    <div className={'field' + (errs.phone ? ' error' : '')}>
                      <label>Phone</label>
                      <input type="tel" value={form.phone} onChange={e => update('phone', e.target.value)} placeholder="(407) ..." />
                      {errs.phone && <span className="err">{errs.phone}</span>}
                    </div>
                  </div>
                  <div className={'field' + (errs.email ? ' error' : '')}>
                    <label>Email <span style={{color:'var(--ink-400)', fontWeight:400}}>(optional)</span></label>
                    <input type="email" value={form.email} onChange={e => update('email', e.target.value)} placeholder="you@address.com" />
                    {errs.email && <span className="err">{errs.email}</span>}
                  </div>
                  <div className="field">
                    <label>Service of interest</label>
                    <select value={form.service} onChange={e => update('service', e.target.value)}>
                      <option>House Washing</option>
                      <option>Driveway & Sidewalk</option>
                      <option>Deck & Fence</option>
                      <option>Multiple / Not sure</option>
                    </select>
                  </div>
                  <div className="field">
                    <label>Anything we should know?</label>
                    <textarea value={form.msg} onChange={e => update('msg', e.target.value)} placeholder="Square footage, trouble spots, preferred dates — whatever's useful." />
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg" style={{width:'100%'}}>Send message <Icon.ArrowRight size={16} /></button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

// ============ QUOTE FLOW ============
function QuotePage({ goto }) {
  const [step, setStep] = React.useState(0);
  const [data, setData] = React.useState({
    services: [],
    propertyType: '',
    sqft: '',
    addons: [],
    name: '',
    phone: '',
    email: '',
    address: '',
    preferredDate: '',
    notes: '',
  });
  const [errs, setErrs] = React.useState({});

  const update = (k, v) => setData(d => ({...d, [k]: v}));
  const toggle = (k, v) => setData(d => ({
    ...d,
    [k]: d[k].includes(v) ? d[k].filter(x => x !== v) : [...d[k], v],
  }));

  const steps = ['Services', 'Property', 'Contact', 'Review'];

  const validateStep = (s) => {
    const n = {};
    if (s === 0 && data.services.length === 0) n.services = 'Pick at least one service';
    if (s === 1) {
      if (!data.propertyType) n.propertyType = 'Select property type';
      if (!data.sqft) n.sqft = 'Approximate size helps us quote accurately';
    }
    if (s === 2) {
      if (!data.name.trim()) n.name = 'Please enter your name';
      if (!data.phone.trim()) n.phone = 'Phone required';
      if (!data.address.trim()) n.address = 'Service address required';
    }
    setErrs(n);
    return Object.keys(n).length === 0;
  };

  const next = () => { if (validateStep(step)) setStep(s => Math.min(steps.length, s + 1)); };
  const back = () => setStep(s => Math.max(0, s - 1));

  // Rough estimate
  const basePrices = { 'House Washing': 249, 'Driveway & Sidewalk': 179, 'Deck & Fence': 219 };
  const sqftMult = { 'Under 1,500': 1, '1,500–2,500': 1.25, '2,500–3,500': 1.55, '3,500+': 2.0 };
  const addonPrice = { 'Gutter face cleaning': 80, 'Paver re-sand & seal': 220, 'Annual maintenance plan (–15%)': 0 };
  const estimate = React.useMemo(() => {
    const svcTotal = data.services.reduce((sum, s) => sum + (basePrices[s] || 0), 0);
    const mult = sqftMult[data.sqft] || 1;
    const addons = data.addons.reduce((sum, a) => sum + (addonPrice[a] || 0), 0);
    let total = svcTotal * mult + addons;
    if (data.addons.includes('Annual maintenance plan (–15%)')) total *= 0.85;
    const low = Math.round(total * 0.9 / 10) * 10;
    const high = Math.round(total * 1.15 / 10) * 10;
    return { low, high };
  }, [data.services, data.sqft, data.addons]);

  if (step === steps.length) {
    return (
      <main>
        <section className="page-head">
          <div className="container">
            <h1>Quote submitted.</h1>
            <p>We'll reach out shortly with a finalized number and available dates.</p>
          </div>
        </section>
        <section className="section">
          <div className="container" style={{maxWidth:780}}>
            <div className="quote-shell">
              <div className="success-state">
                <div className="success-check"><Icon.Check size={32} /></div>
                <h3>Thanks, {data.name.split(' ')[0] || 'neighbor'}!</h3>
                <p>Your request is in. Wade will give you a call at {data.phone} within a few hours with a confirmed quote and the next two available slots.</p>
                <div className="estimate-card" style={{textAlign:'left', maxWidth:400, margin:'28px auto 0'}}>
                  <div className="lbl">Ballpark estimate</div>
                  <div className="range">${estimate.low} – ${estimate.high}</div>
                  <div className="note">Final pricing is confirmed after a free on-site walk-through. No deposit required.</div>
                </div>
                <div style={{marginTop:32, display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap'}}>
                  <button className="btn btn-ghost" onClick={() => goto('home')}>Back to home</button>
                  <a className="btn btn-primary" href="tel:+14076841194"><Icon.Phone size={14} /> Call us directly</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="page-head">
        <div className="container">
          <div className="crumbs">
            <a onClick={() => goto('home')} style={{cursor:'pointer'}}>Home</a>
            <span className="sep">/</span>
            <span>Get a Quote</span>
          </div>
          <h1>Free, no-obligation quote.</h1>
          <p>Takes about 90 seconds. We'll come back with a ballpark immediately and a final number after a quick on-site walk.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{maxWidth:820}}>
          <div className="quote-shell">
            <div className="stepper">
              {steps.map((s, i) => (
                <React.Fragment key={i}>
                  <div className={'step' + (i === step ? ' active' : '') + (i < step ? ' done' : '')}>
                    <div className="num">{i < step ? <Icon.Check size={14} /> : i + 1}</div>
                    <span className="lbl">{s}</span>
                  </div>
                  {i < steps.length - 1 && <div className={'bar' + (i < step ? ' done' : '')} />}
                </React.Fragment>
              ))}
            </div>

            <div className="quote-body">
              {step === 0 && (
                <div>
                  <h3>What needs a wash?</h3>
                  <p className="sub">Pick one or more — we handle combined jobs in a single visit.</p>
                  <div className="choice-grid">
                    {[
                      { t: 'House Washing', d: 'Siding, stucco, soffits', ic: <Icon.Home size={20} /> },
                      { t: 'Driveway & Sidewalk', d: 'Concrete, pavers, walkways', ic: <Icon.Road size={20} /> },
                      { t: 'Deck & Fence', d: 'Wood-safe low pressure', ic: <Icon.Deck size={20} /> },
                      { t: 'Not sure yet', d: 'We\'ll recommend on-site', ic: <Icon.Droplet size={18} /> },
                    ].map(c => (
                      <button key={c.t} type="button" className={'choice' + (data.services.includes(c.t) ? ' selected' : '')} onClick={() => toggle('services', c.t)}>
                        <div className="ic">{c.ic}</div>
                        <div>
                          <div className="t">{c.t}</div>
                          <div className="d">{c.d}</div>
                        </div>
                        <div className="check"><Icon.Check size={12} /></div>
                      </button>
                    ))}
                  </div>
                  {errs.services && <div style={{color:'#D64545', fontSize:13, marginTop:12}}>{errs.services}</div>}
                </div>
              )}

              {step === 1 && (
                <div>
                  <h3>Tell us about the property.</h3>
                  <p className="sub">This gets you a tighter estimate — we'll confirm on-site.</p>
                  <div className="form-fields">
                    <div>
                      <label style={{fontSize:13, fontWeight:600, color:'var(--ink-700)', display:'block', marginBottom:8}}>Property type</label>
                      <div className="choice-grid">
                        {[
                          { t: 'Single-family home', d: 'Detached, 1–2 stories' },
                          { t: 'Townhome', d: 'Shared-wall residence' },
                          { t: 'Condo / HOA', d: 'Community-managed' },
                          { t: 'Commercial / small biz', d: 'Storefront, office' },
                        ].map(c => (
                          <button key={c.t} type="button" className={'choice' + (data.propertyType === c.t ? ' selected' : '')} onClick={() => update('propertyType', c.t)}>
                            <div>
                              <div className="t">{c.t}</div>
                              <div className="d">{c.d}</div>
                            </div>
                            <div className="check"><Icon.Check size={12} /></div>
                          </button>
                        ))}
                      </div>
                      {errs.propertyType && <div style={{color:'#D64545', fontSize:13, marginTop:8}}>{errs.propertyType}</div>}
                    </div>

                    <div className="field">
                      <label>Approximate square footage</label>
                      <select value={data.sqft} onChange={e => update('sqft', e.target.value)}>
                        <option value="">Select size...</option>
                        <option>Under 1,500</option>
                        <option>1,500–2,500</option>
                        <option>2,500–3,500</option>
                        <option>3,500+</option>
                      </select>
                      {errs.sqft && <span className="err">{errs.sqft}</span>}
                    </div>

                    <div>
                      <label style={{fontSize:13, fontWeight:600, color:'var(--ink-700)', display:'block', marginBottom:8}}>Any add-ons? <span style={{color:'var(--ink-400)', fontWeight:400}}>(optional)</span></label>
                      <div style={{display:'grid', gap:8}}>
                        {['Gutter face cleaning', 'Paver re-sand & seal', 'Annual maintenance plan (–15%)'].map(a => (
                          <button key={a} type="button" className={'choice' + (data.addons.includes(a) ? ' selected' : '')} onClick={() => toggle('addons', a)} style={{padding:'14px 16px'}}>
                            <div className="ic"><Icon.Check size={14} /></div>
                            <div><div className="t">{a}</div></div>
                            <div className="check"><Icon.Check size={12} /></div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h3>How should we reach you?</h3>
                  <p className="sub">We'll text or call — whichever you prefer.</p>
                  <div className="form-fields">
                    <div className="form-row">
                      <div className={'field' + (errs.name ? ' error' : '')}>
                        <label>Your name</label>
                        <input type="text" value={data.name} onChange={e => update('name', e.target.value)} placeholder="First & last" />
                        {errs.name && <span className="err">{errs.name}</span>}
                      </div>
                      <div className={'field' + (errs.phone ? ' error' : '')}>
                        <label>Phone</label>
                        <input type="tel" value={data.phone} onChange={e => update('phone', e.target.value)} placeholder="(407) ..." />
                        {errs.phone && <span className="err">{errs.phone}</span>}
                      </div>
                    </div>
                    <div className="field">
                      <label>Email <span style={{color:'var(--ink-400)', fontWeight:400}}>(optional)</span></label>
                      <input type="email" value={data.email} onChange={e => update('email', e.target.value)} placeholder="you@address.com" />
                    </div>
                    <div className={'field' + (errs.address ? ' error' : '')}>
                      <label>Service address</label>
                      <input type="text" value={data.address} onChange={e => update('address', e.target.value)} placeholder="Street, city, ZIP" />
                      {errs.address && <span className="err">{errs.address}</span>}
                    </div>
                    <div className="form-row">
                      <div className="field">
                        <label>Preferred date <span style={{color:'var(--ink-400)', fontWeight:400}}>(optional)</span></label>
                        <input type="date" value={data.preferredDate} onChange={e => update('preferredDate', e.target.value)} />
                      </div>
                      <div className="field">
                        <label>Anything else?</label>
                        <input type="text" value={data.notes} onChange={e => update('notes', e.target.value)} placeholder="Gate code, trouble spots..." />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <h3>Quick review.</h3>
                  <p className="sub">Double-check and submit — we'll take it from here.</p>
                  <div style={{background:'var(--paper)', border:'1px solid var(--line)', borderRadius:12, padding:20, display:'grid', gap:14}}>
                    <ReviewRow label="Services" value={data.services.join(', ') || '—'} />
                    <ReviewRow label="Property" value={`${data.propertyType} · ${data.sqft}`} />
                    {data.addons.length > 0 && <ReviewRow label="Add-ons" value={data.addons.join(', ')} />}
                    <ReviewRow label="Contact" value={`${data.name} · ${data.phone}${data.email ? ' · ' + data.email : ''}`} />
                    <ReviewRow label="Address" value={data.address} />
                    {data.preferredDate && <ReviewRow label="Preferred date" value={data.preferredDate} />}
                    {data.notes && <ReviewRow label="Notes" value={data.notes} />}
                  </div>
                  <div className="estimate-card">
                    <div className="lbl">Ballpark estimate</div>
                    <div className="range">${estimate.low} – ${estimate.high}</div>
                    <div className="note">Final pricing is confirmed after a free on-site walk-through. No deposit required.</div>
                  </div>
                </div>
              )}
            </div>

            <div className="quote-foot">
              <button className="btn btn-ghost" onClick={back} disabled={step === 0} style={{opacity: step === 0 ? 0.5 : 1, cursor: step === 0 ? 'not-allowed' : 'pointer'}}>
                <Icon.ChevronLeft size={14} /> Back
              </button>
              <div style={{fontSize:13, color:'var(--ink-500)'}}>Step {step + 1} of {steps.length}</div>
              {step === steps.length - 1 ? (
                <button className="btn btn-primary" onClick={() => setStep(s => s + 1)}>Submit Quote Request <Icon.Check size={14} /></button>
              ) : (
                <button className="btn btn-primary" onClick={next}>Continue <Icon.ArrowRight size={14} /></button>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ReviewRow({ label, value }) {
  return (
    <div style={{display:'grid', gridTemplateColumns:'130px 1fr', gap:16, fontSize:14}}>
      <span style={{color:'var(--ink-400)', fontSize:12.5, textTransform:'uppercase', letterSpacing:'0.08em', fontWeight:600, paddingTop:2}}>{label}</span>
      <span style={{color:'var(--navy-900)', fontWeight:500}}>{value}</span>
    </div>
  );
}

Object.assign(window, { HomePage, ServicesPage, GalleryPage, ContactPage, QuotePage });
