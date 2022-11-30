import ALink from '~/components/features/custom-link';

export default function Footer () {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-middle">
                    <div className="row pt-2">
                        <div className="col-lg-2 d-flex align-items-center">
                            <ALink href="/" className="logo-footer">
                                <img src="images/home/logo-footer.png" alt="logo-footer" width="154" height="43" />
                            </ALink>
                        </div>
                        <div className="col-lg-3 col-contact col-md-6">
                            <div className="widget widget-contact">
                                <h4 className="widget-title">Get In Touch</h4>
                                <ul className="widget-body">
                                    <li>
                                        <label>Phone</label>
                                        <ALink href="tel:#">Toll Free (123) 456-7890</ALink>
                                    </li>
                                    <li>
                                        <label>Email</label>
                                        <ALink href="mailto:riode@mail.com">riode@mail.com</ALink>
                                    </li>
                                    <li>
                                        <label>Address</label>
                                        <ALink href="#">123 Street, City, England</ALink>
                                    </li>
                                    <li>
                                        <label>WORKING DAYS / HOURS</label>
                                        <ALink href="#">Mon - Sun / 9:00 AM - 8:00 PM</ALink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-account col-md-6">
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
                                        <ALink href="#">Service Support</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Privacy</ALink>
                                    </li>
                                    <li>
                                        <ALink href="/pages/about-us">About Riode</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Our Guarantees</ALink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="widget widget-newsletter form-wrapper">
                                <div className="newsletter-info">
                                    <h4 className="widget-title">Subscribe Newsletter</h4>
                                    <p>Subscribe to Riode eCommerce newsletter to receive timely updates from your favourite products.</p>
                                </div>
                                <form action="#" className="input-wrapper input-wrapper-inline">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Email address here..." required />
                                    <button className="btn btn-primary btn-rounded btn-md ml-2 d-inline-flex align-items-center" type="submit">subscribe<i className="d-icon-arrow-right"></i></button>
                                </form>
                            </div>
                            <div className="social-links">
                                <ALink href="#" className="social-link social-facebook fab fa-facebook-f"></ALink>
                                <ALink href="#" className="social-link social-twitter fab fa-twitter"></ALink>
                                <ALink href="#" className="social-link social-instagram fab fa-instagram"></ALink>
                                <ALink href="#" className="social-link social-pinterest fab fa-pinterest-p"></ALink>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-left">
                        <p className="copyright">Copyright &copy; 2021 Riode Store. All Rights Reserved.</p>
                    </div>
                    <div className="footer-right">
                        <figure className="d-flex">
                            <img src="images/home/payment.png" alt="payment" width="272" height="20" />
                        </figure>
                    </div>
                </div>
            </div>
        </footer>
    )
}