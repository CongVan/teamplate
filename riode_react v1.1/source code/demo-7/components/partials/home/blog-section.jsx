import React from 'react';
import Reveal from 'react-awesome-reveal';

import OwlCarousel from '~/components/features/owl-carousel';

import PostSix from '~/components/features/post/post-six';

import { fadeIn } from '~/utils/data/keyframes';
import { postSlider } from '~/utils/data/carousel';

function BlogSection( props ) {
    const { posts } = props;

    return (
        <section className="mt-10 pt-6">
            <Reveal keyframes={ fadeIn } duration={ 1000 } triggerOnce>
                <div className="container">
                    <h2 className="title title-center">From Our Blog</h2>

                    <OwlCarousel adClass="owl-theme" options={ postSlider }>
                        {
                            posts && posts.length ?
                                posts.slice( 15, 19 ).map( ( post, index ) => (
                                    <div className="blog-post" key={ "post-" + index }>
                                        <PostSix isOriginal={ true } adClass="" post={ post } adClass="overlay-zoom" isContent={ true } btnAdClass="btn-primary btn-md" />
                                    </div>
                                ) ) : ''
                        }
                    </OwlCarousel>
                </div>
            </Reveal>
        </section>
    )
}

export default React.memo( BlogSection );