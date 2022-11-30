import React from 'react';
import Reveal from 'react-awesome-reveal';

import OwlCarousel from '~/components/features/owl-carousel';
import ProductThree from '~/components/features/product/product-three';
import ALink from '~/components/features/custom-link';

import { productSlider } from '~/utils/data/carousel';
import { fadeIn } from '~/utils/data/keyframes';

function PopularCollection( props ) {
    const { products, loading } = props;

    return (
        <Reveal keyframes={ fadeIn } delay={ 300 } duration={ 1200 } triggerOnce>
            <section className="product-wrapper container mt-10 pt-8 pb-6">
                <h2 className="title title-simple text-left mb-4">Our Sale Offer
                    <span className="divider"></span>
                    <ALink href="/shop" className="btn btn-link btn-primary btn-underline">View more<i
                        className="d-icon-arrow-right"></i></ALink>
                </h2>

                {
                    loading ?
                        <OwlCarousel adClass="owl-theme owl-nav-full" options={ productSlider }>
                            {
                                [ 1, 2, 3, 4, 5 ].map( ( item ) =>
                                    <div className="product-loading-overlay" key={ 'popular-skel-' + item }></div>
                                )
                            }
                        </OwlCarousel>
                        :
                        <OwlCarousel adClass="owl-theme owl-nav-full" options={ { ...productSlider, dots: false } }>
                            {
                                products && products.map( ( item, index ) =>
                                    <ProductThree
                                        isCategory={ false }
                                        product={ item }
                                        key={ `popular-product ${ index }` }
                                    />
                                )
                            }
                        </OwlCarousel>
                }
            </section>
        </Reveal >
    )
}

export default React.memo( PopularCollection );
