import Image from "next/image";
import { ArrowRight, CheckCircle2, XCircle, Rocket, Code, Brain, Target, Zap, ChevronRight, Youtube } from "lucide-react";

export default function Home() {
  return (
    <main>
      {/* Navigation / Header */}
      <nav style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100, background: 'rgba(10,10,10,0.8)', backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>
            <div style={{ background: 'var(--accent)', borderRadius: '8px', padding: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Zap size={20} color="white" fill="white" />
            </div>
            Voltnestx
          </div>
          <a href="https://calendly.com/ritwikr850/30min" target="_blank" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem' }}>
            Book Strategy Call
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" style={{ paddingTop: '80px' }}>
        <div className="container grid grid-cols-2" style={{ alignItems: 'center' }}>
          <div className="hero-content">
            <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#60a5fa', padding: '0.25rem 0.75rem', borderRadius: '999px', fontSize: '0.875rem', fontWeight: '600' }}>
                Voltnestx • Venture Launch Studio
              </span>
            </div>
            <h1>
              Turn Your Idea into a <span className="highlight">Market-Ready Product</span> in 90 Days
            </h1>
            <p className="text-lg" style={{ maxWidth: '480px', marginBottom: '2rem' }}>
              We help non-technical founders build, launch, and scale. No fluff. No outsourcing. Just pure execution with AI + expert builders.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="https://calendly.com/ritwikr850/30min" target="_blank" className="btn btn-primary">
                Book a Strategy Call <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
              </a>
              <a href="#how-it-works" className="btn btn-outline">
                How it Works
              </a>
            </div>
            <div style={{ marginTop: '3rem', display: 'flex', gap: '2rem', color: 'var(--secondary)', fontSize: '0.875rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={16} color="var(--accent)" /> AI-Powered Speed
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={16} color="var(--accent)" /> In-House Dev Team
              </div>
            </div>
          </div>
          <div style={{ position: 'relative', height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {/* Abstract Background Element */}
            <div style={{
              position: 'absolute',
              width: '80%', // Reduced width
              height: '80%', // Reduced height
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(0,0,0,0) 70%)',
              zIndex: -1,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}></div>
            <div style={{
              position: 'relative',
              width: '400px', // Fixed width for the image container
              height: '500px', // Fixed height for the image container
              borderRadius: '24px',
              overflow: 'hidden',
              border: '1px solid var(--border)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
            }}>
              <Image
                src="/images/ritwik.jpg"
                alt="Ritwik Raj - Founder"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '1.5rem',
                background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                zIndex: 2
              }}>
                <p style={{ color: 'white', fontWeight: 'bold', marginBottom: '0.25rem' }}>Ritwik Raj</p>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', margin: 0 }}>Founder & Venture Builder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div className="grid grid-cols-2" style={{ gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2rem' }}>Why I Built This</h2>
              <p style={{ marginBottom: '1.5rem' }}>
                I've seen too many brilliant founders fail—not because their ideas were bad, but because <strong>execution is hard</strong>.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                Agencies overcharge and underdeliver. Freelancers ghost you. And trying to learn to code while running a business is a recipe for burnout.
              </p>
              <p>
                I built <strong>Voltnestx</strong> to be the partner I wish I had. We aren't just "devs for hire." We are your co-builders. We use AI to move fast, but we use human expertise to build right. My goal is simple: <strong>Get you to revenue, fast.</strong>
              </p>
              <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Image
                  src="/images/ritwik.jpg"
                  alt="Signature"
                  width={100}
                  height={100}
                  className="rounded-full"
                  style={{ width: '64px', height: '64px', objectFit: 'cover', borderRadius: '50%', border: '2px solid var(--border)' }}
                />
                <a href="https://www.youtube.com/@Ritwik8908" target="_blank" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--secondary)', fontSize: '0.875rem' }}>
                  <Youtube size={20} color="#ff0000" /> Watch my journey
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2" style={{ gap: '1rem' }}>
              <div className="card">
                <Brain size={32} color="var(--accent)" style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.25rem' }}>AI Native</h3>
                <p style={{ fontSize: '0.875rem' }}>Leveraging the latest AI tools to code faster and smarter.</p>
              </div>
              <div className="card">
                <Target size={32} color="var(--accent)" style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.25rem' }}>Execution First</h3>
                <p style={{ fontSize: '0.875rem' }}>We don't just strategize. We build, ship, and iterate.</p>
              </div>
              <div className="card">
                <Code size={32} color="var(--accent)" style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.25rem' }}>In-House Team</h3>
                <p style={{ fontSize: '0.875rem' }}>No outsourcing. A dedicated team of senior engineers.</p>
              </div>
              <div className="card">
                <Zap size={32} color="var(--accent)" style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.25rem' }}>Speed</h3>
                <p style={{ fontSize: '0.875rem' }}>From concept to live product in 90 days or less.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="section">
        <div className="container text-center" style={{ maxWidth: '800px' }}>
          <h2>The "Founder's Trap"</h2>
          <p className="text-lg">Most non-technical founders get stuck in the "Idea Stage" for years. Why?</p>

          <div className="grid grid-cols-3" style={{ marginTop: '3rem', textAlign: 'left' }}>
            <div style={{ padding: '1rem' }}>
              <XCircle size={40} color="#ef4444" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.25rem', color: '#ef4444' }}>No Tech Team</h3>
              <p style={{ fontSize: '0.9rem' }}>Can't find a CTO, and hiring an agency costs $50k+ which is risky.</p>
            </div>
            <div style={{ padding: '1rem' }}>
              <XCircle size={40} color="#ef4444" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.25rem', color: '#ef4444' }}>Lack of Clarity</h3>
              <p style={{ fontSize: '0.9rem' }}>Too many features, confusing advice, and "analysis paralysis."</p>
            </div>
            <div style={{ padding: '1rem' }}>
              <XCircle size={40} color="#ef4444" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.25rem', color: '#ef4444' }}>Slow Execution</h3>
              <p style={{ fontSize: '0.9rem' }}>Months of planning without a single line of code written.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="section" id="how-it-works" style={{ background: 'var(--surface-highlight)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <span style={{ color: 'var(--accent)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.875rem' }}>Our Process</span>
            <h2>How We Launch You</h2>
          </div>

          <div className="grid grid-cols-3" style={{ gap: '2rem' }}>
            {/* Step 1 */}
            <div className="card" style={{ position: 'relative', border: 'none', background: 'var(--background)' }}>
              <div style={{ position: 'absolute', top: '-1rem', left: '-1rem', fontSize: '4rem', fontWeight: '900', color: 'var(--surface)', zIndex: 0 }}>01</div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h3 style={{ marginBottom: '1rem' }}>Validate & Scope</h3>
                <ul style={{ listStyle: 'none' }}>
                  <li style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem', fontSize: '0.9rem', color: 'var(--secondary)' }}>
                    <CheckCircle2 size={18} color="var(--accent)" /> Market Research
                  </li>
                  <li style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem', fontSize: '0.9rem', color: 'var(--secondary)' }}>
                    <CheckCircle2 size={18} color="var(--accent)" /> Feature Prioritization
                  </li>
                  <li style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem', fontSize: '0.9rem', color: 'var(--secondary)' }}>
                    <CheckCircle2 size={18} color="var(--accent)" /> Technical Architecture
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div className="card" style={{ position: 'relative', border: '1px solid var(--accent)', background: 'rgba(59, 130, 246, 0.05)' }}>
              <div style={{ position: 'absolute', top: -12, right: 20, background: 'var(--accent)', color: 'white', padding: '2px 10px', fontSize: '0.75rem', borderRadius: '4px', fontWeight: 'bold' }}>CORE PHASE</div>
              <div style={{ position: 'absolute', top: '-1rem', left: '-1rem', fontSize: '4rem', fontWeight: '900', color: 'var(--surface)', zIndex: 0 }}>02</div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h3 style={{ marginBottom: '1rem', color: 'var(--accent)' }}>Build with AI</h3>
                <ul style={{ listStyle: 'none' }}>
                  <li style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem', fontSize: '0.9rem', color: 'var(--foreground)' }}>
                    <CheckCircle2 size={18} color="var(--accent)" /> High-Velocity Coding
                  </li>
                  <li style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem', fontSize: '0.9rem', color: 'var(--foreground)' }}>
                    <CheckCircle2 size={18} color="var(--accent)" /> MVP Development
                  </li>
                  <li style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem', fontSize: '0.9rem', color: 'var(--foreground)' }}>
                    <CheckCircle2 size={18} color="var(--accent)" /> Weekly Sprints & Demos
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="card" style={{ position: 'relative', border: 'none', background: 'var(--background)' }}>
              <div style={{ position: 'absolute', top: '-1rem', left: '-1rem', fontSize: '4rem', fontWeight: '900', color: 'var(--surface)', zIndex: 0 }}>03</div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h3 style={{ marginBottom: '1rem' }}>Launch & Grow</h3>
                <ul style={{ listStyle: 'none' }}>
                  <li style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem', fontSize: '0.9rem', color: 'var(--secondary)' }}>
                    <CheckCircle2 size={18} color="var(--accent)" /> Deployment & CI/CD
                  </li>
                  <li style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem', fontSize: '0.9rem', color: 'var(--secondary)' }}>
                    <CheckCircle2 size={18} color="var(--accent)" /> User Onboarding Setup
                  </li>
                  <li style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem', fontSize: '0.9rem', color: 'var(--secondary)' }}>
                    <CheckCircle2 size={18} color="var(--accent)" /> Analytics & Feedback Loop
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do / Tech Stack */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2" style={{ gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2>We Builder Faster by <br />Combining Humans & AI</h2>
              <p>
                We aren't a traditional agency that charges by the hour. We are outcome-focused. We use a proprietary stack of AI coding assistants and senior architecture patterns to deliver months of work in weeks.
              </p>
              <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
                <div>
                  <h4 style={{ fontSize: '2rem', marginBottom: '0', color: 'var(--accent)' }}>90</h4>
                  <span style={{ fontSize: '0.875rem', color: 'var(--secondary)' }}>Days to Launch</span>
                </div>
                <div>
                  <h4 style={{ fontSize: '2rem', marginBottom: '0', color: 'var(--accent)' }}>100%</h4>
                  <span style={{ fontSize: '0.875rem', color: 'var(--secondary)' }}>IP Ownership</span>
                </div>
                <div>
                  <h4 style={{ fontSize: '2rem', marginBottom: '0', color: 'var(--accent)' }}>1:1</h4>
                  <span style={{ fontSize: '0.875rem', color: 'var(--secondary)' }}>Founder Support</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2" style={{ gap: '1rem' }}>
              {['MVP Development', 'AI Automation', 'Idea Validation', 'Growth Systems'].map((item) => (
                <div key={item} style={{ padding: '1.5rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px', textAlign: 'center' }}>
                  <span style={{ fontWeight: '600' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Audience Filter */}
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div className="grid grid-cols-2" style={{ gap: '4rem' }}>
            <div>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <CheckCircle2 color="var(--accent)" /> Who We Work With
              </h3>
              <ul style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {['Visionary Non-technical Founders', 'Subject Matter Experts (Consultants, Coaches)', 'Bootstrapped Entrepreneurs ready to invest', 'Long-term thinkers focused on value'].map(item => (
                  <li key={item} style={{ paddingLeft: '1rem', borderLeft: '2px solid var(--accent)' }}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--secondary)' }}>
                <XCircle color="var(--secondary)" /> Who We Don't Work With
              </h3>
              <ul style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {['People looking for "cheap" freelancers', 'Dreamers with no budget to execute', 'Founders chasing quick "schemes"', 'People expecting guaranteed VC funding'].map(item => (
                  <li key={item} style={{ paddingLeft: '1rem', borderLeft: '2px solid var(--border)', color: 'var(--secondary)' }}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" id="cta" style={{ textAlign: 'center', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Ready to Build?</h2>
          <p className="text-lg" style={{ marginBottom: '3rem' }}>
            I only work with a handful of founders at a time to ensure high attention to detail.
            If you are serious about launching your product in the next 90 days, let's talk.
          </p>
          <div className="card" style={{ padding: '2rem', display: 'inline-block', width: '100%', maxWidth: '500px', border: '1px solid var(--accent)' }}>
            <h3 style={{ marginBottom: '0.5rem' }}>Book a Strategy Call with Ritwik</h3>
            <p style={{ fontSize: '0.9rem', marginBottom: '2rem' }}>30 Minutes • Free Consultantion • Clarity Session</p>
            <a href="https://calendly.com/ritwikr850/30min" target="_blank" className="btn btn-primary" style={{ width: '100%' }}>
              Schedule Call Now <ChevronRight size={18} />
            </a>
            <p style={{ marginTop: '1rem', fontSize: '0.75rem', color: 'var(--secondary)' }}>
              Limited slots available for this month.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '2rem 0', borderTop: '1px solid var(--border)', textAlign: 'center', color: 'var(--secondary)', fontSize: '0.875rem' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <p>&copy; {new Date().getFullYear()} Voltnestx. Founded by Ritwik Raj.</p>
          <a href="https://www.youtube.com/@Ritwik8908" target="_blank" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--secondary)', fontSize: '0.875rem' }}>
            <Youtube size={16} /> Subscribe on YouTube
          </a>
        </div>
      </footer>
    </main>
  );
}

