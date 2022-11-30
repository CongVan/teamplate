import React from 'react';
import Reveal from 'react-awesome-reveal';

import ProductTwo from '~/components/features/product/product-two';

import { fadeIn, blurIn } from '~/utils/data/keyframes';

function latestCollection ( props ) {
    const { products, loading } = props;

    return (
        <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1200 } triggerOnce>
            <section className="mt-10 pt-6 mb-8">
                <div className="container">
                    <Reveal keyframes={ blurIn } delay={ 200 } duration={ 1200 } triggerOnce>
                        <h2 className="title title-underline text-center">New Arrivals</h2>
                    </Reveal>

                    <Reveal keyframes={ fadeIn } delay={ 600 } duration={ 1200 } triggerOnce>
                        {
                            loading ?
                                <div className="row cols-lg-4 cols-md-3 cols-2">
                                    {
                                        [ 1, 2, 3, 4, 5, 6, 7, 8 ].map( ( item ) =>
                                            <div className="product-loading-overlay" key={ 'new-skel-' + item }></div>
                                        )
                                    }
                                </div>
                                :
                                <div className="row cols-lg-4 cols-md-3 cols-2">
                                    {
                                        products && products.map( ( item, index ) =>
                                            <ProductTwo
                                                product={ item }
                                                isBadge={ false }
                                                isCat={ false }
                                                key={ `new-product ${ index }` }
                                            />
                                        )
                                    }
                                </div>
                        }
                    </Reveal>
                </div>
            </section>
        </Reveal>
    )
}

export default React.memo( latestCollection );
