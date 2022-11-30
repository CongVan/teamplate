import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { fadeInLeftShorter, fadeInRightShorter } from '~/utils/data/keyframes';

function BannerOneSection () {
    return (
        <div className="banner-grid-2cols row cols-md-2 mb-10 pb-2">
            <Reveal keyframes={ fadeInLeftShorter } duration={ 1000 } triggerOnce>
                <div className="banner banner-fixed content-middle banner-radius mb-4" style={ { backgroundColor: "#dedfe0" } }>
                    <figure>
                        <LazyLoadImage
                            src="images/home/banner/4.jpg"
                            alt="Banner"
                            width="680"
                            height="180"
                        />
                    </figure>
                    <div className="banner-content">
                        <h4 className="banner-subtitle font-weight-normal ls-normal text-dark">Final Reduction </h4>
                        <h3 className="banner-title font-weight-semi-bold font-secondary ls-m mb-3">Sale up to 20% Off</h3>
                        <hr className="divider border-no" />
                        <div className="banner-price-info font-weight-normal text-body">
                            Only From<span className="font-weight-bold text-secondary ml-1 ls-m">$270.00</span>
                        </div>
                    </div>
                </div>
            </Reveal>

            <Reveal keyframes={ fadeInRightShorter } duration={ 1000 } triggerOnce>
                <div className="banner banner-fixed content-middle banner-radius mb-4" style={ { backgroundColor: "#636363" } }>
                    <figure>
                        <LazyLoadImage
                            src="images/home/banner/5.jpg"
                            alt="Banner"
                            width="680"
                            height="180"
                        />
                    </figure>
                    <div className="banner-content">
                        <h4 className="banner-subtitle font-weight-normal ls-normal">Weekend Sale</h4>
                        <h3 className="banner-title text-white font-weight-semi-bold font-secondary ls-m mb-3">
                            Fine Smart Speaker
                    </h3>
                        <hr className="divider border-no bg-light" />
                        <div className="banner-price-info font-weight-normal text-white">
                            Starting at<span className="font-weight-bold text-secondary ml-1 ls-m">$185.00</span>
                        </div>
                    </div>
                </div>
            </Reveal>
        </div>
    )
}

export default React.memo( BannerOneSection );