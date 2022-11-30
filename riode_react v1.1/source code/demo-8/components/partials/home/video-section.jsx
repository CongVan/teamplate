import React from 'react';
import { connect } from 'react-redux';
import Reveal from 'react-awesome-reveal';

import { modalActions } from '~/store/modal';

import { fadeIn } from '~/utils/data/keyframes';

function VideoSection( props ) {
    const showVideoModalHandler = ( e ) => {
        e.preventDefault();
        let link = e.currentTarget.getAttribute( 'href' );
        props.openModal( link );
    }

    return (
        <section className="banner video-banner pl-2 pr-2"
            style={ { backgroundImage: `url(./images/home/banners/5.jpg)`, backgroundColor: "#9bb5c4" } }>
            <div className="banner-content text-center">
                <Reveal keyframes={ fadeIn } triggerOnce>
                    <h3 className="banner-title font-secondary mb-0 font-weight-bold text-white text-uppercase mb-10">
                        Modern Furniture &amp; Designe </h3>

                    <a className="btn-play btn-iframe text-white"
                        href="/uploads/video/video-1.mp4" onClick={ showVideoModalHandler }><i
                            className="d-icon-play-solid"></i></a>
                </Reveal>
            </div>
        </section>
    )
}

export default connect( null, { openModal: modalActions.openModal } )( VideoSection )