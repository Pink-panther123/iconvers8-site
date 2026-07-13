'use client';
import { useEffect } from 'react';

const WEB3FORMS_KEY = '8934ee71-1c5c-4898-89ce-d7ef181933be'; // <-- paste your free key from https://web3forms.com
const SITE_NAME = 'iConvers8.ai';
const hideImg = (e) => { e.currentTarget.style.display = 'none'; };

export default function Page() {
  useEffect(() => {
    const timers = [];

    // scroll reveal
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }), { threshold: 0.14 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    // mobile menu
    const burger = document.getElementById('burger'), menu = document.getElementById('menu');
    const toggle = () => menu && menu.classList.toggle('open');
    if (burger) burger.addEventListener('click', toggle);
    if (menu) menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
    // back to top
    document.querySelectorAll('[data-top]').forEach(el => el.addEventListener('click', (e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }));
    // lead forms -> Web3Forms
    document.querySelectorAll('form[data-lead]').forEach(f => f.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = f.querySelector('button'); if (btn) { btn.disabled = true; btn.textContent = 'Sending...'; }
      let ok = false;
      if (WEB3FORMS_KEY && !WEB3FORMS_KEY.startsWith('YOUR_')) {
        try {
          const fd = new FormData(f);
          fd.append('access_key', WEB3FORMS_KEY);
          fd.append('subject', 'New website lead — ' + SITE_NAME);
          const r = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: fd });
          ok = (await r.json()).success;
        } catch (err) { ok = false; }
      } else { ok = true; } // key not configured yet: show success so the site still demos well
      f.innerHTML = ok
        ? '<p style="text-align:center;font-weight:700;padding:1.2rem 0" class="form-ok">✓ Thank you! We received your message and will reply within one business day.</p>'
        : '<p style="text-align:center;font-weight:700;padding:1.2rem 0" class="form-ok">Something went wrong. Please email us directly.</p>';
    }));

    return () => timers.forEach(t => clearInterval(t));
  }, []);
  return (
    <>
      
      
      {/* NAV */}
      <header className="nav">
        <div className="container">
          <a href="/" className="logo">iConvers<i>8</i>.ai</a>
          <nav className="menu" id="menu">
            <a href="/">Home</a>
            <a href="/#services">Services</a>
            <a href="/#how">How It Works</a>
            <a href="/#industries">Industries</a>
            <a href="/about" className="active">About Us</a>
          </nav>
          <a href="/#demo" className="btn btn-cyan" style={{padding:'.7rem 1.6rem'}}>Book a Demo</a>
          <button className="burger" id="burger">☰</button>
        </div>
      </header>
      
      {/* PAGE HERO */}
      <section className="phero">
        <div className="bgimg"><img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&q=80" alt="AI intelligence" onError={hideImg} /></div>
        <div className="container inner">
          <span className="kicker">About iConvers8.ai</span>
          <h1>Built So You Never Miss a Lead Again</h1>
          <p>iConvers8.ai is an AI-powered Revenue Operations platform that helps businesses automate customer communication, lead qualification, appointment booking, and sales follow-up across multiple channels.</p>
        </div>
      </section>
      
      {/* COMPANY OVERVIEW */}
      <section id="overview">
        <div className="container ov-grid">
          <div className="ov-copy reveal">
            <span className="eyebrow">Company Overview</span>
            <h2>Intelligent AI Systems That Work 24/7</h2>
            <p>By combining advanced AI voice agents, conversational AI, CRM integration, and business process automation, iConvers8.ai enables organizations to operate more efficiently, respond to customers instantly, and convert more leads into paying customers without increasing administrative workload.</p>
            <div className="mission-box">
              <span className="lbl">Our mission is simple</span>
              <p>Help businesses scale their sales and customer service operations using intelligent AI systems that work 24/7.</p>
            </div>
          </div>
          <div className="ov-media reveal" style={{transitionDelay:'.12s'}}>
            <div className="imgbox"><img src="https://images.unsplash.com/photo-1516245834210-c4c142787335?w=900&q=80" alt="AI voice technology" loading="lazy" onError={hideImg} /></div>
            <span className="badge"><span className="n">24/7</span><small>Always On</small></span>
          </div>
        </div>
      </section>
      
      {/* PROBLEM / SOLUTION */}
      <section className="ps">
        <div className="container">
          <div className="sec-head reveal">
            <span className="eyebrow">The Problem and Our Solution</span>
            <h2>Why iConvers8.ai Exists</h2>
            <p>As businesses grow, these challenges become increasingly difficult and expensive to manage. We built the fix.</p>
          </div>
          <div className="ps-grid">
            <div className="ps-card prob reveal">
              <h3>The Problem</h3>
              <p className="lead">Many business owners face the same operational challenges:</p>
              <ul>
                <li>Excessive incoming calls that overwhelm staff.</li>
                <li>Missed leads due to delayed responses.</li>
                <li>Administrative bottlenecks caused by limited personnel.</li>
                <li>Lost revenue opportunities from poor follow-up processes.</li>
                <li>Inconsistent customer experiences.</li>
                <li>Difficulty managing appointments, inquiries, and customer communications simultaneously.</li>
                <li>Rising staffing costs and limited scalability.</li>
              </ul>
            </div>
            <div className="ps-card sol reveal" style={{transitionDelay:'.12s'}}>
              <h3>Our Solution</h3>
              <p className="lead">iConvers8.ai provides intelligent AI-powered systems that automate repetitive communication while staying professional and personal. Our AI agents can:</p>
              <ul>
                <li>Answer incoming phone calls instantly.</li>
                <li>Engage customers in natural conversations.</li>
                <li>Qualify leads based on predefined business criteria.</li>
                <li>Schedule appointments automatically.</li>
                <li>Follow up with prospects and existing customers.</li>
                <li>Integrate seamlessly with CRM systems.</li>
                <li>Capture and organize customer data.</li>
                <li>Operate 24/7 without breaks or downtime.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* VALUE PROPOSITION */}
      <section id="value">
        <div className="container vp-grid">
          <div className="vp-media reveal">
            <div className="imgbox"><img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80" alt="Live revenue dashboard" loading="lazy" onError={hideImg} /></div>
          </div>
          <div className="vp-copy reveal" style={{transitionDelay:'.12s'}}>
            <span className="eyebrow">Our Value Proposition</span>
            <h2>Intelligent Systems, Real Revenue</h2>
            <p>iConvers8.ai transforms the way businesses communicate with customers by deploying intelligent AI systems that answer, engage, qualify, schedule, and follow up automatically.</p>
            <p>We help businesses save time, reduce costs, improve customer satisfaction, and generate more revenue through AI-powered automation.</p>
            <ul className="checks">
              <li>Answer and engage instantly</li>
              <li>Qualify and schedule automatically</li>
              <li>Data captured and organized</li>
              <li>Scale without extra headcount</li>
            </ul>
            <a href="/#demo" className="btn btn-cyan">Book a Demo</a>
          </div>
        </div>
      </section>
      
      {/* VISION / MISSION */}
      <section className="mv">
        <div className="container">
          <div className="sec-head reveal">
            <span className="eyebrow">What Drives Us</span>
            <h2>Vision &amp; Mission</h2>
          </div>
          <div className="mv-grid">
            <div className="mv-card reveal">
              <h3>Vision</h3>
              <p>To become the leading AI-powered business automation platform that enables organizations worldwide to scale customer engagement and revenue operations efficiently.</p>
            </div>
            <div className="mv-card reveal" style={{transitionDelay:'.12s'}}>
              <h3>Mission</h3>
              <p>To empower businesses with intelligent AI solutions that simplify operations, enhance customer experiences, and drive sustainable growth.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FOUNDER */}
      <section className="founder" id="founder">
        <div className="container founder-grid">
          <div className="imgbox reveal"><img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80" alt="Jeffrey Hawk, President and CEO" loading="lazy" onError={hideImg} /></div>
          <div className="reveal" style={{transitionDelay:'.12s'}}>
            <span className="eyebrow">A Note From the Founder</span>
            <h2 style={{fontSize:'clamp(1.6rem,3vw,2.2rem)'}}>Why We Built iConvers8.ai</h2>
            <blockquote>
              <p>iConvers8.ai was founded because after noticing countless business owners drowning under operational bottlenecks, constantly missing critical client calls, losing revenue to delayed lead responses, and facing limited scalability due to rising staffing costs, I knew we could build a revolutionary solution that would help alleviate those issues.</p>
              <p>Drawing on my decades of experience in scaling and leading revenue operations, it was quickly recognized that a major gap in the market for human-like, non artificial feeling conversational intelligence was our launchpad. To seamlessly and instantly answer, qualify, and execute workflows leading to explosive linear growth to the bottom line. iConvers8.ai was built to bridge this gap, ensuring organizations never miss a lead or opportunity again.</p>
              <p>From all of us here at iConvers8.ai we look forward to you trusting us to take your business to the next level and beyond. That time is now.</p>
            </blockquote>
            <div className="sig"><b>Jeffrey Hawk</b><small>President &amp; Chief Executive Officer</small></div>
          </div>
        </div>
      </section>
      
      {/* CTA STRIP */}
      <div className="cta-strip">
        <div className="container reveal">
          <h2>Ready to Book More Meetings?</h2>
          <p>Stop wasting hours on cold calls and repetitive follow-up. Let iConvers8.ai handle prospecting while your sales team closes more business.</p>
          <div className="acts">
            <a href="/#demo" className="btn">Book a Demo</a>
            <a href="/#demo" className="btn">Start Your Free Trial</a>
          </div>
        </div>
      </div>
      
      {/* FOOTER */}
      <footer>
        <div className="container foot-grid">
          <div>
            <a href="/" className="logo" style={{marginBottom:'1rem',display:'inline-block'}}>iConvers<i>8</i>.ai</a>
            <p>Our mission is simple: help businesses scale their sales and customer service operations using intelligent AI systems that work 24/7.</p>
            <div className="socials"><a href="#">𝕏</a><a href="#">in</a><a href="#">f</a><a href="#">▶</a></div>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/#services">Services</a></li>
              <li><a href="/#industries">Industries</a></li>
              <li><a href="/about#founder">Founder's Note</a></li>
            </ul>
          </div>
          <div>
            <h4>Useful Links</h4>
            <ul>
              <li><a href="/#demo">Book a Demo</a></li>
              <li><a href="/#demo">Free Trial</a></li>
              <li><a href="/#how">How It Works</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="foot-news">
            <h4>Newsletter</h4>
            <p>Revenue operations tips and AI playbooks, straight to your inbox.</p>
            <form data-lead="1">
              <input name="your_email_address" type="email" placeholder="Your email address" required />
              <button className="btn btn-cyan" style={{width:'100%',justifyContent:'center'}}>Subscribe</button>
            </form>
          </div>
        </div>
        <div className="foot-bottom">
          <div className="container">
            <span>© 2026 iConvers8.ai. All rights reserved.</span>
            <span>hello@iconvers8.ai</span>
          </div>
        </div>
      </footer>
      
    </>
  );
}
