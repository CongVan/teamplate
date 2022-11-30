import ALink from '~/components/features/custom-link';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="form-wrapper form-wrapper-inline newsletter-form">
                        <div className="icon-box icon-box-side mb-4 mb-lg-0">
                            <div className="icon-box-content">
                                <h4 className="icon-box-title text-white">Subscribe to the newsletter</h4>
                                <p className="text-white">Stay up to date regarding the newest product &amp; offers.</p>
                            </div>
                        </div>
                        <form action="#" method="get" className="input-wrapper input-wrapper-inline">
                            <input type="email" className="form-control font-primary " name="email" id="email"
                                placeholder="Enter Your E-mail Address..." required />
                            <button className="btn btn-dark" type="submit">Subscribe<i
                                className="d-icon-arrow-right"></i></button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12">
                            <div className="widget widget-about">
                                <ALink href="/" className="logo-footer">
                                    <img src="images/home/logo-footer.png" alt="logo-footer" width="154"
                                        height="43" />
                                </ALink>
                                <div className="widget-body">
                                    <p>Fringilla urna porttitor rhoncus dolor purus luctus <br /> venenatis lectus magna
                                        fringilla diam maecenas <br /> ultricies mi eget mauris.
                                    </p>
                                    <a href="mailto:mail@example.com">mail@example.com</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12">
                            <div className="row">
                                <div className="col-md-4 col-sm-12">
                                    <div className="widget">
                                        <h4 className="widget-title">About Us</h4>
                                        <ul className="widget-body">
                                            <li>
                                                <ALink href="/pages/about-us">About Us</ALink>
                                            </li>
                                            <li>
                                                <a href="#" onClick={(e) => e.preventDefault()}>Order History</a>
                                            </li>
                                            <li>
                                                <a href="#" onClick={(e) => e.preventDefault()}>Returns</a>
                                            </li>
                                            <li>
                                                <a href="#" onClick={(e) => e.preventDefault()}>Custom Service</a>
                                            </li>
                                            <li>
                                                <a href="#" onClick={(e) => e.preventDefault()}>Terms &amp; Condition</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-12">
                                    <div className="widget">
                                        <h4 className="widget-title">Customer Service</h4>
                                        <ul className="widget-body">
                                            <li>
                                                <a href="#" onClick={(e) => e.preventDefault()}>Payment Methods</a>
                                            </li>
                                            <li>
                                                <a href="#" onClick={(e) => e.preventDefault()}>Money-back Guarantee!</a>
                                            </li>
                                            <li>
                                                <a href="#" onClick={(e) => e.preventDefault()}>Returns</a>
                                            </li>
                                            <li>
                                                <a href="#" onClick={(e) => e.preventDefault()}>Shipping</a>
                                            </li>
                                            <li>
                                                <a href="#" onClick={(e) => e.preventDefault()}>Terms and Conditions</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-12">
                                    <div className="widget">
                                        <h4 className="widget-title">My Account</h4>
                                        <ul className="widget-body">
                                            <li>
                                                <a href="#" onClick={(e) => e.preventDefault()}>Sign in</a>
                                            </li>
                                            <li>
                                                <ALink href="/pages/cart">View Cart</ALink>
                                            </li>
                                            <li>
                                                <ALink href="/pages/wishlist">My Wishlist</ALink>
                                            </li>
                                            <li>
                                                <a href="#" onClick={(e) => e.preventDefault()}>Track My Order</a>
                                            </li>
                                            <li>
                                                <a href="#" onClick={(e) => e.preventDefault()}>Help</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-left">
                        <figure className="payment">
                            <img src="images/payment.png" alt="payment" width="159" height="29" />
                        </figure>
                    </div>
                    <div className="footer-center">
                        <p className="copyright">Riode eCommerce &copy; 2021. All Rights Reserved</p>
                    </div>
                    <div className="footer-right">
                        <div className="social-links">
                            <a href="#" className="social-link social-facebook fab fa-facebook-f" onClick={(e) => e.preventDefault()}></a>
                            <a href="#" className="social-link social-twitter fab fa-twitter" onClick={(e) => e.preventDefault()}></a>
                            <a href="#" className="social-link social-linkedin fab fa-linkedin-in" onClick={(e) => e.preventDefault()}></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}