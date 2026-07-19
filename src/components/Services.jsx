const services = [
  { icon: "◎", title: "Meta Ads Campaigns", desc: "High-converting Facebook & Instagram ad campaigns built around real audience data, not guesswork." },
  { icon: "◈", title: "Social Media Strategy", desc: "A custom content and growth strategy that builds your audience and turns followers into buyers." },
  { icon: "✎", title: "Content Creation", desc: "Scroll-stopping creatives, ad designs and short-form content built to hold attention." },
  { icon: "◐", title: "Community Management", desc: "Consistent engagement that builds trust with your audience and keeps them loyal to your brand." },
  { icon: "▤", title: "Analytics & Reporting", desc: "Clear, honest reporting that tracks what's working and what to fix — every single month." },
  { icon: "▲", title: "Lead Generation", desc: "Funnels built to generate qualified leads and convert them into paying, repeat customers." },
];

export default function Services() {
  return (
    <section id="services">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">What I Do</span>
          <h2 className="display">Services I Offer</h2>
          <p>Complete solutions to grow your brand online</p>
        </div>
        <div className="services-grid">
          {services.map((s) => (
            <div className="service-card" key={s.title}>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
