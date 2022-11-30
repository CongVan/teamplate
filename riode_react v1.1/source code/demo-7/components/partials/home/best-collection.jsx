import React from 'react';
import Reveal from 'react-awesome-reveal';

import ProductNine from '~/components/features/product/product-nine';

import { fadeIn } from '~/utils/data/keyframes';

function BestCollection( props ) {
    const { products, loading } = props;

    return (
        <section className="mt-10 pt-7">
            <div className="container">
                <h2 className="title title-center">BEST SELLERS</h2>

                <Reveal keyframes={ fadeIn } triggerOnce>
                    {
                        loading ?
                            <div className="row">
                                {
                                    [ 1, 2, 3, 4, 5, 6, 7, 8 ].map( ( item ) =>
                                        <div
                                            className="product-loading-overlay col-lg-4 col-6 mb-4"
                                            key={ 'best-selling-skel-' + item }>
                                        </div>
                                    )
                                }
                            </div>
                            :
                            <div className="row">
                                {
                                    products && products.map( item =>
                                        <div
                                            className="col-lg-4 col-6 mb-4"
                                            key={ 'best-selling-' + item.slug }>
                                            <ProductNine product={ item } />
                                        </div>
                                    )
                                }
                            </div>
                    }
                </Reveal>
            </div>
        </section>
    )
}

export default React.memo( BestCollection );
