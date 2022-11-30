import React, { useEffect } from 'react';
import Reveal from 'react-awesome-reveal';

import ALink from '~/components/features/custom-link';

import { parallaxHandler } from '~/utils';
import { fadeIn, blurIn } from '~/utils/data/keyframes';

function CtaSection () {
    useEffect( () => {
        window.addEventListener( 'scroll', parallaxHandler, true );

        return () => {
            window.removeEventListener( 'scroll', parallaxHandler, true );
        }
    }, [] )

    return (
        <section className="banner parallax" data-option="{'speed': 2}" style={ { backgroundImage: `url(./images/home/parallax.jpg)`, backgroundColor: "#1d1e20" } }>
            <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1200 } triggerOnce>
                <div className="container">
                    <Reveal keyframes={ blurIn } delay={ 200 } duration={ 1200 } triggerOnce>
                        <div className="banner-content text-center">
                            <h4 className="banner-subtitle mb-2 text-primary font-weight-bold text-uppercase">Today’s special</h4>

                            <h3 className="banner-title mb-2 text-white font-weight-bolder ls-m">Fashion Collection</h3>

                            <p className="text-white font-primary ls-normal mb-6">Free shipping on clearance orders of $75 or more</p>

                            <ALink href="/shop" className="btn btn-primary btn-lg">Discover Now <i className="d-icon-arrow-right"></i></ALink>
                        </div>
                    </Reveal>
                </div>
            </Reveal>
        </section>
    )
}

export default React.memo( CtaSection );