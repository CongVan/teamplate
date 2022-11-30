import React from 'react';
import Reveal from 'react-awesome-reveal';

import OwlCarousel from '~/components/features/owl-carousel';

import PostTen from '~/components/features/post/post-ten';

import { fadeIn, fadeInUpShorter } from '~/utils/data/keyframes';
import { serviceSlider } from '~/utils/data/carousel';

function BlogSection ( props ) {
    const { posts } = props;

    return (
        <Reveal keyframes={ fadeIn } duration={ 1200 } delay={ 200 } triggerOnce>
            <section className="container mt-10 pt-5">
                <Reveal keyframes={ fadeInUpShorter } duration={ 1200 } delay={ 200 } triggerOnce>
                    <h2 className="title title-simple mb-4">Latest News</h2>
                </Reveal>

                <Reveal keyframes={ fadeInUpShorter } duration={ 1200 } delay={ 400 } triggerOnce>
                    <OwlCarousel adClass="owl-theme post-slider" options={ serviceSlider }>
                        {
                            posts && posts.length ?
                                posts.slice( 15, 19 ).map( ( post, index ) => (
                                    <React.Fragment key={ "post-eight" + index }>
                                        <PostTen post={ post } adClass="overlay-zoom" isOriginal={ true } />
                                    </React.Fragment>
                                ) ) : ''
                        }
                    </OwlCarousel>
                </Reveal>
            </section>
        </Reveal>
    )
}

export default React.memo( BlogSection );