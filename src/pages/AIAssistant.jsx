import { useState } from "react";
import { Link } from "react-router-dom";

import "./AIAssistant.css";

function AIAssistant() {

  const [prompt, setPrompt] = useState("");

  const [response, setResponse] = useState(null);

  const [loading, setLoading] = useState(false);


  const handleSend = async () => {

    if (!prompt.trim()) {
      return;
    }

    setLoading(true);

    setResponse(null);


    try {

      const res = await fetch(
        "/api/ai/generate",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            prompt: prompt.trim(),
          }),
        }
      );


      const text = await res.text();


      if (!text.trim()) {

        throw new Error(
          `Backend returned an empty response. Status: ${res.status}`
        );

      }


      let data;

      try {

        data = JSON.parse(text);

      } catch {

        throw new Error(
          `Backend returned invalid JSON: ${text}`
        );

      }


      if (!res.ok) {

        throw new Error(
          data.message ||
          `AI request failed with status ${res.status}`
        );

      }


      setResponse(data);


    } catch (error) {

      console.error(
        "AI ERROR:",
        error
      );

      setResponse({
        action: "ERROR",
        answer: error.message,
      });


    } finally {

      setLoading(false);

    }

  };


  const useExample = (text) => {

    setPrompt(text);

    setResponse(null);

  };


  return (

    <main className="assistant-page">


      {/* ================= TOP BAR ================= */}

      <header className="assistant-topbar">

        <Link
          className="assistant-brand"
          to="/dashboard"
        >
          <span>✦</span>
          FlowPilot
        </Link>


        <Link
          className="back-link"
          to="/dashboard"
        >
          ← Overview
        </Link>

      </header>


      {/* ================= MAIN ================= */}

      <section className="assistant-shell">


        <div className="assistant-heading">

          <span className="assistant-kicker">
            FLOWPILOT AI
          </span>

          <h1>
            What do you want
            to get done?
          </h1>

          <p>
            Ask a question or describe an email
            workflow in plain language.
          </p>

        </div>


        {/* ================= COMPOSER ================= */}

        <div className="assistant-workspace">

          <div className="prompt-label">
            YOUR REQUEST
          </div>


          <textarea
            value={prompt}

            onChange={(e) =>
              setPrompt(e.target.value)
            }

            placeholder="e.g. Explain APIs in simple terms..."

            rows={6}
          />


          <div className="composer-footer">


            {/* QUICK PROMPTS */}

            <div className="suggestions">

              <button
                type="button"
                onClick={() =>
                  useExample(
                    "Explain what an API is in simple terms."
                  )
                }
              >
                Explain something
              </button>


              <button
                type="button"
                onClick={() =>
                  useExample(
                    "Send an email to shivrajt1217@gmail.com with subject FlowPilot Test and say this is a test email."
                  )
                }
              >
                Send an email
              </button>


              <button
                type="button"
                onClick={() =>
                  useExample(
                    "Send an email to shivrajt1217@gmail.com with subject Scheduled Test and say this is a scheduled email. Schedule it for tomorrow at 6:30 PM."
                  )
                }
              >
                Schedule email
              </button>

            </div>


            {/* RUN */}

            <button
              className="run-button"
              type="button"
              onClick={handleSend}
              disabled={loading}
            >

              {loading
                ? "Working..."
                : "Run workflow →"}

            </button>

          </div>

        </div>


        {/* ================= RESULT ================= */}

        {response && (

          <section className="assistant-result">


            <div className="result-top">

              <div>

                <span className="assistant-kicker">
                  RESULT
                </span>

                <h2>

                  {response.action === "GENERAL_QUERY"
                    ? "Answer"
                    : response.action === "SEND_EMAIL"
                    ? "Email workflow"
                    : "Something went wrong"}

                </h2>

              </div>


              <span
                className={`result-status ${
                  response.action === "ERROR"
                    ? "error"
                    : ""
                }`}
              >
                {response.action || "UNKNOWN"}
              </span>

            </div>


            {/* GENERAL AI ANSWER */}

            {response.answer && (

              <div className="answer-block">

                <p>
                  {response.answer}
                </p>

              </div>

            )}


            {/* EMAIL INFORMATION */}

            {response.action === "SEND_EMAIL" && (

              <div className="email-summary">


                <div>

                  <span>
                    TO
                  </span>

                  <strong>
                    {response.recipient}
                  </strong>

                </div>


                <div>

                  <span>
                    SUBJECT
                  </span>

                  <strong>
                    {response.subject}
                  </strong>

                </div>


                <div>

                  <span>
                    MESSAGE
                  </span>

                  <strong>
                    {response.body}
                  </strong>

                </div>


                {response.scheduledAt && (

                  <div>

                    <span>
                      SCHEDULED
                    </span>

                    <strong>
                      {response.scheduledAt}
                    </strong>

                  </div>

                )}

              </div>

            )}


            {/* SUCCESS */}

            {response.action === "SEND_EMAIL" && (

              <div className="workflow-confirmation">

                <span>
                  ✓
                </span>

                Workflow sent to n8n successfully.

              </div>

            )}

          </section>

        )}

      </section>

    </main>
  );
}

export default AIAssistant;