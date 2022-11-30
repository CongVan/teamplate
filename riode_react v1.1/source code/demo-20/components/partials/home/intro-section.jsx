import React from 'react';
import Reveal from "react-awesome-reveal";

// import Custom Components
import ALink from '~/components/features/custom-link';
import { fadeIn } from '~/utils/data/keyframes';

function IntroSection() {
    return (
        <Reveal keyframes={ fadeIn } delay={ 300 } duration={ 1200 } triggerOnce>
            <div className="container">
                <div className="row gutter-md category-grid">
                    <div className="height-x2 w-2">
                        <div className="banner boxed boxed-center banner-fixed overlay-zoom">
                            <figure className="banner-img">
                                <img
                                    src="./images/home/banner/1.jpg"
                                    alt="Banner Image"
                                    width={ 580 }
                                    height={ 580 }
                                    style={ { backgroundColor: "#1E8EF2" } }
                                />
                            </figure>
                            <ALink href={ { pathname: '/shop', query: { category: 'new-arrivals' } } }>
                                <div className="banner-content x-50 y-50">
                                    <span className="banner-subtitle">New Arrivals</span>
                                    <h3 className="banner-title text-uppercase">Fashion 2021</h3>
                                </div>
                            </ALink>
                        </div>
                    </div>
                    <div className="height-x1 w-1">
                        <div className="category category-light category-absolute overlay-zoom">
                            <figure className="category-media">
                                <img
                                    src="./images/home/categories/1.jpg"
                                    alt="Banner Image"
                                    width={ 280 }
                                    height={ 280 }
                                    style={ { backgroundColor: "#B6CBCC" } }
                                />
                            </figure>
                            <div className="category-content">
                                <h4 className="category-name"><ALink href={ { pathname: '/shop', query: { category: 'accessories' } } }>Accessories</ALink></h4>
                            </div>
                        </div>
                    </div>
                    <div className="height-x1 w-1">
                        <div className="category category-light category-absolute overlay-zoom">
                            <figure className="category-media">
                                <img
                                    src="./images/home/categories/2.jpg"
                                    alt="Banner Image"
                                    width={ 280 }
                                    height={ 280 }
                                    style={ { backgroundColor: "#DED2BA" } }
                                />
                            </figure>
                            <div className="category-content">
                                <h4 className="category-name">
                                    <ALink href={ { pathname: '/shop', query: { category: 'footwear' } } }>Footwear</ALink>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="height-x1 w-2">
                        <div className="banner boxed boxed-center banner-fixed banner2 overlay-zoom">
                            <figure className="category-media">
                                <img
                                    src="./images/home/banner/2.jpg"
                                    alt="Banner Image"
                                    width={ 579 }
                                    height={ 280 }
                                    style={ { backgroundColor: "#FEC8C6" } }
                                />
                            </figure>
                            <ALink href={ { pathname: '/shop', query: { category: 'brand-sale' } } }>
                                <div className="banner-content x-50">
                                    <span className="banner-subtitle">Brand Sale</span>
                                    <h3 className="banner-title text-uppercase">Up To 30% Off</h3>
                                </div>
                            </ALink>
                        </div>
                    </div>
                </div>
            </div>
        </Reveal>
    )
}

export default React.memo( IntroSection );