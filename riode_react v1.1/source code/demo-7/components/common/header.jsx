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
            <div className="header-middle sticky-header fix-top sticky-content">
                <div className="container-fluid">
                    <div className="header-left">
                        <ALink href="#" className="mobile-menu-toggle" onClick={ showMobileMenu }>
                            <i className="d-icon-bars2"></i>
                        </ALink>

                        <ALink href="/" className="logo">
                            <img src='./images/home/logo.png' alt="logo" width="154" height="43" />
                        </ALink>
                    </div>

                    <div className="header-center">
                        <MainMenu />
                    </div>

                    <div className="header-right">
                        <SearchBox />

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