import { Link, useNavigate } from "react-router-dom";

import "./Dashboard.css";

function Dashboard() {

  const navigate = useNavigate();


  const logout = () => {

    localStorage.removeItem("token");

    navigate("/login");
  };


  return (

    <main className="dashboard-shell">


      {/* ================= SIDEBAR ================= */}

      <aside className="dashboard-sidebar">

        <Link className="dash-brand" to="/">
          <span>✦</span>
          FlowPilot
        </Link>


        <div className="sidebar-label">
          WORKSPACE
        </div>


        <nav className="sidebar-nav">

          <Link
            className="active"
            to="/dashboard"
          >
            ⌂
            <span>Overview</span>
          </Link>


          <Link to="/ai-assistant">
            ✦
            <span>AI Assistant</span>
          </Link>


          <a href="#automations">
            ↗
            <span>Automations</span>
          </a>


          <a href="#activity">
            ◷
            <span>Activity</span>
          </a>

        </nav>


        <div className="sidebar-bottom">


          <div className="connection-card">

            <div className="connection-dot" />

            <div>

              <strong>
                System online
              </strong>

              <span>
                AI + n8n connected
              </span>

            </div>

          </div>


          <button onClick={logout}>

            ↪

            <span>
              Log out
            </span>

          </button>

        </div>

      </aside>


      {/* ================= MAIN ================= */}

      <section className="dashboard-main">


        <header className="dash-header">

          <div>

            <span className="dash-kicker">
              WORKSPACE OVERVIEW
            </span>

            <h1>
              Welcome back.
            </h1>

            <p>
              Your automation workspace is ready.
            </p>

          </div>


          <Link
            className="ask-button"
            to="/ai-assistant"
          >
            ✦ Ask FlowPilot
            <span>→</span>
          </Link>

        </header>


        {/* ================= DASHBOARD GRID ================= */}

        <section className="dashboard-grid">


          {/* MAIN WORKFLOW CARD */}

          <article
            className="dash-card large-card"
            id="automations"
          >

            <div className="card-top">

              <div>

                <span className="card-kicker">
                  CORE WORKFLOW
                </span>

                <h2>
                  One place for the work you repeat.
                </h2>

              </div>

              <span className="card-symbol">
                ✦
              </span>

            </div>


            <p className="card-description">

              FlowPilot understands a natural-language
              request and routes it to the right
              automation.

            </p>


            <div className="capability-list">


              {/* AI */}

              <div>

                <span className="cap-icon">
                  AI
                </span>

                <div>

                  <strong>
                    General AI
                  </strong>

                  <small>
                    Questions, coding, explanations and ideas.
                  </small>

                </div>

                <b>
                  Active
                </b>

              </div>


              {/* GMAIL */}

              <div>

                <span className="cap-icon mail">
                  ✉
                </span>

                <div>

                  <strong>
                    Gmail automation
                  </strong>

                  <small>
                    Send messages through your connected
                    Gmail account.
                  </small>

                </div>

                <b>
                  Active
                </b>

              </div>


              {/* SCHEDULING */}

              <div>

                <span className="cap-icon time">
                  ◷
                </span>

                <div>

                  <strong>
                    Email scheduling
                  </strong>

                  <small>
                    Hand a future send time to the n8n scheduler.
                  </small>

                </div>

                <b>
                  Ready
                </b>

              </div>

            </div>

          </article>


          {/* QUICK START */}

          <article className="dash-card side-card">

            <span className="card-kicker">
              QUICK START
            </span>

            <h2>
              Try an instruction.
            </h2>

            <p>
              No forms. Just describe what you want
              FlowPilot to do.
            </p>


            <div className="example-box">

              <span>
                Try
              </span>

              <p>
                “Explain recursion in simple terms.”
              </p>

            </div>


            <Link
              className="card-link"
              to="/ai-assistant"
            >
              Open assistant →
            </Link>

          </article>


          {/* STATUS */}

          <article
            className="dash-card status-card"
            id="activity"
          >

            <div className="status-head">

              <div>

                <span className="card-kicker">
                  LIVE STATUS
                </span>

                <h2>
                  Workflow stack
                </h2>

              </div>

              <span className="online-pill">
                ● ONLINE
              </span>

            </div>


            <div className="stack-row">
              <span>
                React frontend
              </span>

              <b>
                Connected
              </b>
            </div>


            <div className="stack-row">
              <span>
                Spring Boot API
              </span>

              <b>
                Connected
              </b>
            </div>


            <div className="stack-row">
              <span>
                Groq AI
              </span>

              <b>
                Connected
              </b>
            </div>


            <div className="stack-row">
              <span>
                n8n + Gmail
              </span>

              <b>
                Connected
              </b>
            </div>

          </article>


          {/* ACTIVITY */}

          <article className="dash-card side-card activity-preview">

            <span className="card-kicker">
              ACTIVITY
            </span>

            <h2>
              Keep the important part.
            </h2>

            <p>
              Your latest workflow results can live here
              as the activity module is connected to the
              database.
            </p>

            <span className="coming-note">
              Activity log · next module
            </span>

          </article>


        </section>

      </section>

    </main>
  );
}

export default Dashboard;