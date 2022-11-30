import React from 'react';
import { Helmet } from 'react-helmet';

import ShopBanner from '~/components/partials/shop/shop-banner';
import SidebarFilterOne from '~/components/partials/shop/sidebar/sidebar-filter-one'
import ProductListOne from '~/components/partials/shop/product-list/product-list-one';

function ShopOffCanvas() {
    return (
        <main className="main shop">
            <Helmet>
                <title>Riode React eCommerce Template - Shop Off-Canvas Filter</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Shop Off-Canvas Filter</h1>

            <ShopBanner />

            <div className="page-content">
                <div className="container-fluid">
                    <div className="row main-content-wrap gutter-lg">
                        <div className="main-content">
                            <ProductListOne itemsPerRow={5} type="off-canvas" />
                        </div>

                        <SidebarFilterOne type="off-canvas" />
                    </div>
                </div>
            </div>
        </main >
    )
}

export default React.memo(ShopOffCanvas);