const rooms = [
  {
    name: "Gallery",
    note: "Selected work from personal Studios.",
    href: "https://gallery.nebari.com.au",
    image: "/gallery.png",
    tone: "gallery",
  },
  {
    name: "Kitchen",
    note: "Recipes to cook one step at a time.",
    href: "https://kitchen.nebari.com.au",
    image: "/kitchen.png",
    tone: "kitchen",
  },
  {
    name: "Studio",
    note: "Quiet corners for meaningful work.",
    href: "https://studio.nebari.com.au",
    image: "/studio.png",
    tone: "studio",
  },
  {
    name: "Library",
    note: "Books read, remembered and freely shared.",
    href: "https://library.nebari.com.au",
    image: "/library.png",
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
          <p>Stories, art, food, working spaces, books and wellbeing—each with a life of its own, growing from the same roots.</p>
        </div>

        <a className="legend-card" href="https://local-legend.com.au">
          <img className="featured-image" src="/local-legend.png" alt="" />
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
              <img className="room-image" src={room.image} alt="" />
              <span className="card-copy">
                <strong>{room.name}</strong>
                <span>{room.note}</span>
              </span>
              <span className="arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>

        <a className="peace-card" href="https://peacewithin.nebari.com.au">
          <span className="peace-motif" aria-hidden="true"><i /><i /><i /></span>
          <span className="card-copy">
            <span className="card-kicker">Space to return to yourself</span>
            <strong>Peace Within</strong>
            <span>Gentle Access Bars and energy-clearing sessions on the Sunshine Coast.</span>
          </span>
          <span className="arrow" aria-hidden="true">↗</span>
        </a>
      </section>

      <footer>
        <span>Nebari</span>
        <span>Perth, Western Australia</span>
      </footer>
    </main>
  );
}