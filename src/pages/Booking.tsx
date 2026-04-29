import { ArrowRight, ArrowUpRight, Music2 } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import Footbar from "@/components/Footbar";
import aboutHero from "@/assets/about-hero.jpg";

const Booking = () => {
  return (
    <div className="app-shell">
      <SiteNav />

      <section className="hero-pad page-section-sm">
        <div className="container pages-hero-section">
          <div className="pages-hero-content">
            <h1 className="hero-title mb-3">Choose the package<br />that suit your needs.</h1>
            {/* <p className="text-muted-custom" style={{ maxWidth: "28rem" }}>
              We believe every sound tells a story — and every story deserves to be heard at its best.
            </p> */}
          </div>
          <div className="abt-hero-image">
              <img src={aboutHero} alt="Studio lounge interior" width={541} height={580} />
          </div>
        </div>
      </section>



      <section className="container page-section-sm">
        <div className="row g-5 align-items-start">

        </div>
      </section>



      <Footbar />

    </div>
  );
};

export default Booking;
