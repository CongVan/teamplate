import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';

import ALink from '~/components/features/custom-link';
import Card from '~/components/features/accordion/card';

import { mainMenu } from '~/utils/data/menu';

function MobileMenu ( props ) {
    const [ search, setSearch ] = useState( "" );
    const [ timer, setTimer ] = useState( null );
    const router = useRouter();

    useEffect( () => {
        window.addEventListener( 'resize', hideMobileMenuHandler );
        document.querySelector( "body" ).addEventListener( "click", onBodyClick );

        return () => {
            window.removeEventListener( 'resize', hideMobileMenuHandler );
            document.querySelector( "body" ).removeEventListener( "click", onBodyClick );
        }
    }, [] )

    useEffect( () => {
        setSearch( "" );
    }, [ router.query.slug ] )

    const hideMobileMenuHandler = () => {
        if ( window.innerWidth > 991 ) {
            document.querySelector( 'body' ).classList.remove( 'mmenu-active' );
        }
    }

    const hideMobileMenu = () => {
        document.querySelector( 'body' ).classList.remove( 'mmenu-active' );
    }

    function onSearchChange ( e ) {
        setSearch( e.target.value );
    }

    function onBodyClick ( e ) {
        if ( e.target.closest( '.header-search' ) ) return e.target.closest( '.header-search' ).classList.contains( 'show-results' ) || e.target.closest( '.header-search' ).classList.add( 'show-results' );

        document.querySelector( '.header-search.show' ) && document.querySelector( '.header-search.show' ).classList.remove( 'show' );
        document.querySelector( '.header-search.show-results' ) && document.querySelector( '.header-search.show-results' ).classList.remove( 'show-results' );
    }

    function onSubmitSearchForm ( e ) {
        e.preventDefault();
        router.push( {
            pathname: '/shop',
            query: {
                search: search
            }
        } );
    }

    return (
        <div className="mobile-menu-wrapper">
            <div className="mobile-menu-overlay" onClick={ hideMobileMenu }>
            </div>

            <ALink className="mobile-menu-close" href="#" onClick={ hideMobileMenu }><i className="d-icon-times"></i></ALink>

            <div className="mobile-menu-container scrollable">
                <form action="#" className="input-wrapper" onSubmit={ onSubmitSearchForm }>
                    <input type="text" className="form-control" name="search" autoComplete="off" value={ search } onChange={ onSearchChange }
                        placeholder="Search your keyword..." required />
                    <button className="btn btn-search" type="submit">
                        <i className="d-icon-search"></i>
                    </button>
                </form>

                <Tabs selectedTabClassName="show" selectedTabPanelClassName="active" defaultIndex={ 0 }>
                    <div className="tab tab-nav-simple tab-nav-center tab-nav-boxed">
                        <TabList className="nav nav-tabs nav-fill" role="tablist">
                            <Tab className="nav-item">
                                <span className="nav-link">Main Menu</span>
                            </Tab>
                            <Tab className="nav-item">
                                <span className="nav-link">Category Menu</span>
                            </Tab>
                        </TabList>
                    </div>

                    <div className="mobile-menu mmenu-anim tab-content">
                        <TabPanel className="tab-pane">
                            <ul>
                                <li>
                                    <ALink href="/">Home</ALink>
                                </li>

                                <li>
                                    <Card title="Shop" type="mobile" url="/shop">
                                        <ul>
                                            <li>
                                                <Card title="Variations 1" type="mobile">
                                                    <ul>
                                                        {
                                                            mainMenu.shop.variation1.map( ( item, index ) => (
                                                                <li key={ `shop-${ item.title }` }>
                                                                    <ALink href={ '/' + item.url }>
                                                                        { item.title }
                                                                        { item.hot ? <span className="tip tip-hot">Hot</span> : "" }
                                                                    </ALink>
                                                                </li>
                                                            ) )
                                                        }
                                                    </ul>
                                                </Card>
                                            </li>
                                            <li>
                                                <Card title="Variations 2" type="mobile">
                                                    <ul>
                                                        {
                                                            mainMenu.shop.variation2.map( ( item, index ) => (
                                                                <li key={ `shop-${ item.title }` }>
                                                                    <ALink href={ '/' + item.url }>
                                                                        { item.title }
                                                                        { item.new ? <span className="tip tip-new">New</span> : "" }
                                                                    </ALink>
                                                                </li>
                                                            ) )
                                                        }
                                                    </ul>
                                                </Card>
                                            </li>
                                        </ul>
                                    </Card>
                                </li>

                                <li>
                                    <Card title="Vendor" type="mobile" url="/vendor">
                                        <ul>
                                            <li><ALink href="/vendor">Store List</ALink></li>
                                            <li><ALink href="/vendor/single">Vendor Store</ALink></li>
                                        </ul>
                                    </Card>
                                </li>

                                <li>
                                    <Card title="Products" type="mobile" url="/product/default/fashionable-leather-satchel">
                                        <ul>
                                            <li>
                                                <Card title="Product Pages" type="mobile">
                                                    <ul>
                                                        {
                                                            mainMenu.product.pages.map( ( item, index ) => (
                                                                <li key={ `product-${ item.title }` }>
                                                                    <ALink href={ '/' + item.url }>
                                                                        { item.title }
                                                                        { item.hot ? <span className="tip tip-hot">Hot</span> : "" }
                                                                    </ALink>
                                                                </li>
                                                            ) )
                                                        }
                                                    </ul>
                                                </Card>
                                            </li>

                                            <li>
                                                <Card title="Product Layouts" type="mobile">
                                                    <ul>
                                                        {
                                                            mainMenu.product.layout.map( ( item, index ) => (
                                                                <li key={ `product-${ item.title }` }>
                                                                    <ALink href={ '/' + item.url }>
                                                                        { item.title }
                                                                        { item.new ? <span className="tip tip-new">New</span> : "" }
                                                                    </ALink>
                                                                </li>
                                                            ) )
                                                        }
                                                    </ul>
                                                </Card>
                                            </li>
                                        </ul>
                                    </Card>
                                </li>

                                <li>
                                    <Card title="Pages" type="mobile" url="/pages/about-us">
                                        <ul>
                                            {
                                                mainMenu.other.map( ( item, index ) => (
                                                    <li key={ `other-${ item.title }` }>
                                                        <ALink href={ '/' + item.url }>
                                                            { item.title }
                                                            { item.new ? <span className="tip tip-new">New</span> : "" }
                                                        </ALink>
                                                    </li>
                                                ) )
                                            }
                                        </ul>
                                    </Card>
                                </li>

                                <li>
                                    <Card title="Blog" type="mobile" url="/blog/classic">
                                        <ul>
                                            {
                                                mainMenu.blog.map( ( item, index ) => (
                                                    item.subPages ?
                                                        <li key={ "blog" + item.title }>
                                                            <Card title={ item.title } url={ '/' + item.url } type="mobile">
                                                                <ul>
                                                                    {
                                                                        item.subPages.map( ( item, index ) => (
                                                                            <li key={ `blog-${ item.title }` }>
                                                                                <ALink href={ '/' + item.url }>
                                                                                    { item.title }
                                                                                </ALink>
                                                                            </li>
                                                                        ) )
                                                                    }
                                                                </ul>
                                                            </Card>
                                                        </li> :

                                                        <li key={ "blog" + item.title } className={ item.subPages ? "submenu" : "" }>
                                                            <ALink href={ '/' + item.url }>
                                                                { item.title }
                                                            </ALink>
                                                        </li>
                                                ) )
                                            }
                                        </ul>
                                    </Card>
                                </li>

                                <li>
                                    <Card title="elements" type="mobile" url="/elements">
                                        <ul>
                                            {
                                                mainMenu.element.map( ( item, index ) => (
                                                    <li key={ `elements-${ item.title }` }>
                                                        <ALink href={ '/' + item.url }>
                                                            { item.title }
                                                        </ALink>
                                                    </li>
                                                ) )
                                            }
                                        </ul>
                                    </Card>
                                </li>

                                <li><a href="https://d-themes.com/buynow/riodereact" target="_blank">Buy Riode!</a></li>
                            </ul>
                        </TabPanel>
                        <TabPanel className="tab-pane">
                            <ul>
                                <li>
                                    <Card title={ <><i className="d-icon-t-shirt1"></i>Fashion</> } type="mobile" url="#">
                                        <ul>
                                            <li>
                                                <Card title="Women" type="mobile" url="#">
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
                                                </Card>
                                            </li>
                                            <li>
                                                <Card title="Men" type="mobile" url="#">
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
                                                </Card>
                                            </li>
                                        </ul>
                                    </Card>
                                </li>
                                <li>
                                    <Card title={ <><i className="d-icon-home"></i>Home &amp; Garden</> } type="mobile" url="#">
                                        <ul>
                                            <li>
                                                <Card title="Bedroom" type="mobile" url="#">
                                                    <ul>
                                                        <li><ALink href="#">Beds, Frames &amp; Bases</ALink></li>
                                                        <li><ALink href="#">Dressers</ALink></li>
                                                        <li><ALink href="#">Nightstands</ALink>
                                                        </li>
                                                        <li><ALink href="#">Kid's Beds &amp; Headboards</ALink></li>
                                                        <li><ALink href="#">Armories</ALink></li>
                                                    </ul>
                                                </Card>
                                            </li>
                                            <li>
                                                <Card title="Living Room" type="mobile" url="#">
                                                    <ul>
                                                        <li><ALink href="#">Coffee Tables</ALink>
                                                        </li>
                                                        <li><ALink href="#">Chairs</ALink></li>
                                                        <li><ALink href="#">Tables</ALink></li>
                                                        <li><ALink href="#">Futons &amp; Sofa Beds</ALink></li>
                                                        <li><ALink href="#">Cabinets &amp; Chests</ALink></li>
                                                    </ul>
                                                </Card>
                                            </li>
                                            <li>
                                                <Card title="Office" type="mobile" url="#">
                                                    <ul>
                                                        <li><ALink href="#">Office Chairs</ALink>
                                                        </li>
                                                        <li><ALink href="#">Desks</ALink></li>
                                                        <li><ALink href="#">Bookcases</ALink></li>
                                                        <li><ALink href="#">File Cabinets</ALink>
                                                        </li>
                                                        <li><ALink href="#">Breakroom Tables</ALink></li>
                                                    </ul>
                                                </Card>
                                            </li>
                                            <li>
                                                <Card title="Kitchen & Dining" type="mobile" url="#">
                                                    <ul>
                                                        <li><ALink href="#">Dining Sets</ALink>
                                                        </li>
                                                        <li><ALink href="#">Kitchen Storage Cabinets</ALink></li>
                                                        <li><ALink href="#">Bahers Racks</ALink>
                                                        </li>
                                                        <li><ALink href="#">Dining Chairs</ALink>
                                                        </li>
                                                        <li><ALink href="#">Dining Room Tables</ALink></li>
                                                        <li><ALink href="#">Bar Stools</ALink></li>
                                                    </ul>
                                                </Card>
                                            </li>
                                        </ul>
                                    </Card>
                                </li>
                                <li>
                                    <Card title={ <><i className="d-icon-desktop"></i>Electronics</> } type="mobile" url="#">
                                        <ul>
                                            <li>
                                                <Card title="Laptops & Computers" type="mobile" url="#">
                                                    <ul>
                                                        <li><ALink href="#">Desktop Computers</ALink></li>
                                                        <li><ALink href="#">Monitors</ALink></li>
                                                        <li><ALink href="#">Laptops</ALink></li>
                                                        <li><ALink href="#">Hard Drivers &amp; Storage</ALink></li>
                                                        <li><ALink href="#">Printers &amp; Supplies</ALink></li>
                                                        <li><ALink href="#">Computer Accessories</ALink></li>
                                                    </ul>
                                                </Card>
                                            </li>
                                            <li>
                                                <Card title="TV & Video" type="mobile" url="#">
                                                    <ul>
                                                        <li><ALink href="#">TVs</ALink></li>
                                                        <li><ALink href="#">Home Audio Speakers</ALink></li>
                                                        <li><ALink href="#">Projectors</ALink></li>
                                                        <li><ALink href="#">Media Streaming Devices</ALink></li>
                                                    </ul>
                                                </Card>
                                            </li>
                                            <li>
                                                <Card title="Digital Cameras" type="mobile" url="#">
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
                                                </Card>
                                            </li>
                                            <li>
                                                <Card title="Cell Phones" type="mobile" url="#">
                                                    <ul>
                                                        <li><ALink href="#">Carrier Phones</ALink>
                                                        </li>
                                                        <li><ALink href="#">Unlocked Phones</ALink>
                                                        </li>
                                                        <li><ALink href="#">Phone &amp; Cellphone Cases</ALink></li>
                                                        <li><ALink href="#">Cellphone Chargers</ALink></li>
                                                    </ul>
                                                </Card>
                                            </li>
                                        </ul>
                                    </Card>
                                </li>
                                <li>
                                    <Card title={ <><i className="d-icon-sofa"></i>Furniture</> } type="mobile" url="#">
                                        <ul>
                                            <li>
                                                <Card title="Furniture" type="mobile" url="#">
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
                                                </Card>
                                            </li>
                                            <li>
                                                <Card title="Lighting" type="mobile" url="#">
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
                                                </Card>
                                            </li>
                                            <li>
                                                <Card title="Garden & Outdoors" type="mobile" url="#">
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
                                                </Card>
                                            </li>
                                        </ul>
                                    </Card>
                                </li>
                                <li>
                                    <ALink href="#">
                                        <i className="d-icon-heartbeat"></i>Healthy &amp; Beauty
                                    </ALink>
                                </li>
                                <li>
                                    <ALink href="#">
                                        <i className="d-icon-gift"></i>Gift Ideas
                                    </ALink>
                                </li>
                                <li>
                                    <ALink href="#">
                                        <i className="d-icon-gamepad1"></i>Toy &amp; Games
                                    </ALink>
                                </li>
                                <li>
                                    <ALink href="#">
                                        <i className="d-icon-cook"></i>Cooking
                                    </ALink>
                                </li>
                                <li>
                                    <ALink href="#">
                                        <i className="d-icon-mobile"></i>Smart Phones
                                    </ALink>
                                </li>
                                <li>
                                    <ALink href="#">
                                        <i className="d-icon-camera2"></i>Cameras &amp; Photo
                                    </ALink>
                                </li>
                                <li>
                                    <ALink href="#">
                                        <i className="d-icon-clock"></i>Accessories
                                    </ALink>
                                </li>
                            </ul>
                        </TabPanel>
                    </div>
                </Tabs>
            </div>
        </div>
    )
}

export default React.memo( MobileMenu );