import React, { useEffect } from 'react';
import Reveal from 'react-awesome-reveal';

import ALink from '~/components/features/custom-link';

import { parallaxHandler } from '~/utils';
import { fadeInLeftShorter } from '~/utils/data/keyframes';

function PromoSection() {
    useEffect( () => {
        window.addEventListener( 'scroll', parallaxHandler, true );

        return () => {
            window.removeEventListener( 'scroll', parallaxHandler, true );
        }
    }, [] )

    return (
        <section className="banner banner-cta parallax mt-10"
            style={ { backgroundColor: "#5d4136", backgroundImage: `url(./images/home/parallax.jpg)` } }
            data-option="{'speed': 3}"
        >
            <div className="container">
                <div className="banner-content d-inline-block">
                    <Reveal keyframes={ fadeInLeftShorter } delay={ 100 } triggerOnce>
                        <h4 className="banner-subtitle mb-1 font-secondary ls-l text-white font-weight-normal">Flash Sale 50% Off</h4>
                    </Reveal>
                    <Reveal keyframes={ fadeInLeftShorter } delay={ 300 } triggerOnce>
                        <h3 className="banner-title mb-5 ls-m text-white font-weight-bolder">Necessaries For Summer Season</h3>
                    </Reveal>
                    <Reveal keyframes={ fadeInLeftShorter } delay={ 200 } triggerOnce>
                        <ALink href="/shop" className="btn btn-outline btn-primary text-white">
                            Shop now<i className="d-icon-arrow-right"></i></ALink>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}

export default React.memo( PromoSection );