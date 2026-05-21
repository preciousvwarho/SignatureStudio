import { ArrowRight } from "lucide-react";

export const Footbar = () => (<>

  <section className="container page-section-sm newsletter-div">
    <h2 className="section-title mb-4">Get on our list.</h2>
    <form className="newsletter-form">
      <input type="email" placeholder="Enter your email" aria-label="Email address" />
      <button type="submit" className="btn-studio icon-button" aria-label="Submit email">
        <ArrowRight className="icon-sm" />
      </button>
    </form>
  </section>

  <footer className="site-footer">
    <div className="container">

      {/* Phone + email — mobile only row, centred */}
      <div className="footer-contact-row d-md-none">
        <p className="font-display footer-phone mb-1">+234 704 030 0010</p>
        <p className="email-text text-muted-custom mb-0">info@signaturesoundstudio.com</p>
      </div>

      {/* Grid row */}
      <div className="row g-0 g-md-5 footer-grid">

        {/* Col 1: nav links */}
        <div className="col-6 col-md-3 footer-col-links">
          <FooterLinks />
        </div>

        {/* Col 2: phone + email — desktop only */}
        <div className="col-md-6 text-center d-none d-md-block">
          <p className="font-display fs-2 mb-1">+234 704 030 0010</p>
          <p className="email-text fs-5 text-muted-custom mb-0">info@signaturesoundstudio.com</p>
        </div>

        {/* Col 3: address */}
        <div className="col-6 col-md-3 footer-col-address text-muted-custom">
          <ul className="footer-links align-items-start">
            <li>Km 16, Port Harcourt-Aba Expressway</li>
            <li>Boskel Road, Port Harcourt, Nigeria</li>
          </ul>
        </div>

      </div>
    </div>

    <div className="footer-bottom">
      <p className="small mb-0">© 2026 Signature Sound Studio.</p>
      <div className="footer-wordmark-wrapper">
        <h2 className="footer-wordmark">Signature Sound</h2>
      </div>
    </div>
  </footer>

</>);

const FooterLinks = () => (
  <ul className="footer-links">
    <li><a href="/about">About us</a></li>
    <li><a href="/studio">Studio</a></li>
    <li><a href="/services">Services</a></li>
    <li><a href="/contact">Contact Us</a></li>
  </ul>
);

export default Footbar;