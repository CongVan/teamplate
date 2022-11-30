import ALink from '~/components/features/custom-link';

import CartMenu from '~/components/common/partials/cart-menu';
import CartMenuTwo from '~/components/common/partials/cart-menu-two';
import MainMenu from '~/components/common/partials/main-menu';
import SearchBox from '~/components/common/partials/search-box';

export default function Header () {
    const showMobileMenu = () => {
        document.querySelector( 'body' ).classList.add( 'mmenu-active' );
    }

    return (
        <header className="header">
            <div className="header-top">
                <div className="container">
                    <div className="header-left">
                        <p className="welcome-msg">Welcome to Riode store message or remove it!</p>
                    </div>
                    <div className="header-right">
                        <div className="dropdown currency-dropdown">
                            <ALink href="#">USD</ALink>
                            <ul className="dropdown-box">
                                <li><ALink href="#">USD</ALink></li>
                                <li><ALink href="#">EUR</ALink></li>
                            </ul>
                        </div>

                        <div className="dropdown language-dropdown">
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

                        <div className="dropdown dropdown-expanded d-lg-show">
                            <ALink href="#">Links</ALink>
                            <ul className="dropdown-box">
                                <li><ALink href="/pages/about-us">About</ALink></li>
                                <li><ALink href="/blog/classic">Blog</ALink></li>
                                <li><ALink href="/pages/faqs">FAQ</ALink></li>
                                <li><ALink href="#">Newsletter</ALink></li>
                                <li><ALink href="/pages/contact-us">Contact</ALink></li>
                                <li><ALink href="/pages/wishlist">Wishlist</ALink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header-middle has-center">
                <div className="container">
                    <div className="header-left">
                        <ALink href="#" className="mobile-menu-toggle" onClick={ showMobileMenu }>
                            <i className="d-icon-bars2"></i>
                        </ALink>

                    </div>

                    <div className="header-center">
                        <ALink href="/" className="logo mr-0">
                            <img src='./images/home/logo.png' alt="logo" width="153" height="44" />
                        </ALink>
                    </div>

                    <div className="header-right">
                        <CartMenu />
                    </div>
                </div>
            </div>

            <div className="header-bottom pb-0 sticky-header fix-top sticky-content has-center">
                <div className="container">
                    <div className="header-left">
                        <SearchBox />
                    </div>

                    <div className="header-center">
                        <MainMenu />
                    </div>

                    <div className="header-right">
                        <CartMenuTwo />
                    </div>
                </div>
            </div>
        </header >
    );
}