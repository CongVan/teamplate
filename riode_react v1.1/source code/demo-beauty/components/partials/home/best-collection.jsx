import React from 'react';
import Reveal from 'react-awesome-reveal';

import OwlCarousel from '~/components/features/owl-carousel';

import ProductTwo from '~/components/features/product/product-two';

import { productSlider } from '~/utils/data/carousel';
import { fadeInUpShorter } from '~/utils/data/keyframes';

function BestCollection ( props ) {
    const { products, loading } = props;

    return (
        <Reveal keyframes={ fadeInUpShorter } delay={ 300 } duration={ 1200 } triggerOnce>
            <section className="container pt-8 mt-10">
                <h2 className="title title-underline text-center">Best of the Week</h2>{

                    loading ?
                        <OwlCarousel adClass="owl-theme" options={ productSlider }>
                            {
                                [ 1, 2, 3, 4 ].map( ( item ) =>
                                    <div className="product-loading-overlay" key={ 'best-skel-' + item }></div>
                                )
                            }
                        </OwlCarousel>
                        :
                        <OwlCarousel adClass="owl-theme" options={ productSlider }>
                            {
                                products && products.map( ( item, index ) =>
                                    <ProductTwo
                                        isCategory={ false }
                                        product={ item }
                                        key={ `best-product-${ index }` } />
                                )
                            }
                        </OwlCarousel>
                }
            </section>
        </Reveal>
    )
}

export default React.memo( BestCollection );
