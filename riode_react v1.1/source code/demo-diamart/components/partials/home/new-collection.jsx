import React from 'react';
import Reveal from 'react-awesome-reveal';

import OwlCarousel from '~/components/features/owl-carousel';

import ProductOne from '~/components/features/product/product-one';

import { productSlider } from '~/utils/data/carousel';
import { fadeIn } from '~/utils/data/keyframes';

function NewCollection ( props ) {
    const { products, loading } = props;

    return (
        <section className="product-wrapper mt-10 pt-5 mb-8 pb-2 new-products">
            <Reveal keyframes={ fadeIn } delay={ 400 } duration={ 1000 } triggerOnce>
                <>
                    <div className="title-wrapper">
                        <div className="container">
                            <h2 className="title">New Products</h2>
                            <span className="title-info">Best products on sale</span>
                        </div>
                    </div>

                    <div className="container">
                        {
                            loading ?
                                <OwlCarousel adClass="owl-theme owl-nav-fade" options={ productSlider }>
                                    {
                                        [ 1, 2, 3, 4 ].map( ( item ) =>
                                            <div className="product-loading-overlay" key={ 'best-selling-skel-' + item }></div>
                                        )
                                    }
                                </OwlCarousel>
                                :
                                <OwlCarousel adClass="owl-theme owl-nav-full" options={ productSlider }>
                                    {
                                        products && products.map( ( item, index ) =>
                                            <ProductOne
                                                adClass=""
                                                isCategory={ false }
                                                isRating={ false }
                                                product={ item }
                                                key={ `top-selling-product ${ index }` }
                                            />
                                        )
                                    }
                                </OwlCarousel>
                        }
                    </div>
                </>
            </Reveal>
        </section>
    )
}

export default React.memo( NewCollection );
