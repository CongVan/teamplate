import React from 'react';
import { Helmet } from 'react-helmet';

import ALink from '~/components/features/custom-link';

import SidebarFilterOne from '~/components/partials/shop/sidebar/sidebar-filter-one'
import ProductListOne from '~/components/partials/shop/product-list/product-list-one';

function ShopBoxedBanner() {
    return (
        <main className="main shop mb-10 pb-6">
            <Helmet>
                <title>Riode React eCommerce Template - Shop</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Shop</h1>

            <div className="page-content">
                <div className="container">
                    <nav className="breadcrumb-nav">
                        <ul className="breadcrumb">
                            <li><ALink href="/"><i className="d-icon-home"></i></ALink></li>
                            <li>Shop</li>
                        </ul>
                    </nav>

                    <div className="banner shop-banner"
                        style={ { backgroundImage: `url(./images/home/shop-banner.jpg)`, backgroundColor: "#ececee" } }>
                        <div className="banner-content w-100 pl-3 text-right text-uppercase">
                            <h4 className="banner-subtitle font-weight-bold text-uppercase">24 Hours Only</h4>
                            <h2 className="banner-title text-uppercase font-weight-normal">Flash <strong>Sale</strong>
                            </h2>
                            <div className="banner-price-info text-dark"><strong>Up to 70</strong>% Discount</div>
                            <p className="d-inline-block font-primary text-primary text-uppercase bg-dark">
                                Promocode:<strong className="text-normal"> Riode 20</strong></p><br />
                            <ALink href="#" className="btn btn-link btn-underline">Shop now<i
                                className="d-icon-arrow-right"></i></ALink>
                        </div>
                    </div>

                    <div className="row gutter-lg">
                        <SidebarFilterOne type="boxed" />

                        <div className="col-lg-9">
                            <ProductListOne type="boxed" />
                        </div>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default React.memo( ShopBoxedBanner );