import React from 'react';
import Reveal from 'react-awesome-reveal';

import OwlCarousel from '~/components/features/owl-carousel';

import ProductTwo from '~/components/features/product/product-two';
import ALink from '~/components/features/custom-link';

import { productSlider } from '~/utils/data/carousel';
import { fadeIn } from '~/utils/data/keyframes';

function FeaturedCollection( props ) {
    const { products, loading } = props;

    return (
        <Reveal keyframes={ fadeIn } delay={ 300 } duration={ 1200 } triggerOnce>
            <section className="mt-7">
                <div className="container">
                    <h2 className="title title-line title-underline with-link pt-4">Our Featured
                    <ALink href="/shop">View more<i className="d-icon-arrow-right"></i></ALink></h2>

                    {
                        loading ?
                            <OwlCarousel adClass="owl-theme owl-nav-full" options={ productSlider }>
                                {
                                    [ 1, 2, 3, 4, 5 ].map( ( item ) =>
                                        <div className="product-loading-overlay" key={ 'new-skel-' + item }></div>
                                    )
                                }
                            </OwlCarousel>
                            :
                            <OwlCarousel adClass="owl-theme owl-nav-full" options={ productSlider }>
                                {
                                    products && products.map( ( item, index ) =>
                                        <ProductTwo
                                            product={ item }
                                            adClass="text-left"
                                            key={ `new-product ${ index }` }
                                        />
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
