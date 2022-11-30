import React, { useEffect } from 'react';
import Reveal from "react-awesome-reveal";

import ALink from '~/components/features/custom-link';

import { parallaxHandler } from '~/utils';
import { fadeInRightShorter, fadeInUpShorter } from '~/utils/data/keyframes';

function ParallaxSection () {
    useEffect( () => {
        window.addEventListener( 'scroll', parallaxHandler, true );

        return () => {
            window.removeEventListener( 'scroll', parallaxHandler, true );
        }
    }, [] )

    return (
        <div className="parallax-section p-relative parallax" style={ { backgroundColor: "#D7E9E9", backgroundImage: "url(images/home/banner/5.jpg)" } } data-option="{'speed':2.5}">
            <div className="shape-divider2">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 980.1 1920 69" enableBackground="new 0 980.1 1920 69">
                    <path fill="#FFFFFF" d="M0,1001.6c0,0,109.4-23,276.5-17.3c188.2,5.8,289.9,55.7,508.8,57.6c186.2,3.8,268.8-44.2,508.8-57.6
                        c151.7-7.7,305.3,44.2,424.3,59.5c121,15.4,203.5-7.7,203.5-7.7l-1-56.1H-1L0,1001.6z">
                    </path>
                </svg>
            </div>
            <div className="banner">
                <div className="container">
                    <div className="banner-content text-left pl-4 pr-4 ml-lg-4 y-50">
                        <Reveal keyframes={ fadeInUpShorter } delay={ 200 } duration={ 1200 } triggerOnce>
                            <h4 className="banner-subtitle text-uppercase text-dark">
                                <strong>2021</strong> Collection
                        </h4>
                        </Reveal>
                        <Reveal keyframes={ fadeInRightShorter } delay={ 1000 } duration={ 1000 } triggerOnce>
                            <h2 className="banner-title ls-l mb-2 font-weight-bold text-dark">
                                Ring set with a jewel</h2>
                        </Reveal>
                        <Reveal keyframes={ fadeInUpShorter } delay={ 1000 } duration={ 1200 } triggerOnce>
                            <p>
                                Get Free Shipping on all order over $99.99
                        </p>
                        </Reveal>
                        <Reveal keyframes={ fadeInUpShorter } delay={ 1800 } duration={ 1000 } triggerOnce>
                            <ALink href="/shop" className="btn btn-dark btn-ellipse ls-m">
                                View Collection</ALink>
                        </Reveal>
                    </div>
                </div>
            </div>
            <div className="shape-divider3">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 38 100 4.6" enableBackground="new 0 38 100 4.6">
                    <path fill="#FFF" d="M100,40.9c0,0-8.7,1.4-16.1,1.2c-11.6-0.2-14.3-2.5-25.9-2.2c-11.5,0.3-12.5,2.6-26.4,2.6
                        c-10.9,0-16.4-3.1-22.7-4s-9,0.3-9,0.3v3.7h100V40.9z"></path>
                </svg>
            </div>
        </div>
    )
}

export default React.memo( ParallaxSection );