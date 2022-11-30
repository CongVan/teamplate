import React from 'react';
import Reveal from 'react-awesome-reveal';

import { fadeIn } from '~/utils/data/keyframes';

function CtaSection() {
    return (
        <Reveal keyframes={ fadeIn }>
            <section className="mt-10 pt-2">
                <div className="banner banner-newsletter border-no"
                    style={ { backgroundImage: `url(./images/home/newsletter.jpg)`, backgroundColor: "#211D1A   " } }>
                    <div className="banner-content row gutter-no align-items-center">
                        <div className="col-xl-5 col-lg-6">
                            <div className="icon-box icon-box-side mb-4 mb-lg-0">
                                <div className="icon-box-content">
                                    <h4 className="icon-box-title font-weight-bold text-white">SUBSCRIBE TO THE
                                    NEWSLETTER</h4>
                                    <p className="text-white">Stay up to date regarding the newest product & offers.
                                </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6 d-lg-block d-flex justify-content-center">
                            <form action="#" method="get" className="input-wrapper input-wrapper-inline ml-lg-auto">
                                <input type="email"
                                    className="form-control font-primary font-italic form-solid pl-2 pl-lg-6"
                                    name="email" id="email" placeholder="Enter Your E-mail Address..."
                                    required />
                                <button className="btn btn-primary" type="submit">Subscribe <i
                                    className="d-icon-arrow-right"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Reveal>
    )
}

export default React.memo( CtaSection );