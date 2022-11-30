import React from 'react';
import Reveal from 'react-awesome-reveal';

import { fadeIn } from '~/utils/data/keyframes';

import ALink from '~/components/features/custom-link';

export default function PromoSection( props ) {
    return (
        <section className="mt-10">
            <div className="banner banner-cta2"
                style={ { backgroundImage: `url(./images/home/banners/2.jpg)`, backgroundColor: "#666563" } }>
                <div className="container">
                    <Reveal keyframes={ fadeIn } triggerOnce>
                        <div className="banner-content text-center">
                            <h4 className="banner-subtitle font-weight-bold ls-m mb-3 text-uppercase text-white">Best
                            For Less</h4>
                            <h3
                                className="banner-title font-secondary mb-10 font-weight-bold text-uppercase text-white">
                                Modern Furniture &amp; design</h3>
                            <ALink href="/shop" className="btn btn-outline btn-white ls-m font-weight-normal">Discover now</ALink>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}