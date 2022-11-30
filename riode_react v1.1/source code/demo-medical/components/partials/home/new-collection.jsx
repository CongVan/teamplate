import React from 'react';

import ProductTwo from '~/components/features/product/product-two';

function NewCollection ( props ) {
    const { products, loading } = props;

    return (
        <section className="products-wrapper mt-10 pt-2 mb-6 pb-2 new-products">
            <div className="title-wrapper">
                <div className="container">
                    <h2 className="title">New Arrivals</h2>
                    <span className="title-info">Recently Arrived</span>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    {
                        loading ?
                            [ 1, 2, 3, 4 ].map( ( item ) =>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6" key={ 'new-skel-' + item }>
                                    <div className="product-loading-overlay"></div>
                                </div>
                            )
                            :
                            products && products.slice( 0, 4 ).map( ( item, index ) =>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6" key={ `new-product-${ index }` } >
                                    <ProductTwo
                                        product={ item }
                                        isCategory={ false }
                                    />
                                </div>
                            )
                    }
                </div>
            </div>
        </section>
    )
}

export default React.memo( NewCollection );
