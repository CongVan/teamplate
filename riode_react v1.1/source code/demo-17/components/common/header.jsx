import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import CartMenu from '~/components/common/partials/cart-menu';
import MainMenu from '~/components/common/partials/main-menu';
import SearchBox from '~/components/common/partials/search-box';
import LoginModal from '~/components/features/modals/login-modal';

import { topNoticeSlider } from '~/utils/data/carousel';

export default function Header () {
    const showMobileMenu = () => {
        document.querySelector( 'body' ).classList.add( 'mmenu-active' );
    }

    return (
        <header className="header">
            <div className="header-top">
                <OwlCarousel adClass="owl-theme w-100" options={ topNoticeSlider }>
                    <div className="icon-box icon-box-tiny text-center">
                        <div className="icon-box-content">
                            <h4 className="icon-box-title text-white">
                                <i className="icon-box-icon d-icon-truck" style={ { fontSize: "3.2rem" } } ></i>
                                Free Shipping on Orders Over $99
                            </h4>
                        </div>
                    </div>
                    <div className="icon-box bg-primary icon-box-tiny text-center">
                        <div className="icon-box-content">
                            <h4 className="icon-box-title text-white">
                                <i className="icon-box-icon d-icon-percent" style={ { fontSize: "2.2rem" } } ></i>
                                Up to 40% OFF on Selected Items
                            </h4>
                        </div>
                    </div>
                    <div className="icon-box icon-box-tiny text-center">
                        <div className="icon-box-content">
                            <h4 className="icon-box-title text-white">
                                <i className="icon-box-icon d-icon-student" style={ { fontSize: "3rem" } }></i>
                                15% OFF Student Discount
                            </h4>
                        </div>
                    </div>
                </OwlCarousel>
            </div>

            <div className="header-middle has-center sticky-header fix-top sticky-content">
                <div className="container-fluid">
                    <div className="header-left">
                        <ALink href="#" className="mobile-menu-toggle text-dark" onClick={ showMobileMenu }>
                            <i className="d-icon-bars2"></i>
                        </ALink>

                        <div className="dropdown currency-dropdown mt-1">
                            <ALink href="#">USD</ALink>
                            <ul className="dropdown-box">
                                <li><ALink href="#">USD</ALink></li>
                                <li><ALink href="#">EUR</ALink></li>
                            </ul>
                        </div>

                        <div className="dropdown language-dropdown mt-1">
                            <ALink href="#language">ENG</ALink>
                            <ul className="dropdown-box">
                                <li>
                                    <ALink href="#">ENG</ALink>
                                </li>
                                <li>
                                    <ALink href="#">FRH</ALink>
                                </li>
                            </ul>
                        </div>

                        <SearchBox />
                    </div>

                    <div className="header-center">
                        <ALink href="/" className="logo mr-lg-0 mr-3">
                            <img src='./images/home/logo.png' alt="logo" width="308" height="86" />
                        </ALink>
                    </div>

                    <div className="header-right">
                        <LoginModal />

                        <ALink className="wishlist" href="/pages/wishlist">
                            <i className="d-icon-heart"></i>
                        </ALink>

                        <span className="divider"></span>

                        <CartMenu />
                    </div>
                </div>
            </div>

            <div className="header-bottom has-center">
                <div className="container-fluid">
                    <div className="header-left">
                    </div>

                    <div className="header-center">
                        <MainMenu />
                    </div>

                    <div className="header-right">
                    </div>
                </div>
            </div>
        </header >
    );
}