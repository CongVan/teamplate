import React from 'react';
import Reveal from 'react-awesome-reveal';

import OwlCarousel from '~/components/features/owl-carousel';

import PostEight from '~/components/features/post/post-eight';

import { fadeInUpShorter, blurIn, fadeIn } from '~/utils/data/keyframes';
import { mainSlider6 } from '~/utils/data/carousel';

function BlogSection ( props ) {
    const { posts } = props;

    return (
        <Reveal keyframes={ fadeIn } delay={ 300 } duration={ 1200 } triggerOnce>
            <section className="container mt-9">
                <Reveal keyframes={ blurIn } delay={ 200 } duration={ 1200 } triggerOnce>
                    <h2 className="title title-underline text-center">Latest News</h2>
                </Reveal>

                <Reveal keyframes={ fadeIn } delay={ 600 } duration={ 1200 } triggerOnce>
                    <OwlCarousel adClass="owl-theme owl-shadow-carousel" options={ mainSlider6 }>
                        {
                            posts && posts.length ?
                                posts.slice( 15, 18 ).map( ( post, index ) => (
                                    <React.Fragment key={ "post-three" + index }>
                                        <Reveal keyframes={ fadeInUpShorter } duration={ 1000 } delay={ index * 200 + 300 } triggerOnce>
                                            <PostEight post={ post } adClass="overlay-zoom" isCalender={ true } btnAdClass="btn btn-link btn-dark btn-underline btn-sm" />
                                        </Reveal>
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