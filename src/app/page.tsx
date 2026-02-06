"use client";

import Image from "next/image";
import { ArrowRight, CheckCircle2, XCircle, Code, Brain, Target, Zap, ChevronRight, Youtube, Mail } from "lucide-react";
import { Reveal, BackgroundMesh } from "@/components/Effects";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main style={{ position: 'relative', overflowX: 'hidden' }}>
      <div className="bg-dot-grid" />
      <BackgroundMesh />

      {/* Navigation */}
      <nav className="glass" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100 }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '64px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem', fontWeight: '600' }}>
            <Zap size={16} color="var(--accent)" fill="var(--accent)" />
            <span className="gradient-text" style={{ fontSize: '1.125rem' }}>Voltnestx</span>
          </div>
          <a href="https://calendly.com/ritwikr850/30min" target="_blank" className="btn btn-primary">
            Book Call
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div style={{ maxWidth: '720px' }}>
            <Reveal>
              <div style={{ marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '0.65rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--accent)', opacity: 0.8 }}>
                  Venture Launch Studio
                </span>
              </div>
              <h1 className="gradient-text">
                Build your vision into a <br />
                <span className="highlight">market-ready product</span> in 90 days.
              </h1>
              <p style={{ maxWidth: '460px', marginBottom: '1.75rem', fontSize: '1rem', color: '#888', lineHeight: '1.6' }}>
                We help non-technical founders build, launch, and scale. No fluff. No outsourcing. Just pure execution with senior builders and AI velocity.
              </p>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <a href="https://calendly.com/ritwikr850/30min" target="_blank" className="btn btn-primary">
                  Start Building <ArrowRight size={14} style={{ marginLeft: '0.5rem' }} />
                </a>
                <a href="#how-it-works" className="btn btn-outline">
                  Our Process
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '4rem', alignItems: 'center' }}>
              <div>
                <span className="accent-text" style={{ fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Vision</span>
                <h2 className="gradient-text" style={{ marginTop: '0.5rem' }}>Execution is the <br /><span className="highlight">only thing that matters.</span></h2>
                <p style={{ fontSize: '1.125rem' }}>
                  I built Voltnestx to be the partner I wish I had. We aren't just devs for hire. We are your co-builders. We use AI to move fast, and human expertise to build right.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '3rem' }}>
                  {[
                    { icon: Brain, title: "AI Native" },
                    { icon: Target, title: "Execution First" },
                    { icon: Code, title: "In-House Team" },
                    { icon: Zap, title: "90-Day Sprint" }
                  ].map((item) => (
                    <div key={item.title} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div className="glass" style={{ padding: '0.5rem', borderRadius: '8px' }}>
                        <item.icon size={18} color="var(--accent)" />
                      </div>
                      <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ position: 'relative' }}>
                <div className="float-anim" style={{
                  position: 'relative',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  border: '1px solid var(--border)',
                  aspectRatio: '0.85',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
                }}>
                  <Image
                    src="/images/ritwik.jpg"
                    alt="Ritwik Raj"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: 0, left: 0, right: 0,
                    padding: '1.5rem',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)'
                  }}>
                    <p style={{ margin: 0, fontWeight: '600', color: 'white' }}>Ritwik Raj</p>
                    <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--accent)' }}>Founder & Chief Architect</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process Section */}
      <section className="section" id="how-it-works" style={{ background: 'rgba(255,255,255,0.01)' }}>
        <div className="container text-center">
          <Reveal>
            <span style={{ fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)' }}>Blueprint</span>
            <h2 className="gradient-text" style={{ marginTop: '1rem' }}>The 90-Day Path to Launch</h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginTop: '4rem', textAlign: 'left' }}>
            {[
              { step: "01", title: "Validate & Scope", items: ["Market Research", "Feature Mapping"] },
              { step: "02", title: "Build with AI", items: ["High-Velocity Dev", "Weekly Demos"] },
              { step: "03", title: "Launch & Growth", items: ["Deployment", "Feedback Loops"] }
            ].map((item) => (
              <Reveal key={item.step}>
                <div className="card" style={{ height: '100%' }}>
                  <span style={{ fontSize: '2rem', fontWeight: '700', opacity: 0.1, display: 'block', marginBottom: '1rem' }}>{item.step}</span>
                  <h3 style={{ marginBottom: '1.5rem' }}>{item.title}</h3>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {item.items.map(li => (
                      <li key={li} style={{ fontSize: '0.875rem', color: '#666', marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}>
                        <CheckCircle2 size={14} color="var(--accent)" /> {li}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 className="gradient-text">Meet the Builders</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {[
              { name: "Ritwik Raj", role: "Founder", img: "/images/ritwik.jpg" },
              { name: "Aamir Taiman", role: "Partner", img: "/images/aamir.jpg" },
              { name: "Ashish Singh", role: "Partner", img: "/images/ashish.jpg" }
            ].map((member) => (
              <Reveal key={member.name}>
                <div style={{ textAlign: 'center' }}>
                  <div className="float-anim" style={{
                    width: '100%',
                    aspectRatio: '1',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    marginBottom: '1.5rem',
                    border: '1px solid var(--border)'
                  }}>
                    <Image src={member.img} alt={member.name} width={400} height={400} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <h3 style={{ margin: '0 0 0.25rem 0' }}>{member.name}</h3>
                  <p style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{member.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className="glass" style={{ padding: '5rem 2rem', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
            <Reveal>
              <h2 className="gradient-text" style={{ fontSize: '3rem' }}>Ready to <span className="highlight">build your vision?</span></h2>
              <p style={{ maxWidth: '500px', margin: '0 auto 2.5rem' }}>
                We only take 3 projects per quarter to ensure obsessive quality. Secure your spot for the next cohort.
              </p>
              <a href="https://calendly.com/ritwikr850/30min" target="_blank" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1rem' }}>
                Schedule Strategy Session
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '4rem 0', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontSize: '1rem', fontWeight: '600' }} className="gradient-text">Voltnestx</div>
            <p style={{ margin: 0, fontSize: '0.875rem' }}>&copy; {new Date().getFullYear()} Voltnestx</p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="https://youtube.com" className="btn-outline" style={{ padding: '0.5rem', borderRadius: '50%' }}><Youtube size={16} /></a>
              <a href="mailto:ritwikr850@gmail.com" className="btn-outline" style={{ padding: '0.5rem', borderRadius: '50%' }}><Mail size={16} /></a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}


