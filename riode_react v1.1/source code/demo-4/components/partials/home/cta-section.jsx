import React from 'react';
import Reveal from 'react-awesome-reveal';

import ALink from '~/components/features/custom-link';

import { blurIn } from '~/utils/data/keyframes';

function CtaSection() {
    return (
        <section className="container banner-section mt-10">
            <div className="banner banner-cta banner-radius" style={ { backgroundImage: `url(./images/home/cta.jpg)`, backgroundColor: "#403a38" } }>
                <div className="banner-content d-flex flex-column align-items-center">
                    <Reveal keyframes={ blurIn } delay={ 300 } triggerOnce>
                        <h4 className="banner-subtitle font-weight-normal text-uppercase text-white lh-1 ls-normal">Up To 15% Discount</h4>
                        <h3 className="banner-title d-inline-block text-center font-weight-bold text-uppercase text-white ls-l">
                            For Fitness Collection</h3>
                        <ALink href="/shop" className="btn btn-primary btn-rounded">shop now<i className="d-icon-arrow-right"></i></ALink>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}

export default React.memo( CtaSection );