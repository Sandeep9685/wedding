import Link from "next/link";

const celebrations = [
  { number: "१", time: "सुबह ९:०० बजे · 9:00 AM", name: "गणेश स्थापना", title: "Ganesh Puja", copy: "We begin with prayers to Lord Ganesha, seeking blessings for an auspicious new beginning." },
  { number: "२", time: "सुबह १०:३० बजे · 10:30 AM", name: "माता पूजन", title: "Mata Pujan", copy: "A heartfelt family ritual to honour the mother goddess and invite her blessings." },
  { number: "३", time: "दोपहर १२:०० बजे · 12:00 PM", name: "हल्दी एवं मेहंदी", title: "Haldi & Mehendi", copy: "Turmeric, henna, marigolds, music, and all our favourite people gathered together." },
  { number: "४", time: "शाम ४:०० बजे · 4:00 PM", name: "शाही बारात", title: "The Royal Baraat", copy: "Join the procession as the groom arrives with dhol, dancing, and a joyful welcome." },
  { number: "५", time: "शाम ६:३० बजे · 6:30 PM", name: "शुभ विवाह", title: "The Wedding Ceremony", copy: "In the glow of the setting sun, join us for the sacred saat phere beneath the open Jaipur sky." },
  { number: "६", time: "रात ८:३० बजे · 8:30 PM", name: "स्वागत एवं प्रीतिभोज", title: "Reception & Celebration", copy: "A royal welcome, a lavish Rajasthani feast, and a night of music, dancing, and togetherness." },
];

export default function RajasthaniInvitation() {
  return (
    <main className="rajasthani-page">
      <nav className="nav" aria-label="Invitation navigation">
        <a href="#top" className="brand">आ<span>✳</span>र</a>
        <div><a href="#nimantran">निमंत्रण</a><a href="#utsav">उत्सव</a><a href="#rsvp">उत्तर दें</a></div>
        <Link href="/" className="otherPage">ENGLISH INVITATION ↗</Link>
      </nav>

      <section id="top" className="hero">
        <div className="heroImage" />
        <div className="overlay" />
        <div className="mandala" aria-hidden="true">✺</div>
        <div className="heroContent">
          <p className="kicker">॥ श्री गणेशाय नमः ॥</p>
          <div className="rule"><span>❧</span></div>
          <p className="smallCaps">WITH THE BLESSINGS OF OUR FAMILIES</p>
          <h1>पधारो म्हारे देश</h1>
          <p className="heroTranslation">Padharo Mhare Des · You are warmly welcome</p>
          <div className="names">अनिका <span>&</span> ऋषि</div>
          <p className="nameEnglish">ANIKA & RISHI</p>
          <p className="heroDate">२१ नवम्बर २०२६ <i>✦</i> 21 NOVEMBER 2026<br />जयपुर, राजस्थान <i>✦</i> JAIPUR, RAJASTHAN</p>
          <a className="goldButton" href="#nimantran">INVITATION <span>↓</span></a>
        </div>
        <div className="heroFoot">A CELEBRATION OF LOVE · JAIPUR</div>
      </section>

      <section id="nimantran" className="invite">
        <div className="corner" aria-hidden="true">❧</div>
        <div className="cornerRight" aria-hidden="true">❧</div>
        <p className="sectionKicker">॥ सप्रेम निमंत्रण ॥</p>
        <div className="sun">☼</div>
        <h2>Two families, one <em>beautiful union.</em></h2>
        <p className="inviteCopy">With the blessings of our elders and the love of our families, we invite you to join us as Anika and Rishi begin their forever. Your presence will bring joy and auspiciousness to our celebration.</p>
        <p className="hindiCopy">परिवार के स्नेह और बड़ों के आशीर्वाद सहित,<br />अनिका एवं ऋषि के शुभ विवाह में आपका हार्दिक स्वागत है।</p>
        <p className="signature">Anika <span>❧</span> Rishi</p>
        <div className="dateBadge"><span>NOVEMBER</span><strong>21</strong><span>JAIPUR · 2026</span></div>
      </section>

      <section className="procession" aria-label="The royal baraat">
        <p className="sectionKicker">आइए, बारात में शामिल हों · JOIN THE PROCESSION</p>
        <h2>A royal <em>baraat awaits.</em></h2>
        <p className="processionCopy">Dhol beats, dancing friends, a decorated steed, and the groom riding in with all the joy in his heart.</p>
        <div className="processionArt" aria-hidden="true"><span>🐘</span><span>🥁</span><span>🐎</span><span className="couple">🤵🏻‍♂️👰🏻‍♀️</span><span>🥁</span><span>🐘</span></div>
        <p className="processionHindi">ढोल बजे · शहनाई बजे · बन्ना पधारे</p>
      </section>

      <section className="palace">
        <div className="palacePhoto" role="img" aria-label="A richly decorated Rajasthani palace courtyard" />
        <div className="palaceText">
          <p className="sectionKicker">OUR CITY OF CELEBRATION</p>
          <h2>Where pink walls<br />hold <em>golden stories.</em></h2>
          <p>Jaipur welcomes us with carved jharokhas, marigold garlands, and the generous spirit of Rajasthan. We’d love to share a little of its magic with you.</p>
          <p className="hindiLine">म्हारो जयपुर, म्हारो मान।</p>
          <div className="location"><span>THE CELEBRATION</span><strong>Samode Palace</strong><small>Samode, Jaipur, Rajasthan</small></div>
          <a className="darkLink" href="https://maps.google.com/?q=Samode+Palace+Jaipur">VIEW THE PALACE <span>↗</span></a>
        </div>
      </section>

      <section id="utsav" className="events">
        <p className="sectionKicker">शुभ अवसर · THE CELEBRATIONS</p>
        <h2>A day of <em>mangal & magic.</em></h2>
        <p className="eventsIntro">Saturday, 21 November 2026 <span>✦</span> Samode Palace, Jaipur</p>
        <div className="eventList">{celebrations.map((event) => <article className="event" key={event.number}>
          <div className="eventNum">{event.number}</div><div className="eventBody"><p>{event.time}</p><h3>{event.name}</h3><h4>{event.title}</h4><span>{event.copy}</span></div><div className="eventFlower">✿</div>
        </article>)}</div>
        <p className="attire"><span>✦</span> FESTIVE ATTIRE ENCOURAGED <span>✦</span></p>
      </section>

      <section id="rsvp" className="rsvp">
        <div className="rsvpPhoto" /><div className="overlay" />
        <div className="rsvpContent">
          <p className="kicker">॥ आपका इंतज़ार रहेगा ॥</p>
          <h2>Come for the<br /><em>ceremony.</em><br />Stay for the stories.</h2>
          <p>Your blessings are the most precious gift.<br />Kindly let us know by 1 November 2026.</p>
          <a className="goldButton" href="mailto:hello@anikaandrishi.com?subject=Wedding%20RSVP">KINDLY RSVP <span>↗</span></a>
        </div>
      </section>
      <footer className="footer"><a href="#top" className="brand">आ<span>✳</span>र</a><p>सप्रेम · WITH LOVE FROM JAIPUR</p><a href="#top">BACK TO TOP ↑</a></footer>
    </main>
  );
}
