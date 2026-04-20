import React from 'react';
import logoSymbol from '../assets/svg/logo_symbol.svg';
import logoText from '../assets/svg/logo_text.svg';
import greenDot from '../assets/svg/green_dot.svg';
import greenAddSquare from '../assets/svg/green_add_square_hollow.svg';

const About = () => {
  return (
    <>
    <>
      {/* TOP SECTION */}
      <section className="top-section">
        {/* OVERLAY */}
        <div className="hero-overlay"></div>

        {/* STARS */}
        <div className="hero-stars">
          <div className="star s1"></div>
          <div className="star s2"></div>
          <div className="star s4"></div>
          <div className="star s5"></div>
        </div>

        {/* HERO */}
        <section className="about-hero text-center">
          <div className="container">
            <h1 className="hero-title">ABOUT ZOYTREE</h1>

            <p className="hero-sub">
              At Zoytree, we work with business owners to transform fragmented
              operations into integrated systems supported by modern digital
              platforms.
            </p>

            <div className="hero-stage">
              {/* LEFT CARD */}
              <div className="float-card left-card">
                <p>
                  Strategy alone is not enough.<br />
                  Technology alone is not enough.
                </p>
                <span className="stage-dot">
                  <img src={greenDot} alt="dot icon" />
                </span>
              </div>

              {/* RIGHT CARD */}
              <div className="float-card right-card">
                <span className="stage-dot">
                  <img src={greenDot} alt="dot icon" />
                </span>

                <p>Real growth happens when</p>

                <div className="tags">
                  <span>Strategy</span>
                  <span className="icon" style={{ background: 'none', margin: '0', padding: '0' }}>
                    <img src={greenAddSquare} alt="dot icon" />
                  </span>
                  <span>Systems</span>
                  <span className="icon" style={{ background: 'none', margin: '0', padding: '0' }}>
                    <img src={greenAddSquare} alt="dot icon" />
                  </span>
                  <span>Technology</span>
                  <span className="icon" style={{ background: 'none', margin: '0', padding: '0' }}>
                    <img src={greenAddSquare} alt="dot icon" />
                  </span>
                  <span>Execution</span>
                </div>

                <p>work together.</p>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* MISSION / VISION */}
      <section className="mission-section">
        <div className="container">
          <div className="grid grid-2">
            <div className="info-card">
              <span className="info-header">
                <span className="icon">
                  <img src={greenDot} alt="dot icon" />
                </span>
                <h5>Mission</h5>
              </span>
              <p>
                To partner with business owners in diagnosing operational
                challenges, architecting effective systems, implementing digital
                platforms, and building sustainable growth frameworks.
              </p>
            </div>

            <div className="info-card">
              <span className="info-header">
                <span className="icon">
                  <img src={greenDot} alt="dot icon" />
                </span>
                <h5>Vision</h5>
              </span>
              <p>
                To shape a future where businesses grow not through chaos and
                constant firefighting, but through well-architected systems,
                intelligent strategies, and scalable digital infrastructures.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
