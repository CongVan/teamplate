import ALink from '~/components/features/custom-link';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="widget widget-about">
                                <ALink href="/" className="logo-footer">
                                    <img src="./images/home/logo.png" alt="logo-footer" width="154" height="44" />
                                </ALink>
                                <div className="widget-body">
                                    <p>Fringilla urna porttitor rhoncus dolor purus
                                    luctus venenatis lectus magna fringilla diam
                                        maecenas ultricies mi eget mauris.</p>
                                    <ALink href="mailto:mail@riode.com">Riode@example.com</ALink>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="widget">
                                <h4 className="widget-title">Account</h4>
                                <ul className="widget-body">
                                    <li>
                                        <ALink href="/pages/account">My Account</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Our Guarantees</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Terms And Conditions</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Privacy Policy</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Intellectual Property Claims</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Site Map</ALink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="widget mb-md-0 mb-lg-6">
                                <h4 className="widget-title">Get Help</h4>
                                <ul className="widget-body">
                                    <li>
                                        <ALink href="#">Shipping &amp; Delivery</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Order Status</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Brand</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Returns</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Payment Options</ALink>
                                    </li>
                                    <li>
                                        <ALink href="/pages/contact-us">Contact Us</ALink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="widget">
                                <h4 className="widget-title pt-1 mb-4">Subscribe to Our Newsletter</h4>
                                <div className="widget-body widget-newsletter pt-0">
                                    <form action="#" className="input-wrapper input-wrapper-inline">
                                        <input type="email" className="form-control" name="email" id="email"
                                            placeholder="Email address here..." required />
                                        <button className="btn btn-primary btn-sm btn-icon-right font-primary"
                                            type="submit">subscribe<i className="d-icon-arrow-right"></i></button>
                                    </form>
                                </div>
                            </div>
                            <div className="footer-info d-flex align-items-center justify-content-between">
                                <figure className="payment">
                                    <img src="./images/home/payment.png" alt="payment" width="135" height="24" />
                                </figure>
                                <div className="social-links">
                                    <ALink href="#" className="social-link social-facebook fab fa-facebook-f"></ALink>
                                    <ALink href="#" className="social-link social-twitter fab fa-twitter"></ALink>
                                    <ALink href="#" className="social-link social-linkedin fab fa-linkedin-in"></ALink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom d-block">
                <div className="container justify-content-center">
                    <div className="footer-center mb-0">
                        <p className="copyright">Riode eCommerce &copy; 2021. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}