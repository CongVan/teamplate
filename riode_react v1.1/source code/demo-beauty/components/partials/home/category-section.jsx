import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/custom-link';

import { fadeIn } from '~/utils/data/keyframes';

function CategorySection () {
    return (
        <Reveal keyframes={ fadeIn } delay={ 300 } duration={ 1200 } triggerOnce>
            <div className="container pt-4 mt-10"><h2 className="title title-underline text-center mb-7">Popular Categories</h2>
                <div className="row gutter-md category-grid">
                    <div className="height-x1">
                        <div className="category category-banner category-absolute overlay-light text-white" style={ { backgroundColor: "#201614" } }>
                            <ALink href="#">
                                <figure className="category-media">
                                    <LazyLoadImage
                                        src="images/home/categories/1.jpg"
                                        alt="category"
                                        width={ 280 }
                                        height={ 250 }
                                    />
                                </figure>
                            </ALink>
                            <div className="category-content">
                                <h4 className="category-name">Rose Water</h4>
                                <span className="category-count">
                                    <span>3</span> Products
                                </span>
                                <ALink href={ { pathname: "/shop", query: { category: "rose-water" } } } className="btn btn-underline btn-link btn-white lh-1">Shop Now</ALink>
                            </div>
                        </div>
                    </div>
                    <div className="height-x1 w-2">
                        <div className="category category-banner category-absolute overlay-dark" style={ { backgroundColor: "#eee" } }>
                            <ALink href="#">
                                <figure className="category-media">
                                    <LazyLoadImage
                                        src="images/home/categories/2.jpg"
                                        alt="category"
                                        width={ 480 }
                                        height={ 250 }
                                    />
                                </figure>
                            </ALink>
                            <div className="category-content">
                                <h4 className="category-name">Hand Cream</h4>
                                <span className="category-count">
                                    <span>1</span> Products
                                </span>
                                <ALink href={ { pathname: "/shop", query: { category: "hand-cream" } } } className="btn btn-underline btn-link lh-1">Shop Now</ALink>
                            </div>
                        </div>
                    </div>
                    <div className="height-x2">
                        <div className="category category-banner category-absolute overlay-light text-white" style={ { backgroundColor: "#a2a8a6" } }>
                            <ALink href="#">
                                <figure className="category-media">
                                    <LazyLoadImage
                                        src="images/home/categories/3.jpg"
                                        alt="category"
                                        width={ 380 }
                                        height={ 250 }
                                    />
                                </figure>
                            </ALink>
                            <div className="category-content">
                                <h4 className="category-name">Toilet Powder</h4>
                                <span className="category-count">
                                    <span>4</span> Products
                                </span>
                                <ALink href={ { pathname: "/shop", query: { category: "toilet-powder" } } } className="btn btn-underline btn-link btn-white lh-1">Shop Now</ALink>
                            </div>
                        </div>
                    </div>
                    <div className="height-x1 w-2">
                        <div className="category category-banner category-absolute overlay-dark" style={ { backgroundColor: "#deddd9" } }>
                            <ALink href="#">
                                <figure className="category-media">
                                    <LazyLoadImage
                                        src="images/home/categories/4.jpg"
                                        alt="category"
                                        width={ 480 }
                                        height={ 250 }
                                    />
                                </figure>
                            </ALink>
                            <div className="category-content">
                                <h4 className="category-name">Cosmetic Cream</h4>
                                <span className="category-count">
                                    <span>5</span> Products
                                </span>
                                <ALink href={ { pathname: "/shop", query: { category: "cosmetic-cream" } } } className="btn btn-underline btn-link lh-1">Shop Now</ALink>
                            </div>
                        </div>
                    </div>
                    <div className="height-x1">
                        <div className="category category-banner category-absolute category5" style={ { backgroundColor: "#e4eae6" } }>
                            <ALink href="#">
                                <figure className="category-media">
                                    <LazyLoadImage
                                        src="images/home/categories/5.jpg"
                                        alt="category"
                                        width={ 280 }
                                        height={ 250 }
                                    />
                                </figure>
                            </ALink>
                            <div className="banner-content w-100 x-50 y-50 text-center pl-2 pr-2">
                                <h3 className="banner-title text-capitalize font-weight-bold">Our Brands</h3>
                                <p className="mb-0 text-uppercase text-body">
                                    <ALink href="#">New York</ALink> - <ALink href="#">Paris</ALink> - <ALink href="#">Barcelona</ALink><br />
                                    <ALink href="#">Milan</ALink> - <ALink href="#">Rome</ALink> - <ALink href="#">London</ALink> - <ALink href="#">Dubai</ALink><br />
                                    <ALink href="#">Moscow</ALink> - <ALink href="#">Tokyo</ALink> - <ALink href="#">Shanghai</ALink><br />
                                    <ALink href="#">Mumbai</ALink> - <ALink href="#">Melbourne</ALink>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Reveal>
    )
}

export default React.memo( CategorySection );