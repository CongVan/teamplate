import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import OwlCarousel from '~/components/features/owl-carousel';

import ProductFive from '~/components/features/product/product-five';

import { productSlider2 } from '~/utils/data/carousel';
import { fadeIn, zoomInLeft, fadeInLeftShorter } from '~/utils/data/keyframes';
import { toDecimal } from '~/utils';

function ProductCollection ( props ) {
    const { products, loading, adClass = "mt-6", title = "For Her", subTitle = "Fashion Collection", price = 26, url = "./images/home/banner/5.jpg" } = props;

    return (
        <Reveal keyframes={ fadeIn } delay={ 300 } duration={ 1200 } triggerOnce>
            <section className={ `product-wrapper container ${ adClass }` } style={ { overflow: "hidden" } }>
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-5">
                        <div className="banner banner-fixed overlay-zoom" style={ { backgroundColor: "#615e5f" } }>
                            <figure>
                                <LazyLoadImage
                                    src={ url }
                                    alt="category banner"
                                    effect="opacity, transform"
                                    width="auto"
                                    height={ 358 }
                                />
                            </figure>

                            <div className="banner-content">
                                <Reveal keyframes={ zoomInLeft } delay={ 300 } duration={ 1200 } triggerOnce>
                                    <h4 className="banner-subtitle mb-0 ls-s text-white text-uppercase mb-1">{ subTitle }</h4>
                                    <h3 className="banner-title mb-2 ls-m text-white font-weight-bold">{ title }</h3>
                                    <p className="mb-0 font-primary text-white">Starting at <strong>${ toDecimal( price ) }</strong></p>
                                </Reveal>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-9 col-md-8 col-sm-7">
                        {
                            loading ?
                                <OwlCarousel adClass="owl-theme owl-split owl-nav-inner" options={ productSlider2 }>
                                    {
                                        [ 1, 2, 3, 4, 5 ].map( ( item, index ) =>
                                            <Reveal keyframes={ fadeInLeftShorter } delay={ 300 + 100 * index } duration={ 1200 } triggerOnce key={ 'product-skel-' + item }>
                                                <div className="product-loading-overlay" ></div>
                                            </Reveal>
                                        )
                                    }
                                </OwlCarousel>
                                :
                                <OwlCarousel adClass="owl-theme owl-split owl-nav-inner" options={ productSlider2 }>
                                    {
                                        products && products.map( ( item, index ) =>
                                            <Reveal keyframes={ fadeInLeftShorter } delay={ 300 + 100 * index } duration={ 1200 } triggerOnce key={ `product-${ index }` }>
                                                <ProductFive
                                                    product={ item }
                                                    isCat={ false } />
                                            </Reveal>
                                        )
                                    }
                                </OwlCarousel>
                        }
                    </div>
                </div>
            </section>
        </Reveal>
    )
}

export default React.memo( ProductCollection );
