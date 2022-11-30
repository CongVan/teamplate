import React from 'react';
import Reveal from "react-awesome-reveal";

import { fadeIn, fadeInLeftShorter, fadeInRightShorter } from '~/utils/data/keyframes';

function NewsletterSection () {
    return (
        <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1200 } triggerOnce>
            <section className="banner banner-newsletter bg-primary mt-4 mt-sm-10">
                <div className="container">
                    <div className="banner-content d-lg-flex">
                        <div className="d-flex icon-container mr-3 justify-content-center mb-2 mb-lg-0">
                            <Reveal keyframes={ fadeInLeftShorter } delay={ 200 } duration={ 1200 } triggerOnce>
                                <div className="icon-box icon-box-side">
                                    <div className="icon-box-content">
                                        <h4 className="icon-box-title text-white">Subscribe to the newsletter</h4>
                                        <p className="text-white">Stay up to date regarding the newest product & offers.</p>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                        <div className="d-lg-block d-flex justify-content-center form-container">
                            <Reveal keyframes={ fadeInRightShorter } delay={ 200 } duration={ 1200 } triggerOnce>
                                <form action="#" method="get" className="input-wrapper input-wrapper-inline ml-lg-auto">
                                    <input type="email" className="form-control font-primary font-italic form-solid" name="email" id="email" placeholder="Enter Your E-mail Address..." required />
                                    <button className="btn btn-dark" type="submit">Subscribe<i className="d-icon-arrow-right"></i></button>
                                </form>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>
        </Reveal>
    )
}

export default React.memo( NewsletterSection );