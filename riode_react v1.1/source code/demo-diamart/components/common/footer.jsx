import ALink from '~/components/features/custom-link';

export default function Footer () {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-middle">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="widget widget-about">
                                <h4 className="widget-title">About Us</h4>
                                <div className="widget-body">
                                    <p className="font-primary ls-normal mb-4 pr-lg-3">Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit...</p>
                                </div>
                                <ALink href="/" className="logo-footer pb-4 pb-lg-0">
                                    <img src="images/home/logo-footer.png" alt="logo-footer" width="154" height="43" />
                                </ALink>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="widget">
                                <h4 className="widget-title">Useful links</h4>
                                <ul className="widget-body">
                                    <li>
                                        <ALink href="">Features</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Pages</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Portfolio</ALink>
                                    </li>
                                    <li>
                                        <ALink href="/pages/about-us">About Us</ALink>
                                    </li>
                                    <li>
                                        <ALink href="/pages/contact-us">Contact Us</ALink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="widget">
                                <h4 className="widget-title">Our Services</h4>
                                <ul className="widget-body">
                                    <li>
                                        <ALink href="#">Cosmetia Services</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Riode Gift</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Social Media</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Professional</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Cosmetia Shop</ALink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="widget widget-info mb-0">
                                <h4 className="widget-title">Contact Us</h4>
                                <ul className="widget-body mb-5">
                                    <li>
                                        <label>Address:</label> <ALink href="#">123 Street Name, City, England</ALink>
                                    </li>
                                    <li>
                                        <label>Phone:</label> <a href="tel:#">(123) 456-7890</a>
                                    </li>
                                    <li>
                                        <label>Email:</label> <a href="mailto:mail@riode.com">Mail@example.com</a>
                                    </li>
                                </ul>
                                <div className="social-links">
                                    <ALink href="#" className="social-link social-facebook fab fa-facebook-f"></ALink>
                                    <ALink href="#" className="social-link social-twitter fab fa-twitter"></ALink>
                                    <ALink href="#" className="social-link social-linkedin fab fa-linkedin-in"></ALink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-left mb-0">
                    </div>
                    <div className="footer-center mb-0">
                        <p className="copyright">Riode eCommerce &copy; 2021. All Rights Reserved</p>
                    </div>
                    <div className="footer-right mb-0">
                    </div>
                </div>
            </div>
        </footer>
    )
}