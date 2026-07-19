import { useEffect, useState } from "react";
import api from "../api/client.js";

// Fallback data shown if the API/database isn't reachable yet
const fallbackStats = [
  { prefix: "$", value: "2.8M+", label: "Revenue Generated" },
  { value: "18.6x", label: "Average ROAS" },
  { value: "50M+", label: "People Reached" },
  { value: "2,500+", label: "Leads Generated" },
];

export default function Results() {
  const [stats, setStats] = useState(fallbackStats);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/stats")
      .then((res) => {
        if (res.data && res.data.length) setStats(res.data);
      })
      .catch(() => {
        // keep fallback data if the API isn't running
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="results">
      <div className="wrap">
        <div className="results-band">
          <div className="results-intro">
            <span className="eyebrow">Proven Results</span>
            <h3>Real Results That Drive Growth</h3>
            <p>Every campaign is built around one goal — measurable impact on real business numbers.</p>
            <a href="#portfolio">See All Results →</a>
          </div>
          {loading
            ? <div className="loading-row">Loading stats…</div>
            : stats.map((s) => (
                <div className="result-stat" key={s.label}>
                  <div className="num">
                    {s.prefix ? <span>{s.prefix}</span> : null}
                    {s.value}
                  </div>
                  <div className="lbl">{s.label}</div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}
