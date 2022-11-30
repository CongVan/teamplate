import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/custom-link';
import Countdown from '~/components/features/countdown';
import OwlCarousel from '~/components/features/owl-carousel';

import ProductDeal from '~/components/partials/home/product-deal';

import { productSlider } from '~/utils/data/carousel';
import { fadeIn, fadeInLeftShorter, fadeInRightShorter } from '~/utils/data/keyframes';

function BestCollection ( props ) {
    const { products, loading } = props;

    return (
        <section className="container mt-10 pt-6 mb-10 pb-2">
            <Reveal keyframes={ fadeIn } duration={ 1200 } triggerOnce>
                <div className="banner banner-radius banner-simple mb-10">
                    <div className="banner-content">
                        <h4 className="banner-subtitle font-secondary font-weight-semi-bold text-uppercase ls-m mb-md-0 p-relative">
                            <span className="p-relative">Black Friday Sale!</span>
                        </h4>
                        <h3 className="banner-title font-secondary font-weight-normal text-white text-uppercase mb-6 mb-md-0 font-italic">
                            <span>
                                Pay only for <strong className="mr-10 pr-10">your loving electronics</strong>
                                    Pay only for <strong className="mr-10 pr-10">your loving electronics</strong>
                                    Pay only for <strong className="mr-10 pr-10">your loving electronics</strong>
                            </span>
                        </h3>
                        <ALink href="/shop" className="btn btn-white btn-rounded mr-8 ml-6 ml-md-0 mb-6 mb-md-0">Shop Now<i className="d-icon-arrow-right"></i></ALink>
                    </div>
                </div>
            </Reveal>

            <h2 className="title with-link pt-6">
                Deals Of The Day
                    <Countdown adClass=" d-inline-flex align-items-center font-weight-normal ml-0 ml-md-4 mt-2 mt-md-0 mb-2 mb-md-0 ls-normal text-white flex-wrap bg-primary" type={ 3 } />
                <ALink href="/shop" className="btn btn-dark btn-link btn-underline d-inline-block text-capitalize font-weight-semi-bold ls-normal">More Products<i className="d-icon-arrow-right"></i></ALink>
            </h2>

            {
                loading ?
                    <OwlCarousel adClass="owl-theme owl-nav-inner mb-10 pb-6" options={ productSlider }>
                        {
                            [ 1, 2, 3, 4, 5 ].map( item => (
                                <div className="product-loading-overlay" key={ 'deal-skel-' + item }></div>
                            ) )
                        }
                    </OwlCarousel>
                    :
                    <OwlCarousel adClass="owl-theme owl-nav-inner mb-10 pb-6" options={ productSlider }>
                        {
                            products && products.slice( 1 ).map( ( item, index ) => (
                                <ProductDeal
                                    product={ item }
                                    isStockCount={ true }
                                    key={ `deal-product ${ index }` }
                                />
                            ) )
                        }
                    </OwlCarousel>
            }
            <div className="banner-grid-3cols row cols-lg-3 cols-md-2 cols-1 justify-content-center">
                <Reveal keyframes={ fadeInLeftShorter } duration={ 1000 } triggerOnce>
                    <div className="banner banner-fixed content-middle banner-radius mb-4" style={ { backgroundColor: "#f1f1f1" } }>
                        <figure>
                            <LazyLoadImage
                                src="images/home/banner/1.jpg"
                                alt="Banner"
                                width="447"
                                height="180"
                            />
                        </figure>
                        <div className="banner-content">
                            <h4 className="banner-subtitle text-uppercase text-body font-weight-normal ls-normal">New Arrivals</h4>
                            <h3 className="banner-title font-secondary font-weight-semi-bold text-uppercase ls-m">
                                Ski Clothes Sale<br />
                                <span className="font-weight-normal text-normal">Up to </span>
                                <span className="text-capitalize text-secondary">35% Off</span>
                            </h3>
                            <ALink href="/shop" className="btn btn-dark btn-link btn-underline">Shop Now<i className="d-icon-arrow-right"></i></ALink>
                        </div>
                    </div>
                </Reveal>

                <Reveal keyframes={ fadeIn } duration={ 1200 } triggerOnce>
                    <div className="banner banner-fixed content-middle banner-radius mb-4" style={ { backgroundColor: "#2b2833" } }>
                        <figure>
                            <LazyLoadImage
                                src="images/home/banner/2.jpg"
                                alt="Banner"
                                width="447"
                                height="180"
                            />
                        </figure>
                        <div className="banner-content">
                            <h4 className="banner-subtitle text-white text-uppercase font-weight-normal ls-normal">Best Seller</h4>
                            <h3
                                className="banner-title text-white font-secondary font-weight-semi-bold text-uppercase ls-m">
                                Trending Women's<br />
                                <span className="font-weight-normal text-uppercase">Sunglasses</span>
                            </h3>
                            <ALink href="/shop" className="btn btn-white btn-link btn-underline">Shop Now<i className="d-icon-arrow-right"></i></ALink>
                        </div>
                    </div>
                </Reveal>

                <Reveal keyframes={ fadeInRightShorter } duration={ 1000 } triggerOnce>
                    <div className="banner banner-fixed content-middle banner-radius mb-4" style={ { backgroundColor: "#edecec" } }>
                        <figure>
                            <LazyLoadImage
                                src="images/home/banner/3.jpg"
                                alt="Banner"
                                width="447"
                                height="180"
                            />
                        </figure>
                        <div className="banner-content">
                            <h4 className="banner-subtitle text-uppercase text-body font-weight-normal ls-normal">New Arrivals</h4>
                            <h3 className="banner-title font-secondary font-weight-semi-bold text-uppercase ls-m">
                                New Latest Bag<br />
                                <span className="font-weight-normal text-uppercase">Collection</span>
                            </h3>
                            <ALink href="/shop" className="btn btn-dark btn-link btn-underline">Shop Now<i className="d-icon-arrow-right"></i></ALink>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}

export default React.memo( BestCollection );
