import React from 'react';
import Reveal from 'react-awesome-reveal';

import OwlCarousel from '~/components/features/owl-carousel';

import PostFour from '~/components/features/post/post-four';

import { fadeInRightShorter } from '~/utils/data/keyframes';
import { postSlider } from '~/utils/data/carousel';

function BlogSection ( props ) {
    const { posts } = props;

    return (
        <section className="blog-section">
            <Reveal keyframes={ fadeInRightShorter } delay={ 500 } duration={ 1000 } triggerOnce>
                <>
                    <div className="title-wrapper mb-5">
                        <div className="container">
                            <h2 className="title">From Our Blog</h2>
                            <span className="title-info">Share your latest posts or best articles will post here</span>
                        </div>
                    </div>

                    <div className="container">
                        <OwlCarousel adClass="owl-theme owl-shadow-carousel pb-10" options={ postSlider }>
                            {
                                posts && posts.length ?
                                    posts.slice( 15 ).map( ( post, index ) => (
                                        <PostFour post={ post } adClass="post-frame" key={ "post-four" + index } btnAdClass="btn-primary" />
                                    ) ) : ''
                            }
                        </OwlCarousel>
                    </div>
                </>
            </Reveal>
        </section>
    )
}

export default React.memo( BlogSection );