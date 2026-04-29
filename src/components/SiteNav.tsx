import { NavLink } from "@/components/NavLink";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Studio", to: "/studio" },
  { label: "Services", to: "/services" },
];

export const SiteNav = () => (
  <header className="site-header">
    <nav className="container site-nav d-flex align-items-center justify-content-between">
      <Link to="/" aria-label="Signature Sound Studio home">
        <span className="brand-mark">S</span>
      </Link>

      <ul className="nav-menu">
        {navItems.map((item) => (
          <li key={item.label}>
            <NavLink
              to={item.to}
              end={item.to === "/"}
              className="nav-link-custom"
              activeClassName="is-active">
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>

      <Link to="/services" className="btn-studio btn-ghost">
        Contact us
      </Link>
    </nav>
  </header>
);

export default SiteNav;
