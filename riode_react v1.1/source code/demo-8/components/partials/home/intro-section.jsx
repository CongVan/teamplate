import React from 'react';
import Reveal from "react-awesome-reveal";

// import Custom Components
import ALink from '~/components/features/custom-link';

import { fadeInUpShorter, fadeInUp, } from '~/utils/data/keyframes';

function IntroSection() {
    return (
        <section className="intro-section">
            <div className="banner banner-fixed" style={ { backgroundColor: "#22252a" } }>
                <figure>
                    <img src="./images/home/banners/intro-banner.jpg" alt="banner" width="1903"
                        height="1010" />
                </figure>
                <div className="banner-content w-100 x-50 y-50 text-center pl-3 pr-3">
                    <Reveal keyframes={ fadeInUpShorter } delay={ 700 } triggerOnce>
                        <h3 className="banner-title font-secondary text-white">Make Yourself at
                        Home</h3>
                    </Reveal>

                    <Reveal keyframes={ fadeInUp } delay={ 1000 } triggerOnce>
                        <p className="mb-10 font-primary text-white">We create <strong
                            className="text-uppercase">High Quailty Products</strong><br />
                        that are used &amp; loved by thousands of customers</p>
                    </Reveal>

                    <Reveal keyframes={ fadeInUp } delay={ 1300 } triggerOnce>
                        <ALink href="/shop" className="btn btn-outline btn-white btn-rounded">Discover Now</ALink>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}

export default React.memo( IntroSection );