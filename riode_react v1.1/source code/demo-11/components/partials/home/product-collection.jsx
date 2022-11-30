import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import OwlCarousel from '~/components/features/owl-carousel';
import ProductThree from '~/components/features/product/product-three';
import ALink from '~/components/features/custom-link';

import { shoesSlider } from '~/utils/data/carousel';
import { fadeIn } from '~/utils/data/keyframes';

function BestCollection( props ) {
    const { shoes, accessories, loading } = props;

    return (
        <>
            <Reveal keyframes={ fadeIn } triggerOnce>
                <section className="product-wrapper mt-10 pt-1">
                    <h2 className="title title-underline with-link"><span>Sports Shoes</span><ALink href={ { pathname: "/shop", query: { category: 'shoes' } } }
                        className="font-weight-bold">View All Products<i className="d-icon-arrow-right"></i></ALink></h2>

                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                            <div className="banner banner3 banner-fixed overlay-dark h-100" style={ { backgroundColor: "rgb(37, 36, 42)" } } >
                                <figure className="h-100">
                                    <LazyLoadImage src="./images/home/banners/5.jpg" className="h-100" alt="banner"
                                        width="220" height="343" />
                                </figure>
                                <div className="banner-content pr-2">
                                    <Reveal keyframes={ fadeIn } delay={ 300 } triggerOnce>
                                        <h4 className="banner-subtitle text-uppercase text-primary ls-m mb-2">New Collection
                                        </h4>
                                        <h3 className="banner-title mb-3 text-white">Find out Jodan
                                        trending!
                                        </h3>
                                        <ALink href="/shop"
                                            className="btn btn-outline btn-white btn-md btn-icon-right">Shop now<i
                                                className="d-icon-arrow-right"></i></ALink>
                                    </Reveal>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-9 col-md-8 col-sm-6 mb-4">
                            {
                                loading ?
                                    <OwlCarousel adClass="owl-theme owl-nav-full" options={ shoesSlider }>
                                        {
                                            [ 1, 2, 3, 4 ].map( ( item ) =>
                                                <div className="product-loading-overlay" key={ 'shoes-skel-' + item }></div>
                                            )
                                        }
                                    </OwlCarousel>
                                    :
                                    <OwlCarousel adClass="owl-theme owl-nav-full" options={ shoesSlider }>
                                        {
                                            shoes && shoes.slice( 1, 5 ).map( ( item, index ) =>
                                                <ProductThree
                                                    product={ item }
                                                    key={ `shoes-product ${ index }` }
                                                    isCategory={ false }
                                                />
                                            )
                                        }
                                    </OwlCarousel>
                            }
                        </div>
                    </div>
                </section>
            </Reveal>

            <Reveal keyframes={ fadeIn } triggerOnce>
                <section className="product-wrapper mt-10 pt-2">
                    <h2 className="title title-underline with-link"><span>Accessories</span><ALink href={ { pathname: "/shop", query: { category: 'accessories' } } }
                        className="font-weight-bold">View All Products<i className="d-icon-arrow-right"></i></ALink></h2>

                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                            <div className="banner banner3 banner-fixed overlay-dark h-100" style={ { backgroundColor: "rgb(244 126 62)" } } >
                                <figure className="h-100">
                                    <LazyLoadImage src="./images/home/banners/6.jpg" className="h-100" alt="banner"
                                        width="220" height="343" />
                                </figure>
                                <div className="banner-content pr-2">
                                    <Reveal keyframes={ fadeIn } delay={ 300 } triggerOnce>
                                        <h4 className="banner-subtitle text-uppercase text-white ls-m mb-2">Accessories
                                        </h4>
                                        <h3 className="banner-title mb-3 text-white">Get Our New
                                        Sporting Goods
                                        </h3>
                                        <ALink href="/shop"
                                            className="btn btn-outline btn-white btn-md btn-icon-right">Shop now<i
                                                className="d-icon-arrow-right"></i></ALink>
                                    </Reveal>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-9 col-md-8 col-sm-6 mb-4">
                            {
                                loading ?
                                    <OwlCarousel adClass="owl-theme owl-nav-full" options={ shoesSlider }>
                                        {
                                            [ 1, 2, 3, 4 ].map( ( item ) =>
                                                <div className="product-loading-overlay" key={ 'access-skel-' + item }></div>
                                            )
                                        }
                                    </OwlCarousel>
                                    :
                                    <OwlCarousel adClass="owl-theme owl-nav-full" options={ shoesSlider }>
                                        {
                                            accessories && accessories.slice( 1, 5 ).map( ( item, index ) =>
                                                <ProductThree
                                                    product={ item }
                                                    key={ `access-product ${ index }` }
                                                    isCategory={ false }
                                                />
                                            )
                                        }
                                    </OwlCarousel>
                            }
                        </div>
                    </div>
                </section>
            </Reveal>
        </>
    )
}

export default React.memo( BestCollection );
