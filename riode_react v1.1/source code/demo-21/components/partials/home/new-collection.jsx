import React from 'react';
import Reveal from 'react-awesome-reveal';

import OwlCarousel from '~/components/features/owl-carousel';

import ProductFive from '~/components/features/product/product-five';

import { productSlider } from '~/utils/data/carousel';
import { fadeIn } from '~/utils/data/keyframes';

function NewCollection ( props ) {
    const { products, loading } = props;

    return (
        <Reveal keyframes={ fadeIn } delay={ 300 } duration={ 1200 } triggerOnce>
            <section className="product-wrapper container mt-10 pt-sm-5 pt-0 mb-8">
                <h2 className="title title-simple mb-3">New Arrivals</h2>

                {
                    loading ?
                        <OwlCarousel adClass="owl-theme owl-nav-inner owl-split no-border pb-4" options={ productSlider }>
                            {
                                [ 1, 2, 3, 4, 5 ].map( ( item ) =>
                                    <div className="product-loading-overlay" key={ 'latest-skel-' + item }></div>
                                )
                            }
                        </OwlCarousel>
                        :
                        <OwlCarousel adClass="owl-theme owl-nav-inner owl-split no-border pb-4" options={ productSlider }>
                            {
                                products && products.map( ( item, index ) =>
                                    <ProductFive
                                        product={ item }
                                        key={ `latest-product ${ index }` }
                                        isCat={ false }
                                        isBadge={ false }
                                    />
                                )
                            }
                        </OwlCarousel>
                }
            </section>
        </Reveal>
    )
}

export default React.memo( NewCollection );
