import React from 'react';
import Reveal from 'react-awesome-reveal';

import OwlCarousel from '~/components/features/owl-carousel';

import ProductThree from '~/components/features/product/product-three';

import { productSlider } from '~/utils/data/carousel';
import { fadeIn } from '~/utils/data/keyframes';

function BestCollection( props ) {
    const { products, loading } = props;

    return (
        <Reveal keyframes={ fadeIn } delay={ 300 } duration={ 1200 } triggerOnce>
            <section className="mt-10 pt-3">
                <h2 className="title title-custom title-center text-normal border-no mb-6">Best of the week</h2>

                {
                    loading ?
                        <OwlCarousel adClass="owl-theme" options={ productSlider }>
                            {
                                [ 1, 2, 3, 4, 5 ].map( ( item ) =>
                                    <div className="product-loading-overlay" key={ 'week-skel-' + item }></div>
                                )
                            }
                        </OwlCarousel>
                        :
                        <OwlCarousel adClass="owl-theme" options={ productSlider }>
                            {
                                products && products.slice( 0, 4 ).map( ( item, index ) =>
                                    <ProductThree
                                        product={ item }
                                        key={ `week-product ${ index }` }
                                        isCategory={ false }
                                    />
                                )
                            }
                        </OwlCarousel>
                }
            </section>
        </Reveal>
    )
}

export default React.memo( BestCollection );
