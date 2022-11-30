import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/custom-link';

import { fadeInRightShorter, fadeIn, fadeInLeftShorter } from '~/utils/data/keyframes';

function CtaSection( { posts } ) {
    return (
        <section className="container mt-10">
            <div className="row">
                <div className="col-lg-8 mb-6">
                    {
                        posts ?
                            <Reveal keyframes={ fadeInRightShorter } delay={ 200 } triggerOnce>
                                <h2 className="title title-simple text-left">What we do</h2>
                                <div className="post post-list overlay-dark">
                                    <figure className="post-media">
                                        <ALink href={ `/blog/single/${ posts[ 15 ].slug }` }>
                                            <LazyLoadImage
                                                effect="opacity"
                                                src={ process.env.NEXT_PUBLIC_ASSET_URI + posts[ 15 ].large_picture[ 0 ].url }
                                                width="380"
                                                height="350"
                                                alt="post"
                                            />
                                        </ALink>
                                    </figure>
                                    <div className="post-details text-center">
                                        <Reveal keyframes={ fadeIn } triggerOnce>
                                            <h4 className="post-title text-dark"><ALink href={ `/blog/single/${ posts[ 15 ].slug }` }>{ posts[ 15 ].title }</ALink></h4>
                                            <p className="post-content text-grey">{ posts[ 15 ].content }</p>
                                            <ALink href={ `/blog/single/${ posts[ 15 ].slug }` } className="btn btn-dark btn-icon-right">Read More<i
                                                className="d-icon-arrow-right"></i></ALink>
                                        </Reveal>
                                    </div>
                                </div>
                            </Reveal>
                            : ''
                    }
                </div>

                <div className="col-lg-4 mb-6">
                    <Reveal keyframes={ fadeInLeftShorter } delay={ 200 } triggerOnce>
                        <h2 className="title title-simple text-left">Contact Us</h2>
                        <div className="banner banner-fixed banner-cta" style={ { backgroundColor: "#ed711b" } }>
                            <figure>
                                <LazyLoadImage effect="opacity" src="./images/home/banners/2.jpg" alt="banner" width="380" height="350" />
                            </figure>
                            <div className="banner-content w-100 x-50 y-50 text-center">
                                <Reveal keyframes={ fadeIn } triggerOnce>
                                    <h3 className="banner-title font-weight-normal text-uppercase text-white">Subscribe
                                to our <strong>Newsletter</strong></h3>
                                    <p className="text-white">Start Shopping Right Now</p>
                                    <form action="#" className="input-wrapper">
                                        <input type="email" className="form-control text-center text-white mb-4"
                                            name="email" id="email" placeholder="Email address here..." required />
                                        <button className="btn btn-solid btn-icon-right btn-white" type="submit">subscribe<i
                                            className="d-icon-arrow-right ml-1"></i></button>
                                    </form>
                                </Reveal>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}

export default React.memo( CtaSection );