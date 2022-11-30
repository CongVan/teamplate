import React from 'react';
import Reveal from 'react-awesome-reveal';

import OwlCarousel from '~/components/features/owl-carousel';

import ProductTwo from '~/components/features/product/product-two';

import { productSlider } from '~/utils/data/carousel';
import { fadeIn } from '~/utils/data/keyframes';

function BestCollection ( props ) {
    const { products, loading } = props;

    return (
        <Reveal keyframes={ fadeIn } delay={ 600 } duration={ 1200 } triggerOnce>
            <section className="product-wrapper container mt-10 pt-8">
                <h2 className="title title-simple text-center">Best Seller</h2>

                {
                    loading ?
                        <div className="row">
                            {
                                [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ].map( ( item ) =>
                                    <div className="col-xl-5col col-lg-3 col-sm-4 col-6 mb-4" key={ 'best-selling-skel-' + item }>
                                        <div className="product-loading-overlay"></div>
                                    </div>
                                )
                            }
                        </div>
                        :
                        <div className="row">
                            {
                                products && products.map( ( item, index ) =>
                                    <div className="col-xl-5col col-lg-3 col-sm-4 col-6 mb-4" key={ `top-selling-product ${ index }` }>
                                        <ProductTwo
                                            product={ item }
                                            isCat={ false }
                                        />
                                    </div>
                                )
                            }
                        </div>
                }
            </section>
        </Reveal>
    )
}

export default React.memo( BestCollection );
