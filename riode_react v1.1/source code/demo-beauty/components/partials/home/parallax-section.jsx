import React, { useEffect } from 'react';
import Reveal from 'react-awesome-reveal';

import ALink from '~/components/features/custom-link';

import { parallaxHandler } from '~/utils';
import { blurIn } from '~/utils/data/keyframes';

function ParallaxSection () {

    useEffect( () => {
        window.addEventListener( 'scroll', parallaxHandler, true );

        return () => {
            window.removeEventListener( 'scroll', parallaxHandler, true );
        }
    }, [] )

    return (
        <section className="banner parallax mt-10" data-option="{'speed': 2.5}" style={ { backgroundColor: "#1d1e20", backgroundImage: "url(./images/home/parallax.jpg)" } }>
            <div className="container">
                <div className="banner-content">
                    <Reveal keyframes={ blurIn } duration={ 1200 } triggerOnce>
                        <>
                            <h4 className="banner-subtitle text-uppercase text-primary slide-animate">
                                Flash Sale 50% Off </h4>
                            <h2 className="banner-title slide-animate font-weight-bold">
                                Cosmetics For Summer Season
                            </h2>
                            <ALink href="/shop" className="btn btn-white btn-icon-right btn-rounded slide-animate">Shop Now<i className="d-icon-arrow-right"></i></ALink>
                        </>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}

export default React.memo( ParallaxSection );