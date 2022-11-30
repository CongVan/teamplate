import { useEffect } from 'react';
import { useRouter } from 'next/router';

import ALink from '~/components/features/custom-link';

import CartMenu from '~/components/common/partials/cart-menu';
import MainMenu from '~/components/common/partials/main-menu';
import SearchBox from '~/components/common/partials/search-box';
import LoginModal from '~/components/features/modals/login-modal';

import { headerBorderRemoveList } from '~/utils/data/menu'

export default function Header ( props ) {
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

                        <div className="dropdown ml-5">
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
                        <ALink href="/pages/contact-us" className="contact d-lg-show mr-1"><i className="d-icon-map mr-1"></i>Contact</ALink>
                        <ALink href="#" className="help d-lg-show"><i className="d-icon-info"></i> Need Help</ALink>
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

                        <ALink href="/" className="logo">
                            <img src='./images/home/logo.png' alt="logo" width="153" height="44" />
                        </ALink>

                        <SearchBox />
                    </div>

                    <div className="header-right">
                        <ALink href="tel:#" className="icon-box icon-box-side">
                            <div className="icon-box-icon mr-0 mr-lg-1">
                                <i className="d-icon-phone"></i>
                            </div>
                            <div className="icon-box-content d-lg-show mb-1">
                                <span className="icon-box-title mb-1 d-inline-block">Call Us Now:</span>
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

            <div className={ `header-bottom has-dropdown pb-0 sticky-header fix-top sticky-content d-lg-show ${ router.pathname !== "/" ? "border-no" : "" }` }>
                <div className="container d-flex align-items-center">
                    <div className={ `dropdown category-dropdown has-border ${ router.pathname === "/" ? "fixed" : "" }` }>
                        <ALink href="#" className="font-weight-semi-bold category-toggle"><i className="d-icon-bars2"></i><span>Browse Categories</span></ALink>

                        <div className="dropdown-box">
                            <ul className="menu vertical-menu category-menu">
                                <li>
                                    <ALink href={ { pathname: "/shop", query: { category: "pictorial-book" } } }><i className="d-icon-reading"></i>Pictorial Book</ALink>
                                </li>
                                <li>
                                    <ALink href={ { pathname: "/shop", query: { category: "milk-for-baby" } } }><i className="d-icon-feeder"
                                        style={ { fontSize: "2.3rem", marginLeft: "-3px", marginRight: "8px" } }></i>Milk
                                        For Baby</ALink>
                                </li>
                                <li>
                                    <ALink href={ { pathname: "/shop", query: { category: "gifts-and-others" } } }><i className="d-icon-birthday-cake2"></i>Gifts &amp;
                                        Others</ALink>
                                </li>
                                <li>
                                    <ALink href={ { pathname: "/shop", query: { category: "mother-and-daughter" } } }><i className="d-icon-skirt"></i>Mother &amp; Daughter</ALink>
                                </li>
                                <li>
                                    <ALink href={ { pathname: "/shop", query: { category: "baby-toys" } } }><i className="d-icon-toy"
                                        style={ { fontSize: "2rem", marginRight: "7px" } }></i>Baby Toys</ALink>
                                </li>
                                <li>
                                    <ALink href={ { pathname: "/shop", query: { category: "baby-out" } } }><i className="d-icon-butterfly"></i>Baby Out</ALink>
                                </li>
                                <li>
                                    <ALink href={ { pathname: "/shop", query: { category: "apparels-for-baby" } } }><i className="d-icon-babywear"></i>Apparels For Baby</ALink>
                                </li>
                                <li>
                                    <ALink href={ { pathname: "/shop", query: { category: "secures-and-health" } } }><i className="d-icon-heartbeat"></i>Secures &amp;
                                        Health</ALink>
                                </li>
                                <li>
                                    <ALink href={ { pathname: "/shop", query: { category: "baby-carriage" } } }><i className="d-icon-babycare2"></i>Baby Carriage</ALink>
                                </li>
                                <li>
                                    <ALink href={ { pathname: "/shop", query: { category: "flash-deals" } } }><i className="d-icon-card"></i>Flash Deals</ALink>
                                </li>
                                <li>
                                    <ALink href={ { pathname: "/shop", query: { category: "riode-gift-card" } } }><i className="d-icon-card"></i>Riode Gift Card</ALink>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <MainMenu />

                    <div className="d-flex align-items-center ml-auto">
                        <a href="https://d-themes.com/buynow/riodereact" className="ml-6">Buy Riode!</a>
                    </div>
                </div>
            </div>
        </header >
    );
}