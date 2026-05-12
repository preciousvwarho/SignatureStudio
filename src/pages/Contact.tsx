import { ArrowRight, ArrowUpRight, Music2 } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import Footbar from "@/components/Footbar";
import aboutHero from "@/assets/about-hero.jpg";

const Contact = () => {
    return (
        <div className="app-shell">
            <SiteNav />

            <section className="hero-pad page-section-sm">
                <div className="container pages-hero-section">
                    <div className="pages-hero-content">
                        <h1 className="hero-title mb-3">Contact.</h1>
                        <p className="text-muted-custom" style={{ maxWidth: "28rem" }}>For any enquire or just to say hello, get in touch and contact us.</p>
                        <div className="mt-4">
                            <h4>Address</h4>
                            <p className="text-muted-custom" style={{ maxWidth: "38rem" }}>8, Adeleye Street, off Peace Estate Road, Command Road, Ipaja, Lagos, Nigeria.</p>
                        </div>
                        <div className="mt-4">
                            <div className="d-flex justify-content-between" style={{ maxWidth: "35rem" }}>
                                <div className="">
                                    <h4>Phone Number</h4>
                                    <p className="text-muted-custom">+234 704 030 0010</p>
                                </div>

                                <div className="">
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

                


                <div className="row align-items-start">
                    <div className="col-md-1" />
                    <div className="col-10">
                            <h4>Enquiry Form</h4>
                        </div>
                    <div className="col-md-1"/>

                    <div className="col-md-1" />
                    <div className="col-10">

                        <div className="form-wrapper" style={{maxWidth:"100%"}}>

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
                                    <input type="text" className="form-control custom-input" placeholder="Subjects" />
                                </div>

                                <div className="mb-4">
                                    <label className="form-label">Your message</label>
                                    <textarea className="form-control custom-input" placeholder="Content" />
                                </div>


                                <div className="text-end mt-5">
                                    <button className="btn-studio btn-gold">Submit <ArrowRight className="icon-sm" /></button>
                                </div>


                            </form>

                        </div>

                    </div>
                    <div className="col-md-1" />

                </div>
            </section>



            <Footbar />

        </div>
    );
};

export default Contact;
