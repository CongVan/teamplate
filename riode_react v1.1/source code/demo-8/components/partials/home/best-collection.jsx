import React from 'react';
import Reveal from 'react-awesome-reveal';

import OwlCarousel from '~/components/features/owl-carousel';

import ProductThree from '~/components/features/product/product-three';

import { productSlider } from '~/utils/data/carousel';
import { fadeIn } from '~/utils/data/keyframes';

function BestCollection( props ) {
    const { products, loading } = props;

    return (
        <Reveal keyframes={ fadeIn } delay={ 300 } duration={ 1200 } triggerOnce>
            <section className="product-wrapper mt-10 pt-9 mb-10">
                <div className="container">
                    <h2 className="title title-simple">Popular Items</h2>

                    {
                        loading ?
                            <OwlCarousel adClass="owl-theme" options={ productSlider }>
                                {
                                    [ 1, 2, 3, 4, 5 ].map( ( item ) =>
                                        <div className="product-loading-overlay" key={ 'best-skel-' + item }></div>
                                    )
                                }
                            </OwlCarousel>
                            :
                            <OwlCarousel adClass="owl-theme" options={ productSlider }>
                                {
                                    products && products.map( ( item, index ) =>
                                        <ProductThree
                                            isCategory={ false }
                                            product={ item }
                                            key={ `best-product ${ index }` }
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

export default React.memo( BestCollection );
