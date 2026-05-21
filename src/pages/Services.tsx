import { ArrowRight } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import Footbar from "@/components/Footbar";
import heroStudio from "@/assets/studio-hero.jpg";
import productionMics from "@/assets/podcast-mics.jpg";
import eventsLounge from "@/assets/gallery-lounge.jpg";
import trainingDrums from "@/assets/studio-drums.jpg";

type Service = {
  title: string;
  eyebrow: string;
  body: string;
  points: string[];
  closing: string;
  image: string;
  imageAlt: string;
};

const services: Service[] = [
  {
    title: "Audio Production",
    eyebrow: "At Signature Sound Studio, we transform ideas into exceptional sound.",
    body: "Our Audio Production services cover everything from recording to final mastering, ensuring every detail is clear, balanced, and industry-ready. Whether you're an artist, brand, or content creator, we deliver audio that captures attention and leaves a lasting impression.",
    points: ["Music recording, mixing & mastering", "Podcast production & editing", "Voiceovers for ads, films, and digital content", "Sound design for media and creative projects"],
    closing: "From raw sound to refined excellence — we make every second count.",
    image: productionMics,
    imageAlt: "Professional microphones arranged for audio recording",
  },
  {
    title: "Content Creation & Events",
    eyebrow: "We don't just create sound — we help you create experiences.",
    body: "Our team works with you to produce high-quality content and support live or recorded events with professional audio solutions. Whether it's a brand campaign, live session, or creative production, we ensure everything sounds and feels exceptional.",
    points: ["Audio support for live events", "Content production for brands & creators", "Recording sessions for live performances", "Creative direction for media projects"],
    closing: "Engage your audience with content that looks great and sounds even better.",
    image: eventsLounge,
    imageAlt: "Studio lounge prepared for content production and events",
  },
  {
    title: "Training & Workshops",
    eyebrow: "We believe great sound should be understood, not just experienced.",
    body: "Our Training & Workshops are designed to equip aspiring creators, artists, and professionals with practical knowledge in audio production and sound engineering. Learn directly from industry experts in a hands-on, supportive environment.",
    points: ["Audio production training (beginner to advanced)", "Studio recording techniques", "Mixing & mastering fundamentals", "Workshops for individuals, groups, and organizations"],
    closing: "Whatever your vision — we have the sound to match it.",
    image: trainingDrums,
    imageAlt: "Drum kit in a recording studio for sound training",
  },
];

const ServiceSection = ({ service }: { service: Service }) => (
  <section className="service-section">
    {/* Stack on mobile/tablet, side-by-side on lg+ */}
    <div className="container">
      <div className="row g-4 align-items-center flex-column-reverse flex-lg-row">

        {/* Text */}
        <div className="col-12 col-lg-7">
          <div className="serv-box position-relative z-1">
            <h2 className="service-title-overlap mb-4">{service.title}</h2>
            <div className="service-copy">
              <p className="small text-soft mb-4" style={{ maxWidth: "48rem" }}>{service.eyebrow}</p>
              <p className="small text-muted-custom mb-4" style={{ maxWidth: "48rem", lineHeight: 1.8 }}>{service.body}</p>
              <h3 className="font-display fs-5 mb-3">What you get:</h3>
              <ul className="dash-list mb-4">
                {service.points.map((point) => <li key={point}><span>{point}</span></li>)}
              </ul>
              <p className="font-display lh-sm text-soft mb-0" style={{ maxWidth: "36rem", fontSize: "clamp(1rem, 2.5vw, 1.25rem)" }}>
                {service.closing}
              </p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="col-12 col-lg-5">
          <div className="service-image">
            <img src={service.image} alt={service.imageAlt} loading="lazy" width={900} height={840} className="image-fill" />
          </div>
        </div>

      </div>
    </div>
  </section>
);

const Services = () => {
  return (
    <div className="app-shell">
      <SiteNav />
      <main>

        {/* ── Hero ── */}
        <section className="hero-pad page-section-sm">
          <div className="container pages-hero-section">
            <div className="pages-hero-content">
              <h1 className="hero-title mb-3">Create Better,<br />Sound Better.</h1>
              <p className="text-muted-custom" style={{ maxWidth: "28rem" }}>
                End-to-end services built to help you produce, perform, and grow with confidence.
              </p>
            </div>
            <div className="abt-hero-image">
              <img src={heroStudio} alt="Studio lounge interior" width={541} height={580} />
            </div>
          </div>
        </section>

        <div className="pt-4">
          {services.map((service) => <ServiceSection key={service.title} service={service} />)}
        </div>

        {/* ── CTA ── */}
        <section className="wave-bg page-section overflow-hidden">
          <div className="container">
            <p className="eyebrow-script">Ready to create your signature sound?</p>
            <h2 className="section-title mb-4" style={{ maxWidth: "48rem" }}>
              Book your session today and experience the Signature Sound difference.
            </h2>
            <a href="/booking" className="btn-studio btn-gold">Book Session <ArrowRight className="icon-sm" /></a>
          </div>
        </section>

        <Footbar />
      </main>
    </div>
  );
};

export default Services;
