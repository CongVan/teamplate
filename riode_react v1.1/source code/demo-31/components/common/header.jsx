import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Cookie from "js-cookie";

import ALink from '~/components/features/custom-link';

import CartMenu from '~/components/common/partials/cart-menu';
import MainMenu from '~/components/common/partials/main-menu';
import SearchBox from '~/components/common/partials/search-box';
import LoginModal from '~/components/features/modals/login-modal';

import { headerBorderRemoveList } from '~/utils/data/menu'

export default function Header(props) {
    const router = useRouter();
    const [showTopNotice, setShowTopNotice] = useState(!Cookie.get("closeTopNotice"));

    function closeTopNotice(e) {
        e.preventDefault();
        setShowTopNotice(false);
        Cookie.set("closeTopNotice", true, { expires: 7, path: router.basePath });
    }

    const showMobileMenu = () => {
        document.querySelector('body').classList.add('mmenu-active');
    }

    return (
        <header className="header">
            {
                showTopNotice ?
                    <div className="d-flex justify-content-center alert-section">
                        <div className="alert font-primary ">
                            Get 10% extra Off on Riode Birthday Sale - Use Riodebirthday coupon - <ALink href="/shop"
                                className="btn btn-shop btn-link btn-underline btn-underline-width-sm btn-underline-visible btn-primary text-uppercase btn-sm font-primary ">Shop
                        now!</ALink>
                            <a href="#" type="button" className="btn btn-link btn-close" onClick={closeTopNotice}>
                                <i className="d-icon-times"></i>
                            </a>
                        </div>
                    </div>
                    :
                    ''
            }

            <div className="header-middle sticky-header fix-top sticky-content">
                <div className="header-left">
                    <ALink href="/" className="logo mr-4">
                        <img src='./images/home/logo.png' alt="logo" width="154" height="43" />
                    </ALink>

                    <ALink href="#" className="mobile-menu-toggle" onClick={showMobileMenu}>
                        <i className="d-icon-bars2"></i>
                    </ALink>

                    <MainMenu />

                    <span className="divider"></span>

                    <SearchBox />
                </div>

                <div className="header-right">
                    <a className="call mr-5" href="tel:#">
                        <i className="d-icon-phone"></i>
                        <span className="text-normal">Live Chat or:<strong className="d-block">0(123)
                                456-789</strong></span>
                    </a>
                    <span className="divider"></span>
                    <LoginModal />

                    <ALink href="/pages/wishlist" className="wishlist">
                        <i className="d-icon-heart"></i>
                    </ALink>
                    <span className="divider"></span>

                    <CartMenu />
                </div>
            </div>
        </header >
    );
}