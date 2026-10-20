import { Link } from "react-router-dom";
import "./Landing.css";

function Landing() {
  return (
    <main className="landing">

      {/* ================= NAVBAR ================= */}

      <nav className="site-nav">

        <Link className="brand" to="/">
          <span className="brand-mark">✦</span>
          <span>FlowPilot</span>
        </Link>

        <div className="nav-links">
          <a href="#product">Product</a>
          <a href="#workflow">How it works</a>
          <a href="#demo">Demo</a>
        </div>

        <div className="nav-actions">
          <Link className="nav-login" to="/login">
            Log in
          </Link>

          <Link className="nav-cta" to="/login">
            Get started
          </Link>
        </div>

      </nav>


      {/* ================= HERO ================= */}

      <section className="hero" id="product">

        <div className="hero-copy">

          <div className="eyebrow">
            <span className="status-dot" />
            AI workflow automation
          </div>

          <h1>
            Tell it what to do.
            <br />
            <span>FlowPilot does the rest.</span>
          </h1>

          <p>
            A practical AI workspace for everyday automation.
            Ask questions, send emails, and schedule tasks using
            plain language.
          </p>

          <div className="hero-actions">

            <Link className="primary-button" to="/login">
              Start using FlowPilot
              <span>→</span>
            </Link>

            <a className="secondary-button" href="#workflow">
              See how it works
            </a>

          </div>

          <div className="trust-line">
            <span>React</span>
            <i>•</i>
            <span>Spring Boot</span>
            <i>•</i>
            <span>Groq</span>
            <i>•</i>
            <span>n8n</span>
          </div>

        </div>


        {/* ================= WORKFLOW VISUAL ================= */}

        <div
          className="hero-visual"
          aria-label="FlowPilot workflow preview"
        >

          <div className="window-chrome">

            <div className="window-dots">
              <span />
              <span />
              <span />
            </div>

            <span className="window-title">
              flowpilot / workflow
            </span>

            <span className="window-live">
              ● live
            </span>

          </div>


          <div className="workflow-preview">

            <div className="preview-label">
              Natural language → action
            </div>


            <div className="preview-prompt">

              <span className="preview-icon">
                ✦
              </span>

              <div>
                <small>YOU</small>

                <p>
                  Send the project update to the team at 6:30 PM.
                </p>
              </div>

            </div>


            <div className="flow-line">
              <span />
              <span />
              <span />
            </div>


            <div className="preview-step">

              <div className="step-icon ai">
                AI
              </div>

              <div>
                <small>FLOWPILOT AI</small>

                <p>
                  Understands intent and builds the action.
                </p>
              </div>

              <strong>
                READY
              </strong>

            </div>


            <div className="flow-line">
              <span />
              <span />
              <span />
            </div>


            <div className="preview-result">

              <div>
                <span>✓</span>
                Email
              </div>

              <div>
                <span>◷</span>
                Scheduled
              </div>

              <div>
                <span>↗</span>
                Gmail
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= HOW IT WORKS ================= */}

      <section className="workflow-strip" id="workflow">

        <div>
          <span className="strip-number">01</span>

          <strong>
            Ask
          </strong>

          <p>
            Describe the task normally.
          </p>
        </div>


        <div>
          <span className="strip-number">02</span>

          <strong>
            Understand
          </strong>

          <p>
            AI turns intent into a structured action.
          </p>
        </div>


        <div>
          <span className="strip-number">03</span>

          <strong>
            Automate
          </strong>

          <p>
            n8n executes the workflow.
          </p>
        </div>


        <div>
          <span className="strip-number">04</span>

          <strong>
            Done
          </strong>

          <p>
            Get the result without repetitive work.
          </p>
        </div>

      </section>


      {/* ================= DEMO / QR ================= */}

      <section className="demo-section" id="demo">

        <div className="demo-copy">

          <span className="section-kicker">
            Try it in real life
          </span>

          <h2>
            One assistant.
            <br />
            <span>Useful automation.</span>
          </h2>

          <p>
            FlowPilot is built around a simple idea:
            the interface should stay out of the way.
            You say what you need, and the system handles
            the plumbing behind it.
          </p>

          <Link className="text-link" to="/login">
            Open FlowPilot →
          </Link>

        </div>


        <div className="qr-card">

          <div className="qr-copy">

            <span className="qr-label">
              PROJECT DEMO
            </span>

            <h3>
              Scan to open FlowPilot
            </h3>

            <p>
              Add your ICQR 3D QR image as{" "}
              <code>/flowpilot-qr.png</code>.
            </p>

          </div>


          {/* 3D QR */}

          <div className="qr-stage">

            <div className="qr-floor" />

            <div className="qr-frame">

              <img
                src="/flowpilot-qr.png"
                alt="FlowPilot demo QR code"

                onError={(e) => {
                  e.currentTarget.style.display = "none";

                  if (e.currentTarget.nextElementSibling) {
                    e.currentTarget.nextElementSibling.style.display =
                      "grid";
                  }
                }}
              />

              <div className="qr-placeholder">

                <span>
                  QR
                </span>

                <small>
                  ADD ICQR IMAGE
                </small>

              </div>

            </div>

          </div>


          {/* GIF */}

          <div className="gif-slot">

            <img
              src="/flowpilot.gif"
              alt=""
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />

            <span>
              your fun GIF goes here ✦
            </span>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="site-footer">

        <div className="brand">

          <span className="brand-mark">
            ✦
          </span>

          <span>
            FlowPilot
          </span>

        </div>

        <span>
          AI workflow automation project · 2026
        </span>

      </footer>

    </main>
  );
}

export default Landing;