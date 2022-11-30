import React from 'react';
import Reveal from 'react-awesome-reveal';

// Import Custom Components
import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import ProductNine from '~/components/features/product/product-nine';

import { productSlider2 } from '~/utils/data/carousel';
import { fadeIn } from '~/utils/data/keyframes';

function ProductCollection ( props ) {
    const { clothings, toys, foods, loading } = props;

    return (
        <>
            <Reveal keyframes={ fadeIn } duration={ 1200 } triggerOnce>
                <section className="product-wrapper mt-10">
                    <h2 className="title title-underline title-line with-link">
                        <span>Children's Clothing</span><ALink href={ { pathname: "/shop", query: { category: "apparels-for-baby" } } }>View All<i className="d-icon-arrow-right"></i></ALink>
                    </h2>
                    <div className="row">
                        <div className="col-lg-3 col-sm-4 mb-8">
                            <div className="banner banner3 banner-fixed overlay-dark" style={ { backgroundImage: "url(images/home/banners/5.jpg)", backgroundColor: "#f6f6f6" } }>
                                <div className="banner-content">
                                    <Reveal keyframes={ fadeIn } delay={ 300 } duration={ 1200 } triggerOnce>
                                        <h4 className="banner-subtitle text-uppercase mb-1">New Collection</h4>
                                        <h3 className="banner-title ls-m font-weight-bold">Popular
                                        <br />Infants Goods
                                    </h3>
                                        <ALink href={ { pathname: "/shop", query: { category: "apparels-for-baby" } } } className="btn btn-link btn-underline">Shop now<i className="d-icon-arrow-right"></i></ALink>
                                    </Reveal>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-sm-8 mb-4">
                            {
                                loading ?
                                    <OwlCarousel adClass="owl-theme owl-nav-full" options={ productSlider2 }>
                                        {
                                            [ 1, 2, 3 ].map( ( item ) =>
                                                <div className="product-loading-overlay" key={ 'clothing-skel-' + item }></div>
                                            )
                                        }
                                    </OwlCarousel>
                                    :
                                    <OwlCarousel adClass="owl-theme owl-nav-full" options={ productSlider2 }>
                                        {
                                            clothings && clothings.map( ( item, index ) =>
                                                <ProductNine
                                                    product={ item }
                                                    key={ `clothing-product ${ index }` }
                                                />
                                            )
                                        }
                                    </OwlCarousel>
                            }
                        </div>
                    </div>
                </section>
            </Reveal>

            <Reveal keyframes={ fadeIn } duration={ 1200 } triggerOnce>
                <section className="product-wrapper mt-5">
                    <h2 className="title title-underline title-line with-link">
                        <span>Toy Collection</span><ALink href={ { pathname: "/shop", query: { category: "baby-toys" } } }>View All<i className="d-icon-arrow-right"></i></ALink>
                    </h2>
                    <div className="row">
                        <div className="col-lg-3 col-sm-4 mb-8">
                            <div className="banner banner3 banner-fixed overlay-dark" style={ { backgroundImage: "url(images/home/banners/6.jpg)", backgroundColor: "#eee9e6" } }>
                                <div className="banner-content">
                                    <Reveal keyframes={ fadeIn } delay={ 300 } duration={ 1200 } triggerOnce>
                                        <h4 className="banner-subtitle text-uppercase mb-1">New Collection</h4>
                                        <h3 className="banner-title ls-m font-weight-bold">Toys Of
                                        <br />Children's Choice
                                    </h3>
                                        <ALink href={ { pathname: "/shop", query: { category: "baby-toys" } } } className="btn btn-link btn-underline">Shop now<i className="d-icon-arrow-right"></i></ALink>
                                    </Reveal>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-sm-8 mb-4">
                            {
                                loading ?
                                    <OwlCarousel adClass="owl-theme owl-nav-full" options={ productSlider2 }>
                                        {
                                            [ 1, 2, 3 ].map( ( item ) =>
                                                <div className="product-loading-overlay" key={ 'toy-skel-' + item }></div>
                                            )
                                        }
                                    </OwlCarousel>
                                    :
                                    <OwlCarousel adClass="owl-theme owl-nav-full" options={ productSlider2 }>
                                        {
                                            toys && toys.map( ( item, index ) =>
                                                <ProductNine
                                                    product={ item }
                                                    key={ `toy-product ${ index }` }
                                                />
                                            )
                                        }
                                    </OwlCarousel>
                            }
                        </div>
                    </div>
                </section>
            </Reveal>

            <Reveal keyframes={ fadeIn } duration={ 1200 } triggerOnce>
                <section className="product-wrapper mt-5">
                    <h2 className="title title-underline title-line with-link">
                        <span>Eat &amp; Foods For Baby</span><ALink href={ { pathname: "/shop", query: { category: "foods-for-baby" } } }>View All<i className="d-icon-arrow-right"></i></ALink>
                    </h2>
                    <div className="row">
                        <div className="col-lg-3 col-sm-4 mb-8">
                            <div className="banner banner3 banner-fixed overlay-dark" style={ { backgroundImage: "url(images/home/banners/7.jpg)", backgroundColor: "#e4f5ff" } }>
                                <div className="banner-content">
                                    <Reveal keyframes={ fadeIn } delay={ 300 } duration={ 1200 } triggerOnce>
                                        <h4 className="banner-subtitle text-uppercase mb-1">New Collection</h4>
                                        <h3 className="banner-title ls-m font-weight-bold">Nutritious
                                        <br />An Infant's Food
                                    </h3>
                                        <ALink href={ { pathname: "/shop", query: { category: "foods-for-baby" } } } className="btn btn-link btn-underline">Shop now<i className="d-icon-arrow-right"></i></ALink>
                                    </Reveal>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-sm-8 mb-4">
                            {
                                loading ?
                                    <OwlCarousel adClass="owl-theme owl-nav-full" options={ productSlider2 }>
                                        {
                                            [ 1, 2, 3 ].map( ( item ) =>
                                                <div className="product-loading-overlay" key={ 'food-skel-' + item }></div>
                                            )
                                        }
                                    </OwlCarousel>
                                    :
                                    <OwlCarousel adClass="owl-theme owl-nav-full" options={ productSlider2 }>
                                        {
                                            foods && foods.map( ( item, index ) =>
                                                <ProductNine
                                                    product={ item }
                                                    key={ `food-product ${ index }` }
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

export default React.memo( ProductCollection );
