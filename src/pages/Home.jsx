import React from 'react';
import heroVideo from '../assets/videos/hero-bg.mp4';
import greenDot from '../assets/svg/green_dot.svg';
import greenPlus from '../assets/svg/green_plus.svg';
import flowLine1 from '../assets/svg/flow_line-001.svg';
import flowLine2 from '../assets/svg/flow_line-002.svg';
import flowLine3 from '../assets/svg/flow_line-003.svg';
import flowLine4 from '../assets/svg/flow_line-004.svg';
import flowLine5 from '../assets/svg/flow_line-005.svg';
import flowLine6 from '../assets/svg/flow_line-006.svg';
import ind1 from '../assets/images/ind1.png';
import ind2 from '../assets/images/ind2.png';
import ind3 from '../assets/images/ind3.png';
import ind4 from '../assets/images/ind4.png';
import ind5 from '../assets/images/ind5.png';
import founderImg from '../assets/images/founder.png';

const Home = () => {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        {/* STARS */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${i % 2 === 0 ? Math.random() * 20 : 80 + Math.random() * 20}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animation: `twinkle ${Math.random() * 3 + 2}s infinite, float ${Math.random() * 5 + 5}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}

        <video className="hero-video" autoPlay muted loop playsInline preload="none">
          <source src={heroVideo} type="video/mp4" />
        </video>

        <div className="container text-center">
          <h1 className="hero-title">
            ARCHITECTING BUSINESS <br />
            THROUGH STRUCTURED SYSTEMS
          </h1>

          <p className="hero-sub">
            Zoytree helps organizations design structured business systems and
            digital solutions that enable operational clarity, efficiency, and
            scalable growth.
          </p>

          <div className="hero-stage">
            <div className="stage-box">
              <div className="stage-item">
                <span>From Business Chaos</span>
                <div className="arrow">↓</div>
              </div>

              <div className="stage-item">
                <span>Structured Systems</span>
                <div className="arrow">↓</div>
              </div>

              <div className="stage-item active">
                <span>Scalable Growth</span>
              </div>

              <span className="stage-dot">
                <img src={greenDot} alt="dot icon" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="container">
          <h2 className="section-title dark">OUR SERVICES</h2>

          <div className="services-row">
            {/* CARD 1 */}
            <div className="service-card">
              <div className="service-header">
                <span className="icon">
                  <img src={greenDot} alt="dot icon" />
                </span>
                <h5>Diagnose</h5>
              </div>

              <span style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <span className="icon">
                  <img src={greenPlus} alt="plus icon" />
                </span>
                <span style={{ width: '40%', paddingBottom: '15px' }}>
                  <img src={flowLine1} alt="flow line icon" />
                </span>
              </span>
            </div>

            {/* CARD 2 */}
            <div className="service-card">
              <div className="service-header">
                <span className="icon">
                  <img src={greenDot} alt="dot icon" />
                </span>
                <h5>Architect</h5>
              </div>
              <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <span style={{ width: '40%', paddingBottom: '15px' }}>
                  <img src={flowLine2} alt="flow line icon" />
                </span>
                <span className="icon">
                  <img src={greenPlus} alt="plus icon" />
                </span>
                <span style={{ width: '40%', paddingBottom: '15px' }}>
                  <img src={flowLine3} alt="flow line icon" />
                </span>
              </span>
            </div>

            {/* CARD 3 */}
            <div className="service-card">
              <div className="service-header">
                <span className="icon">
                  <img src={greenDot} alt="dot icon" />
                </span>
                <h5>Digitize</h5>
              </div>

              <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <span style={{ width: '40%', paddingBottom: '15px' }}>
                  <img src={flowLine4} alt="flow line icon" />
                </span>
                <span className="icon">
                  <img src={greenPlus} alt="plus icon" />
                </span>
                <span style={{ width: '40%', paddingBottom: '15px' }}>
                  <img src={flowLine5} alt="flow line icon" />
                </span>
              </span>
            </div>

            {/* CARD 4 */}
            <div className="service-card">
              <div className="service-header">
                <span className="icon">
                  <img src={greenDot} alt="dot icon" />
                </span>
                <h5>Scale</h5>
              </div>

              <span style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ width: '40%', paddingBottom: '15px' }}>
                  <img src={flowLine6} alt="flow line icon" />
                </span>
                <span className="icon">
                  <img src={greenPlus} alt="plus icon" />
                </span>
              </span>
            </div>
          </div>

          <div className="integration-box">
            Integrating Business Strategy + Business Systems + Digital Solutions +
            Growth Execution.
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="industries">
        <div className="container">
          <div className="industries-header">
            <h2>PARTNERING INDUSTRIES</h2>
            <p>At Zoytree, we collaborate with organizations across industries.</p>
          </div>

          <div className="industries-grid">
            <div className="industry-card">
              <img src={ind1} loading="lazy" alt="ind1" />
              <div className="industry-label">Clinics, Hospitals, Healthcare & Medical Practices</div>
            </div>

            <div className="industry-card">
              <img src={ind2} loading="lazy" alt="ind2" />
              <div className="industry-label">Construction, Interior Design & Contracting Companies</div>
            </div>

            <div className="industry-card">
              <img src={ind3} loading="lazy" alt="ind3" />
              <div className="industry-label">Logistics companies,</div>
            </div>

            <div className="industry-card">
              <img src={ind4} loading="lazy" alt="ind4" />
              <div className="industry-label">Professional Services Businesses</div>
            </div>

            <div className="industry-card">
              <img src={ind5} loading="lazy" alt="ind5" />
              <div className="industry-label">Retail & Multi-Location Businesses</div>
            </div>

            <div className="industry-card empty">
              <div className="industry-label">Emerging & Growth-Stage Businesses</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="founder">
        <div className="container">
          <h2 className="section-title">FOUNDER’S NOTE</h2>

          <div className="founder-grid">
            <div className="founder-text-box">
              <p>
                In working with growing enterprises, one pattern became clear.
                Businesses rarely fail because of lack of ambition. They struggle
                because growth increases complexity faster than structure evolves.
                Spreadsheets multiply. Departments disconnect. Approvals become
                informal. Visibility declines. Technology without architecture
                increases chaos.
              </p>

              <p>
                Zoytree was built to bring structure before software. Because when
                systems are architected properly, growth becomes sustainable.
              </p>

              <p className="founder-sign">– Founder, Zoytree</p>
            </div>

            <div className="founder-card">
              <div className="founder-img">
                <img src={founderImg} alt="Founder" />
              </div>

              <div className="founder-actions">
                <button className="founder-btn">FOUNDERS NAME</button>
                <div className="linkedin-btn">in</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
