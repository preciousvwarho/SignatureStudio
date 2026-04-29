import { NavLink } from "@/components/NavLink";
import { ArrowRight, Music2 } from "lucide-react";
import { Link } from "react-router-dom";


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

            <div className="row g-5 footer-grid">
                <div className="col-md-3"><FooterLinks /></div>
                <div className="col-md-6 text-center">
                    <p className="font-display fs-2 mb-1">+234 704 030 0010</p>
                    <p className="email-text fs-5 text-muted-custom mb-0">hello@signaturesoundstudio.com</p>
                </div>
                <div className="col-md-3 text-md-start footer-address text-muted-custom mb-0">
                    <ul className="footer-links  align-items-start">
                        <li>No 1 Nsirim Road, Tombia Extension, Oppsite Kings Assembly, GRA, <br/>Port Harcourt, Nigeria.</li>
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
    </ul>
);

export default Footbar;
