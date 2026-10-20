
import { useState } from "react";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:8080/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const text = await response.text();

      let data = {};

      try {
        data = text ? JSON.parse(text) : {};
      } catch {
        throw new Error("Unexpected response from server.");
      }

      if (!response.ok) {
        throw new Error(
          data.message || data.error || "Invalid email or password."
        );
      }

      if (!data.token) {
        throw new Error("Login succeeded, but no authentication token was returned.");
      }

      localStorage.setItem("token", data.token);

      window.location.href = "/dashboard";
    } catch (err) {
      setError(
        err.message === "Failed to fetch"
          ? "Unable to connect to FlowPilot. Make sure the backend is running."
          : err.message
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="fp-login">
      <div className="fp-login-glow fp-glow-one" />
      <div className="fp-login-glow fp-glow-two" />

      <header className="fp-topbar">
        <a href="/" className="fp-brand">
          <span className="fp-brand-icon">
            <svg
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="40" height="40" rx="12" fill="url(#fpLogo)" />
              <path
                d="M11 13H23C27 13 29 15 29 19C29 23 26 25 22 25H17V30H11V13Z"
                stroke="white"
                strokeWidth="2.4"
                strokeLinejoin="round"
              />
              <path
                d="M17 19H23M25 30L30 25"
                stroke="white"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="fpLogo"
                  x1="0"
                  y1="0"
                  x2="40"
                  y2="40"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9B78FF" />
                  <stop offset="1" stopColor="#6546E8" />
                </linearGradient>
              </defs>
            </svg>
          </span>

          <span className="fp-brand-name">
            Flow<span>Pilot</span>
          </span>
        </a>

        <a href="/" className="fp-back-link">
          <span aria-hidden="true">←</span> Back to home
        </a>
      </header>

      <section className="fp-login-layout">
        <div className="fp-login-intro">
          <div className="fp-eyebrow">
            <span className="fp-status-dot" />
            YOUR WORKFLOW, REIMAGINED
          </div>

          <h1>
            Less busywork.
            <br />
            <span>More flow.</span>
          </h1>

          <p className="fp-intro-description">
            Your AI-powered workspace for smarter workflows, effortless
            automation, and getting more done with less effort.
          </p>

          <div className="fp-visual">
            <div className="fp-visual-orbit fp-orbit-one" />
            <div className="fp-visual-orbit fp-orbit-two" />

            <div className="fp-visual-center">
              <svg
                viewBox="0 0 48 48"
                width="42"
                height="42"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M8 13H25C31 13 35 17 35 23C35 29 31 33 25 33H18V40H8V13Z"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 22H26M32 39L40 31"
                  stroke="#C4B5FD"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="fp-float-card fp-float-ai">
              <span className="fp-mini-icon fp-mini-purple">✳</span>
              <span>
                <strong>AI Assistant</strong>
                <small>Thinking smarter</small>
              </span>
              <span className="fp-live-dot" />
            </div>

            <div className="fp-float-card fp-float-email">
              <span className="fp-mini-icon fp-mini-blue">✉</span>
              <span>
                <strong>Email automation</strong>
                <small>Workflow connected</small>
              </span>
              <span className="fp-check">✓</span>
            </div>

            <div className="fp-float-card fp-float-flow">
              <span className="fp-mini-icon fp-mini-green">↗</span>
              <span>
                <strong>Smart workflows</strong>
                <small>Less manual work</small>
              </span>
            </div>
          </div>

          <div className="fp-intro-footer">
            <span className="fp-footer-line" />
            <span>One workspace. Smarter workflows.</span>
          </div>
        </div>

        <div className="fp-form-side">
          <div className="fp-login-card">
            <div className="fp-card-heading">
              <div className="fp-welcome-icon">✦</div>

              <div className="fp-card-kicker">WELCOME BACK</div>

              <h2>Sign in to FlowPilot</h2>

              <p>Your next productive session starts here.</p>
            </div>

            {error && (
              <div className="fp-error" role="alert">
                <span aria-hidden="true">!</span>
                {error}
              </div>
            )}

            <form onSubmit={handleLogin} className="fp-form">
              <div className="fp-field">
                <label htmlFor="fp-email">Email address</label>

                <div className="fp-input-wrap">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="14"
                      rx="3"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M4 7L12 13L20 7"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <input
                    id="fp-email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div className="fp-field">
                <div className="fp-label-row">
                  <label htmlFor="fp-password">Password</label>
                  <span className="fp-required-label">Required</span>
                </div>

                <div className="fp-input-wrap">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <rect
                      x="4"
                      y="10"
                      width="16"
                      height="11"
                      rx="3"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M8 10V7A4 4 0 0 1 16 7V10"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>

                  <input
                    id="fp-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                    required
                  />

                  <button
                    type="button"
                    className="fp-password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              <div className="fp-form-options">
                <label className="fp-remember">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>

                <span className="fp-forgot-placeholder">
                  Forgot password?
                </span>
              </div>

              <button
                type="submit"
                className="fp-submit"
                disabled={loading}
              >
                <span>{loading ? "Signing you in..." : "Sign in"}</span>

                {!loading && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 12H19M12 5L19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </form>

            <div className="fp-divider">
              <span />
              <p>YOUR WORKSPACE AWAITS</p>
              <span />
            </div>

            <div className="fp-security-note">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M12 3L20 6V11C20 16 16.5 19.5 12 21C7.5 19.5 4 16 4 11V6L12 3Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 12L11 14L15 10"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span>Your workspace, ready when you are.</span>
            </div>

            <p className="fp-register">
              New to FlowPilot? <a href="/register">Create an account</a>
            </p>
          </div>

          <p className="fp-copyright">
            © {new Date().getFullYear()} FlowPilot. Built for better workflows.
          </p>
        </div>
      </section>
    </main>
  );
}
