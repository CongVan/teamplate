import React from 'react';
import Reveal from 'react-awesome-reveal';

import OwlCarousel from '~/components/features/owl-carousel';

import ProductNine from '~/components/features/product/product-nine';

import { featuredSlider } from '~/utils/data/carousel';
import { fadeIn } from '~/utils/data/keyframes';

function FeaturedCollection( props ) {
    const { products, loading } = props;

    return (
        <Reveal keyframes={ fadeIn } delay={ 600 } duration={ 1200 } triggerOnce>
            <section className="mt-7">
                <div className="container">
                    <h2 className="title title-center">Trending Now</h2>

                    {
                        loading ?
                            <OwlCarousel adClass="owl-theme owl-nav-full owl-shadow-carousel" options={ featuredSlider }>
                                {
                                    [ 1, 2, 3, 4, 5 ].map( ( item ) =>
                                        <div className="product-loading-overlay" key={ 'featured-skel-' + item }></div>
                                    )
                                }
                            </OwlCarousel>
                            :
                            <OwlCarousel adClass="owl-theme owl-nav-full owl-shadow-carousel" options={ featuredSlider }>
                                {
                                    products && products.map( ( item, index ) =>
                                        <ProductNine
                                            product={ item }
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
