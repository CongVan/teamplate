import React from 'react';
import { Helmet } from 'react-helmet';

import ShopBanner from '~/components/partials/shop/shop-banner';
import SidebarFilterOne from '~/components/partials/shop/sidebar/sidebar-filter-one'
import ProductListOne from '~/components/partials/shop/product-list/product-list-one';

function ShopOffCanvas() {
    return (
        <main className="main mt-4">
            <Helmet>
                <title>Riode React eCommerce Template - Shop Off-Canvas Filter</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Shop Off-Canvas Filter</h1>

            <div className="page-content mb-lg-10 mb-0 pb-lg-6 pb-0">
                <div className="container">
                    <ShopBanner />

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