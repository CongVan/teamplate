import React from 'react';
import Reveal from 'react-awesome-reveal';

import OwlCarousel from '~/components/features/owl-carousel';

import PostSix from '~/components/features/post/post-six';

import { fadeIn } from '~/utils/data/keyframes';
import { blogSlider } from '~/utils/data/carousel';

function BlogSection( props ) {
    const { posts } = props;

    return (
        <section className="container mt-9">
            <Reveal keyframes={ fadeIn } duration={ 1000 } triggerOnce>
                <h2 className="title title-center title-simple">Latest News</h2>

                <OwlCarousel adClass="owl-theme owl-nav-full" options={ blogSlider }>
                    {
                        posts && posts.length ?
                            posts.slice( 15, 18 ).map( ( post, index ) => (
                                <React.Fragment key={ "post-eight" + index }>
                                    <div className="blog-post mb-4">
                                        <PostSix post={ post } adClass="overlay-dark" btnText="Read More" btnAdClass="" isOriginal={ true } />
                                    </div>
                                </React.Fragment>
                            ) ) : ''
                    }
                </OwlCarousel>
            </Reveal>
        </section>
    )
}

export default React.memo( BlogSection );