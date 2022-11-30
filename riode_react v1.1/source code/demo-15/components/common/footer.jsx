import ALink from '~/components/features/custom-link';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-5col col-lg-3">
                            <ALink href="/" className="logo-footer">
                                <img src="./images/home/logo-footer.png" alt="logo-footer" width="154"
                                    height="43" />
                            </ALink>

                        </div>
                        <div className="col-xl-5col4 col-lg-9">
                            <div className="widget widget-newsletter form-wrapper form-wrapper-inline">
                                <div className="newsletter-info mx-auto ml-lg-4 mb-4 mb-lg-0 pr-lg-4">
                                    <h4 className="widget-title mb-1">Subscribe to our Newsletter</h4>
                                    <p>Get all the latest information, Sales and Offers.</p>
                                </div>
                                <form action="#" className="input-wrapper input-wrapper-inline">
                                    <input type="email" className="form-control" name="email" id="email"
                                        placeholder="Email address here..." required />
                                    <button className="btn btn-rounded btn-primary btn-sm" type="submit"><span>subscribe</span><i
                                        className="d-icon-arrow-right"></i></button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5col col-lg-3 col-sm-6">
                            <div className="widget widget-contact">
                                <h4 className="widget-title">Contact Info</h4>
                                <ul className="widget-body">
                                    <li>
                                        <label>Phone:</label>
                                        <ALink href="#">Toll Free (123) 456-7890</ALink>
                                    </li>
                                    <li>
                                        <label>Email:</label>
                                        <ALink href="#">mail@Riode.com</ALink>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-xl-5col col-lg-3 col-sm-6">
                            <div className="widget">
                                <h4 className="widget-title">My Account</h4>
                                <ul className="widget-body">
                                    <li>
                                        <ALink href="/pages/about-us">About Us</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Order History</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Returns</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Custom Service</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Terms &amp; Condition</ALink>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-xl-5col col-lg-3 col-sm-6">
                            <div className="widget">
                                <h4 className="widget-title">Customer Service</h4>
                                <ul className="widget-body">
                                    <li>
                                        <ALink href="/pages/about-us">About Us</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Order History</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Returns</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Custom Service</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Terms &amp; Condition</ALink>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-xl-5col col-lg-3 col-sm-6">
                            <div className="widget">
                                <h4 className="widget-title">Contact Info</h4>
                                <ul className="widget-body">
                                    <li>
                                        <ALink href="/pages/login">Sign In</ALink>
                                    </li>
                                    <li>
                                        <ALink href="/pages/cart">View Cart</ALink>
                                    </li>
                                    <li>
                                        <ALink href="/pages/wishlist">My Wishlist</ALink>
                                    </li>
                                    <li>
                                        <ALink href="/pages/order">Track My Order</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Help</ALink>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-xl-5col2 col-lg-12">
                            <div className="widget posts">
                                <h4 className="widget-title">Popular Posts</h4>
                                <div className="widget-body row">
                                    <div className="col-md-6">
                                        <div className="post post-list-xs">
                                            <div className="post-calendar">
                                                <span className="post-day">19</span>
                                                <span className="post-month">JAN</span>
                                            </div>
                                            <div className="post-details">
                                                <h4 className="post-title"><ALink href="/blog/single/quisque-volutpat-mattiseros-sollicitudin-leo-quisque">
                                                    Quisque volutpat mattiseros sollicitudin leo quisque</ALink></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="post post-list-xs">
                                            <div className="post-calendar">
                                                <span className="post-day">19</span>
                                                <span className="post-month">JAN</span>
                                            </div>
                                            <div className="post-details">
                                                <h4 className="post-title"><ALink href="/blog/single/utaliquam-sollicitudin-leo-quisque-volutpat-mattiseros">
                                                    Utaliquam sollicitudin leo quisque volutpat mattiseros</ALink></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="post post-list-xs">
                                            <div className="post-calendar">
                                                <span className="post-day">19</span>
                                                <span className="post-month">JAN</span>
                                            </div>
                                            <div className="post-details">
                                                <h4 className="post-title"><ALink href="/blog/single/fusce-pellentesque-suscipit-quisque-volutpat-mattiseros">
                                                    Fusce pellentesque suscipit quisque volutpat mattiseros</ALink></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="post post-list-xs">
                                            <div className="post-calendar">
                                                <span className="post-day">19</span>
                                                <span className="post-month">JAN</span>
                                            </div>
                                            <div className="post-details">
                                                <h4 className="post-title"><ALink href="/blog/single/in-culpa-qui-officia-deserunt-mollit-anim-id-est-laborum">
                                                    In culpa qui officia deserunt mollit anim id est laborum</ALink></h4>
                                            </div>
                                        </div>
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
                            <ALink href="#" className="social-link social-facebook fab fa-facebook-f"></ALink>
                            <ALink href="#" className="social-link social-twitter fab fa-twitter"></ALink>
                            <ALink href="#" className="social-link social-linkedin fab fa-linkedin-in"></ALink>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}