import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';
import ProductFive from '~/components/features/product/product-five';

import { productSlider, categorySlider } from '~/utils/data/carousel';
import { fadeIn, fadeInUpShorter } from '~/utils/data/keyframes';

function BestCollection( props ) {
    const { products, loading } = props;

    return (
        <Reveal keyframes={ fadeIn } delay={ 300 } duration={ 1200 } triggerOnce>
            <section className="product-wrapper container pt-2 mt-10">
                <h2 className="title title-simple text-center">Our Featured</h2>

                {
                    loading ?
                        <OwlCarousel adClass="owl-theme owl-nav-inner owl-split" options={ productSlider }>
                            {
                                [ 1, 2, 3, 4, 5 ].map( ( item ) =>
                                    <div className="product-loading-overlay" key={ 'best-skel-' + item }></div>
                                )
                            }
                        </OwlCarousel>
                        :
                        <OwlCarousel adClass="owl-theme owl-nav-inner owl-split" options={ productSlider }>
                            {
                                products && products.map( ( item, index ) =>
                                    <ProductFive
                                        isCategory={ false }
                                        product={ item }
                                        key={ `best-product ${ index }` }
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
