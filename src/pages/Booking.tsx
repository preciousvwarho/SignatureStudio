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

                    <div className="col-md-2" />
                    <div className="col-md-8">

                        <div className="form-wrapper mx-auto">

                            <form>

                                <div className="mb-4">
                                    <label className="form-label">Full name</label>
                                    <input type="text" className="form-control custom-input" placeholder="John Doe" />
                                </div>


                                <div className="mb-4">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control custom-input" placeholder="example@email.com" />
                                </div>


                                <div className="mb-4">
                                    <label className="form-label">Phone Number</label>
                                    <input type="text" className="form-control custom-input" placeholder="07035814787" />
                                </div>


                                <div className="mb-4">
                                    <label className="form-label">Date / Time</label>
                                    <input type="datetime-local"
                                        className="form-control custom-input" placeholder="22/04/2026" />

                                    {/* <span className="calendar-icon">📅</span> */}
                                </div>

                                <div className="mb-4">
                                    <label className="form-label">Type of Session</label>
                                    <select className="form-control custom-input">
                                        <option>Choose Session</option>
                                        <option>Studio Session</option>
                                        <option>Podcast Session</option>
                                    </select>
                                </div>


                                <div className="mb-4">
                                    <label className="form-label">How many hours</label>
                                    <div className="d-flex gap-4 mt-2">
                                        <label className="radio-item"><input type="radio" name="hours" /> 1</label>
                                        <label className="radio-item"><input type="radio" name="hours" /> 2</label>
                                        <label className="radio-item"><input type="radio" name="hours" /> 3</label>
                                        <label className="radio-item"><input type="radio" name="hours" /> 4</label>
                                        <label className="radio-item"><input type="radio" name="hours" /> More</label>
                                    </div>
                                </div>


                                <div className="text-end mt-5">
                                    <button  className="btn-studio btn-gold">Submit <ArrowRight className="icon-sm" /></button>
                                </div>


                            </form>

                        </div>

                    </div>
                    <div className="col-md-2" />

                </div>
            </section>



            <Footbar />

        </div>
    );
};

export default Booking;
