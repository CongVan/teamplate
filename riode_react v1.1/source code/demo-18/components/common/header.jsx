import ALink from '~/components/features/custom-link';

import CartMenu from '~/components/common/partials/cart-menu';
import SearchBox from '~/components/common/partials/search-box';
import LoginModal from '~/components/features/modals/login-modal';

export default function Header () {
    const showMobileMenu = () => {
        document.querySelector( 'body' ).classList.add( 'mmenu-active' );
    }

    return (
        <header className="header">
            <div className="header-middle has-center sticky-header fix-top sticky-content">
                <div className="container">
                    <div className="header-left">
                        <ALink href="#" className="mobile-menu-toggle" onClick={ showMobileMenu }>
                            <i className="d-icon-bars2"></i>
                        </ALink>

                        <SearchBox />

                        <div className="dropdown language-dropdown mr-6">
                            <ALink href="#" className="no-link"><i className="far fa-basketball-ball mr-1"></i>GB</ALink>
                            <ul className="dropdown-box">
                                <li>
                                    <ALink href="#">
                                        English
                                    </ALink>
                                </li>
                                <li>
                                    <ALink href="#">
                                        French
                                    </ALink>
                                </li>
                            </ul>
                        </div>

                        <div className="icon-box-content d-lg-show">
                            <ALink href="tel:#">
                                <i className="d-icon-phone"></i>
                                <span className="font-weight-normal"> +(123) 456-7890</span>
                            </ALink>
                        </div>
                    </div>

                    <div className="header-center">
                        <ALink href="/" className="logo mr-0">
                            <img src='./images/home/logo.png' alt="logo" width="308" height="86" />
                        </ALink>
                    </div>

                    <div className="header-right">
                        <LoginModal />

                        <ALink href="/pages/wishlist" className="wishlist mr-4 d-lg-show">
                            <i className="d-icon-heart"></i>
                        </ALink>

                        <CartMenu />
                    </div>
                </div>
            </div>
        </header >
    );
}