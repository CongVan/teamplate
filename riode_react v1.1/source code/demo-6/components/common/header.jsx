import { useRouter } from 'next/router';

import ALink from '~/components/features/custom-link';

import CartMenu from '~/components/common/partials/cart-menu';
import MainMenu from '~/components/common/partials/main-menu';
import LoginModal from '~/components/features/modals/login-modal';

import { headerBorderRemoveList } from '~/utils/data/menu';

export default function Header( props ) {
    const router = useRouter();

    const showMobileMenu = () => {
        document.querySelector( 'body' ).classList.add( 'mmenu-active' );
    }

    return (
        <header className={ `header ${ headerBorderRemoveList.includes( router.pathname ) ? '' : 'header-border' }` }>
            <div className="header-middle sticky-header fix-top sticky-content has-center">
                <div className="container">
                    <div className="header-left">
                        <ALink href="#" className="mobile-menu-toggle" onClick={ showMobileMenu }>
                            <i className="d-icon-bars2"></i>
                        </ALink>

                        <MainMenu />
                    </div>

                    <div className="header-center">
                        <ALink href="/" className="logo">
                            <img src="./images/home/logo.png" alt="logo" width="153" height="44" />
                        </ALink>
                    </div>

                    <div className="header-right">
                        <LoginModal />

                        <CartMenu />
                    </div>
                </div>
            </div>
        </header >
    );
}