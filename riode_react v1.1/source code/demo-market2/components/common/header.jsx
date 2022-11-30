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
                        <p className="welcome-msg ls-normal">Welcome to Riode store message or remove it!</p>
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
                        <ALink href="#" className="contact d-lg-show"><i className="d-icon-map"></i>Vendors</ALink>
                        <ALink href="/pages/account" className="help d-lg-show"><i className="d-icon-info"></i> My Account</ALink>
                        <LoginModal />
                    </div>
                </div>
            </div>

            <div className="header-middle">
                <div className="container">
                    <div className="header-left mr-4">
                        <ALink href="#" className="mobile-menu-toggle" onClick={ showMobileMenu }>
                            <i className="d-icon-bars2"></i>
                        </ALink>

                        <ALink href="/" className="logo">
                            <img src='./images/home/logo.png' alt="logo" width="153" height="44" />
                        </ALink>

                        <SearchBox />
                    </div>

                    <div className="header-right">
                        <div className="icon-box icon-box-side">
                            <div className="icon-box-icon mr-0 mr-lg-2">
                                <i className="d-icon-phone"></i>
                            </div>
                            <div className="icon-box-content d-lg-show">
                                <h4 className="icon-box-title text-dark text-normal">
                                    <ALink href="mailto:riode@mail.com" className="text-primary d-inline-block">Live chat</ALink> or:</h4>
                                <p><ALink href="tel:#">0(800) 123-456</ALink></p>
                            </div>
                        </div>
                        <span className="divider mr-4"></span>
                        <ALink href="#" className="compare">
                            <i className="d-icon-compare"></i>
                        </ALink>
                        <ALink href="/pages/wishlist" className="wishlist">
                            <i className="d-icon-heart"></i>
                        </ALink>
                        <span className="divider"></span>

                        <CartMenu />
                    </div>
                </div>
            </div>

            <div className="header-bottom sticky-header fix-top sticky-content d-lg-show">
                <div className="container">
                    <div className="header-left">
                        <div className="dropdown category-dropdown" data-visible="true">
                            <ALink href="#" className="category-toggle" title="Browse Categories">
                                <i className="d-icon-bars"></i>
                                <span>Browse Categories</span>
                            </ALink>

                            <div className="dropdown-box">
                                <ul className="menu vertical-menu category-menu">
                                    <li className="submenu">
                                        <ALink className={ router.query.category === "fashion" ? "active" : "" } href={ { pathname: "/shop", query: { category: "fashion" } } } scroll={ false }>
                                            <i className="d-icon-t-shirt1"></i>Fashion
                                        </ALink>
                                        <ul className="megamenu">
                                            <li>
                                                <h4 className="menu-title">Women</h4>
                                                <hr className="divider" />
                                                <ul>
                                                    <li><ALink href="#">New Arrivals</ALink>
                                                    </li>
                                                    <li><ALink href="#">Best Sellers</ALink>
                                                    </li>
                                                    <li><ALink href="#">Trending</ALink></li>
                                                    <li><ALink href="#">Clothing</ALink></li>
                                                    <li><ALink href="#">Shoes</ALink></li>
                                                    <li><ALink href="#">Bags</ALink></li>
                                                    <li><ALink href="#">Accessories</ALink>
                                                    </li>
                                                    <li><ALink href="#">Jewellery &amp; Watches</ALink></li>
                                                    <li><ALink href="#">Sale</ALink></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <h4 className="menu-title">Men</h4>
                                                <hr className="divider" />
                                                <ul>
                                                    <li><ALink href="#">New Arrivals</ALink>
                                                    </li>
                                                    <li><ALink href="#">Best Sellers</ALink>
                                                    </li>
                                                    <li><ALink href="#">Trending</ALink></li>
                                                    <li><ALink href="#">Clothing</ALink></li>
                                                    <li><ALink href="#">Shoes</ALink></li>
                                                    <li><ALink href="#">Bags</ALink></li>
                                                    <li><ALink href="#">Accessories</ALink>
                                                    </li>
                                                    <li><ALink href="#">Jewellery &amp; Watches</ALink></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <div className="banner-fixed menu-banner menu-banner4 content-middle">
                                                    <figure>
                                                        <img src="images/home/menu/banner-4.jpg" alt="Menu Banner"
                                                            width="235" height="347" />
                                                    </figure>
                                                    <div className="banner-content">
                                                        <h4 className="banner-subtitle mb-2 font-weight-normal">Trending Now</h4>
                                                        <h3 className="banner-title ls-m">
                                                            New<br />Summer<br />Fashion
                                                        </h3>
                                                        <ALink href="/shop" className="btn btn-outline btn-dark btn-rounded btn-md">Shop Now</ALink>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <ALink className={ router.query.category === "home-and-garden" ? "active" : "" } href={ { pathname: "/shop", query: { category: "home-and-garden" } } } scroll={ false }>
                                            <i className="d-icon-home"></i>Home &amp; Garden
                                        </ALink>
                                        <ul className="megamenu">
                                            <li>
                                                <h4 className="menu-title">Bedroom</h4>
                                                <hr className="divider" />
                                                <ul>
                                                    <li><ALink href="#">Beds, Frames &amp; Bases</ALink></li>
                                                    <li><ALink href="#">Dressers</ALink></li>
                                                    <li><ALink href="#">Nightstands</ALink>
                                                    </li>
                                                    <li><ALink href="#">Kid's Beds &amp; Headboards</ALink></li>
                                                    <li><ALink href="#">Armories</ALink></li>
                                                </ul>

                                                <h4 className="menu-title">Living Room</h4>
                                                <hr className="divider" />
                                                <ul>
                                                    <li><ALink href="#">Coffee Tables</ALink>
                                                    </li>
                                                    <li><ALink href="#">Chairs</ALink></li>
                                                    <li><ALink href="#">Tables</ALink></li>
                                                    <li><ALink href="#">Futons &amp; Sofa Beds</ALink></li>
                                                    <li><ALink href="#">Cabinets &amp; Chests</ALink></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <h4 className="menu-title">Office</h4>
                                                <hr className="divider" />
                                                <ul>
                                                    <li><ALink href="#">Office Chairs</ALink>
                                                    </li>
                                                    <li><ALink href="#">Desks</ALink></li>
                                                    <li><ALink href="#">Bookcases</ALink></li>
                                                    <li><ALink href="#">File Cabinets</ALink>
                                                    </li>
                                                    <li><ALink href="#">Breakroom
                                                            Tables</ALink></li>
                                                </ul>

                                                <h4 className="menu-title">Kitchen &amp; Dining</h4>
                                                <hr className="divider" />
                                                <ul>
                                                    <li><ALink href="#">Dining Sets</ALink>
                                                    </li>
                                                    <li><ALink href="#">Kitchen Storage
                                                            Cabinets</ALink></li>
                                                    <li><ALink href="#">Bahers Racks</ALink>
                                                    </li>
                                                    <li><ALink href="#">Dining Chairs</ALink>
                                                    </li>
                                                    <li><ALink href="#">Dining Room Tables</ALink></li>
                                                    <li><ALink href="#">Bar Stools</ALink></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <div className="menu-banner banner-fixed menu-banner5">
                                                    <figure>
                                                        <img src="images/home/menu/banner-5.jpg" alt="Menu Banner"
                                                            width="235" height="461" />
                                                    </figure>
                                                    <div className="banner-content">
                                                        <h4 className="banner-subtitle text-white font-weight-normal ls-normal">Hottest Deals</h4>
                                                        <h3 className="banner-title text-white ls-m mb-5">Save<br />Up To 30%<br />On Clearance
                                                        </h3>
                                                        <ALink href="/shop" className="btn btn-outline btn-white btn-rounded btn-md">Shop Now</ALink>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <ALink className={ router.query.category === "computer-hardware-and-software" ? "active" : "" } href={ { pathname: "/shop", query: { category: "computer-hardware-and-software" } } } scroll={ false }>
                                            <i className="d-icon-desktop"></i>Electronics
                                        </ALink>
                                        <ul className="megamenu">
                                            <li>
                                                <h4 className="menu-title">Laptops &amp; Computers</h4>
                                                <hr className="divider" />
                                                <ul>
                                                    <li><ALink href="#">Desktop
                                                            Computers</ALink></li>
                                                    <li><ALink href="#">Monitors</ALink></li>
                                                    <li><ALink href="#">Laptops</ALink></li>
                                                    <li><ALink href="#">Hard Drivers &amp; Storage</ALink></li>
                                                    <li><ALink href="#">Printers &amp; Supplies</ALink></li>
                                                    <li><ALink href="#">Computer Accessories</ALink></li>
                                                </ul>

                                                <h4 className="menu-title mt-1">TV &amp; Video</h4>
                                                <hr className="divider" />
                                                <ul>
                                                    <li><ALink href="#">TVs</ALink></li>
                                                    <li><ALink href="#">Home Audio Speakers</ALink></li>
                                                    <li><ALink href="#">Projectors</ALink></li>
                                                    <li><ALink href="#">Media Streaming Devices</ALink></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <h4 className="menu-title">Digital Cameras</h4>
                                                <hr className="divider" />
                                                <ul>
                                                    <li><ALink href="#">Digital SLR Cameras</ALink></li>
                                                    <li><ALink href="#">Sports &amp; Action Cameras</ALink></li>
                                                    <li><ALink href="#">Camera Lenses</ALink>
                                                    </li>
                                                    <li><ALink href="#">Photo Printer</ALink>
                                                    </li>
                                                    <li><ALink href="#">Digital Memory Cards</ALink></li>
                                                    <li><ALink href="#">Camera Bags, Backpacks</ALink></li>
                                                </ul>

                                                <h4 className="menu-title mt-1">Cell Phones</h4>
                                                <hr className="divider" />
                                                <ul>
                                                    <li><ALink href="#">Carrier Phones</ALink>
                                                    </li>
                                                    <li><ALink href="#">Unlocked Phones</ALink>
                                                    </li>
                                                    <li><ALink href="#">Phone &amp; Cellphone Cases</ALink></li>
                                                    <li><ALink href="#">Cellphone Chargers</ALink></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <div className="menu-banner banner-fixed menu-banner5">
                                                    <figure>
                                                        <img src="images/home/menu/banner-6.jpg" alt="Menu Banner"
                                                            width="235" height="433" />
                                                    </figure>
                                                    <div className="banner-content">
                                                        <h4 className="banner-subtitle font-weight-normal text-body">Deals Of The Week</h4>
                                                        <h3 className="banner-title ls-m mb-4">
                                                            Save On Smart<br />Games<br />and Fantasy
                                                            <br /><span className="text-uppercase text-primary d-inline-block mt-2 font-weight-bold">20% Off</span></h3>
                                                        <ALink href="/shop" className="btn btn-outline btn-dark btn-rounded btn-md">Shop Now</ALink>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <ALink className={ router.query.category === "furniture" ? "active" : "" } href={ { pathname: "/shop", query: { category: "furniture" } } } scroll={ false }>
                                            <i className="d-icon-sofa"></i>Furniture
                                        </ALink>
                                        <div className="megamenu type2">
                                            <div className="row">
                                                <div className="col-md-3 col-lg-3 col-6">
                                                    <h4 className="menu-title">Furniture</h4>
                                                    <hr className="divider" />
                                                    <ul>
                                                        <li><ALink href="#">Sofas &amp; Couches</ALink>
                                                        </li>
                                                        <li><ALink href="#">Armchairs</ALink></li>
                                                        <li><ALink href="#">Bed Frames</ALink></li>
                                                        <li><ALink href="#">Beside Tables</ALink>
                                                        </li>
                                                        <li><ALink href="#">Dressing Tables</ALink>
                                                        </li>
                                                        <li><ALink href="#">Chest of Drawers</ALink></li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-3 col-lg-3 col-6">
                                                    <h4 className="menu-title">Lighting</h4>
                                                    <hr className="divider" />
                                                    <ul>
                                                        <li><ALink href="#">Light Bulbs</ALink>
                                                        </li>
                                                        <li><ALink href="#">Lamps</ALink></li>
                                                        <li><ALink href="#">Celling Lights</ALink>
                                                        </li>
                                                        <li><ALink href="#">Wall Lights</ALink>
                                                        </li>
                                                        <li><ALink href="#">Bathroom Lighting</ALink></li>
                                                        <li><ALink href="#">Outdoor Lighting</ALink></li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-3 col-lg-3 col-6">
                                                    <h4 className="menu-title">Home Accessories</h4>
                                                    <hr className="divider" />
                                                    <ul>
                                                        <li><ALink href="#">Decorative Accessories</ALink></li>
                                                        <li><ALink href="#">Candals &amp; Holders</ALink></li>
                                                        <li><ALink href="#">Home Fragrance</ALink>
                                                        </li>
                                                        <li><ALink href="#">Mirrors</ALink></li>
                                                        <li><ALink href="#">Clocks</ALink></li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-3 col-lg-3 col-6">
                                                    <h4 className="menu-title">Garden &amp; Outdoors</h4>
                                                    <hr className="divider" />
                                                    <ul>
                                                        <li><ALink href="#">Garden Furniture</ALink></li>
                                                        <li><ALink href="#">Lawn Mowers</ALink>
                                                        </li>
                                                        <li><ALink href="#">Pressure Washers</ALink></li>
                                                        <li><ALink href="#">All Garden Tools</ALink></li>
                                                        <li><ALink href="#">Outdoor Dining</ALink>
                                                        </li>
                                                        <li><ALink href="#">Barbecure &amp; Equipment</ALink></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-3 col-lg-3 col-6">
                                                    <figure>
                                                        <img src="images/home/menu/1.jpg" alt="Menu Banner"
                                                            width="172" height="106" />
                                                    </figure>
                                                </div>
                                                <div className="col-md-3 col-lg-3 col-6">
                                                    <figure>
                                                        <img src="images/home/menu/2.jpg" alt="Menu Banner"
                                                            width="107" height="78" />
                                                    </figure>
                                                </div>
                                                <div className="col-md-3 col-lg-3 col-6">
                                                    <figure>
                                                        <img src="images/home/menu/3.jpg" alt="Menu Banner"
                                                            width="127" height="101" />
                                                    </figure>
                                                </div>
                                                <div className="col-md-3 col-lg-3 col-6">
                                                    <figure>
                                                        <img src="images/home/menu/4.jpg" alt="Menu Banner"
                                                            width="105" height="105" />
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <ALink className={ router.query.category === "healthy-and-beauty" ? "active" : "" } href={ { pathname: "/shop", query: { category: "healthy-and-beauty" } } } scroll={ false }>
                                            <i className="d-icon-heartbeat"></i>Healthy &amp; Beauty
                                        </ALink>
                                    </li>
                                    <li>
                                        <ALink className={ router.query.category === "gifts" ? "active" : "" } href={ { pathname: "/shop", query: { category: "gifts" } } } scroll={ false }>
                                            <i className="d-icon-gift"></i>Gift Ideas
                                        </ALink>
                                    </li>
                                    <li>
                                        <ALink className={ router.query.category === "toys" ? "active" : "" } href={ { pathname: "/shop", query: { category: "toys" } } } scroll={ false }>
                                            <i className="d-icon-gamepad1"></i>Toy & Games
                                        </ALink>
                                    </li>
                                    <li>
                                        <ALink className={ router.query.category === "cooking" ? "active" : "" } href={ { pathname: "/shop", query: { category: "cooking" } } } scroll={ false }>
                                            <i className="d-icon-cook"></i>Cooking
                                        </ALink>
                                    </li>
                                    <li>
                                        <ALink className={ router.query.category === "smartphone" ? "active" : "" } href={ { pathname: "/shop", query: { category: "smartphone" } } } scroll={ false }>
                                            <i className="d-icon-mobile"></i>Smart Phones
                                        </ALink>
                                    </li>
                                    <li>
                                        <ALink className={ router.query.category === "cameras" ? "active" : "" } href={ { pathname: "/shop", query: { category: "cameras" } } } scroll={ false }>
                                            <i className="d-icon-camera2"></i>Cameras &amp; Photo
                                        </ALink>
                                    </li>
                                    <li>
                                        <ALink className={ router.query.category === "accessories" ? "active" : "" } href={ { pathname: "/shop", query: { category: "accessories" } } } scroll={ false }>
                                            <i className="d-icon-clock"></i>Accessories
                                        </ALink>
                                    </li>
                                    <li>
                                        <ALink href="/shop" className="font-weight-semi-bold text-primary text-uppercase ls-25">
                                            View All Categories<i className="d-icon-angle-right"></i>
                                        </ALink>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <MainMenu />
                    </div>
                    <div className="header-right">
                        <ALink href="#"><i className="d-icon-card"></i>Special Offers</ALink>
                        <ALink href="https://d-themes.com/buynow/riodereact" target="_blank" className="ml-4 ml-xl-8">Buy Riode!</ALink>
                    </div>
                </div>
            </div>
        </header >
    );
}