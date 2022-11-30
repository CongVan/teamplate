import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import OwlCarousel from '~/components/features/owl-carousel';

import { brandSlider } from '~/utils/data/carousel';
import { fadeIn } from '~/utils/data/keyframes';

function BrandSection () {
    return (
        <>
            <Reveal keyframes={ fadeIn } duration={ 1200 }>
                <h2 className="title">Featured Brands</h2>
            </Reveal>
            <Reveal keyframes={ fadeIn } duration={ 1200 }>
                <div className="brands-wrapper bg-white pl-md-4 pr-md-4 mb-10">
                    <OwlCarousel adClass="owl-theme owl-nav-inner" options={ brandSlider }>
                        <figure>
                            <LazyLoadImage
                                src="images/home/brand/1.jpg"
                                alt="Brand"
                                width="213"
                                height="100"
                            />
                        </figure>
                        <figure>
                            <LazyLoadImage
                                src="images/home/brand/2.jpg"
                                alt="Brand"
                                width="213"
                                height="100"
                            />
                        </figure>
                        <figure>
                            <LazyLoadImage
                                src="images/home/brand/3.jpg"
                                alt="Brand"
                                width="213"
                                height="100"
                            />
                        </figure>
                        <figure>
                            <LazyLoadImage
                                src="images/home/brand/4.jpg"
                                alt="Brand"
                                width="213"
                                height="100"
                            />
                        </figure>
                        <figure>
                            <LazyLoadImage
                                src="images/home/brand/5.jpg"
                                alt="Brand"
                                width="213"
                                height="100"
                            />
                        </figure>
                        <figure>
                            <LazyLoadImage
                                src="images/home/brand/6.jpg"
                                alt="Brand"
                                width="213"
                                height="100"
                            />
                        </figure>
                    </OwlCarousel>
                </div>
            </Reveal>
        </>
    )
}

export default React.memo( BrandSection );