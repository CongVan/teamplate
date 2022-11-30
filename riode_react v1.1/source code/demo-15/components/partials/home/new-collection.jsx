import React from 'react';
import Reveal from 'react-awesome-reveal';

import OwlCarousel from '~/components/features/owl-carousel';
import ProductFive from '~/components/features/product/product-five';

import { productSlider } from '~/utils/data/carousel';
import { fadeIn } from '~/utils/data/keyframes';

function NewCollection( props ) {
    const { products, loading } = props;

    return (
        <Reveal keyframes={ fadeIn } delay={ 300 } duration={ 1200 } triggerOnce>
            <section className="product-wrapper container pt-7 mt-10">
                <h2 className="title title-simple text-center">New Arrivals</h2>

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
                                        showNew={ false }
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
