import { ArrowRight, ArrowUpRight } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import Footbar from "@/components/Footbar";
import aboutHero from "@/assets/about-hero.jpg";
import galleryDrums from "@/assets/gallery-drums.jpg";
import galleryLounge from "@/assets/gallery-lounge.jpg";
import galleryKeys from "@/assets/gallery-keys.jpg";
import headphonesWoman from "@/assets/headphones-woman.png";
import expertiseBg from "@/assets/expertise-bg.jpg";
import { Link } from 'react-router-dom';

const reasons = [
  "Modern, fully-equipped recording environment",
  "Affordable packages for artists and businesses",
  "Fast turnaround without compromising quality",
  "A creative space designed to inspire",
];

const expertise = [
  { num: "01", title: "Audio Production" },
  { num: "02", title: "Content Creation" },
  { num: "03", title: "Post-Production & Editing" },
];

const About = () => {
  return (
    <div className="app-shell">
      <SiteNav />

      {/* ── Hero ── */}
      <section className="hero-pad page-section-sm">
        <div className="container pages-hero-section">
          <div className="pages-hero-content">
            <h1 className="hero-title mb-3">Turn your Ideas<br />into Reality.</h1>
            <p className="text-muted-custom" style={{ maxWidth: "28rem" }}>
              We believe every sound tells a story — and every story deserves to be heard at its best.
            </p>
          </div>
          <div className="abt-hero-image">
            <img src={aboutHero} alt="Studio lounge interior" width={541} height={580} />
          </div>
        </div>
      </section>

      {/* ── Stats + bio ── */}
      <section className="container page-section-sm">
        <div className="row g-4 align-items-start">
          <div className="col-4 col-md-3 text-start text-md-center">
            <p className="mb-0 chageFont" style={{ lineHeight: 1, color: "#fff", fontWeight: "500" }}>4+</p>
            <p className="text-muted-custom small mt-1" style={{ color: "#fff", fontWeight: "500" }}>years</p>
          </div>
          <div className="col-8 col-md-9" style={{ color: "#DBDBDB" }}>
            <p className="mb-3" style={{ fontSize: "0.9rem", lineHeight: 1.7 }}>
              Signature Sound Studio is founded with a passion for audio excellence. Our studio combines
              cutting-edge technology with a team of skilled sound engineers and producers. We work closely
              with artists, businesses, and content creators to bring their vision to life.
            </p>
            <p className="mb-0" style={{ fontSize: "0.9rem", lineHeight: 1.7 }}>
              From live recording to music production to voiceovers, podcasts, and sound design, we provide
              a professional environment where creativity thrives and quality is guaranteed.
            </p>
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="page-section-sm">
        <div className="studio-parent mb-4">
          {[galleryDrums, galleryLounge, galleryKeys].map((image, index) => (
            <div className="gallery-scroll-tile" key={image}>
              <div className="media-card aspect-4-3">
                <img src={image} alt={`Studio gallery ${index + 1}`} loading="lazy" width={1024} height={1024} />
              </div>
            </div>
          ))}
        </div>
        <div className="container d-flex align-items-center gap-3">
          <p className="small mb-0 font-display">Photo Gallery</p>
          <span className="flex-grow-1" style={{ height: 1, background: "#DBDBDB" }} />
        </div>
      </section>

      {/* ── Why Choose ── */}
      <section className="container page-section">
        <div className="row g-5 align-items-center">
          <div className="col-md-7">
            <h2 className="section-title mb-5">
              Why Choose<br /><span className="text-gold-gradient">Signature</span> Sound Studio?
            </h2>
            <div className="row g-3">
              {reasons.map((reason) => (
                <div className="col-6" key={reason}>
                  <div className="reason-card small">{reason}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-5 d-none d-md-block">
            <div className="media-card aspect-3-4">
              <img src={headphonesWoman} alt="Person listening with headphones" loading="lazy" width={768} height={1024} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Expertise ── */}
      <section className="position-relative page-sect overflow-hidden">
        <div className="position-absolute top-0 start-0 w-100 h-100">
          <img src={expertiseBg} alt="" loading="lazy" width={1600} height={800} className="image-fill" />
          <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: "hsl(var(--background) / 0.8)" }} />
        </div>
        <div className="container position-relative z-1">
          <h2 className="section-title mb-5">Our Expertise</h2>
          <div className="row g-4">
            {expertise.map((item) => (
              <div className="col-12 col-md-4" key={item.num}>
                <article className="package-card h-100" style={{ background: "hsl(var(--card) / 0.4)", backdropFilter: "blur(14px)" }}>
                  <div className="d-flex align-items-start justify-content-between mb-5">
                    <span className="text-muted-custom">{item.num}.</span>
                    <ArrowUpRight className="icon-md text-primary-custom" />
                  </div>
                  <h3 className="font-display fs-5 mb-2">{item.title}</h3>
                  <p className="small text-muted-custom mb-0">Technical assistance available to ensure your session runs smoothly.</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="wave-bg page-section overflow-hidden">
        <div className="container">
          <p className="eyebrow-script">Ready to create your signature sound?</p>
          <h2 className="section-title mb-4" style={{ maxWidth: "48rem" }}>
            Book your session today and experience the Signature Sound difference.
          </h2>
          <Link to="/booking" className="btn-studio btn-gold">Book Session <ArrowRight className="icon-sm" /></Link>
        </div>
      </section>

      <Footbar />
    </div>
  );
};

export default About;
