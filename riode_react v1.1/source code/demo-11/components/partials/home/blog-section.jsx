import React from 'react';
import Reveal from 'react-awesome-reveal';

import OwlCarousel from '~/components/features/owl-carousel';
import PostSix from '~/components/features/post/post-six';

import { fadeIn } from '~/utils/data/keyframes';
import { blogSlider } from '~/utils/data/carousel';

function BlogSection( props ) {
    const { posts } = props;

    return (
        <section className="mt-10 pt-3">
            <Reveal keyframes={ fadeIn } duration={ 1000 } triggerOnce>
                <h2 className="title title-custom title-center text-normal border-no mb-6">From our Blog</h2>

                <OwlCarousel adClass="owl-theme" options={ blogSlider }>
                    {
                        posts && posts.length ?
                            posts.slice( 15, 19 ).map( ( post, index ) => (
                                <React.Fragment key={ "post-eight" + index }>
                                    <div className="blog-post">
                                        <PostSix
                                            post={ post }
                                            adClass="overlay-zoom"
                                            isOriginal={ true }
                                            btnText="Read More"
                                            btnAdClass=""
                                            adClass=""
                                        />
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