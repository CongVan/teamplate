import React from 'react';
import Reveal from 'react-awesome-reveal';

import OwlCarousel from '~/components/features/owl-carousel';
import ProductThree from '~/components/features/product/product-three';
import ALink from '~/components/features/custom-link';

import { newSlider } from '~/utils/data/carousel';
import { fadeIn } from '~/utils/data/keyframes';

function FeaturedCollection( props ) {
    const { products, loading } = props;

    return (
        <>
            <Reveal keyframes={ fadeIn } delay={ 600 } duration={ 1200 } triggerOnce>
                <section className="product-wrapper mt-10">
                    <div className="title-wrapper title-cross">
                        <h2 className="title">Featured</h2>
                    </div>

                    {
                        loading ?
                            <OwlCarousel adClass="owl-theme" options={ newSlider }>
                                {
                                    [ 1, 2, 3, 4, 5 ].map( ( item ) =>
                                        <div className="product-loading-overlay" key={ 'featured-skel-' + item }></div>
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
                                            key={ `featured-product-${ index }` } />
                                    )
                                }
                            </OwlCarousel>
                    }
                </section>

                <section className="banner cta-simple mt-10">
                    <div className="banner-content p-0">
                        <div className="banner-header">
                            <h3 className="banner-title text-uppercase font-weight-bold">Trade-in</h3>
                        </div>
                        <div className="banner-text">
                            <h4>Get a Riode Gift Card+<span className="text-primary font-weight-bolder">25%
                                    Off</span></h4>
                            <p>Lorem ipsum dolor sit amet, consectetur piscsed.</p>
                        </div>
                        <ALink href="/shop" className="btn btn-ellipse btn-md">Shop Now<i
                            className="d-icon-arrow-right"></i></ALink>
                    </div>
                </section>
            </Reveal>
        </>
    )
}

export default React.memo( FeaturedCollection );
