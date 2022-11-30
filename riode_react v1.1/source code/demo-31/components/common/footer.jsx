import ALink from '~/components/features/custom-link';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top bg-primary">
                <div className="container widget-newsletter">
                    <div className="form-wrapper form-wrapper-inline newsletter-form">
                        <div className="newsletter-info-head d-xl-flex d-block align-items-center">
                            <h3 className="info-title text-uppercase text-white mb-xl-0">Sign Up To Riode</h3>
                            <p className="info-content text-white mb-xl-0">Fill in your email address and we'll update you
                                <br />
                                with
                                latest
                                news and offers at Riodeshop!</p>
                        </div>
                        <form action="#" method="get"
                            className="input-wrapper input-wrapper-round input-wrapper-inline mb-xl-0 mb-3 ml-xl-4 mr-xl-3 ml-auto mr-auto">
                            <input type="email" className="form-control font-primary form-solid font-italic" name="email"
                                id="email" placeholder="Enter Your E-mail Address..." required />
                            <button className="btn btn-secondary" type="submit">Subscribe
                                <i className="d-icon-arrow-right"></i>
                            </button>
                        </form>

                        <div className="social-links social-link-lg">
                            <ALink href="#"
                                className="social-link social-facebook fab fa-facebook-f align-items-center d-flex justify-content-center"></ALink>
                            <ALink href="#"
                                className="social-link social-twitter fab fa-twitter align-items-center d-flex justify-content-center"></ALink>
                            <ALink href="#"
                                className="social-link social-instagram fab fa-instagram align-items-center d-flex justify-content-center mr-0"></ALink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="footer-middle">
                    <div className="row pt-2">
                        <div className="col-lg-2 col-md-3 d-flex align-items-center">
                            <ALink href="/shop" className="logo-footer">
                                <img src="images/home/logo-footer.png" alt="logo-footer" width="154"
                                    height="43" />
                            </ALink>
                        </div>
                        <div className="col-lg-2 col-md-3">
                            <div className="widget widget-contact">
                                <h4 className="widget-title">Get In Touch</h4>
                                <ul className="widget-body">
                                    <li className="text-white">
                                        <label>Address</label>
                                        <ALink href="#">123 Street Name, City, USA</ALink>
                                    </li>
                                    <li className="text-white">
                                        <label>Phone</label>
                                        <ALink href="tel:#">Toll Free (123) 456-7890</ALink>
                                    </li>
                                    <li className="text-white">
                                        <label>Email</label>
                                        <ALink href="mailto:mail@riode.com">mail@example.com</ALink>
                                    </li>
                                    <li className="text-white">
                                        <label style={{ marginBottom: '15px' }}>WORKING DAYS / HOURS</label>
                                        <ALink href="#">Mon - Sun / 9:00 AM - 8:00 PM</ALink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6">
                            <div className="widget">
                                <h4 className="widget-title">My Account</h4>
                                <ul className="widget-body">
                                    <li>
                                        <ALink href="/pages/contact-us">Contact Us</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Our Services</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Payment Methods</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Services Guide</ALink>
                                    </li>
                                    <li>
                                        <ALink href="/pages/faqs">FAQs</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Service Support</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Privacy</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">About Riode</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Our Guarantees</ALink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6">
                            <div className="widget">
                                <h4 className="widget-title">Our Service</h4>
                                <ul className="widget-body">
                                    <li>
                                        <ALink href="/pages/contact-us">Contact Us</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Our Services</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Payment Methods</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Services Guide</ALink>
                                    </li>
                                    <li>
                                        <ALink href="/pages/faqs">FAQs</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Service Support</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Privacy</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">About Riode</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Our Guarantees</ALink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-3 col-md-12">
                            <div className="widget widget-instagram row">
                                <div className="widget-item col-lg-12">
                                    <h4 className="widget-title" style={{ marginBottom: '27px' }}>Our Instagram</h4>
                                    <figure
                                        className="widget-body row mb-4 mb-lg-10 mr-sm-4 mr-xl-0 d-flex cols-5 gutter-sm">
                                        <div>
                                            <img src="images/instagram/01.jpg" alt="instagram 1" width="81"
                                                height="81" />
                                        </div>
                                        <div>
                                            <img src="images/instagram/02.jpg" alt="instagram 2" width="81"
                                                height="81" />
                                        </div>
                                        <div>
                                            <img src="images/instagram/03.jpg" alt="instagram 3" width="81"
                                                height="81" />
                                        </div>
                                        <div>
                                            <img src="images/instagram/04.jpg" alt="instagram 4" width="81"
                                                height="81" />
                                        </div>
                                        <div>
                                            <img src="images/instagram/08.jpg" alt="instagram 4" width="81"
                                                height="81" />
                                        </div>
                                    </figure>
                                </div>
                                <div className="widget-item col-lg-12">
                                    <figure className="payment">
                                        <img src="images/home/payment.png" alt="payment" width="272"
                                            height="20" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom d-block text-center">
                <p className="copyright">Copyright &copy; 2021 Riode Store. All Rights Reserved.</p>
            </div>
        </footer>
    )
}