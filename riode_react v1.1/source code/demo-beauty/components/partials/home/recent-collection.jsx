import React from 'react';
import Reveal from 'react-awesome-reveal';

import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import ProductTwo from '~/components/features/product/product-two';

import { productSlider } from '~/utils/data/carousel';
import { fadeIn } from '~/utils/data/keyframes';

function RecentCollection ( props ) {
    const { products, loading } = props;

    return (
        <Reveal keyframes={ fadeIn } delay={ 300 } duration={ 1200 } triggerOnce>
            <section className="container pt-6 mt-10 text-center new-collection">
                <h2 className="title title-underline text-center">Recent Arrivals</h2>{

                    loading ?
                        <OwlCarousel adClass="owl-theme mb-5" options={ productSlider }>
                            {
                                [ 1, 2, 3, 4 ].map( ( item ) =>
                                    <div className="product-loading-overlay" key={ 'best-skel-' + item }></div>
                                )
                            }
                        </OwlCarousel>
                        :
                        <OwlCarousel adClass="owl-theme mb-5" options={ productSlider }>
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
                <ALink href="/shop" className="btn btn-outline btn-rounded btn-dark mb-4">View All Products</ALink>
            </section>
        </Reveal>
    )
}

export default React.memo( RecentCollection );
