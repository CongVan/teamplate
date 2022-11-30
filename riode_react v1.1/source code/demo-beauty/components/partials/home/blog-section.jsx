import React from 'react';
import Reveal from 'react-awesome-reveal';

import OwlCarousel from '~/components/features/owl-carousel';

import PostFour from '~/components/features/post/post-four';

import { fadeInLeftShorter } from '~/utils/data/keyframes';
import { mainSlider6 } from '~/utils/data/carousel';

function BlogSection ( props ) {
    const { posts } = props;

    return (
        <section className="container mt-10 pt-4">
            <Reveal keyframes={ fadeInLeftShorter } delay={ 300 } duration={ 1200 } triggerOnce>
                <h2 className="title title-underline text-center">From Our Blogs</h2>

                <OwlCarousel adClass="owl-theme owl-shadow-carousel" options={ mainSlider6 }>
                    {
                        posts && posts.length ?
                            posts.slice( 15 ).map( ( post, index ) => (
                                <PostFour post={ post } adClass="post-frame" btnAdClass="btn-primary" key={ "post-four" + index } />
                            ) ) : ''
                    }
                </OwlCarousel>
            </Reveal>
        </section>
    )
}

export default React.memo( BlogSection );