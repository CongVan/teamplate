import { useEffect } from 'react';
import { useRouter } from 'next/router';

import ALink from '~/components/features/custom-link';

import CartMenu from '~/components/common/partials/cart-menu';
import MainMenu from '~/components/common/partials/main-menu';
import SearchBox from '~/components/common/partials/search-box';
import LoginModal from '~/components/features/modals/login-modal';

import { headerBorderRemoveList } from '~/utils/data/menu'

export default function Header( props ) {
    const router = useRouter();

    useEffect( () => {
        let header = document.querySelector( 'header' );
        if ( header ) {
            if ( headerBorderRemoveList.includes( router.pathname ) && header.classList.contains( 'header-border' ) ) header.classList.remove( 'header-border' )
            else if ( !headerBorderRemoveList.includes( router.pathname ) ) document.querySelector( 'header' ).classList.add( 'header-border' );
        }
    }, [ router.pathname ] )


    const showMobileMenu = () => {
        document.querySelector( 'body' ).classList.add( 'mmenu-active' );
    }

    return (
        <header className="header header-border">
            <div className="header-top">
                <div className="container">
                    <div className="header-left">
                        <p className="welcome-msg">Welcome to Riode store message or remove it!</p>
                    </div>

                    <div className="header-right">
                        <div className="dropdown">
                            <ALink href="#">USD</ALink>
                            <ul className="dropdown-box">
                                <li><ALink href="#">USD</ALink></li>
                                <li><ALink href="#">EUR</ALink></li>
                            </ul>
                        </div>

                        <div className="dropdown ml-4">
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
                        <ALink href="/pages/contact-us" className="contact d-lg-show mr-0"><i className="d-icon-map"></i>Contact
                            Us</ALink>
                        <span className="divider d-lg-show"></span>
                        <ALink href="#" className="help d-lg-show"><i className="d-icon-info"></i> Need Help</ALink>
                    </div>
                </div>
            </div>

            <div className="header-middle sticky-header fix-top sticky-content">
                <div className="container">
                    <div className="header-left">
                        <ALink href="#" className="mobile-menu-toggle mr-0" onClick={ showMobileMenu }>
                            <i className="d-icon-bars2"></i>
                        </ALink>

                        <ALink href="/" className="logo d-lg-show">
                            <img src='./images/home/logo.png' alt="logo" width="154" height="43" />
                        </ALink>

                        <MainMenu />

                        <span className="divider d-xl-show mr-4"></span>

                        <SearchBox />
                    </div>

                    <div className="header-center d-flex d-lg-none flex-1 justify-content-center">
                        <ALink href="/" className="logo mr-0">
                            <img src="./images/home/logo.png" alt="logo" width="154" height="43" />
                        </ALink>
                    </div>

                    <div className="header-right">
                        <a href="tel:#" className="icon-box icon-box-side mr-6 d-xl-show">
                            <div className="icon-box-icon mr-0 mr-lg-1">
                                <i className="d-icon-phone"></i>
                            </div>
                            <div className="icon-box-content d-lg-show">
                                <p>(800) 414-1769</p>
                            </div>
                        </a>

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