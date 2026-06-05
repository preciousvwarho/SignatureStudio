import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import logoImg from "@/assets/logo.png";

const NAV_LINKS = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "Users",     path: "/user"     },
  { label: "Bookings",  path: "/bookings"  },
  { label: "Enquiries", path: "/enquiries" },
];

export default function AdminNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasNotif, setHasNotif] = useState(true);

  return (
    <nav className="admin_navbar">
      <div className="admin_navbar__logo">
        <img src={logoImg} alt="Signature Sound Studio" />
      </div>

      {/* Desktop links */}
      <div className="admin_navbar__links">
        {NAV_LINKS.map(({ label, path }) => (
          <NavLink
            key={label}
            to={path}
            className={({ isActive }) =>
              `admin_navbar__link${isActive ? " admin_navbar__link--active" : ""}`
            }
          >
            {label}
          </NavLink>
        ))}
      </div>

      <div className="admin_navbar__right">
        <div className="admin_navbar__action-group">
          <button
            className="admin_navbar__notif"
            onClick={() => setHasNotif((p) => !p)}
            aria-label="Notifications"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b7881d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
            {hasNotif && <span className="admin_navbar__notif-dot" />}
          </button>

          <div className="admin_navbar__divider" />

          <div className="admin_navbar__avatar" aria-label="Profile">
            <span className="admin_navbar__avatar-txt">PO</span>
          </div>
        </div>

        <button
          className="admin_navbar__hamburger"
          onClick={() => setMenuOpen((p) => !p)}
          aria-label="Toggle menu"
        >
          <span className={`admin_navbar__bar${menuOpen ? " admin_navbar__bar--1x" : ""}`} />
          <span className={`admin_navbar__bar${menuOpen ? " admin_navbar__bar--2x" : ""}`} />
          <span className={`admin_navbar__bar${menuOpen ? " admin_navbar__bar--3x" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`admin_navbar__mobile${menuOpen ? " admin_navbar__mobile--open" : ""}`}>
        {NAV_LINKS.map(({ label, path }) => (
          <NavLink
            key={label}
            to={path}
            className={({ isActive }) =>
              `admin_navbar__mob-link${isActive ? " admin_navbar__mob-link--active" : ""}`
            }
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </NavLink>
        ))}
        <div className="admin_navbar__mob-divider" />
        <div className="admin_navbar__mob-user">
          <div className="admin_navbar__avatar admin_navbar__avatar--sm">
            <span className="admin_navbar__avatar-txt">PO</span>
          </div>
          <div>
            <div className="admin_navbar__mob-name">Precious Oghenevwarho</div>
            <div className="admin_navbar__mob-role">Administrator</div>
          </div>
        </div>
      </div>
    </nav>
  );
}