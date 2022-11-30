import React from 'react';
import { Helmet } from 'react-helmet';

import ShopBanner from '~/components/partials/shop/shop-banner';
import SidebarFilterOne from '~/components/partials/shop/sidebar/sidebar-filter-one'
import ProductListTwo from '~/components/partials/shop/product-list/product-list-two';

function InfiniteScroll() {
    return (
        <main className="main mt-4">
            <Helmet>
                <title>Riode React eCommerce Template - Shop Ajax Infinite Scroll</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Shop Ajax Infinite Scroll</h1>

            <div className="page-content mb-10 pb-3">
                <div className="container">

                    <ShopBanner />

                    <div className="row main-content-wrap gutter-lg">
                        <SidebarFilterOne type="banner" padding={true} />

                        <div className="col-lg-9 main-content">
                            <ProductListTwo />
                        </div>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default React.memo(InfiniteScroll);