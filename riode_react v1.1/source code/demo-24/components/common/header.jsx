import { useRouter } from 'next/router';

import ALink from '~/components/features/custom-link';

import CartMenu from '~/components/common/partials/cart-menu';
import MainMenu from '~/components/common/partials/main-menu';
import SearchBox from '~/components/common/partials/search-box';
import LoginModal from '~/components/features/modals/login-modal';

export default function Header () {
    const router = useRouter();

    const showMobileMenu = () => {
        document.querySelector( 'body' ).classList.add( 'mmenu-active' );
    }

    return (
        <header className="header">
            <div className={ `header-middle has-center ${ router.pathname.includes( '/product' ) ? 'border-bottom' : '' }` }>
                <div className="container">
                    <div className="header-left">
                        <ALink href="#" className="mobile-menu-toggle" onClick={ showMobileMenu }>
                            <i className="d-icon-bars2"></i>
                        </ALink>

                        <div className="dropdown currency-dropdown">
                            <ALink href="#">USD</ALink>
                            <ul className="dropdown-box">
                                <li><ALink href="#">USD</ALink></li>
                                <li><ALink href="#">EUR</ALink></li>
                            </ul>
                        </div>

                        <div className="dropdown language-dropdown">
                            <ALink href="#language">ENG</ALink>
                            <ul className="dropdown-box">
                                <li>
                                    <ALink href="#">ENG</ALink>
                                </li>
                                <li>
                                    <ALink href="#">FRH</ALink>
                                </li>
                            </ul>
                        </div>

                        <SearchBox />
                    </div>

                    <div className="header-center">
                        <ALink href="/" className="logo mr-0">
                            <img src='./images/home/logo.png' alt="logo" width="154" height="43" />
                        </ALink>
                    </div>

                    <div className="header-right">
                        <LoginModal />

                        <ALink className="wishlist" href="/pages/wishlist">
                            <i className="d-icon-heart"></i>
                        </ALink>

                        <span className="divider"></span>

                        <CartMenu />
                    </div>
                </div>
            </div>

            <div className={ `header-bottom sticky-header fix-top sticky-content has-center d-lg-block d-none ${ router.pathname.includes( '/product' ) || router.pathname.includes( '/order' ) ? 'border-bottom' : '' }` }>
                <div className="container">
                    <div className="header-left">
                    </div>

                    <div className="header-center">
                        <MainMenu />
                    </div>

                    <div className="header-right">
                    </div>
                </div>
            </div>
        </header >
    );
}