import { ArrowRight, Lightbulb, Mic, Users } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import Footbar from "@/components/Footbar";
import musicImg from "@/assets/music-studio.jpg";
import podcastImg from "@/assets/podcast-studio.jpg";
import magicImg from "@/assets/magic-mic.jpg";
import magicVideo from "@/assets/video/bestVideo.mp4";
import homScreen from "@/assets/video/homScreen.mp4";

const features = [
  {
    num: "02",
    icon: Mic,
    title: "Experienced Team",
    body: "Our engineers and producers bring skill, creativity and attention to detail to every project.",
  },
  {
    num: "01",
    icon: Lightbulb,
    title: "Professional Quality",
    body: "We use industry-leading equipment and techniques to deliver world-class sound.",
    highlight: true,
  },
  {
    num: "03",
    icon: Users,
    title: "Client-Focused Approach",
    body: "Your satisfaction is our priority — we don't stop until your sound is perfect.",
  },
];

const packages = [
  { title: "Rehearsal", items: ["Multitrack Recording", "Mixing and Mastering", "Live Stereo Recording", "Equipment Rental"] },
  { title: "Multitrack Artiste", items: ["Basic multitrack recording session", "Live multitrack recording with mixing and mastering", "Sennheiser microphone hire", "30-second teaser video & social media reel", "Lighting & smoke effects"] },
  { title: "Multitrack Artiste +", items: ["Three multitrack recording sessions", "Live multitrack recording with mix and master", "Sennheiser microphone hire & editing", "30-second teaser video & social media reel", "Lighting & smoke effects"] },
  { title: "Live Stereo Artiste", items: ["Three stereo recording sessions", "Live recording", "30+ minutes live stereo audio recording", "30-second teaser video", "Lighting & smoke effects"] },
  { title: "Live Streaming Pro", items: ["2 hours of livestreaming", "LED screen", "Stream on Facebook & multiple platforms", "LED screen 13″ Screen on Floor", "30 second BTS", "Vertical Pictures"] },
  { title: "Live Streaming Pro +", items: ["2 hours of livestreaming", "LED screen", "Stream on Facebook & multiple platforms", "LED screen 13″ Screen on Floor", "30 second BTS", "Vertical Pictures"] },
];

const Index = () => {
  return (
    <div className="app-shell">
      <SiteNav />

      {/* ── Hero ── */}
      <section className="position-relative hero-pad overflow-hidden hero-section">
        <div
          className="container position-relative z-1 text-center"
          style={{ maxWidth: "65rem" }}
        >
          <p className="eyebrow-script">Signature Sound Studio</p>
          <h1 className="hero-title">
            Here Your Sound<br />Becomes a Signature.
          </h1>
          <p
            className="text-muted-custom mx-auto mb-4"
            style={{ maxWidth: "42rem" }}
          >
            Whether you're recording your first track or producing your next
            hit, Signature Sound Studio delivers clarity, creativity, and
            excellence in every beat.
          </p>
          <div className="d-flex align-items-center justify-content-center gap-3 flex-wrap">
            <a href="/booking" className="btn-studio btn-gold">Book Session</a>
            <a href="/about" className="btn-studio btn-ghost">View More</a>
          </div>
        </div>

        <div className="position-absolute bottom-0 start-0 w-100 z-0">
          <video className="w-100 h-100 object-fit-cover" autoPlay loop muted playsInline>
            <source src={magicVideo} type="video/mp4" />
          </video>
        </div>
      </section>

      {/* ── Full-width video band ── */}
      <section>
        <video className="w-100 d-block" style={{ maxHeight: "60vh", objectFit: "cover" }} autoPlay loop muted playsInline>
          <source src={homScreen} type="video/mp4" />
        </video>
      </section>

      {/* ── Features ── */}
      <section className="container page-section">
        <div className="row g-4 align-items-start justify-content-between mb-5">
          <div className="col-md-7">
            <h2 className="section-title mb-0">
              More Than a Studio —<br />Your Creative Media Partner
            </h2>
          </div>
          <div className="col-md-5 text-md-end">
            <p className="text-muted-custom mt-md-4 mb-0">
              From recording to final production, we work with you every step
              of the way to deliver sound that stands out.
            </p>
          </div>
        </div>

        {/* Cards: single column on mobile, row on md+ */}
        <div className="row g-4 align-items-start">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div className="col-12 col-md-4" key={feature.title}>
                <article
                  className={`feature-card${feature.highlight ? " feature-card-highlight" : ""}`}
                >
                  <span className="feature-icon">
                    <Icon className="icon-md" />
                  </span>
                  <p
                    className={
                      feature.highlight ? "mb-2 opacity-75" : "text-muted-custom mb-2"
                    }
                  >
                    {feature.num}.
                  </p>
                  <h3 className="font-display mb-3">{feature.title}</h3>
                  <p
                    className={
                      feature.highlight ? "mb-0 opacity-75" : "text-muted-custom mb-0"
                    }
                  >
                    {feature.body}
                  </p>
                </article>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Studio Spaces ── */}
      <section className="page-section-sm containStudio">
        <h2 className="section-title mb-5">Our Studio Spaces</h2>
        <div className="studio-parent">
          {[
            { img: musicImg, label: "Music Studio" },
            { img: podcastImg, label: "Podcast Studio" },
            { img: musicImg, label: "Music Studio" },
            { img: musicImg, label: "Music Studio" },
          ].map((space, i) => (
            <div className="studioCol" key={i}>
              <div className="media-card">
                <img
                  src={space.img}
                  alt={space.label}
                  loading="lazy"
                  width={1024}
                  height={768}
                />
              </div>
              <p className="text-soft mt-3 mb-0">{space.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Packages ── */}
      <section className="container page-section">
        <h2 className="section-title mb-5">Flexible Packages</h2>
        <div className="row g-4">
          {packages.map((pack) => (
            <div className="col-12 col-sm-6 col-lg-4" key={pack.title}>
              <article className="package-card h-100">
                <h3 className="font-display fs-4 mb-3">{pack.title}</h3>
                <ul className="dash-list">
                  {pack.items.map((item) => (
                    <li key={item}>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          ))}
        </div>
      </section>

      {/* ── Come create magic ── */}
      <section className="page-section container">
        <div className="magic-section">

          {/* Text side */}
          <div className="magic-content">
            <h2 className="action-hero-title mb-4">
              Come create<br />
              <span className="text-gold-gradient">magic</span> with us
            </h2>
            <p className="text-muted-custom mb-4" style={{ maxWidth: "32rem" }}>
              Ready to create your signature sound? Book a session with us
              today and let's bring your vision to life.
            </p>
            <a href="/booking" className="btn-studio btn-gold">
              Book Session <ArrowRight className="icon-sm" />
            </a>
          </div>

          {/* Image side */}
          <div className="magic-image">
            <div className="mediaCard aspect-square">
              <img
                src={magicImg}
                alt="Vintage microphone"
                loading="lazy"
                width={1024}
                height={1024}
              />
            </div>
          </div>

        </div>
      </section>

      <Footbar />
    </div>
  );
};

export default Index;