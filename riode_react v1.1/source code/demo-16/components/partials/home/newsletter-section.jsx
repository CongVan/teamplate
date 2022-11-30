import React from 'react';
import Reveal from 'react-awesome-reveal';

import { fadeIn } from '~/utils/data/keyframes';

function NewsletterSection () {
    return (
        <section className="container mt-10 pt-6">
            <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
                <div className="banner banner-newsletter" style={ { backgroundColor: "#fff" } }>
                    <div className="banner-content row gutter-no align-items-center">
                        <div className="col-xl-5 col-lg-6">
                            <div className="icon-box icon-box-side mb-4 mb-lg-0">
                                <div className="icon-box-content">
                                    <h4 className="icon-box-title font-weight-bold">SUBSCRIBE TO THE NEWSLETTER</h4>
                                    <p className="">Stay up to date regarding the newest product & offers.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6 d-lg-block d-flex justify-content-center">
                            <form action="#" method="get" className="input-wrapper input-wrapper-inline ml-lg-auto">
                                <input type="email" className="form-control font-primary font-italic form-solid pl-2 pl-lg-6 border-no" name="email" id="email" placeholder="Enter Your E-mail Address..." required />
                                <button className="btn btn-primary" type="submit">Subscribe <i className="d-icon-arrow-right"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    )
}

export default React.memo( NewsletterSection );