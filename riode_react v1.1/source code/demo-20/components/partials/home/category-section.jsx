import React from 'react';
import Reveal from "react-awesome-reveal";

import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { fadeIn } from '~/utils/data/keyframes';
import { mainSlider6 } from '~/utils/data/carousel';

function CategorySection() {
    return (
        <Reveal keyframes={ fadeIn } delay={ 300 } duration={ 1200 } triggerOnce>
            <section className="category-section pr-2 pl-2 pt-1">
                <OwlCarousel adClass="owl-theme owl-drag" options={ mainSlider6 }>
                    <div className="category category-badge category-absolute overlay-zoom">
                        <Reveal keyframes={ fadeIn } delay={ 300 } duration={ 1200 } triggerOnce>
                            <figure className="category-media" style={ { backgroundColor: "#c4cbd1" } }>
                                <img
                                    src="./images/home/categories/3.jpg"
                                    alt="category banner"
                                    width="auto"
                                    height={ 451 }
                                />
                            </figure>

                            <div className="category-content">
                                <h4 className="category-name">Shop Dresses</h4>
                                <ALink className="btn btn-primary btn-block" href={ { pathname: '/shop', query: { category: 'dresses' } } }>Shop Now</ALink>
                            </div>
                        </Reveal>
                    </div>

                    <div className="category category-badge category-absolute overlay-zoom">
                        <Reveal keyframes={ fadeIn } delay={ 400 } duration={ 1200 } triggerOnce>
                            <figure className="category-media" style={ { backgroundColor: "#c4cbd1" } }>
                                <img
                                    src="./images/home/categories/4.jpg"
                                    alt="category banner"
                                    width="auto"
                                    height={ 451 }
                                />
                            </figure>

                            <div className="category-content">
                                <h4 className="category-name">Shop Shirts</h4>
                                <ALink className="btn btn-primary btn-block" href={ { pathname: '/shop', query: { category: 'shirts' } } }>Shop Now</ALink>
                            </div>
                        </Reveal>
                    </div>

                    <div className="category category-badge category-absolute overlay-zoom">
                        <Reveal keyframes={ fadeIn } delay={ 500 } duration={ 1200 } triggerOnce>
                            <figure className="category-media" style={ { backgroundColor: "#c4cbd1" } }>
                                <img
                                    src="./images/home/categories/5.jpg"
                                    alt="category banner"
                                    width="auto"
                                    height={ 451 }
                                />
                            </figure>

                            <div className="category-content">
                                <h4 className="category-name">Shop Jackets</h4>
                                <ALink className="btn btn-primary btn-block" href={ { pathname: '/shop', query: { category: 'jackets' } } }>Shop Now</ALink>
                            </div>
                        </Reveal>
                    </div>
                </OwlCarousel>
            </section>
        </Reveal>
    )
}

export default React.memo( CategorySection );