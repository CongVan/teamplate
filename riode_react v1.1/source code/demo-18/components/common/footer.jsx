import ALink from '~/components/features/custom-link';

export default function Footer () {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-bottom">
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