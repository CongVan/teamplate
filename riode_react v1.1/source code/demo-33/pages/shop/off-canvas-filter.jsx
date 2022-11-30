import React from 'react';
import { Helmet } from 'react-helmet';

import ALink from '~/components/features/custom-link';

import ShopBanner from '~/components/partials/shop/shop-banner';
import SidebarFilterOne from '~/components/partials/shop/sidebar/sidebar-filter-one'
import ProductListOne from '~/components/partials/shop/product-list/product-list-one';

function ShopOffCanvas() {
    return (
        <main className="main">
            <Helmet>
                <title>Riode React eCommerce Template - Shop Off-Canvas Filter</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Shop Off-Canvas Filter</h1>

            <ShopBanner subTitle="Categories" title="Off-Canvas Filter" current="Product Tag - off-canvas filter" />

            <nav className="breadcrumb-nav">
                <div className="container">
                    <ul className="breadcrumb">
                        <li><ALink href="/"><i className="d-icon-home"></i></ALink></li>
                        <li>Shop</li>
                    </ul>
                </div>
            </nav>

            <div className="page-content mb-lg-10 mb-0 pb-lg-6 pb-0">
                <div className="container">
                    <div className="row main-content-wrap gutter-lg">
                        <div className="main-content">
                            <ProductListOne itemsPerRow={4} type="off-canvas" />
                        </div>

                        <SidebarFilterOne type="off-canvas" />
                    </div>
                </div>
            </div>
        </main >
    )
}

export default React.memo(ShopOffCanvas);