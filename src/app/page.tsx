"use client";

import Image from "next/image";
import { ArrowRight, CheckCircle2, XCircle, Code, Brain, Target, Zap, ChevronRight, Youtube, Mail } from "lucide-react";
import { Reveal, BackgroundMesh } from "@/components/Effects";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main style={{ position: 'relative' }}>
      <BackgroundMesh />

      {/* Navigation / Header */}
      <nav className="glass" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100 }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.5rem', fontWeight: '900', letterSpacing: '-0.02em' }}>
            <div style={{ background: 'var(--accent)', borderRadius: '10px', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Zap size={20} color="white" fill="white" />
            </div>
            <span className="gradient-text">Voltnestx</span>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <a href="https://calendly.com/ritwikr850/30min" target="_blank" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>
              Book Call
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container grid grid-cols-2" style={{ alignItems: 'center' }}>
          <div className="hero-content">
            <Reveal>
              <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className="glass" style={{ borderRadius: '999px', padding: '0.4rem 1rem', fontSize: '0.85rem', fontWeight: '600', color: 'var(--accent)' }}>
                  ⚡ Venture Launch Studio
                </span>
              </div>
              <h1 className="gradient-text">
                Turn Your Idea into a <span className="highlight">Market-Ready</span> Product in 90 Days
              </h1>
              <p style={{ maxWidth: '540px', marginBottom: '2.5rem', fontSize: '1.25rem' }}>
                We help non-technical founders build, launch, and scale. No fluff. No outsourcing. Just pure execution with <span className="accent-text" style={{ fontWeight: 'bold' }}>AI + Expert Builders</span>.
              </p>
              <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
                <a href="https://calendly.com/ritwikr850/30min" target="_blank" className="btn btn-primary">
                  Book Strategy Call <ArrowRight size={20} style={{ marginLeft: '0.75rem' }} />
                </a>
                <a href="#how-it-works" className="btn btn-outline">
                  How it Works
                </a>
              </div>
              <div style={{ marginTop: '3.5rem', display: 'flex', gap: '2.5rem', color: 'var(--secondary)', fontSize: '0.95rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <CheckCircle2 size={18} color="var(--accent)" /> AI-Powered Speed
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <CheckCircle2 size={18} color="var(--accent)" /> In-House Dev Team
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div className="float-anim" style={{
                position: 'relative',
                width: '100%',
                maxWidth: '440px',
                aspectRatio: '0.8',
                borderRadius: '32px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 30px 60px rgba(0,0,0,0.6)'
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
                  padding: '2rem',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                  zIndex: 2
                }}>
                  <p style={{ color: 'white', fontWeight: '800', fontSize: '1.25rem', marginBottom: '0.25rem' }}>Ritwik Raj</p>
                  <p style={{ color: 'var(--accent)', fontSize: '0.9rem', margin: 0, fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>Founder & Builder</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="container">
          <div className="grid grid-cols-2" style={{ gap: '6rem', alignItems: 'center' }}>
            <Reveal>
              <h2 className="gradient-text">Why I Built This</h2>
              <p>
                I&apos;ve seen too many brilliant founders fail—not because their ideas were bad, but because <strong>execution is hard</strong>.
              </p>
              <p>
                Agencies overcharge and underdeliver. Freelancers ghost you. And trying to learn to code while running a business is a recipe for burnout.
              </p>
              <p>
                I built <strong>Voltnestx</strong> to be the partner I wish I had. We aren&apos;t just &quot;devs for hire.&quot; We are your co-builders. We use AI to move fast, but we use human expertise to build right.
              </p>
              <div style={{ marginTop: '2.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <Image
                  src="/images/ritwik.jpg"
                  alt="Ritwik"
                  width={64}
                  height={64}
                  className="rounded-full"
                  style={{ borderRadius: '50%', border: '2px solid var(--accent)' }}
                />
                <a href="https://www.youtube.com/@Ritwik8908" target="_blank" className="btn btn-outline" style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}>
                  <Youtube size={18} color="#ff0000" style={{ marginRight: '0.5rem' }} /> Watch Journey
                </a>
              </div>
            </Reveal>

            <div className="grid grid-cols-2" style={{ gap: '1.5rem' }}>
              {[
                { icon: Brain, title: "AI Native", desc: "Leveraging the latest AI tools to code faster and smarter." },
                { icon: Target, title: "Execution First", desc: "We don't just strategize. We build, ship, and iterate." },
                { icon: Code, title: "In-House Team", desc: "No outsourcing. A dedicated team of senior engineers." },
                { icon: Zap, title: "90-Day Sprint", desc: "From concept to live product in 90 days or less." }
              ].map((item, i) => (
                <Reveal key={item.title} delay={i * 0.1}>
                  <div className="card" style={{ height: '100%', padding: '2rem' }}>
                    <item.icon size={32} color="var(--accent)" style={{ marginBottom: '1.5rem' }} />
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{item.title}</h3>
                    <p style={{ fontSize: '0.9rem', margin: 0 }}>{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="text-center" style={{ marginBottom: '5rem' }}>
              <span className="accent-text" style={{ fontWeight: '800', textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.85rem' }}>Engineers</span>
              <h2 className="gradient-text">Meet the Builders</h2>
              <p className="text-lg">The core team executing your vision</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-3" style={{ gap: '2.5rem' }}>
            {[
              { name: "Ritwik Raj", role: "Founder & Venture Builder", img: "/images/ritwik.jpg", link: "https://www.youtube.com/@Ritwik8908", type: "youtube" },
              { name: "Aamir Taiman", role: "Venture Partner", img: "/images/aamir.jpg", link: "mailto:aamirtaiman.official@gmail.com", type: "mail" },
              { name: "Ashish Singh", role: "Venture Partner", img: "/images/ashish.jpg", link: "mailto:clickproagency.org@gmail.com", type: "mail" }
            ].map((member, i) => (
              <Reveal key={member.name} delay={i * 0.1}>
                <div className="card glass" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
                  <div style={{
                    position: 'relative',
                    width: '180px',
                    height: '180px',
                    margin: '0 auto 2rem',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '4px solid var(--accent)',
                    boxShadow: '0 0 30px rgba(59, 130, 246, 0.4)'
                  }}>
                    <Image src={member.img} alt={member.name} fill style={{ objectFit: 'cover' }} />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{member.name}</h3>
                  <p className="accent-text" style={{ fontWeight: '700', marginBottom: '1.5rem', fontSize: '0.9rem', textTransform: 'uppercase' }}>{member.role}</p>
                  <a href={member.link} target="_blank" className="btn btn-outline" style={{ padding: '0.6rem 1.5rem', fontSize: '0.8rem', width: '100%' }}>
                    {member.type === 'youtube' ? <Youtube size={16} color="#ff0000" /> : <Mail size={16} />}
                    <span style={{ marginLeft: '0.5rem' }}>{member.type === 'youtube' ? 'YouTube' : 'Contact'}</span>
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section" style={{ background: 'linear-gradient(to bottom, transparent, rgba(239, 68, 68, 0.05), transparent)' }}>
        <div className="container text-center" style={{ maxWidth: '900px' }}>
          <Reveal>
            <h2 className="gradient-text">The &quot;Founder&apos;s Trap&quot;</h2>
            <p className="text-lg">Most non-technical founders get stuck in the &quot;Idea Stage&quot; for years. Why?</p>
          </Reveal>

          <div className="grid grid-cols-3" style={{ marginTop: '4rem' }}>
            {[
              { title: "No Tech Team", desc: "Can&apos;t find a CTO, and hiring an agency costs $50k+ which is high-risk." },
              { title: "Lack of Clarity", desc: "Too many features, confusing advice, and &quot;analysis paralysis&quot;." },
              { title: "Slow Execution", desc: "Months of planning without a single line of production code." }
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div style={{ padding: '1.5rem' }}>
                  <XCircle size={40} color="#ef4444" style={{ marginBottom: '1.5rem', margin: '0 auto 1.5rem' }} />
                  <h3 style={{ fontSize: '1.25rem', color: '#ef4444' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.95rem' }}>{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section" id="how-it-works">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '5rem' }}>
            <span className="accent-text" style={{ fontWeight: '800', textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.85rem' }}>Roadmap</span>
            <h2 className="gradient-text">The 90-Day Blueprint</h2>
          </div>

          <div className="grid grid-cols-3" style={{ gap: '3rem' }}>
            {[
              { step: "01", title: "Validate & Scope", items: ["Market Research", "Feature Prioritization", "Technical Architecture"] },
              { step: "02", title: "Build with AI", items: ["High-Velocity Coding", "MVP Development", "Weekly Sprints & Demos"], highlight: true },
              { step: "03", title: "Launch & Grow", items: ["Deployment & CI/CD", "User Onboarding", "Feedback Loop"] }
            ].map((item, i) => (
              <Reveal key={item.step} delay={i * 0.1}>
                <div className={`card ${item.highlight ? 'glass' : ''}`} style={{
                  position: 'relative',
                  borderColor: item.highlight ? 'var(--accent)' : 'var(--border)',
                  background: item.highlight ? 'rgba(59, 130, 246, 0.03)' : ''
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '-1.5rem',
                    left: '1.5rem',
                    fontSize: '4rem',
                    fontWeight: '900',
                    color: 'rgba(255,255,255,0.05)',
                    zIndex: 0
                  }}>{item.step}</div>
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <h3 style={{ marginBottom: '1.5rem', color: item.highlight ? 'var(--accent)' : 'white' }}>{item.title}</h3>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {item.items.map(li => (
                        <li key={li} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.95rem', alignItems: 'center' }}>
                          <CheckCircle2 size={18} color="var(--accent)" /> {li}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div className="grid grid-cols-2" style={{ gap: '6rem', alignItems: 'center' }}>
            <Reveal>
              <h2 className="gradient-text">Human Intelligence. <br /><span className="accent-text">AI Velocity.</span></h2>
              <p>
                We use a proprietary stack of AI coding assistants and senior architecture patterns to deliver months of work in weeks. We don&apos;t charge by the hour; we deliver results.
              </p>
              <div style={{ display: 'flex', gap: '3.5rem', marginTop: '3rem' }}>
                <div>
                  <h4 style={{ fontSize: '3rem', marginBottom: '0.25rem' }} className="accent-text">90</h4>
                  <span style={{ fontSize: '0.85rem', color: 'var(--secondary)', fontWeight: '700', textTransform: 'uppercase' }}>Days to Launch</span>
                </div>
                <div>
                  <h4 style={{ fontSize: '3rem', marginBottom: '0.25rem' }} className="accent-text">100%</h4>
                  <span style={{ fontSize: '0.85rem', color: 'var(--secondary)', fontWeight: '700', textTransform: 'uppercase' }}>IP Ownership</span>
                </div>
              </div>
            </Reveal>
            <div className="grid grid-cols-2" style={{ gap: '1.5rem' }}>
              {['MVP Development', 'AI Automation', 'Idea Validation', 'Growth Systems'].map((item, i) => (
                <Reveal key={item} delay={i * 0.1}>
                  <div className="card glass" style={{ textAlign: 'center', padding: '2rem' }}>
                    <span style={{ fontWeight: '800', fontSize: '1rem' }}>{item}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" id="cta">
        <div className="container" style={{ position: 'relative' }}>
          <div className="glass" style={{
            borderRadius: '40px',
            padding: '6rem 2rem',
            textAlign: 'center',
            overflow: 'hidden',
            position: 'relative'
          }}>
            <Reveal>
              <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginBottom: '1.5rem' }} className="gradient-text">Ready to Build?</h2>
              <p style={{ maxWidth: '600px', margin: '0 auto 4rem', fontSize: '1.25rem' }}>
                We only work with 3 founders at a time to ensure obsessive attention to detail.
                Slots for {new Date().toLocaleString('default', { month: 'long' })} are filling up.
              </p>
              <a href="https://calendly.com/ritwikr850/30min" target="_blank" className="btn btn-primary" style={{ padding: '1.2rem 3.5rem', fontSize: '1.2rem' }}>
                Secure Your Slot <ChevronRight size={20} style={{ marginLeft: '0.5rem' }} />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '4rem 0', borderTop: '1px solid var(--border)', textAlign: 'center', background: 'black' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: '900' }} className="gradient-text">Voltnestx</div>
            <p style={{ fontSize: '0.9rem', color: 'var(--secondary)' }}>&copy; {new Date().getFullYear()} Voltnestx. Focused on Pure Execution.</p>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <a href="https://www.youtube.com/@Ritwik8908" target="_blank" style={{ color: 'var(--secondary)' }} className="btn-outline">
                <Youtube size={20} />
              </a>
              <a href="mailto:ritwikr850@gmail.com" style={{ color: 'var(--secondary)' }} className="btn-outline">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}


