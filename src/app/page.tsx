const events = [
  { time: "4:30 PM", title: "The Ceremony", detail: "As the sun sets, we say our vows beneath the old banyan tree." },
  { time: "6:00 PM", title: "Cocktails & Courtyard", detail: "A little music, a few happy tears, and something lovely to drink." },
  { time: "7:30 PM", title: "Dinner & Dancing", detail: "Gather around the table, then stay for one more song." },
];

export default function Home() {
  return (
    <main>
      <nav className="nav-wrap" aria-label="Main navigation">
        <a className="monogram" href="#home" aria-label="A and R home">A<span>·</span>R</a>
        <div className="nav-links"><a href="#story">Our story</a><a href="#details">The day</a><a href="#rsvp">RSVP</a></div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-photo" role="img" aria-label="A couple walking together through a sunlit garden" />
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow light">WITH FULL HEARTS & JOYFUL EXPECTATION</p>
          <h1>Two souls,<br /><em>one beautiful</em><br />beginning.</h1>
          <div className="hero-line" />
          <p className="hero-names">ANIKA <span>&</span> RISHI</p>
          <p className="hero-date">SATURDAY, THE TWENTY-FIRST OF NOVEMBER<br />TWO THOUSAND TWENTY-SIX · JAIPUR, INDIA</p>
          <a className="light-button" href="#invitation">READ OUR INVITATION <span>↓</span></a>
        </div>
        <div className="hero-index">01 — 04</div>
      </section>

      <section className="invitation section-pad" id="invitation">
        <div className="ornament">✳</div>
        <p className="eyebrow">A NOTE FROM OUR FAMILIES</p>
        <h2>With love, we invite you<br />to celebrate <em>our forever.</em></h2>
        <p className="invitation-text">Together with our families, we would be delighted to have you by our side as we begin our next chapter. Your presence, laughter, and blessings will make this day all the more meaningful.</p>
        <p className="signature">Anika & Rishi</p>
        <div className="date-stamp"><span>NOV</span><strong>21</strong><span>2026</span></div>
      </section>

      <section className="story" id="story">
        <div className="story-image" role="img" aria-label="A couple sharing a quiet moment in a garden" />
        <div className="story-copy">
          <p className="eyebrow">A LITTLE ABOUT US</p>
          <h2>It started with<br /><em>a hello.</em></h2>
          <p>One chance meeting became long conversations, familiar places became favourite places, and somewhere along the way, home became wherever we found each other.</p>
          <p>Now we can’t wait to celebrate the beginning of forever with the people who have made our story what it is.</p>
          <div className="story-sign">A <span>✳</span> R</div>
        </div>
      </section>

      <section className="details section-pad" id="details">
        <p className="eyebrow">SAVE THE DATE · JAIPUR</p>
        <h2>A day to <em>remember.</em></h2>
        <p className="details-lede">Saturday, 21 November 2026<br />Samode Palace · Jaipur, Rajasthan</p>
        <div className="schedule">
          {events.map((event, index) => (
            <article className="event" key={event.title}>
              <span className="event-number">0{index + 1}</span>
              <div><p className="event-time">{event.time}</p><h3>{event.title}</h3><p className="event-detail">{event.detail}</p></div>
              <span className="event-flower">✳</span>
            </article>
          ))}
        </div>
        <a className="text-link" href="https://maps.google.com/?q=Samode+Palace+Jaipur">FIND YOUR WAY <span>↗</span></a>
      </section>

      <section className="rsvp" id="rsvp">
        <div className="rsvp-photo" role="img" aria-label="A warm, candlelit wedding celebration" />
        <div className="rsvp-shade" />
        <div className="rsvp-copy">
          <p className="eyebrow light">WE HOPE YOU’LL JOIN US</p>
          <h2>Save a little<br />room on the<br /><em>dance floor.</em></h2>
          <p>Please let us know by 1 November 2026.<br />We can’t wait to celebrate with you.</p>
          <a className="light-button" href="mailto:hello@anikaandrishi.com?subject=Wedding%20RSVP">KINDLY RSVP <span>↗</span></a>
        </div>
      </section>
      <footer><a className="monogram" href="#home">A<span>·</span>R</a><p>MADE WITH LOVE IN JAIPUR</p><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>
    </main>
  );
}
