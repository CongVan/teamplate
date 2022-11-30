import React from 'react';
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { fadeIn } from '~/utils/data/keyframes';
import { categorySlider } from '~/utils/data/carousel';

function CategorySection() {
    return (
        <Reveal keyframes={ fadeIn } delay={ 300 } duration={ 1200 } triggerOnce>
            <section className="pt-6 mt-10">
                <div className="container">
                    <h2 className="title title-simple">Popular Categories</h2>

                    <OwlCarousel adClass="owl-theme" options={ categorySlider }>
                        <div className="category category-absolute category-classic">
                            <ALink href={ { pathname: '/shop', query: { category: 'men-s-collection' } } }>
                                <figure className="category-media">
                                    <LazyLoadImage
                                        src="./images/home/categories/1.jpg"
                                        alt="Intro Slider"
                                        effect="opacity; transform"
                                        width={ 280 }
                                        height={ 280 }
                                    />
                                </figure>

                                <div className="category-content">
                                    <h4 className="category-name">Men's Collection</h4>
                                    <span className="category-count">6 Products</span>
                                </div>
                            </ALink>
                        </div>

                        <div className="category category-absolute category-classic">
                            <ALink href={ { pathname: '/shop', query: { category: 'accessories' } } }>
                                <figure className="category-media">
                                    <LazyLoadImage
                                        src="./images/home/categories/2.jpg"
                                        alt="Intro Slider"
                                        effect="opacity; transform"
                                        width={ 280 }
                                        height={ 280 }
                                    />
                                </figure>

                                <div className="category-content">
                                    <h4 className="category-name">Accessories</h4>
                                    <span className="category-count">7 Products</span>
                                </div>
                            </ALink>
                        </div>

                        <div className="category category-absolute category-classic">
                            <ALink href={ { pathname: '/shop', query: { category: 'for-women-s' } } }>
                                <figure className="category-media">
                                    <LazyLoadImage
                                        src="./images/home/categories/3.jpg"
                                        alt="Intro Slider"
                                        effect="opacity; transform"
                                        width={ 280 }
                                        height={ 280 }
                                    />
                                </figure>

                                <div className="category-content">
                                    <h4 className="category-name">For Women's</h4>
                                    <span className="category-count">1 Products</span>
                                </div>
                            </ALink>
                        </div>

                        <div className="category category-absolute category-classic">
                            <ALink href={ { pathname: '/shop', query: { category: 'top-fashional' } } }>
                                <figure className="category-media">
                                    <LazyLoadImage
                                        src="./images/home/categories/4.jpg"
                                        alt="Intro Slider"
                                        effect="opacity; transform"
                                        width={ 280 }
                                        height={ 280 }
                                    />
                                </figure>

                                <div className="category-content">
                                    <h4 className="category-name">Top Fashional</h4>
                                    <span className="category-count">5 Products</span>
                                </div>
                            </ALink>
                        </div>
                    </OwlCarousel>
                </div>
            </section>
        </Reveal >
    )
}

export default React.memo( CategorySection );