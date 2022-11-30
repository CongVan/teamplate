import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';

import ProductTwo from '~/components/features/product/product-two';

import { GET_PRODUCTS } from '~/server/queries';

function FeaturedCollection ( props ) {
    const { products, loading } = props;
    const [ data, setData ] = useState( [] );
    const [ total, setTotal ] = useState( null );
    const [ isLoading, setLoading ] = useState( false );
    const [ loadMore, { data: moreProducts, loading: loadingMore } ] = useLazyQuery( GET_PRODUCTS );

    useEffect( () => {
        !loadingMore && setLoading( false );
    }, [ loadingMore ] );

    useLayoutEffect( () => {
        if ( products ) {
            setData( products.data );
            setTotal( products.total );
        }
    }, [ products ] )

    useLayoutEffect( () => {
        moreProducts && setData( [ ...data, ...moreProducts.products.data ] );
    }, [ moreProducts ] )

    function loadMoreProducts ( e ) {
        e.preventDefault();
        setLoading( true );
        setTimeout( () => {
            loadMore( {
                variables: {
                    from: data.length,
                    to: data.length + 4
                }
            } );
        }, 500 );
    }

    return (
        <section className="products-wrapper mt-6 pt-2  mb-10 pb-2">
            <h2 className="title title-bg mb-4">
                <b>Featured Products</b>
                <em>Featured Products</em>
            </h2>

            <div className="container p-relative">
                <div className="row grid cols-2 cols-lg-4 cols-md-3 cols-sm-2">
                    {
                        loading ?
                            [ 1, 2, 3, 4, 5, 6, 7, 8 ].map( ( item ) =>
                                <div className="grid-item mb-2" key={ 'featured-skel-' + item }>
                                    <div className="product-loading-overlay"></div>
                                </div>
                            )
                            :
                            data && data.map( ( item, index ) =>
                                <div className="grid-item mb-2" key={ `featured-product-${ index }` }>
                                    <ProductTwo
                                        product={ item }
                                        isCategory={ false }
                                    />
                                </div>
                            )
                    }
                </div>

                { loading || data.length < total ?
                    <>
                        <div className="d-loading" style={ isLoading ? { display: "block" } : {} }><i></i></div>
                        <div className="text-center p-relative">
                            <a className="btn btn-dark btn-load" href="#" onClick={ loadMoreProducts }>{ isLoading ? "Loading..." : "More Products" }<i className="d-icon-arrow-down"></i></a>
                            <div className="d-loading d-loading-sm" style={ isLoading ? { display: "block" } : {} }><i></i></div>
                        </div>
                    </>
                    : ""
                }
            </div>
        </section>
    )
}

export default React.memo( FeaturedCollection );
