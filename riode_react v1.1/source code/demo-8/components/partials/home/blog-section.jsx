import React from 'react';
import Reveal from 'react-awesome-reveal';

import OwlCarousel from '~/components/features/owl-carousel';

import PostSix from '~/components/features/post/post-six';

import { fadeIn } from '~/utils/data/keyframes';
import { postSlider } from '~/utils/data/carousel';

function BlogSection( props ) {
    const { posts } = props;

    return (
        <section className="blog-section pt-6 pb-2 mb-10">
            <Reveal keyframes={ fadeIn } duration={ 1000 } triggerOnce>
                <div className="container">
                    <h2 className="title title-center">Latest Blog</h2>

                    <OwlCarousel adClass="owl-theme" options={ postSlider }>
                        {
                            posts && posts.length ?
                                posts.slice( 15, 19 ).map( ( post, index ) => (
                                    <React.Fragment key={ "post-eight" + index }>
                                        <div className="blog-post">
                                            <PostSix post={ post } adClass="" isOriginal={ true } btnAdClass="text-capitalize font-primary font-weight-semi-bold" />
                                        </div>
                                    </React.Fragment>
                                ) ) : ''
                        }
                    </OwlCarousel>
                </div>
            </Reveal>
        </section>
    )
}

export default React.memo( BlogSection );