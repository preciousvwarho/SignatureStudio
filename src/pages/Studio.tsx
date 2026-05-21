import { useState, useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Minus, Plus } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import Footbar from "@/components/Footbar";
import micHero from "@/assets/studio-mic-hero.jpg";
import drums from "@/assets/studio-drums.jpg";
import lounge from "@/assets/studio-lounge2.jpg";
import keys from "@/assets/studio-keys2.jpg";
import podMics from "@/assets/podcast-mics.jpg";
import podDesk from "@/assets/podcast-desk.jpg";
import podBooth from "@/assets/podcast-booth.jpg";

const musicGallery = [drums, lounge, keys, podMics, podDesk, podBooth];
const podcastGallery = [podMics, podDesk, podBooth, podMics, podDesk, podBooth];

const musicGets = ["Crystal-clear vocal recording", "Industry-standard microphones & equipment", "Professional mixing & mastering", "Comfortable, creative atmosphere", "Expert guidance from sound engineers"];
const podcastGets = ["Clean, noise-free recording", "Multi-mic setup for group sessions", "Audio editing & post-production", "Easy, hassle-free recording experience", "Expert guidance from sound engineers"];

const faqs = [
  { q: "What services do you offer?", a: "We offer multitrack recording, mixing and mastering, podcast production, live streaming, and full post-production services tailored to artists, podcasters, and brands." },
  { q: "How do I book a session?", a: "You can book a session by contacting us through our website, calling our studio line, or sending us an email. We'll confirm availability and walk you through the process." },
  { q: "Do you provide equipment?", a: "Yes — every session includes access to our professional microphones, monitors, instruments, and recording gear at no additional cost." },
  { q: "Can I bring my own engineer or producer?", a: "Absolutely. You're welcome to bring your own team. Our in-house engineers are also available if you need additional support." },
  { q: "What are your studio hours?", a: "We operate seven days a week with flexible session times. Late-night and early-morning bookings can be arranged in advance." },
  { q: "Do you handle music videos and visual content?", a: "Yes. Our team produces teaser videos, behind-the-scenes reels, vertical content, and full music video shoots in-studio." },
];

type SectionProps = {
  title: string;
  intro: string;
  description: string;
  tags?: string[];
  whatYouGet: string[];
  galleryLabel: string;
  gallery: string[];
  callout: string;
};

const Bracket = ({ children }: { children: React.ReactNode }) => (
  <div className="bracket"><span className="bracket-line" />{children}</div>
);

const StudioBlock = ({ title, intro, description, tags, whatYouGet, galleryLabel, gallery, callout }: SectionProps) => {
  const galleryRef = useRef<HTMLDivElement>(null);

  const scrollNext = () => {
    if (!galleryRef.current) return;
    galleryRef.current.scrollBy({ left: galleryRef.current.offsetWidth, behavior: "smooth" });
  };

  const scrollPrev = () => {
    if (!galleryRef.current) return;
    galleryRef.current.scrollBy({ left: -galleryRef.current.offsetWidth, behavior: "smooth" });
  };

  return (
    <section className="page-section">
      <div className="container">
        <h2 className="section-title mb-4">{title}</h2>
        <p className="text-soft mb-3" style={{ maxWidth: "42rem" }}>{intro}</p>
        <p className="text-muted-custom mb-4" style={{ maxWidth: "65rem" }}>{description}</p>
        {tags && (
          <div className="d-flex flex-wrap gap-2 mb-5">
            {tags.map((tag) => <span className="tag-pill" key={tag}>{tag}</span>)}
          </div>
        )}
        <h3 className="font-display fs-5 mb-3">What you get:</h3>
        <ul className="dash-list mb-5" style={{ maxWidth: "34rem" }}>
          {whatYouGet.map((item) => <li key={item}><span>{item}</span></li>)}
        </ul>
      </div>

      <div className="mt-4">
        <div className="container d-flex align-items-center gap-3 mb-3">
          <p className="font-display small text-soft text-nowrap mb-0">{galleryLabel}</p>
          <span className="flex-grow-1" style={{ height: 1, background: "hsl(var(--border))" }} />
          <div className="d-flex align-items-center gap-2">
            <button type="button" aria-label="Previous" onClick={scrollPrev} className="gallery-control">
              <ChevronLeft className="icon-sm" />
            </button>
            <button type="button" aria-label="Next" onClick={scrollNext} className="gallery-control">
              <ChevronRight className="icon-sm" />
            </button>
          </div>
        </div>

        {/* Gallery: scrollable strip, each tile ~33% desktop, ~72vw mobile */}
        <div className="studio-parent g-3" ref={galleryRef}>
          {gallery.map((src, index) => (
            <div className="gallery-scroll-tile" key={`${src}-${index}`}>
              <div className="gallery-tile">
                <img src={src} alt={`${galleryLabel} ${index + 1}`} loading="lazy" width={800} height={800} className="image-fill" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mt-5 pt-4">
        <h3 className="section-title mb-4" style={{ maxWidth: "48rem" }}>{callout}</h3>
        <a href="/booking" className="btn-studio btn-gold">Book Session <ArrowRight className="icon-sm" /></a>
      </div>
    </section>
  );
};

const FaqItem = ({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="faq-card" style={{ borderRadius: "0rem" }}>
      <button type="button" onClick={() => setOpen((v) => !v)} className="faq-button" aria-expanded={open}>
        <span>{q}</span>
        {open
          ? <Minus className="icon-sm text-primary-custom flex-shrink-0" />
          : <Plus className="icon-sm flex-shrink-0" />}
      </button>
      {open && <div className="faq-answer">{a}</div>}
    </div>
  );
};

const Studio = () => {
  return (
    <div className="app-shell">
      <SiteNav />

      {/* ── Hero ── */}
      <section className="hero-pad page-section-sm">
        <div className="container pages-hero-section">
          <div className="pages-hero-content">
            <h1 className="hero-title mb-3">Record. Create.<br />Stand Out.</h1>
            <p className="text-muted-custom" style={{ maxWidth: "28rem" }}>
              Professional recording, mixing, and production that sets you apart.
            </p>
          </div>
          <div className="abt-hero-image">
            <img src={micHero} alt="Studio lounge interior" width={541} height={580} />
          </div>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="container page-section-sm">
        <div className="row g-4">
          <div className="col-12 col-md-9" style={{ color: "#DBDBDB" }}>
            <p className="mb-3" style={{ fontSize: "0.9rem", lineHeight: 1.7 }}>
              At Signature Sound Studio, every space is designed with one goal — to bring out the best in your sound.
            </p>
            <p className="mb-0" style={{ fontSize: "0.9rem", lineHeight: 1.7 }}>
              Whether you're creating music or telling stories through a podcast, our studios are built to deliver
              clarity, comfort, and creativity at the highest level.
            </p>
          </div>
        </div>
      </section>

      <StudioBlock
        title="Music Studio"
        intro="Step into a space where creativity flows and sound comes alive."
        description="Our Music Studio is fully equipped for artists, producers, and creatives who are serious about quality. From vocal recording to full music production, we provide the tools and environment you need to create records that stand out."
        tags={["Recording Studio", "Recording Studio", "Recording Studio"]}
        whatYouGet={musicGets}
        galleryLabel="Music Studio Gallery"
        gallery={musicGallery}
        callout="Whether it's your first track or your next hit — we make every note count."
      />

      <StudioBlock
        title="Podcast Studio"
        intro="Your voice deserves to be heard — clearly, professionally, and powerfully."
        description="Our Podcast Studio is designed for creators, brands, and storytellers who want high-quality audio without the stress. Just walk in, speak, and let us handle the rest."
        whatYouGet={podcastGets}
        galleryLabel="Podcast Studio Gallery"
        gallery={podcastGallery}
        callout="Focus on your message — we'll make it sound amazing."
      />

      {/* ── FAQ ── */}
      <section className="container page-section">
        <h2 className="section-title text-center mb-5">
          GOT QUESTIONS?<br /><span className="text-gold-gradient">WE'VE GOT ANSWERS.</span>
        </h2>
        <div className="mx-auto d-grid gap-3" style={{ maxWidth: "48rem" }}>
          {faqs.map((faq, index) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} defaultOpen={index === faqs.length - 1} />
          ))}
        </div>
      </section>

      <Footbar />
    </div>
  );
};

export default Studio;
