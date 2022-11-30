import { useRouter } from 'next/router';

import ALink from '~/components/features/custom-link';

import CartMenu from '~/components/common/partials/cart-menu';
import MainMenu from '~/components/common/partials/main-menu';
import SearchBox from '~/components/common/partials/search-box';

export default function Header() {
    const pathname = useRouter().pathname;
    let hasborder = pathname.includes('404') || pathname.includes('elements') ? 'true' : 'false';

    const showMobileMenu = () => {
        document.querySelector('body').classList.add('mmenu-active');
    }

    return (
        <header className="header">
            <div className="header-top">
                <div className="container">
                    <div className="header-left">
                        <p className="welcome-msg ls-normal">Welcome to Riode store message or remove it!</p>
                    </div>
                    <div className="header-right">
                        <div className="dropdown">
                            <ALink href="#">USD</ALink>
                            <ul className="dropdown-box">
                                <li><ALink href="#">USD</ALink></li>
                                <li><ALink href="#">EUR</ALink></li>
                            </ul>
                        </div>

                        <div className="dropdown">
                            <ALink href="#">ENG</ALink>
                            <ul className="dropdown-box">
                                <li>
                                    <ALink href="#">ENG</ALink>
                                </li>
                                <li>
                                    <ALink href="#">FRH</ALink>
                                </li>
                            </ul>
                        </div>

                        <span className="divider d-lg-show"></span>
                        <ALink href="/pages/contact-us" className="contact d-lg-show ml-0"><i className="d-icon-map"></i>Contact</ALink>
                        <ALink href="#" className="help d-lg-show"><i className="d-icon-info"></i> Need Help</ALink>
                    </div>
                </div>
            </div>

            <div className="header-middle">
                <div className="container">
                    <div className="header-left">
                        <ALink href="#" className="mobile-menu-toggle" onClick={showMobileMenu}>
                            <i className="d-icon-bars2"></i>
                        </ALink>

                        <a href="tel:#" className="call icon-box icon-box-side">
                            <div className="icon-box-icon text-white p-0">
                                <i className="d-icon-phone"></i>
                            </div>
                            <div className="icon-box-content d-lg-show">
                                <h4 className="icon-box-title text-white">Call Us Now:</h4>
                                <p className="text-white">0(123) 456-789</p>
                            </div>
                        </a>
                    </div>

                    <div className="header-center">
                        <ALink href="/" className="logo">
                            <img src='./images/home/logo.png' alt="logo" width="154" height="43" />
                        </ALink>
                    </div>

                    <div className="header-right">
                        <ALink href="/pages/account" className="login-link mr-4 mr-lg-6">
                            <i className="d-icon-user"></i>
                        </ALink>
                        <ALink href="/pages/wishlist" className="wishlist">
                            <i className="d-icon-heart"></i>
                        </ALink>
                        <span className="divider mr-3"></span>

                        <CartMenu />
                    </div>
                </div>
            </div>

            <div className={`header-bottom sticky-header fix-top sticky-content ${hasborder === 'true' ? 'no-border' : ''}`}>
                <div className="container">
                    <div className="header-left">
                        <SearchBox />

                    </div>

                    <div className="header-center justify-content-center">
                        <MainMenu />
                    </div>

                    <div className="header-right mr-0">
                        <a href="https://d-themes.com/buynow/riodereact" className="font-weight-semi-bold">Buy Riode!</a>
                    </div>
                </div>
            </div>
        </header >
    );
}