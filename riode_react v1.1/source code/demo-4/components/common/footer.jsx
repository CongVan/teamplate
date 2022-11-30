import ALink from '~/components/features/custom-link';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="widget">
                                        <h4 className="widget-title">Get To Know Us</h4>
                                        <ul className="widget-body">
                                            <li><ALink href="#">About Riode</ALink></li>
                                            <li><ALink href="#">Careers</ALink></li>
                                            <li><ALink href="#">Affiliate Program</ALink></li>
                                            <li><ALink href="#">Show Hosts</ALink></li>
                                            <li><ALink href="#">Riode Cares</ALink></li>
                                            <li><ALink href="#">Submit Your Product</ALink></li>
                                        </ul>
                                    </div>

                                </div>
                                <div className="col-md-4 mb-4 mb-md-0">
                                    <div className="widget">
                                        <h4 className="widget-title">Account</h4>
                                        <ul className="widget-body">
                                            <li><ALink href="/pages/account">My Account</ALink></li>
                                            <li><ALink href="#">Our Guarantees</ALink></li>
                                            <li><ALink href="#">Terms And Conditions</ALink></li>
                                            <li><ALink href="#">Privacy Policy</ALink></li>
                                            <li><ALink href="#">Intellectual Property Claims</ALink></li>
                                            <li><ALink href="#">Site Map</ALink></li>
                                        </ul>
                                    </div>

                                </div>
                                <div className="col-md-4">
                                    <div className="widget">
                                        <h4 className="widget-title">Get Help</h4>
                                        <ul className="widget-body">
                                            <li><ALink href="#">Shipping &amp; Delivery</ALink></li>
                                            <li><ALink href="#">Order Status</ALink></li>
                                            <li><ALink href="#">Brand</ALink></li>
                                            <li><ALink href="#">Returns</ALink></li>
                                            <li><ALink href="#">Payment Options</ALink></li>
                                            <li><ALink href="/pages/contact-us">Contact Us</ALink></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="widget">
                                <h4 className="widget-title">Newsletter</h4>
                                <div className="widget-body widget-newsletter">
                                    <p>Sign up for newsletter today</p>
                                    <form action="#" className="input-wrapper input-wrapper-inline">
                                        <input type="email" className="form-control" name="email" id="email"
                                            placeholder="Email address here..." required />
                                        <button className="btn btn-primary btn-sm btn-rounded btn-icon-right" type="submit">subscribe<i
                                            className="d-icon-arrow-right"></i></button>
                                    </form>
                                </div>
                            </div>
                            <div className="footer-info d-flex align-items-center justify-content-between">
                                <div className="social-links">
                                    <ALink href="#" className="social-link social-facebook fab fa-facebook-f"></ALink>
                                    <ALink href="#" className="social-link social-twitter fab fa-twitter"></ALink>
                                    <ALink href="#" className="social-link social-linkedin fab fa-linkedin-in"></ALink>
                                </div>
                                <figure className="payment">
                                    <img src="./images/home/payment.png" alt="payment" width="135" height="24" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container justify-content-center">
                    <p className="copyright">Riode eCommerce &copy; 2021. All Rights Reserved</p>
                </div>
            </div>

        </footer>
    )
}