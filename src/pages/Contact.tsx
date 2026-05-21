import { ArrowRight } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import Footbar from "@/components/Footbar";
import aboutHero from "@/assets/about-hero.jpg";

const Contact = () => {
    return (
        <div className="app-shell">
            <SiteNav />

            <section className="hero-pad page-section-sm contact-page-hero">
                <div className="container pages-hero-section">
                    <div className="pages-hero-content">
                        <h1 className="hero-title mb-3">Contact.</h1>
                        <p className="text-muted-custom" style={{ maxWidth: "28rem" }}>
                            For any enquire or just to say hello, get in touch and contact us.
                        </p>
                        <div className="mt-4">
                            <h4>Address</h4>
                            <p className="text-muted-custom" style={{ maxWidth: "38rem" }}>
                                8, Adeleye Street, off Peace Estate Road, Command Road, Ipaja, Lagos, Nigeria.
                            </p>
                        </div>
                        <div className="mt-4">
                            <div className="contact-meta-row">
                                <div>
                                    <h4>Phone Number</h4>
                                    <p className="text-muted-custom">+234 704 030 0010</p>
                                </div>
                                <div>
                                    <h4>Email</h4>
                                    <p className="text-muted-custom">Hello@signaturestudio.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="abt-hero-image">
                        <img src={aboutHero} alt="Studio lounge interior" width={541} height={580} />
                    </div>
                </div>
            </section>

            <section className="container page-section-sm">
                <div className="row">
                    <div className="col-12 col-md-10 offset-md-1">
                        <h4>Enquiry Form</h4>
                    </div>
                    <div className="col-12 col-md-10 offset-md-1">
                        <div className="form-wrapper" style={{ maxWidth: "100%" }}>
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
                                    <label className="form-label">Subject</label>
                                    <input type="text" className="form-control custom-input" placeholder="Subject" />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label">Your message</label>
                                    <textarea className="form-control custom-input" rows={5} placeholder="Write your message here…" />
                                </div>
                                <div className="text-end mt-5">
                                    <button type="submit" className="btn-studio btn-gold">
                                        Submit <ArrowRight className="icon-sm" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footbar />
        </div>
    );
};

export default Contact;