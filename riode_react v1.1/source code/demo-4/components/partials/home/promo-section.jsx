import React from 'react';
import { connect } from 'react-redux';
import Reveal from 'react-awesome-reveal';

import { modalActions } from '~/store/modal';

import { fadeInUpShorter } from '~/utils/data/keyframes';

function PromoSection( props ) {
    const showVideoModalHandler = ( e ) => {
        e.preventDefault();
        let link = e.currentTarget.getAttribute( 'href' );
        props.openModal( link );
    }

    return (
        <section className="banner video-banner"
            style={ { backgroundImage: `url(./images/home/banner.jpg)`, backgroundColor: "#7ca7bf" } }>
            <Reveal keyframes={ fadeInUpShorter } delay={ 300 } triggerOnce>
                <div className="banner-content ml-3 mr-3 text-uppercase text-center">
                    <h4 className="banner-subtitle ls-s text-white mb-0">Brand experience</h4>
                    <h3 className="banner-title mb-4 font-weight-bold text-white">Premium for the pros 2021</h3>
                    <a className="btn-play btn-iframe d-inline-flex justify-content-center align-items-center"
                        href="/uploads/video/video-1.mp4" onClick={ showVideoModalHandler }>
                        <i className="d-icon-play-solid"></i>
                    </a>
                </div>
            </Reveal>
        </section>
    )
}

export default connect( null, { openModal: modalActions.openModal } )( PromoSection )