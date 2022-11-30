import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { categorySlider } from '~/utils/data/carousel';

function CategorySection () {
    return (
        <section className="category-section bg-primary">
            <div className="shape-divider">
                <div className="shape shape6">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 58.416 100 2.377" enableBackground="new 0 58.416 100 2.377">
                        <path fill="#fff" d="M0,58.529c0,0,24.974,2.082,49.96,2.082c25.013,0,50.04-2.082,50.04-2.082V39.388H0V58.529z"></path>
                    </svg>
                </div>
                <div className="shape shape7">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 39.281 100 2.406" enableBackground="new 0 39.281 100 2.406">
                        <path fill="#fafafa" d="M100,41.471c0,0-24.975-2.083-49.96-2.083C25.026,39.388,0,41.471,0,41.471v19.14h100V41.471z">
                        </path>
                    </svg>
                </div>
            </div>
            <div className="title-wrapper title-white">
                <div className="container">
                    <h2 className="title">Browse Our Categories</h2>
                    <span className="title-info">Departments</span>
                </div>
            </div>
            <div className="container text-center">
                <OwlCarousel adClass="owl-theme owl-nav-fade mb-6" options={ categorySlider }>
                    <div className="category category-classic">
                        <figure className="category-media">
                            <ALink href={ { pathname: "/shop", query: { category: "personal-care" } } }>
                                <LazyLoadImage
                                    src="images/home/category/1.jpg"
                                    alt="category"
                                    width="280"
                                    height="175"
                                />
                            </ALink>
                        </figure>
                        <ALink href={ { pathname: "/shop", query: { category: "personal-care" } } }>
                            <div className="category-content">
                                <h4 className="category-name">Personal Care</h4>
                                <span className="category-count">6 Products</span>
                            </div>
                        </ALink>
                    </div>
                    <div className="category category-classic">
                        <figure className="category-media">
                            <ALink href={ { pathname: "/shop", query: { category: "medicine-and-health" } } }>
                                <LazyLoadImage
                                    src="images/home/category/2.jpg"
                                    alt="category"
                                    width="280"
                                    height="175"
                                />
                            </ALink>
                        </figure>
                        <ALink href={ { pathname: "/shop", query: { category: "medicine-and-health" } } }>
                            <div className="category-content">
                                <h4 className="category-name">Medicine &amp; Health</h4>
                                <span className="category-count">1 Product</span>
                            </div>
                        </ALink>
                    </div>
                    <div className="category category-classic">
                        <figure className="category-media">
                            <ALink href={ { pathname: "/shop", query: { category: "medical-facilities" } } }>
                                <LazyLoadImage
                                    src="images/home/category/3.jpg"
                                    alt="category"
                                    width="280"
                                    height="175"
                                />
                            </ALink>
                        </figure>
                        <ALink href={ { pathname: "/shop", query: { category: "medical-facilities" } } }>
                            <div className="category-content">
                                <h4 className="category-name">Medical Facilities</h4>
                                <span className="category-count">3 Products</span>
                            </div>
                        </ALink>
                    </div>
                    <div className="category category-classic">
                        <figure className="category-media">
                            <ALink href={ { pathname: "/shop", query: { category: "medical-equipment" } } }>
                                <LazyLoadImage
                                    src="images/home/category/4.jpg"
                                    alt="category"
                                    width="280"
                                    height="175"
                                />
                            </ALink>
                        </figure>
                        <ALink href={ { pathname: "/shop", query: { category: "medical-equipment" } } }>
                            <div className="category-content">
                                <h4 className="category-name">Medical Equipment</h4>
                                <span className="category-count">2 Products</span>
                            </div>
                        </ALink>
                    </div>
                </OwlCarousel>
                <ALink href="/shop" className="btn btn-rounded btn-dark">View All Categories</ALink>
            </div>
        </section>
    )
}

export default React.memo( CategorySection );