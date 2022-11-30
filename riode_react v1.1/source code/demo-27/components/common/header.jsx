import { useState, useEffect } from "react";
import Cookie from "js-cookie";
import { useRouter } from "next/router";

import ALink from '~/components/features/custom-link';

import CartMenu from '~/components/common/partials/cart-menu';
import MainMenu from '~/components/common/partials/main-menu';
import SearchBox from '~/components/common/partials/search-box';
import LoginModal from '~/components/features/modals/login-modal';

import { headerBorderRemoveList } from '~/utils/data/menu'

export default function Header(props) {
    const router = useRouter();
    const [showTopNotice, setShowTopNotice] = useState(!Cookie.get("closeTopNotice"));

    useEffect(() => {
        let header = document.querySelector('header');
        if (header) {
            if (headerBorderRemoveList.includes(router.pathname) || router.pathname.includes('product/default')) header.classList.remove('header-border')
            else if (!headerBorderRemoveList.includes(router.pathname)) document.querySelector('header').classList.add('header-border');
        }
    }, [router.pathname])

    const showMobileMenu = () => {
        document.querySelector('body').classList.add('mmenu-active');
    }

    function closeTopNotice(e) {
        e.preventDefault();
        setShowTopNotice(false);
        Cookie.set("closeTopNotice", true, { expires: 7, path: router.basePath });
    }

    return (
        <header className="header">
            {
                showTopNotice ?
                    <div className="justify-content-center bg-dark top-notice p-relative">
                        <div className="alert alert-black font-primary ">
                            Get 10% extra Off on Riode Birthday Sale - Use coupon Riodebirthday 10% -&nbsp;
                    <ALink href="/shop" className="btn btn-shop btn-link btn-primary text-normal btn-sm font-primary ml-1">
                                Shop now!</ALink>
                        </div>
                        <a className="btn btn-icon btn-notice-close y-50" href="#" onClick={closeTopNotice}><i className="d-icon-close"></i></a>
                    </div>
                    :
                    ''
            }

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

                        <span className="divider"></span>

                        <ALink href="/pages/contact-us" className="contact d-lg-show"><i className="d-icon-map"></i>Contact</ALink>
                        <ALink href="#" className="help d-lg-show"><i className="d-icon-info"></i> Need Help</ALink>
                        <LoginModal />
                    </div>
                </div>
            </div>

            <div className="header-middle">
                <div className="container">
                    <div className="header-left">
                        <ALink href="#" className="mobile-menu-toggle text-white" onClick={showMobileMenu}>
                            <i className="d-icon-bars2"></i>
                        </ALink>

                        <ALink href="/" className="logo">
                            <img src='./images/home/logo.png' alt="logo" width="154" height="43" />
                        </ALink>
                    </div>

                    <div className="header-center">
                        <SearchBox />
                    </div>

                    <div className="header-right">
                        <ALink href="tel:#" className="icon-box icon-box-side">
                            <div className="icon-box-icon mr-0 mr-lg-2 text-white">
                                <i className="d-icon-phone"></i>
                            </div>
                            <div className="icon-box-content d-lg-show">
                                <h4 className="icon-box-title text-white">Call Us Now:</h4>
                                <p className="text-white">0(800) 123-456</p>
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

            <div className="header-bottom sticky-header fix-top sticky-content">
                <div className="container justify-content-center">
                    <MainMenu />
                </div>
            </div>
        </header >
    );
}