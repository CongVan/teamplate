import React from 'react';

import ProductTwo from '~/components/features/product/product-two';

function BestCollection ( props ) {
    const { products, loading } = props;

    return (
        <section className="products-wrapper mt-2 pt-2 mb-4 pb-2">
            <div className="container">
                <h2 className="title title-bg mb-4">
                    <b>New Arrivals</b>
                    <em>New Arrivals</em>
                </h2>

                <div className="row cols-2 cols-lg-4 cols-md-3 cols-sm-2">
                    {
                        loading ?
                            [ 1, 2, 3, 4 ].map( ( item ) =>
                                <div className="product-loading-overlay" key={ 'best-selling-skel-' + item }></div>
                            )
                            :
                            products && products.slice( 0, 4 ).map( ( item, index ) =>
                                <ProductTwo
                                    product={ item }
                                    isCategory={ false }
                                    key={ `top-selling-product ${ index }` }
                                />
                            )
                    }
                </div>
            </div>
        </section>
    )
}

export default React.memo( BestCollection );
