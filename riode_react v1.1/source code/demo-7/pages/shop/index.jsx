import React from 'react';
import { Helmet } from 'react-helmet';

import ALink from '~/components/features/custom-link';

import SidebarFilterOne from '~/components/partials/shop/sidebar/sidebar-filter-one'
import ProductListOne from '~/components/partials/shop/product-list/product-list-one';

function Shop() {
    return (
        <main className="main home">
            <Helmet>
                <title>Riode React eCommerce Template - Shop</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Shop</h1>

            <div className="page-header" style={ { backgroundImage: `url(./images/home/shop/page-header.jpg)`, backgroundColor: "#3C63A4" } } >
                <h1 className="page-title ls-m">Riode Shop</h1>
                <ul className="breadcrumb pb-0">
                    <li><ALink href="/"><i className="d-icon-home"></i></ALink></li>
                    <li className="delimiter"><i className="fas fa-angle-right"></i></li>
                    <li>Riode Shop</li>
                </ul>
            </div>

            <div className="page-content mb-10 pb-2">
                <div className="container-fluid">
                    <div className="row main-content-wrap gutter-lg">
                        <div className="main-content">
                            <ProductListOne itemsPerRow={ 5 } type="off-canvas" />
                        </div>

                        <SidebarFilterOne type="off-canvas" />
                    </div>
                </div>
            </div>
        </main >
    )
}

export default React.memo( Shop );