import React from 'react';
import Reveal from 'react-awesome-reveal';

import OwlCarousel from '~/components/features/owl-carousel';

import ProductTwo from '~/components/features/product/product-two';

import { productSlider } from '~/utils/data/carousel';
import { fadeInUpShorter } from '~/utils/data/keyframes';

function FeaturedCollection ( props ) {
    const { products, loading } = props;

    return (
        <Reveal keyframes={ fadeInUpShorter } delay={ 200 } duration={ 1200 } triggerOnce>
            <section className="products-wrapper mt-6 pt-2 mb-10 pb-2">
                <div className="title-wrapper">
                    <div className="container">
                        <h2 className="title">Featured Products</h2>
                        <span className="title-info">Exclusive Selection</span>
                    </div>
                </div>

                <div className="container">
                    {
                        loading ?
                            <OwlCarousel adClass="owl-theme owl-nav-fade" options={ productSlider }>
                                {
                                    [ 1, 2, 3, 4, 5 ].map( ( item ) =>
                                        <div className="product-loading-overlay" key={ 'featured-skel-' + item }></div>
                                    )
                                }
                            </OwlCarousel>
                            :
                            <OwlCarousel adClass="owl-theme owl-nav-fade" options={ productSlider }>
                                {
                                    products && products.map( ( item, index ) =>
                                        <ProductTwo
                                            product={ item }
                                            isCategory={ false }
                                            key={ `featured-product-${ index }` } />
                                    )
                                }
                            </OwlCarousel>
                    }
                </div>
            </section>
        </Reveal>
    )
}

export default React.memo( FeaturedCollection );
