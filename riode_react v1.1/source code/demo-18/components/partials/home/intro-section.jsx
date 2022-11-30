import React from 'react';
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import Custom Components
import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { introSlider } from '~/utils/data/carousel';
import { fadeIn } from '~/utils/data/keyframes';

function IntroSection () {
    return (
        <OwlCarousel adClass="intro-slider owl-theme owl-dot-inner owl-dot-grey animation-slider" options={ introSlider }>
            <div className="intro-slide1 banner banner-fixed" style={ { backgroundColor: "#473c3a" } }>
                <figure>
                    <LazyLoadImage
                        src="./images/home/slides/1.jpg"
                        alt="Intro Slider"
                        effect="opacity"
                        width="auto"
                        height={ 449 }
                    />
                </figure>

                <div className="banner-content">
                    <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1200 }>
                        <h3 className="banner-title text-white">Trends 2021</h3>
                    </Reveal>

                    <Reveal keyframes={ fadeIn } delay={ 700 } duration={ 1400 }>
                        <ALink href="/shop" className="btn btn-link btn-underline btn-white btn-underline-visible">Explore now</ALink>
                    </Reveal>
                </div>
            </div>

            <div className="intro-slide2 banner banner-fixed" style={ { backgroundColor: "#4d5154" } }>
                <figure>
                    <LazyLoadImage
                        src="./images/home/slides/2.jpg"
                        alt="Intro Slider"
                        effect="opacity"
                        width="auto"
                        height={ 449 }
                    />
                </figure>

                <div className="banner-content y-50">
                    <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1200 }>
                        <h3 className="banner-title text-white">Shop Watches</h3>
                    </Reveal>

                    <Reveal keyframes={ fadeIn } delay={ 700 } duration={ 1400 }>
                        <ALink href="/shop" className="btn btn-link btn-underline btn-white btn-underline-visible">Explore now</ALink>
                    </Reveal>
                </div>
            </div>
        </OwlCarousel >
    )
}

export default React.memo( IntroSection );