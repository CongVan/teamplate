import { useRouter } from 'next/router';

import ALink from '~/components/features/custom-link';

import CartMenu from '~/components/common/partials/cart-menu';
import MainMenu from '~/components/common/partials/main-menu';
import SearchBox from '~/components/common/partials/search-box';
import LoginModal from '~/components/features/modals/login-modal';

import { headerCategories } from '~/utils/data/menu';

export default function Header() {
    const router = useRouter();

    const showMobileMenu = () => {
        document.querySelector( 'body' ).classList.add( 'mmenu-active' );
    }

    return (
        <header className="header">
            <div className="header-top">
                <div className="container">
                    <div className="header-left">
                        <div className="social-links inline-links d-lg-show">
                            <ALink href="#" className="social-link social-twitter fab fa-twitter"></ALink>
                            <ALink href="#" className="social-link social-linkedin fab fa-linkedin-in"></ALink>
                            <ALink href="#" className="social-link social-facebook fab fa-facebook-f"></ALink>
                            <ALink href="#" className="social-link social-pinterest fab fa-pinterest-p"></ALink>
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

                        <ALink href="/" className="logo d-block d-lg-none">
                            <img src='./images/home/logo.png' alt="logo" width="150" height="42" />
                        </ALink>

                        <SearchBox />
                    </div>

                    <div className="header-center justify-content-center">
                        <ALink href="/" className="logo d-lg-show">
                            <img src="./images/home/logo.png" alt="logo" width="150" height="42" />
                        </ALink>
                    </div>

                    <div className="header-right">
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

            <div className="header-bottom sticky-header fix-top sticky-content has-dropdown">
                <div className="container">
                    <div className="inner-wrap">
                        <div className="header-left">
                            <div className={ `dropdown category-dropdown has-border with-sidebar ${ router.pathname === '/' || router.pathname === '/shop' || router.pathname === '/product/default/[slug]' ? 'menu-fixed' : '' }` }>
                                <ALink href="#" className="text-white category-toggle"><i className="d-icon-bars2"></i><span>Categories</span></ALink>

                                <div className="dropdown-box">
                                    <ul className="menu vertical-menu category-menu">
                                        <li><ALink href="#" className="menu-title">Browse Our Categories</ALink></li>
                                        {
                                            headerCategories.map( cat =>
                                                <li key={ 'header-cat-' + cat.slug } className={ cat.slug === router.query.category ? 'active' : '' }>
                                                    <ALink href={ { pathname: '/shop', query: { category: cat.slug } } } scroll={ false }>
                                                        <i className={ cat.icon }></i>
                                                        { cat.title }</ALink>
                                                </li>
                                            )
                                        }
                                    </ul>
                                </div>
                            </div>

                            <MainMenu />
                        </div>

                        <div className="header-right">
                            <nav className="main-nav">
                                <ul className="menu">
                                    <li>
                                        <ALink href="#">Limited Time Offer</ALink>
                                    </li>
                                    <li>
                                        <a href="https://d-themes.com/buynow/riodereact">Buy Riode!</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

        </header >
    );
}