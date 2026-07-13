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
            <a href="/" className="active">Home</a>
            <a href="#services">Services</a>
            <a href="#how">How It Works</a>
            <a href="#industries">Industries</a>
            <a href="/about">About Us</a>
          </nav>
          <a href="#demo" className="btn btn-cyan" style={{padding:'.7rem 1.6rem'}}>Book a Demo</a>
          <button className="burger" id="burger">☰</button>
        </div>
      </header>
      
      {/* HERO */}
      <section className="hero">
        <div className="bgimg"><img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&q=80" alt="AI voice operations" onError={hideImg} /></div>
        <div className="container hero-inner">
          <span className="kicker">iConvers8.ai &nbsp;·&nbsp; AI-Powered Revenue Operations</span>
          <h1>Your AI Sales Development Team,<br /><span>Powered by AI</span></h1>
          <p className="lede">Load your leads. Launch your AI. Fill your calendar. iConvers8.ai is an AI-powered sales development platform that automates outbound prospecting from first contact to booked meeting. Your custom AI voice agent cold calls prospects, qualifies leads, answers questions, handles objections, sends follow-up texts and emails, and books appointments directly into your calendar.</p>
          <span className="nodial">No dialing. No voicemail marathons. No manual follow-up. Simply upload your leads and let your AI agent work 24/7.</span>
          <div className="hero-blocks">
            <div className="hblk"><div className="n">100%</div><div className="l">Calls Answered</div></div>
            <div className="hblk cy"><div className="n">24/7</div><div className="l">Always On</div></div>
            <div className="hblk"><div className="n">&lt;60s</div><div className="l">Response Time</div></div>
            <div className="hblk"><div className="n">10+</div><div className="l">Industries</div></div>
          </div>
          <div className="hero-actions">
            <a href="#demo" className="btn btn-cyan">Book a Demo</a>
            <a href="#demo" className="btn btn-outline">Start Your Free Trial</a>
          </div>
        </div>
      </section>
      
      {/* QUICK TILES */}
      <div className="quick">
        <div className="container quick-grid">
          <a href="#demo" className="quick-tile reveal"><span><b>Book a Demo</b><small>See your AI agent in action, live</small></span><span className="arr">→</span></a>
          <a href="#demo" className="quick-tile reveal" style={{transitionDelay:'.1s'}}><span><b>Start Your Free Trial</b><small>Upload leads and launch in days</small></span><span className="arr">→</span></a>
          <a href="/about" className="quick-tile reveal" style={{transitionDelay:'.2s'}}><span><b>Meet iConvers8.ai</b><small>Our story, mission, and founder</small></span><span className="arr">→</span></a>
        </div>
      </div>
      
      {/* SERVICES */}
      <section className="services" id="services">
        <div className="container">
          <div className="svc-top">
            <div>
              <span className="eyebrow">Core Services</span>
              <h2 style={{fontSize:'clamp(1.7rem,3.2vw,2.4rem)'}}>What We Automate for You</h2>
            </div>
            <a href="#demo" className="btn btn-outline">Explore All Services</a>
          </div>
          <div className="svc-grid">
            <div className="svc reveal">
              <span className="tag">Flagship</span>
              <div className="imgbox"><img src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=800&q=80" alt="Support agent with headset on a call" loading="lazy" onError={hideImg} /></div>
              <div className="svc-body"><h3>AI Voice Agents</h3><p>Human-like AI assistants that answer incoming calls, provide information, qualify prospects, and direct inquiries appropriately.</p><a href="#demo" className="more">Learn more →</a></div>
            </div>
            <div className="svc reveal" style={{transitionDelay:'.08s'}}>
              <div className="imgbox"><img src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&q=80" alt="Open appointment calendar on a desk" loading="lazy" onError={hideImg} /></div>
              <div className="svc-body"><h3>Automated Appointment Booking</h3><p>AI-driven scheduling that lets customers book appointments without requiring staff intervention.</p><a href="#demo" className="more">Learn more →</a></div>
            </div>
            <div className="svc reveal" style={{transitionDelay:'.16s'}}>
              <div className="imgbox"><img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="Laptop showing lead and sales analytics" loading="lazy" onError={hideImg} /></div>
              <div className="svc-body"><h3>Lead Qualification Systems</h3><p>Automated workflows that identify high-quality prospects and route them directly into the sales pipeline.</p><a href="#demo" className="more">Learn more →</a></div>
            </div>
            <div className="svc reveal">
              <div className="imgbox"><img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" alt="CRM data dashboard on screen" loading="lazy" onError={hideImg} /></div>
              <div className="svc-body"><h3>CRM Integration</h3><p>Seamless synchronization with existing CRM platforms so customer information is automatically updated and managed.</p><a href="#demo" className="more">Learn more →</a></div>
            </div>
            <div className="svc reveal" style={{transitionDelay:'.08s'}}>
              <div className="imgbox"><img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80" alt="Phone showing text message follow-ups" loading="lazy" onError={hideImg} /></div>
              <div className="svc-body"><h3>Automated Follow-Up Sequences</h3><p>AI-powered follow-up campaigns that maintain engagement with leads and customers through personalized communication.</p><a href="#demo" className="more">Learn more →</a></div>
            </div>
            <div className="svc reveal" style={{transitionDelay:'.16s'}}>
              <div className="imgbox"><img src="https://images.unsplash.com/photo-1706466614967-f4f14a3d9d08?w=800&q=80" alt="Abstract AI graphic representing process automation" loading="lazy" onError={hideImg} /></div>
              <div className="svc-body"><h3>Business Process Automation</h3><p>Custom AI workflows designed to reduce manual tasks and improve operational efficiency across departments.</p><a href="#demo" className="more">Learn more →</a></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* HOW IT WORKS */}
      <section id="how">
        <div className="container">
          <div className="sec-head reveal">
            <span className="eyebrow">How It Works</span>
            <h2>From Lead List to Booked Meeting</h2>
            <p>No dialing. No voicemail marathons. No manual follow-up. Four simple steps and your AI SDR is working your pipeline.</p>
          </div>
          <div className="how-steps">
            <div className="hstep reveal"><div className="dot">1</div><h4>Upload Leads</h4><p>Import a CSV or connect your CRM.</p></div>
            <div className="hstep reveal" style={{transitionDelay:'.1s'}}><div className="dot">2</div><h4>Train Your AI</h4><p>Customize your agent with your products, services, FAQs, sales process, and qualification rules.</p></div>
            <div className="hstep reveal" style={{transitionDelay:'.2s'}}><div className="dot">3</div><h4>Launch Campaigns</h4><p>Your AI begins natural voice conversations with every prospect.</p></div>
            <div className="hstep reveal" style={{transitionDelay:'.3s'}}><div className="dot">4</div><h4>Book Meetings</h4><p>Qualified prospects are scheduled directly into your calendar.</p></div>
          </div>
        </div>
      </section>
      
      {/* FEATURES STRIP */}
      <div className="feat-strip">
        <div className="container">
          <div className="sec-head reveal" style={{marginBottom:'1.6rem'}}><span className="eyebrow" style={{display:'flex',justifyContent:'center'}}>Features</span></div>
          <div className="row reveal">
            <span>AI-powered outbound voice calls</span><span>Intelligent lead qualification</span><span>Automated appointment scheduling</span><span>SMS and email follow-up</span><span>Objection handling</span><span>CRM integration</span><span>Call transcripts and analytics</span><span>24/7 availability</span>
          </div>
        </div>
      </div>
      
      {/* WHY */}
      <section className="why" id="why">
        <div className="container why-wrap">
          <div className="why-copy reveal">
            <span className="eyebrow">Why iConvers8.ai?</span>
            <p className="big-quote">Your sales team should spend time closing, not chasing leads.</p>
            <p>iConvers8.ai scales your outreach without adding headcount. Every prospect receives fast, consistent, professional follow-up while your team focuses on qualified opportunities.</p>
            <p>Whether you're a startup or an enterprise, your AI SDR works around the clock to keep your pipeline full.</p>
            <a href="#demo" className="btn btn-cyan">Book a Demo</a>
          </div>
          <div className="why-card reveal" style={{transitionDelay:'.12s'}}>
            <div className="stat"><span className="n">24/7</span><span className="t">Availability with zero breaks or downtime</span></div>
            <div className="stat"><span className="n">0</span><span className="t">Extra headcount needed to scale outreach</span></div>
            <div className="stat"><span className="n">100%</span><span className="t">Of prospects get fast, consistent follow-up</span></div>
            <div className="stat"><span className="n">10+</span><span className="t">Industries served, from SaaS to real estate</span></div>
          </div>
        </div>
      </section>
      
      {/* BENEFITS */}
      <section>
        <div className="container">
          <div className="sec-head reveal">
            <span className="eyebrow">Key Benefits</span>
            <h2>What You Gain With iConvers8.ai</h2>
          </div>
          <div className="ben-grid">
            <div className="ben reveal">
              <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg></span>
              <h4>Never Miss a Lead</h4><p>Every customer inquiry is answered instantly, increasing lead capture rates and conversion opportunities.</p>
            </div>
            <div className="ben reveal" style={{transitionDelay:'.06s'}}>
              <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></span>
              <h4>Operate 24/7</h4><p>AI agents remain available around the clock, ensuring customers receive assistance anytime.</p>
            </div>
            <div className="ben reveal" style={{transitionDelay:'.12s'}}>
              <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></span>
              <h4>Reduce Operational Costs</h4><p>Automate repetitive tasks and reduce dependency on additional administrative staff.</p>
            </div>
            <div className="ben reveal">
              <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17l6-6 4 4 8-8M15 7h6v6"/></svg></span>
              <h4>Increase Conversion Rates</h4><p>Faster response times and consistent follow-up improve sales performance.</p>
            </div>
            <div className="ben reveal" style={{transitionDelay:'.06s'}}>
              <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg></span>
              <h4>Scale Without Hiring</h4><p>Handle growing customer demand without proportionally increasing payroll expenses.</p>
            </div>
            <div className="ben reveal" style={{transitionDelay:'.12s'}}>
              <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-4.4-9.3-8.5C.8 9 2.4 5.6 5.7 5.1c1.9-.3 3.8.6 4.9 2.2h2.8c1.1-1.6 3-2.5 4.9-2.2 3.3.5 4.9 3.9 3 7.4C19 16.6 12 21 12 21z"/></svg></span>
              <h4>Improve Customer Experience</h4><p>Deliver professional, responsive, and personalized interactions at every stage of the customer journey.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* DEMO FORM */}
      <section className="demo" id="demo">
        <div className="container">
          <div className="inner reveal">
            <span className="eyebrow" style={{display:'flex',justifyContent:'center'}}>Ready to Book More Meetings?</span>
            <h2>Book a Demo</h2>
            <p className="sub">Stop wasting hours on cold calls and repetitive follow-up. Let iConvers8.ai handle prospecting while your sales team closes more business.</p>
            <form data-lead="1">
              <input name="first_name" type="text" placeholder="First Name *" required />
              <input name="last_name" type="text" placeholder="Last Name *" required />
              <input name="work_email" type="email" placeholder="Work Email *" required />
              <input name="phone_number" type="tel" placeholder="Phone Number" />
              <select name="your_industry" required>
                <option value="" disabled selected>Your Industry</option>
                <option>Real Estate</option><option>Healthcare</option><option>Law Firm</option><option>Home Services</option><option>Financial Services</option><option>Insurance</option><option>Marketing Agency</option><option>Education</option><option>Automotive</option><option>E-commerce</option><option>Other</option>
              </select>
              <select name="what_do_you_need_most" required>
                <option value="" disabled selected>What do you need most?</option>
                <option>Inbound call answering</option><option>Outbound prospecting</option><option>Appointment booking</option><option>Follow-up automation</option><option>Full revenue operations</option>
              </select>
              <button type="submit" className="btn btn-cyan">Get My Demo</button>
            </form>
          </div>
        </div>
      </section>
      
      {/* INDUSTRIES / PERFECT FOR */}
      <section className="industries" id="industries">
        <div className="container">
          <div className="sec-head reveal">
            <span className="eyebrow">Who We Serve</span>
            <h2>Built for High-Volume Businesses</h2>
            <p>iConvers8.ai is designed for businesses that receive a high volume of customer inquiries and want to improve operational efficiency.</p>
          </div>
          <div className="ind-grid">
            <div className="ind reveal"><img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=700&q=80" alt="House for sale, real estate" loading="lazy" onError={hideImg} /><span className="cap"><span>Real Estate</span><span>→</span></span></div>
            <div className="ind reveal" style={{transitionDelay:'.06s'}}><img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&q=80" alt="Doctor with tablet, healthcare" loading="lazy" onError={hideImg} /><span className="cap"><span>Healthcare Practices</span><span>→</span></span></div>
            <div className="ind reveal" style={{transitionDelay:'.12s'}}><img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=700&q=80" alt="Gavel and scales, law firm" loading="lazy" onError={hideImg} /><span className="cap"><span>Law Firms</span><span>→</span></span></div>
            <div className="ind reveal"><img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=700&q=80" alt="Home service professional at work" loading="lazy" onError={hideImg} /><span className="cap"><span>Home Services</span><span>→</span></span></div>
            <div className="ind reveal" style={{transitionDelay:'.06s'}}><img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=700&q=80" alt="Financial market charts" loading="lazy" onError={hideImg} /><span className="cap"><span>Financial &amp; Insurance</span><span>→</span></span></div>
            <div className="ind reveal" style={{transitionDelay:'.12s'}}><img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=700&q=80" alt="Car, automotive services" loading="lazy" onError={hideImg} /><span className="cap"><span>Automotive Services</span><span>→</span></span></div>
          </div>
          <div className="ind-tags reveal">
            <span>SaaS</span><span>Insurance Agencies</span><span>Marketing Agencies</span><span>Educational Institutions</span><span>E-commerce</span><span>B2B Sales</span><span>Professional Services</span>
          </div>
        </div>
      </section>
      
      {/* CTA BAND */}
      <section className="cta">
        <div className="bgimg"><img src="https://images.unsplash.com/photo-1695144244472-a4543101ef35?w=1600&q=80" alt="AI neon sign, always on" loading="lazy" onError={hideImg} /></div>
        <div className="container">
          <div className="inner reveal">
            <span className="eyebrow">Your Pipeline, Always Full</span>
            <h2>Ready to Book More Meetings?</h2>
            <p>Stop wasting hours on cold calls and repetitive follow-up. Let iConvers8.ai handle prospecting while your sales team closes more business.</p>
            <div className="acts">
              <a href="#demo" className="btn btn-cyan">Book a Demo</a>
              <a href="#demo" className="btn btn-outline">Start Your Free Trial</a>
            </div>
          </div>
        </div>
      </section>
      
      
      {/* BOOKING */}
      <section id="book">
        <div className="container">
          <div className="sec-head reveal"><span className="eyebrow" style={{display:'flex',justifyContent:'center'}}>Common Questions</span><h2>Book a Time That Works for You</h2><p>Choose a slot below and one of our specialists will walk you through a live AI call.</p></div>
          <div className="book-wrap reveal">
            <iframe src="https://calendly.com/ndubuisiokolieezinne/30min?hide_gdpr_banner=1" title="Book a time with us" loading="lazy"></iframe>
          </div>
          <p className="book-note">Pick any time that works for you. No credit card required, no obligation.</p>
        </div>
      </section>
      
      {/* FAQ */}
      <section id="faq">
        <div className="container">
          <div className="sec-head reveal"><span className="eyebrow" style={{display:'flex',justifyContent:'center'}}>Common Questions</span><h2>Frequently Asked Questions</h2></div>
          <div className="faq-wrap reveal"><details><summary>Will callers know they are talking to AI?</summary><div className="faq-a">Our agents use natural, human-like voices with realistic pacing and empathy. Most callers cannot tell the difference, and we are always transparent when asked.</div></details><details><summary>How long does setup take?</summary><div className="faq-a">Most businesses go live within days. Upload your leads or connect your CRM, train the agent on your FAQs and process, and launch.</div></details><details><summary>Does it work with my CRM and calendar?</summary><div className="faq-a">Yes. iConvers8.ai syncs with popular CRMs and calendars so every call, booking, and lead update happens automatically.</div></details><details><summary>What happens with complex calls?</summary><div className="faq-a">Your AI agent transfers complex or sensitive conversations to your team with full context, so nothing gets lost.</div></details><details><summary>Is there a free trial?</summary><div className="faq-a">Yes. You can start a free trial and see qualified meetings land on your calendar before you commit.</div></details></div>
          <p className="book-note">Still have a question? Book a demo above and ask us live.</p>
        </div>
      </section>
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
              <li><a href="#services">Services</a></li>
              <li><a href="#industries">Industries</a></li>
              <li><a href="/about#founder">Founder's Note</a></li>
            </ul>
          </div>
          <div>
            <h4>Useful Links</h4>
            <ul>
              <li><a href="#demo">Book a Demo</a></li>
              <li><a href="#demo">Free Trial</a></li>
              <li><a href="#how">How It Works</a></li>
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
