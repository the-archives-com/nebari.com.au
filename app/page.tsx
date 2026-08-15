const rooms = [
  {
    name: "Gallery",
    note: "Selected work from personal Studios.",
    href: "https://gallery.nebari.com.au",
    mark: "G",
    tone: "gallery",
  },
  {
    name: "Kitchen",
    note: "Recipes to cook one step at a time.",
    href: "https://kitchen.nebari.com.au",
    mark: "K",
    tone: "kitchen",
  },
  {
    name: "Studio",
    note: "Quiet corners for meaningful work.",
    href: "https://studio.nebari.com.au",
    mark: "S",
    tone: "studio",
  },
  {
    name: "Library",
    note: "Books read, remembered and freely shared.",
    href: "https://library.nebari.com.au",
    mark: "L",
    tone: "library",
  },
];

export default function Home() {
  return (
    <main>
      <header className="masthead">
        <a className="wordmark" href="/" aria-label="Nebari home">
          <span className="seal" aria-hidden="true">根</span>
          <span>Nebari</span>
        </a>
        <p>A place for things to grow.</p>
      </header>

      <section className="gateway" aria-labelledby="gateway-title">
        <div className="intro">
          <p className="eyebrow">The Nebari rooms</p>
          <h1 id="gateway-title">Choose a doorway.</h1>
          <p>Stories, art, food, working spaces and books—each with a life of its own, growing from the same roots.</p>
        </div>

        <a className="legend-card" href="https://local-legend.com.au">
          <span className="legend-mark" aria-hidden="true">LL</span>
          <span className="card-copy">
            <span className="card-kicker">Stories held in place</span>
            <strong>Local Legend</strong>
            <span>Record the people, places and memories that deserve to remain.</span>
          </span>
          <span className="arrow" aria-hidden="true">↗</span>
        </a>

        <div className="room-grid">
          {rooms.map((room) => (
            <a className={`room-card ${room.tone}`} href={room.href} key={room.name}>
              <span className="room-mark" aria-hidden="true">{room.mark}</span>
              <span className="card-copy">
                <strong>{room.name}</strong>
                <span>{room.note}</span>
              </span>
              <span className="arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>

      <footer>
        <span>Nebari</span>
        <span>Perth, Western Australia</span>
      </footer>
    </main>
  );
}
