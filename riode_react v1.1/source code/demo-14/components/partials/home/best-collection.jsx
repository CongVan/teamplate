import React from 'react';
import Reveal from 'react-awesome-reveal';

import OwlCarousel from '~/components/features/owl-carousel';
import ProductThree from '~/components/features/product/product-three';

import { newSlider } from '~/utils/data/carousel';
import { fadeIn } from '~/utils/data/keyframes';

function FeaturedCollection( props ) {
    const { products, loading } = props;

    return (
        <>
            <Reveal keyframes={ fadeIn } delay={ 600 } duration={ 1200 } triggerOnce>
                <section className="product-wrapper mt-10 pt-4">
                    <div className="title-wrapper title-cross">
                        <h2 className="title">Best Seller</h2>
                    </div>

                    {
                        loading ?
                            <OwlCarousel adClass="owl-theme" options={ newSlider }>
                                {
                                    [ 1, 2, 3, 4, 5 ].map( ( item ) =>
                                        <div className="product-loading-overlay" key={ 'best-skel-' + item }></div>
                                    )
                                }
                            </OwlCarousel>
                            :
                            <OwlCarousel adClass="owl-theme" options={ newSlider }>
                                {
                                    products && products.map( ( item, index ) =>
                                        <ProductThree
                                            isCategory={ false }
                                            showNew={ false }
                                            product={ item }
                                            key={ `best-product-${ index }` } />
                                    )
                                }
                            </OwlCarousel>
                    }
                </section>
            </Reveal>
        </>
    )
}

export default React.memo( FeaturedCollection );
