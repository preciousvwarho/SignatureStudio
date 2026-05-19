import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { Link } from "react-router-dom";
import logoImg from "@/assets/logo.png";
import logo2Img from "@/assets/logos 1.png";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Studio", to: "/studio" },
  { label: "Services", to: "/services" },
];

export const SiteNav = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const close = () => setMobileOpen(false);

  return (
    <>
      <header className="site-header">
        <nav className="container site-nav d-flex align-items-center justify-content-between">
          {/* Logo */}
          <Link to="/" aria-label="Signature Sound Studio home" onClick={close}>
            <img src={logoImg} alt="Signature Sound Studio" loading="lazy" width={85} />
          </Link>

          {/* Desktop nav pill — hidden on mobile via CSS */}
          <ul className="nav-menu">
            {navItems.map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className="nav-link-custom"
                  activeClassName="is-active"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop CTA — hidden on mobile via CSS */}
          <Link to="/contact" className="btn-studio btn-ghost d-none d-md-inline-flex">
            Contact us
          </Link>

          {/* Hamburger — visible only on mobile */}
          <button
            type="button"
            className="mobile-hamburger d-md-none"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <Menu size={22} />
          </button>
        </nav>
      </header>

      {/* ── Mobile full-screen overlay ── */}
      <div
        className={`mobile-overlay${mobileOpen ? " is-open" : ""}`}
        aria-hidden={!mobileOpen}
        role="dialog"
        aria-modal="true"
      >
        {/* Top bar */}
        <div className="mobile-overlay-topbar container">
          <Link to="/" onClick={close} aria-label="Home">
            <img src={logoImg} alt="Signature Sound Studio" width={72} />
          </Link>
          <button
            type="button"
            className="mobile-hamburger"
            aria-label="Close menu"
            onClick={close}
          >
            <X size={22} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="mobile-overlay-nav container">
          <ul className="mobile-nav-list">
            {navItems.map((item, i) => (
              <li
                key={item.label}
                className="mobile-nav-item"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className="mobile-nav-link"
                  activeClassName="is-active"
                  onClick={close}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
        <div className="tin_line"></div>
        <div className="faded_logo">
          <img src={logo2Img} alt="Signature Sound Studio"/>
        </div>
          </ul>
        </nav>


        {/* Bottom CTA */}
        <div className="mobile-overlay-footer container">
          <Link
            to="/contact"
            className="btn-studio btn-ghost w-100 justify-content-center"
            onClick={close}
          >
            Contact us
          </Link>
        </div>
      </div>
    </>
  );
};

export default SiteNav;