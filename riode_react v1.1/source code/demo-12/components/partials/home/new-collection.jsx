import React from 'react';
import Reveal from 'react-awesome-reveal';

import OwlCarousel from '~/components/features/owl-carousel';
import ProductTwo from '~/components/features/product/product-two';

import { productSlider } from '~/utils/data/carousel';
import { fadeIn } from '~/utils/data/keyframes';

function NewCollection( props ) {
    const { products, loading } = props;

    return (
        <Reveal keyframes={ fadeIn } delay={ 300 } duration={ 1200 } triggerOnce>
            <section className="product-wrapper container mt-7 pb-6">
                <h2 className="title title-simple text-center">New Arrivals</h2>

                {
                    loading ?
                        <OwlCarousel adClass="owl-theme owl-dot-primary" options={ productSlider }>
                            {
                                [ 1, 2, 3, 4, 5 ].map( ( item ) =>
                                    <div className="product-loading-overlay" key={ 'new-skel-' + item }></div>
                                )
                            }
                        </OwlCarousel>
                        :
                        <OwlCarousel adClass="owl-theme owl-dot-primary" options={ productSlider }>
                            {
                                products && products.map( ( item, index ) =>
                                    <ProductTwo
                                        product={ item }
                                        key={ `new-product ${ index }` }
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
