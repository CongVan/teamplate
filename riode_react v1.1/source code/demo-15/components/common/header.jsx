import { useRouter } from 'next/router';

import ALink from '~/components/features/custom-link';

import CartMenu from '~/components/common/partials/cart-menu';
import MainMenu from '~/components/common/partials/main-menu';
import HomeMainMenu from '~/components/common/partials/home-main-menu';
import SearchBox from '~/components/common/partials/search-box';
import LoginModal from '~/components/features/modals/login-modal';

import { headerBorderRemoveList } from '~/utils/data/menu'

export default function Header() {
    const router = useRouter();

    const showMobileMenu = () => {
        document.querySelector( 'body' ).classList.add( 'mmenu-active' );
    }

    return (
        <header className={ `header ${ router.pathname === '/' ? 'header-transparent' : '' } ${ !headerBorderRemoveList.includes( router.pathname ) ? 'header-border' : '' }` }>
            <div className="header-middle has-center sticky-header fix-top sticky-content">
                <div className="container-fluid">
                    <div className="header-left">
                        <ALink href="#" className={ `mobile-menu-toggle ${ router.pathname !== "/" ? 'text-dark' : '' }` } onClick={ showMobileMenu }>
                            <i className="d-icon-bars2"></i>
                        </ALink>

                        <ALink href="/" className="logo mr-0 d-block d-md-none">
                            {
                                router.pathname === '/' ?
                                    <img src="./images/home/logo.png" alt="logo" width="154" height="44" />
                                    :
                                    <img src="./images/home/logo-primary.png" alt="logo" width="154" height="44" />
                            }
                        </ALink>

                        <ALink href="#" className="call"><span className="text-uppercase">Need
                                Help?</span><strong>(123)456-7890</strong></ALink>
                        <span className="divider"></span>
                        <div className="dropdown currency-dropdown">
                            <ALink href="#">USD</ALink>
                            <ul className="dropdown-box">
                                <li><ALink href="#">USD</ALink></li>
                                <li><ALink href="#">EUR</ALink></li>
                            </ul>
                        </div>
                        <div className="dropdown language-dropdown">
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
                    </div>

                    <div className="header-center">
                        <ALink href="/" className="logo mr-0">
                            {
                                router.pathname === '/' ?
                                    <img src="./images/home/logo.png" alt="logo" width="154" height="44" />
                                    :
                                    <img src="./images/home/logo-primary.png" alt="logo" width="154" height="44" />
                            }
                        </ALink>
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

            <div className="header-bottom">
                <div className={ `container-fluid ${ router.pathname !== '/' ? 'justify-content-center' : '' }` }>
                    {
                        router.pathname === '/' ?
                            <HomeMainMenu /> : <MainMenu />
                    }
                </div>
            </div>
        </header >
    );
}