import { useRouter } from 'next/router';
import { useEffect } from 'react';

import ALink from '~/components/features/custom-link';

import LoginModal from '~/components/features/modals/login-modal';
import CartMenu from '~/components/common/partials/cart-menu';
import MainMenu from '~/components/common/partials/main-menu';
import SearchBox from '~/components/common/partials/search-box';

import { headerBorderRemoveList } from '~/utils/data/menu'

export default function Header () {
    const router = useRouter();

    useEffect( () => {
        let header = document.querySelector( 'header' );
        if ( header ) {
            if ( !headerBorderRemoveList.includes( router.pathname ) && header.classList.contains( 'border-no' ) ) header.classList.remove( 'border-no' )
            else if ( headerBorderRemoveList.includes( router.pathname ) ) document.querySelector( 'header' ).classList.add( 'border-no' );
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
                        <div className="welcome-msg">
                            <ALink href="/pages/contact-us" className="contact"><i className="d-icon-map"></i>Find Riode Store</ALink>
                            <ALink href="#" className="help"><i className="d-icon-info"></i>Free Standard Shipping</ALink>
                        </div>
                    </div>
                    <div className="header-right">
                        <ALink className="call ls-m" href="tel:#">Call Us: 0(800) 123-456</ALink>
                        <ALink href="/pages/wishlist" className="wishlist"><i className="d-icon-heart"></i>Wishlist</ALink>

                        <LoginModal />

                        <CartMenu />
                    </div>
                </div>
            </div>

            <div className="header-middle sticky-header fix-top sticky-content">
                <div className="container">
                    <div className="header-left">
                        <ALink href="#" className="mobile-menu-toggle mr-0" onClick={ showMobileMenu }>
                            <i className="d-icon-bars2"></i>
                        </ALink>

                        <ALink href="/" className="logo d-none d-lg-block">
                            <img src='./images/home/logo.png' alt="logo" width="154" height="43" />
                        </ALink>
                    </div>

                    <div className="header-center d-flex justify-content-center">
                        <ALink href="/" className="logo d-block d-lg-none">
                            <img src='./images/home/logo.png' alt="logo" width="154" height="43" />
                        </ALink>
                    </div>

                    <div className="header-right">
                        <MainMenu />

                        <span className="divider mr-4"></span>

                        <SearchBox />
                    </div>
                </div>
            </div>
        </header >
    );
}