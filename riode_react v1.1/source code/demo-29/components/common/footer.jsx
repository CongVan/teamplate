import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { mainSlider22 } from '~/utils/data/carousel';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <OwlCarousel adClass="owl-theme  owl-middle" options={mainSlider22}>
                        <div className="icon-box icon-box-side slide-icon-box justify-content-center">
                            <i className="icon-box-icon d-icon-truck" style={{ fontSize: '46px' }}>
                            </i>
                            <div className="icon-box-content">
                                <h4 className="icon-box-title">Free shipping &amp; Return</h4>
                                <p>Free shipping on orders over $99</p>
                            </div>
                        </div>
                        <div className="icon-box icon-box-side slide-icon-box justify-content-center">
                            <i className="icon-box-icon d-icon-service">
                            </i>
                            <div className="icon-box-content">
                                <h4 className="icon-box-title">Customer Support 24/7</h4>
                                <p>Instant access to perfect support</p>
                            </div>
                        </div>
                        <div className="icon-box icon-box-side slide-icon-box justify-content-center">
                            <i className="icon-box-icon d-icon-secure">
                            </i>
                            <div className="icon-box-content">
                                <h4 className="icon-box-title">100% Secure Payment</h4>
                                <p>We ensure secure payment!</p>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
                <div className="footer-middle">
                    <div className="container p-0">
                        <div className="row">
                            <div className="col-lg-4 col-md-12">
                                <div className="widget widget-about">
                                    <ALink href="/" className="logo-footer">
                                        <img src="./images/home/logo-footer.png" alt="logo-footer" width="154"
                                            height="43" />
                                    </ALink>
                                    <div className="widget-body">
                                        <p>Fringilla urna porttitor rhoncus dolor purus luctus <br /> venenatis lectus
                                        magna
                                            fringilla diam maecenas <br /> ultricies mi eget mauris.
                                        </p>
                                        <a href="mailto:mail@example.com">Riode@example.com</a>
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
                                                    <a href="#">Order History</a>
                                                </li>
                                                <li>
                                                    <ALink href="/pages/faqs">FAQ</ALink>
                                                </li>
                                                <li>
                                                    <ALink href="/pages/contact-us">Contact Us</ALink>
                                                </li>
                                                <li>
                                                    <ALink href="/pages/account">Log in</ALink>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-12">
                                        <div className="widget">
                                            <h4 className="widget-title">Customer Service</h4>
                                            <ul className="widget-body">
                                                <li>
                                                    <a href="#">Payment Methods</a>
                                                </li>
                                                <li>
                                                    <a href="#">Money-back Guarantee!</a>
                                                </li>
                                                <li>
                                                    <a href="#">Returns</a>
                                                </li>
                                                <li>
                                                    <a href="#">Shipping</a>
                                                </li>
                                                <li>
                                                    <a href="#">Terms and Conditions</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-12">
                                        <div className="widget">
                                            <h4 className="widget-title">My Account</h4>
                                            <ul className="widget-body">
                                                <li>
                                                    <a href="#">Sign in</a>
                                                </li>
                                                <li>
                                                    <ALink href="/pages/cart">View Cart</ALink>
                                                </li>
                                                <li>
                                                    <ALink href="/pages/wishlist">My Wishlist</ALink>
                                                </li>
                                                <li>
                                                    <a href="#">Track My Order</a>
                                                </li>
                                                <li>
                                                    <a href="#">Help</a>
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
                    <div className="container p-0">
                        <div className="footer-left">
                            <figure className="payment">
                                <img src="./images/payment.png" alt="payment" width="159" height="29" />
                            </figure>
                        </div>
                        <div className="footer-center">
                            <p className="copyright">Riode eCommerce &copy; 2021. All Rights Reserved</p>
                        </div>
                        <div className="footer-right">
                            <div className="social-links">
                                <a href="#" className="social-link social-facebook fab fa-facebook-f"></a>
                                <a href="#" className="social-link social-twitter fab fa-twitter"></a>
                                <a href="#" className="social-link social-linkedin fab fa-linkedin-in mr-0"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}