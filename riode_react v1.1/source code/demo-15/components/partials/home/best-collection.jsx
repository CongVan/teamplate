import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';
import ProductFive from '~/components/features/product/product-five';

import { productSlider, categorySlider } from '~/utils/data/carousel';
import { fadeIn, fadeInUpShorter } from '~/utils/data/keyframes';

function BestCollection( props ) {
    const { products, loading } = props;

    return (
        <>
            <Reveal keyframes={ fadeIn } delay={ 300 } duration={ 1200 } triggerOnce>
                <section className="product-wrapper container pt-7 mt-10">
                    <h2 className="title title-simple text-center">Best Sellers</h2>

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
                                        />
                                    )
                                }
                            </OwlCarousel>
                    }
                </section>
            </Reveal>

            <section className="container pt-3 mt-10 categories">
                <h2 className="title title-simple text-center">Categories</h2>
                <OwlCarousel adClass="owl-theme owl-demo-dot" options={ categorySlider }>
                    <Reveal keyframes={ fadeInUpShorter } delay={ 700 } triggerOnce>
                        <div className="category category-absolute category-classic">
                            <ALink href={ { pathname: '/shop', query: { category: 'for-women-s' } } }>
                                <figure className="category-media" style={ { backgroundColor: "#dce1e5" } }>
                                    <LazyLoadImage src="./images/home/categories/1.jpg" alt="category" width="260"
                                        height="228" />
                                </figure>
                            </ALink>
                            <div className="category-content">
                                <h4 className="category-name">Women's</h4>
                                <span className="category-count">
                                    5 Products
                                </span>
                            </div>
                        </div>
                    </Reveal>
                    <Reveal keyframes={ fadeInUpShorter } delay={ 500 } triggerOnce>
                        <div className="category category-absolute category-classic">
                            <ALink href={ { pathname: '/shop', query: { category: 'watches' } } }>
                                <figure className="category-media" style={ { backgroundColor: "#e6e4e7" } }>
                                    <LazyLoadImage src="./images/home/categories/2.jpg" alt="category" width="260"
                                        height="228" />
                                </figure>
                            </ALink>
                            <div className="category-content">
                                <h4 className="category-name">Watches</h4>
                                <span className="category-count">
                                    7 Products
                                </span>
                            </div>
                        </div>
                    </Reveal>
                    <Reveal keyframes={ fadeInUpShorter } delay={ 300 } triggerOnce>
                        <div className="category category-absolute category-classic">
                            <ALink href={ { pathname: '/shop', query: { category: 'for-men-s' } } }>
                                <figure className="category-media" style={ { backgroundColor: "#e8e9eb" } }>
                                    <LazyLoadImage src="./images/home/categories/3.jpg" alt="category" width="260"
                                        height="228" />
                                </figure>
                            </ALink>
                            <div className="category-content">
                                <h4 className="category-name">Men's
                                </h4>
                                <span className="category-count">
                                    10 Products
                                </span>
                            </div>
                        </div>
                    </Reveal>
                    <Reveal keyframes={ fadeInUpShorter } delay={ 300 } triggerOnce>
                        <div className="category category-absolute category-classic">
                            <ALink href={ { pathname: '/shop', query: { category: 'sporting-goods' } } }>
                                <figure className="category-media" style={ { backgroundColor: "#d3d4d4" } }>
                                    <LazyLoadImage src="./images/home/categories/4.jpg" alt="category" width="260"
                                        height="228" />
                                </figure>
                            </ALink>
                            <div className="category-content">
                                <h4 className="category-name">Sporting Goods</h4>
                                <span className="category-count">
                                    3 Products
                                </span>
                            </div>
                        </div>
                    </Reveal>
                </OwlCarousel>
            </section>
        </>
    )
}

export default React.memo( BestCollection );
