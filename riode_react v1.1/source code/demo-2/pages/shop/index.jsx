import { Helmet } from 'react-helmet';
import React,{ useEffect } from 'react';
import SlideToggle from 'react-slide-toggle';

import ALink from '~/components/features/custom-link';

import SidebarFilterTwo from '~/components/partials/shop/sidebar/sidebar-filter-two'
import ProductListOne from '~/components/partials/shop/product-list/product-list-one';
import ToolBox from '~/components/partials/shop/toolbox';

function ShopNavigationFilter() {
    let expanded = false;

    useEffect( () => {
        resizeHandler();
        window.addEventListener( 'resize', resizeHandler );

        return () => {
            window.removeEventListener( 'reisze', resizeHandler );
        }
    }, [] )

    function resizeHandler() {
        if ( window.innerWidth < 992 && document.querySelector( '.card.navigation-card' ) && document.querySelector( '.card.navigation-card' ).classList.contains( 'collapsed' ) ) {
            document.querySelector( '.card.navigation-card' ).querySelector( 'span.toggle' ).click();
        }
    }

    return (
        <main className="main navigation-filter">
            <Helmet>
                <title>Riode React eCommerce Template - Shop</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Shop</h1>

            <div className="page-content mb-0 mb-lg-10 pb-0 pb-lg-6">
                <div className="container">
                    <nav className="breadcrumb-nav">
                        <ul className="breadcrumb breadcrumb-lg">
                            <li><ALink href="/"><i className="d-icon-home"></i></ALink></li>
                            <li>Categories</li>
                        </ul>
                    </nav>
                    <div className="banner shop-banner"
                        style={ { backgroundImage: `url(./images/home/shop_banner.jpg)`, backgroundColor: "#edeff0" } }>
                        <div className="banner-content w-100 pl-3 text-right text-uppercase">
                            <h4 className="banner-subtitle font-weight-bold text-uppercase mb-2">24 Hours Only</h4>
                            <h1 className="banner-title mb-3 text-uppercase font-weight-normal">Flash <strong>Sale</strong>
                            </h1>
                            <div className="banner-price-info mb-3 text-dark"><strong>Up to 70</strong>% Discount</div>
                            <p className="d-inline-block mb-6 font-primary text-secondary text-uppercase bg-dark">
                                Promocode:<strong className="text-normal"> Riode 20</strong></p><br />
                            <ALink href="#" className="btn btn-link btn-underline">Shop now<i
                                className="d-icon-arrow-right"></i></ALink>
                        </div>
                    </div>

                    <div className="toolbox-wrap">
                        <SlideToggle collapsed={ expanded ? false : true } >
                            { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                <div className={ `card navigation-card ${ toggleState.toLowerCase() }` }>
                                    <div className="card-header" onClick={ onToggle } >
                                        <span className="toggle">
                                            <span className="navigation-toggle-btn d-none">toggle button</span>
                                        </span>
                                    </div>

                                    <div ref={ setCollapsibleElement }>
                                        <div className={ `card-body p-0 ${ toggleState.toLowerCase() }` }>
                                            <SidebarFilterTwo />
                                        </div>
                                    </div>
                                </div>
                            ) }
                        </SlideToggle >

                        <ToolBox type="navigation" />
                    </div>

                    <ProductListOne isToolbox={ false } itemsPerRow={ 4 } />
                </div>
            </div>
        </main >
    )
}

export default React.memo( ShopNavigationFilter );