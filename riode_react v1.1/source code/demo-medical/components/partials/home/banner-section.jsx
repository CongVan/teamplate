import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import Custom Components
import ALink from '~/components/features/custom-link';

import { fadeInRightShorter } from '~/utils/data/keyframes';

function BannerSection ( props ) {
    return (
        <section className="banner-section" style={ { backgroundImage: "url(images/home/banner/bg.jpg)", backgroundColor: "#f8f8f8" } }>
            <div className="shape-divider">
                <div className="shape shape3">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 52.125 100 9.688" enableBackground="new 0 52.125 100 9.688">
                        <path fill="#231F20" d="M100,61.473c0,0-37.872-6.842-55.953-7.594C21.224,52.932,0,60.092,0,60.092V38.528h100V61.473z">
                        </path>
                    </svg>
                </div>
                <div className="shape shape4">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 56.375 100 8.625" enableBackground="new 0 56.375 100 8.625">
                        <path fill="#ffffff" d="M0,60.203c0,0,22.964-3.885,33.646-3.59c10.682,0.293,19.515,0.594,32.812,3.227 C79.756,62.471,100,64.68,100,64.68V35.32H0V60.203z"></path>
                    </svg>
                </div>
                <div className="shape shape5">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 38.617 100 8.499" enableBackground="new 0 38.617 100 8.499">
                        <path fill="#fff" d="M100,43.26c0,0-22.965,3.885-33.646,3.591s-19.515-0.595-32.812-3.227C20.245,40.993,0,38.784,0,38.784 v22.433h100V43.26z"></path>
                    </svg>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="banner-content">
                            <Reveal keyframes={ fadeInRightShorter } delay={ 400 } duration={ 1200 } triggerOnce>
                                <>
                                    <span className="banner-info text-uppercase"><span>Best Seller</span></span>
                                    <h3 className="banner-title font-weight-bold mb-5">Trend Of Nowadays Medical Mask</h3>
                                    <p className="mb-8">Lorem ipsum dolor sit amet, consectetur adipisicing dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                    <ALink href="/shop" className="btn btn-rounded btn-primary mb-4">Shop now</ALink>
                                </>
                            </Reveal>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <figure className="banner-image1">
                            <LazyLoadImage
                                src="images/home/banner/1.jpg"
                                alt="banner"
                                width="501"
                                height="500"
                                effect="opacity"
                            />
                        </figure>
                        <figure className="banner-image2 y-50">
                            <LazyLoadImage
                                src="images/home/banner/2.jpg"
                                alt="banner"
                                width="380"
                                height="381"
                                effect="opacity"
                            />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default React.memo( BannerSection );