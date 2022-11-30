import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Helmet from 'react-helmet';
import { useLazyQuery } from '@apollo/react-hooks';

// Import Apollo Server and Query
import withApollo from '~/server/apollo';
import { GET_PRODUCTS } from '~/server/queries';

import ALink from '~/components/features/custom-link';
// import Home Components
import IntroSection from '~/components/partials/home/intro-section';
import HomeSidebar from '~/components/partials/home/home-sidebar';
import ProductListTwo from '~/components/partials/shop/product-list/product-list-two';
import SidebarFilterTwo from '~/components/partials/shop/sidebar/sidebar-filter-two';

function Shop() {
    const router = useRouter();
    const query = router.query;
    const [ getProducts, { data, loading, error } ] = useLazyQuery( GET_PRODUCTS );

    let categoryList = [
        {
            name: "Accessories",
            slug: "accessories"
        },
        {
            name: "Backpack & Fashion Bags",
            slug: "backpack-and-fashion-bags"
        },
        {
            name: "Casual Clothing",
            slug: "casual-clothing"
        },
        {
            name: "Gift",
            slug: "gift"
        },
        {
            name: "Jewellery",
            slug: "jewellery"
        },
        {
            name: "Leather Goods",
            slug: "leather-goods"
        },
        {
            name: "Merry Christmas",
            slug: "merry-christmas"
        },
        {
            name: "Under $25",
            slug: "under-25"
        },
        {
            name: "",
            slug: "Riode Shop"
        }
    ]

    const perPage = query.per_page ? parseInt( query.per_page ) : 24;
    const page = query.page ? query.page : 1;

    useEffect( () => {
        getProducts( {
            variables: {
                search: query.search,
                colors: query.colors ? query.colors.split( ',' ) : [],
                sizes: query.sizes ? query.sizes.split( ',' ) : [],
                brands: query.brands ? query.brands.split( ',' ) : [],
                min_price: parseInt( query.min_price ),
                max_price: parseInt( query.max_price ),
                category: query.category,
                tag: query.tag,
                sortBy: query.sortby,
                from: perPage * ( page - 1 ),
                to: perPage * page
            }
        } );
    }, [ query ] )

    const showSidebar = () => {
        document.querySelector( 'body' ).classList.add( "right-sidebar-active" );
    }

    return (
        <div className="main mt-6 pb-10 mb-4">
            <Helmet>
                <title>Riode React eCommerce Template - Shop page</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Shop page</h1>

            <div className="page-content">
                <div className="container">
                    <div className="row">
                        <HomeSidebar />

                        <div className="col-lg-9">
                            <IntroSection />

                            <section className="toolbox">
                                <div className="toolbox-left">
                                    <h2 className="title title-simple text-left">{
                                        categoryList.map( item => {
                                            item.slug === query.category ? item.name : ''
                                        } )
                                    }</h2>
                                    {
                                        data && data.products.total > 0 && < p className="show-info">(showing { perPage * ( page - 1 ) + 1 }-{ Math.min( perPage * page, data.products.total ) } of { data.products.total } products)</p>
                                    }
                                </div>
                                <div className="toolbox-right">
                                    <ALink href="#" className="right-sidebar-toggle mr-0 font-weight-normal" onClick={ showSidebar }>Filter</ALink>
                                </div>
                            </section>

                            <ProductListTwo />
                        </div>

                        <SidebarFilterTwo />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( Shop );