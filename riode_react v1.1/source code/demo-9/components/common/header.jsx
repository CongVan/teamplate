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
        <header className="header">
            <div className="header-top">
                <div className="container">
                    <div className="header-left">
                        <div className="social-links inline-links d-lg-show">
                            <ALink href="#" className="social-link social-twitter fab fa-twitter" title="twitter"></ALink>
                            <ALink href="#" className="social-link social-linkedin fab fa-linkedin-in" title="linkedin"></ALink>
                            <ALink href="#" className="social-link social-facebook fab fa-facebook-f" title="facebook"></ALink>
                            <ALink href="#" className="social-link social-pinterest fab fa-pinterest-p" title="pinterest"></ALink>
                        </div>
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

                        <span className="divider"></span>
                        <ALink href="/pages/contact-us" className="contact d-lg-show"><i className="d-icon-map"></i>Contact</ALink>
                        <LoginModal />
                    </div>
                </div>
            </div>

            <div className="header-middle">
                <div className="container">
                    <div className="header-left">
                        <ALink href="#" className="mobile-menu-toggle" onClick={ showMobileMenu }>
                            <i className="d-icon-bars2"></i>
                        </ALink>

                        <SearchBox />
                    </div>

                    <div className="header-center">
                        <ALink href="/" className="logo mr-0">
                            <img src="./images/home/logo.png" alt="logo" width="150" height="42" />
                        </ALink>
                    </div>

                    <div className="header-right flex-1 justify-content-end">
                        <ALink href="tel:#" className="icon-box icon-box-side">
                            <div className="icon-box-icon mr-0 mr-lg-2">
                                <i className="d-icon-phone"></i>
                            </div>
                            <div className="icon-box-content d-lg-show">
                                <h4 className="icon-box-title">Call Us Now:</h4>
                                <p>0(800) 123-456</p>
                            </div>
                        </ALink>
                        <span className="divider"></span>
                        <ALink href="/pages/wishlist" className="wishlist">
                            <i className="d-icon-heart"></i>
                        </ALink>
                        <span className="divider"></span>

                        <CartMenu />
                    </div>
                </div>
            </div>

            <div className="header-bottom has-center sticky-header fix-top sticky-content d-lg-show">
                <div className="container">
                    <div className="inner-wrap">
                        <div className="header-left"></div>

                        <div className="header-center">
                            <MainMenu />
                        </div>

                        <div className="header-right"></div>
                    </div>
                </div>
            </div>
        </header >
    );
}