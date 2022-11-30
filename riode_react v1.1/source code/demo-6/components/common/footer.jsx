import ALink from '~/components/features/custom-link';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-middle text-center">
                    <div className="widget">
                        <ul className="widget-body">
                            <li><ALink href="/pages/about-us">About Us</ALink></li>
                            <li><ALink href="/blog/classic">Blog</ALink></li>
                            <li><ALink href="/pages/faqs">FAQs</ALink></li>
                            <li><ALink href="#">Order Tracking</ALink></li>
                            <li><ALink href="/pages/contact-us">Contact Us</ALink></li>
                            <li><a href="https://d-themes.com/buynow/riodereact" target="_blank" rel="noopener">Buy Riode!</a></li>
                        </ul>
                    </div>
                    <div className="social-links">
                        <ALink href="#" className="social-link social-facebook fab fa-facebook-f"></ALink>
                        <ALink href="#" className="social-link social-twitter fab fa-twitter"></ALink>
                        <ALink href="#" className="social-link social-linkedin fab fa-linkedin-in"></ALink>
                    </div>
                </div>
                <div className="footer-bottom d-block text-center">
                    <p className="copyright">Riode eCommerce &copy; 2021. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}