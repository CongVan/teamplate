import React from 'react';
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/custom-link';

import { fadeInDownShorter, fadeInLeftShorter, fadeInUpShorter, fadeInRightShorter } from '~/utils/data/keyframes';

function CategorySection() {
    return (
        <section className="category-section masonry-section creative-grid-section mt-10 pt-md-2">
            <div className="title-wrapper text-center">
                <h2 className="title title-simple mt-4">New Arrivals</h2>
                <p>Summer 2021</p>
            </div>

            <div className="row grid gutter-sm">
                <div className="grid-item height-x2">
                    <Reveal keyframes={fadeInDownShorter} delay={300} duration={1500} triggerOnce className="h-100">
                        <div className="category category-banner category-absolute text-white overlay-light">
                            <ALink href="#">
                                <figure className="category-media">
                                    <LazyLoadImage
                                        src="./images/home/categories/1.jpg"
                                        alt="category"
                                        width="585"
                                        height="397"
                                        effect="opacity"
                                    />
                                </figure>
                            </ALink>

                            <div className="category-content">
                                <h4 className="category-name">Comfort Dresses</h4>
                                <span className="category-count">
                                    <span>9</span> Products
                                        </span>
                                <ALink href="/shop" className="btn btn-underline btn-link">Shop Now</ALink>
                            </div>
                        </div>
                    </Reveal>
                </div>

                <div className="grid-item height-x1">
                    <Reveal keyframes={fadeInLeftShorter} delay={300} duration={1500} className="h-100" triggerOnce>
                        <div className="category category-banner category-absolute text-white  overlay-dark" >
                            <ALink href="#">
                                <figure className="category-media">
                                    <LazyLoadImage
                                        src="./images/home/categories/2.jpg"
                                        alt="category"
                                        width="585"
                                        height="205"
                                        effect="opacity"
                                    />
                                </figure>
                            </ALink>

                            <div className="category-content">
                                <h4 className="category-name">Swimming &amp;<br /> Accessories</h4>
                                <span className="category-count">
                                    <span>25</span> Products
                                        </span>
                                <ALink href="/shop" className="btn btn-underline btn-link">Shop Now</ALink>
                            </div>
                        </div>
                    </Reveal>
                </div>

                <div className="grid-item height-x2">
                    <Reveal keyframes={fadeInUpShorter} delay={300} duration={1500} className="h-100" triggerOnce>
                        <div className="category category-banner category-absolute overlay-light">
                            <ALink href="#">
                                <figure className="category-media">
                                    <LazyLoadImage
                                        src="./images/home/categories/3.jpg"
                                        alt="category"
                                        width="585"
                                        height="397"
                                        effect="opacity"
                                    />
                                </figure>
                            </ALink>

                            <div className="category-content">
                                <h4 className="category-name">Denim Essentials</h4>
                                <span className="category-count">
                                    <span>8</span> Products
                                        </span>
                                <ALink href="/shop" className="btn btn-underline btn-link">Shop Now</ALink>
                            </div>
                        </div>
                    </Reveal>
                </div>

                <div className="grid-item height-x1">
                    <Reveal keyframes={fadeInRightShorter} delay={300} duration={1500} className="h-100" triggerOnce>
                        <div className="category category-banner category-absolute text-white overlay-dark">
                            <ALink href="#">
                                <figure className="category-media">
                                    <LazyLoadImage
                                        src="./images/home/categories/4.jpg"
                                        alt="category"
                                        width="585"
                                        height="205"
                                        effect="opacity"
                                    />
                                </figure>
                            </ALink>

                            <div className="category-content">
                                <h4 className="category-name">Shop Footwear</h4>
                                <span className="category-count">
                                    <span>17</span> Products
                                        </span>
                                <ALink href="/shop" className="btn btn-underline btn-link">Shop Now</ALink>
                            </div>
                        </div>
                    </Reveal>
                </div>

                <div className="col-1 grid-space"></div>
            </div>
        </section>
    )
}

export default React.memo(CategorySection);