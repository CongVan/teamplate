import React from 'react';
import Reveal from "react-awesome-reveal";

import ALink from '~/components/features/custom-link';

import { fadeIn } from '~/utils/data/keyframes';

function CategorySection() {
    return (
        <section className="row gutter-no intro-banners">
            <div className="col-lg-3 col-xs-6">
                <div className="category category-new category-absolute category-banner overlay-zoom"
                    style={ { backgroundColor: "#a6a6a6" } }>
                    <ALink href="/shop">
                        <figure className="category-media">
                            <img src="./images/home/banner/2.jpg" alt="banner" width="480" height="328" />
                        </figure>
                    </ALink>
                    <div className="category-content y-50">
                        <Reveal keyframes={ fadeIn } triggerOnce>
                            <h4 className="category-name font-weight-bold text-uppercase">New Arrivals</h4>
                            <span className="category-count text-uppercase">
                                <span>16</span> Products
                        </span>
                            <ALink href="/shop" className="btn btn-underline btn-link">Shop Now<i
                                className="d-icon-arrow-right"></i></ALink>
                        </Reveal>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-xs-6 order-lg-first">
                <div className="intro-banner banner banner-fixed overlay-zoom" style={ { backgroundColor: "#3b3f42" } }>
                    <figure>
                        <img src="./images/home/banner/1.jpg" alt="banner" width="480" height="328" />
                    </figure>
                    <div className="banner-content y-50 text-left">
                        <Reveal keyframes={ fadeIn } triggerOnce>
                            <h4 className="banner-subtitle mb-2 text-primary text-uppercase">
                                Footwear
                        </h4>
                            <h3 className="banner-title mb-2 ls-m text-white text-uppercase">New Design
                        </h3>
                            <p className="mb-4 ls-m text-white">From $16.00</p>
                            <ALink href="/shop" className="btn btn-md btn-rounded btn-primary">Shop now<i
                                className="d-icon-arrow-right"></i></ALink>
                        </Reveal>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-xs-6">
                <div className="intro-banner banner banner-fixed overlay-zoom" style={ { backgroundColor: "#181b20" } }>
                    <figure>
                        <img src="./images/home/banner/3.jpg" alt="banner" width="480" height="328" />
                    </figure>
                    <div className="banner-content y-50 text-left">
                        <Reveal keyframes={ fadeIn } triggerOnce>
                            <h4 className="banner-subtitle mb-2 text-primary text-uppercase">
                                Big Sale
                        </h4>
                            <h3 className="banner-title mb-2 ls-m text-white text-uppercase">Mid
                            Season's</h3>
                            <p className="mb-4 ls-m text-white">Up to 70% Off</p>
                            <ALink href="/shop" className="btn btn-md btn-rounded btn-primary">Shop now<i
                                className="d-icon-arrow-right"></i></ALink>
                        </Reveal>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-xs-6">
                <div className="category category-top category-absolute category-banner overlay-zoom"
                    style={ { backgroundColor: "#ceced0" } }>
                    <ALink href="/shop" >
                        <figure className="category-media">
                            <img src="./images/home/banner/4.jpg" alt="banner" width="480" height="328" />
                        </figure>
                    </ALink>
                    <div className="category-content y-50">
                        <Reveal keyframes={ fadeIn } triggerOnce>
                            <h4 className="category-name font-weight-bold text-uppercase">Tops &amp; Jackets</h4>
                            <span className="category-count text-uppercase">
                                <span>16</span> Products
                        </span>
                            <ALink href="/shop" className="btn btn-underline btn-link">Shop Now<i
                                className="d-icon-arrow-right"></i></ALink>
                        </Reveal>
                    </div>
                </div>
            </div >
        </section >
    )
}

export default React.memo( CategorySection );