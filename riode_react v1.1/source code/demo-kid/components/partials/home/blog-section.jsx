import React from 'react';
import Reveal from 'react-awesome-reveal';

import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import PostTen from '~/components/features/post/post-ten';

import { fadeInUpShorter } from '~/utils/data/keyframes';
import { mainSlider14 } from '~/utils/data/carousel';

function BlogSection ( props ) {
    const { posts } = props;

    return (
        <section className="mt-10 pt-3 pb-5">
            <Reveal keyframes={ fadeInUpShorter } delay={ 300 } duration={ 1200 } triggerOnce>
                <h2 className="title title-underline with-link title-line">
                    <span>Our Blog</span><ALink href="/blog/classic">View All<i className="d-icon-arrow-right"></i></ALink>
                </h2>

                <OwlCarousel adClass="owl-theme" options={ mainSlider14 }>
                    {
                        posts && posts.length ?
                            posts.slice( 15 ).map( ( post, index ) => (
                                <PostTen isLazy={ true } post={ post } adClass="overlay-zoom" key={ "post-ten" + index } />
                            ) ) : ''
                    }
                </OwlCarousel>
            </Reveal>
        </section>
    )
}

export default React.memo( BlogSection );