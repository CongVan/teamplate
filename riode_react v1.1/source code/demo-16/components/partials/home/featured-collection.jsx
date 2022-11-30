import React from 'react';
import Reveal from 'react-awesome-reveal';

import OwlCarousel from '~/components/features/owl-carousel';

import ProductThree from '~/components/features/product/product-three';

import { productSlider } from '~/utils/data/carousel';
import { fadeIn } from '~/utils/data/keyframes';

function FeaturedCollection ( props ) {
    const { products, loading } = props;

    return (
        <Reveal keyframes={ fadeIn } delay={ 600 } duration={ 1200 } triggerOnce>
            <section className="product-wrapper container mt-10 pt-7">
                <h2 className="title title-simple text-center">Featured products</h2>

                {
                    loading ?
                        <OwlCarousel adClass="owl-theme owl-nav-full" options={ productSlider }>
                            {
                                [ 1, 2, 3, 4, 5 ].map( ( item ) =>
                                    <div className="product-loading-overlay" key={ 'featured-skel-' + item }></div>
                                )
                            }
                        </OwlCarousel>
                        :
                        <OwlCarousel adClass="owl-theme owl-nav-full" options={ productSlider }>
                            {
                                products && products.map( ( item, index ) =>
                                    <ProductThree
                                        product={ item }
                                        key={ `featured-product-${ index }` } />
                                )
                            }
                        </OwlCarousel>
                }
            </section>
        </Reveal>
    )
}

export default React.memo( FeaturedCollection );
