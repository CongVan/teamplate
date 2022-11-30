import React from 'react';
import { connect } from 'react-redux';
import Reveal from 'react-awesome-reveal';

import { modalActions } from '~/store/modal';

import { blurIn, fadeInDownShorter, fadeIn } from '~/utils/data/keyframes';

function VideoSection ( props ) {
    const { openModal } = props;

    const showVideoModalHandler = ( e ) => {
        e.preventDefault();
        let link = e.currentTarget.closest( '.btn-play' ).getAttribute( 'data' );
        openModal( link );
    }

    return (
        <section className="container mt-4 pt-4 mt-sm-10 pt-sm-6">
            <div className="banner video-banner" style={ { backgroundImage: `url(./images/home/cta.jpg)`, backgroundColor: "#4e4743" } }>
                <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1200 } triggerOnce>
                    <div className="banner-content text-center">
                        <Reveal keyframes={ fadeInDownShorter } delay={ 200 } duration={ 1200 } triggerOnce>
                            <h4 className="banner-subtitle ls-normal font-weight-normal font-secondary text-white text-uppercase" >Brand Experience</h4>
                        </Reveal>

                        <Reveal keyframes={ blurIn } delay={ 400 } duration={ 1400 } triggerOnce>
                            <h3 className="banner-title text-white text-uppercase font-weight-bold mb-5">Premium for the pros 2021</h3>
                        </Reveal>

                        <Reveal keyframes={ fadeIn } delay={ 800 } duration={ 1200 } triggerOnce>
                            <a className="btn-play btn-iframe text-white" href="#" data="/uploads/video/video-1.mp4" onClick={ showVideoModalHandler }>
                                <i className="d-icon-play-solid ml-0"></i>
                            </a>
                        </Reveal>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}

export default connect( '', { openModal: modalActions.openModal } )( VideoSection )