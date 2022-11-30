import React, { useEffect, useRef } from 'react';
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import imagesLoaded from 'imagesloaded';

import ALink from '~/components/features/custom-link';

import { fadeIn } from '~/utils/data/keyframes';

function BannerSection () {
    const ref = useRef( null );

    useEffect( () => {
        ref.current && imagesLoaded( ref.current ).on( 'done', function () {
            isotopeInit();
        } )
    }, [] )

    async function isotopeInit () {
        const Isotope = ( await import( 'isotope-layout' ) ).default;

        new Isotope( ref.current, {
            itemSelector: '.grid-item',
            masonry: {
                columnWidth: ".grid-space"
            }
        } );
    }

    return (
        <div className="banners-group masonry-section mt-8">
            <div className="container">
                <div className="row grid gutter-md" ref={ ref }>
                    <div className="grid-item col-md-6 height-x2">
                        <div className="banner" style={ { backgroundColor: "#e1e1ef" } }>
                            <Reveal className="h-100" keyframes={ fadeIn } delay={ 500 } duration={ 1200 } triggerOnce>
                                <>
                                    <ALink href="#">
                                        <figure>
                                            <LazyLoadImage
                                                src="images/home/banner/1.jpg"
                                                alt="category"
                                                width={ 580 }
                                                height={ 320 }
                                            />
                                        </figure>
                                    </ALink>
                                    <div className="banner-content y-50">
                                        <h4 className="banner-title">Luxury and<br /> elegant ring</h4>
                                        <ALink href="/shop" className="btn btn-underline btn-link">Shop Now <i className="d-icon-arrow-right"></i></ALink>
                                    </div>
                                </>
                            </Reveal>
                        </div>
                    </div>
                    <div className="grid-item col-md-6 height-x1">
                        <div className="banner text-white" style={ { backgroundColor: "#f5f5f5" } }>
                            <Reveal className="h-100" keyframes={ fadeIn } delay={ 500 } duration={ 1200 } triggerOnce>
                                <>
                                    <ALink href="#">
                                        <figure>
                                            <LazyLoadImage
                                                src="images/home/banner/2.jpg"
                                                alt="category"
                                                width={ 580 }
                                                height={ 220 }
                                            />
                                        </figure>
                                    </ALink>
                                    <div className="banner-content y-50">
                                        <h4 className="banner-title"><strong>50% off</strong> select <br />silver ring</h4>
                                        <ALink href="/shop" className="btn btn-underline btn-link">Shop Now <i className="d-icon-arrow-right"></i></ALink>
                                    </div>
                                </>
                            </Reveal>
                        </div>
                    </div>
                    <div className="grid-item col-md-6 height-x2">
                        <div className="banner" style={ { backgroundColor: "#cae0d0" } }>
                            <Reveal className="h-100" keyframes={ fadeIn } delay={ 500 } duration={ 1200 } triggerOnce>
                                <>
                                    <ALink href="#">
                                        <figure>
                                            <LazyLoadImage
                                                src="images/home/banner/4.jpg"
                                                alt="category"
                                                width={ 580 }
                                                height={ 320 }
                                            />
                                        </figure>
                                    </ALink>
                                    <div className="banner-content y-50">
                                        <h4 className="banner-title">New luxury<br /> collection</h4>
                                        <ALink href="/shop" className="btn btn-underline btn-link">Shop Now <i className="d-icon-arrow-right"></i></ALink>
                                    </div>
                                </>
                            </Reveal>
                        </div>
                    </div>
                    <div className="grid-item col-md-6 height-x1">
                        <div className="banner" style={ { backgroundColor: "#f5f0ed" } }>
                            <Reveal className="h-100" keyframes={ fadeIn } delay={ 500 } duration={ 1200 } triggerOnce>
                                <>
                                    <ALink href="#">
                                        <figure>
                                            <LazyLoadImage
                                                src="images/home/banner/3.jpg"
                                                alt="category"
                                                width={ 580 }
                                                height={ 220 }
                                            />
                                        </figure>
                                    </ALink>
                                    <div className="banner-content y-50">
                                        <h4 className="banner-title"><strong>70% off</strong> select <br /> gold clearance</h4>
                                        <ALink href="/shop" className="btn btn-underline btn-link">Shop Now <i className="d-icon-arrow-right"></i></ALink>
                                    </div>
                                </>
                            </Reveal>
                        </div>
                    </div>
                    <div className="col-1 grid-space"></div>
                </div>
            </div>
        </div>
    )
}

export default React.memo( BannerSection );