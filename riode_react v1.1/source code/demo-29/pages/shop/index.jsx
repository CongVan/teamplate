import React from 'react';
import { Helmet } from 'react-helmet';

import ALink from '~/components/features/custom-link';
import ShopBanner from '~/components/partials/shop/shop-banner';
import SidebarFilterOne from '~/components/partials/shop/sidebar/sidebar-filter-one'
import ProductListOne from '~/components/partials/shop/product-list/product-list-one';

function Shop() {
    return (
        <main className="main shop">
            <Helmet>
                <title>Riode React eCommerce Template - Shop Page</title>
            </Helmet>
            <h1 className="d-none">Riode React eCommerce Template - Shop Page</h1>


            <div className="page-content mb-10">
                <div className="container">
                    <ul className="breadcrumb breadcrumb-sm">
                        <li><ALink href="/shop"><i className="d-icon-home"></i></ALink></li>
                        <li>Shop</li>
                    </ul>
                    <div className="row main-content-wrap gutter-lg">
                        <SidebarFilterOne />

                        <div className="col-lg-9 main-content">
                            <ShopBanner />

                            <ProductListOne />
                        </div>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default React.memo(Shop);