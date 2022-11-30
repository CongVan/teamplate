import React from 'react';
import Reveal from 'react-awesome-reveal';

import { fadeIn } from '~/utils/data/keyframes';

function CtaSection() {
    return (
        <section className="container mt-10 pt-4">
            <Reveal keyframes={ fadeIn } delay={ 300 } triggerOnce>
                <div className="banner banner-newsletter border-no"
                    style={ { backgroundImage: `url(images/home/newsletter.jpg)`, backgroundColor: "#1a1819" } }>
                    <div className="form-wrapper form-wrapper-inline newsletter-form">
                        <div className="icon-box icon-box-side">
                            <div className="icon-box-content">
                                <h4 className="icon-box-title text-white">Subscribe to the newsletter</h4>
                                <p className="text-white">Stay up to date regarding the newest product &amp; offers.</p>
                            </div>
                        </div>
                        <form action="#" method="get" className="input-wrapper input-wrapper-inline ml-lg-10 ml-auto">
                            <input type="email" className="form-control font-primary " name="email" id="email"
                                placeholder="Enter Your E-mail Address..." required />
                            <button className="btn btn-primary" type="submit">Subscribe<i
                                className="d-icon-arrow-right"></i></button>
                        </form>
                    </div>
                </div>
            </Reveal>
        </section>
    )
}

export default React.memo( CtaSection );