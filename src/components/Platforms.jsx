const platforms = [
  { icon: "f", name: "Facebook" },
  { icon: "◉", name: "Instagram" },
  { icon: "∞", name: "Meta Ads" },
  { icon: "♪", name: "TikTok" },
  { icon: "in", name: "LinkedIn" },
  { icon: "▶", name: "YouTube" },
  { icon: "P", name: "Pinterest" },
  { icon: "G", name: "Google Ads" },
];

export default function Platforms() {
  return (
    <section style={{ padding: "0 0 88px" }}>
      <div className="wrap">
        <div className="platforms-row">
          {platforms.map((p) => (
            <div className="plat" key={p.name}>
              <i>{p.icon}</i>
              {p.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
