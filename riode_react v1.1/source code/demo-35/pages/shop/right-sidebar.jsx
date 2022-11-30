import React from 'react';
import { Helmet } from 'react-helmet';

import ShopBanner from '~/components/partials/shop/shop-banner';
import SidebarFilterOne from '~/components/partials/shop/sidebar/sidebar-filter-one'
import ProductListOne from '~/components/partials/shop/product-list/product-list-one';

function ShopRightSidebar() {
    return (
        <main className="main mt-4 right-sidebar">
            <Helmet>
                <title>Riode React eCommerce Template - Shop With Right Sidebar</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Shop With Right Sidebar</h1>

            <div className="page-content mb-lg-10 mb-0 pb-lg-6 pb-0">
                <div className="container">
                    <ShopBanner />

                    <div className="row main-content-wrap gutter-lg">
                        <SidebarFilterOne type="right" padding={true} />

                        <div className="col-lg-9 main-content">
                            <ProductListOne type="right" />
                        </div>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default React.memo(ShopRightSidebar);