import React from 'react';
import Reveal from 'react-awesome-reveal';

import OwlCarousel from '~/components/features/owl-carousel';
import PostSix from '~/components/features/post/post-six';
import ALink from '~/components/features/custom-link';

import { fadeIn } from '~/utils/data/keyframes';
import { mainSlider6 } from '~/utils/data/carousel';

function BlogSection( props ) {
    const { posts } = props;

    return (
        <section className="mt-10 pt-1">
            <Reveal keyframes={ fadeIn } duration={ 1000 } triggerOnce>
                <div className="container">
                    <h2 className="title title-line title-underline with-link pt-4">Latest News
                        <ALink href="/blog/classic">View more<i className="d-icon-arrow-right"></i></ALink>
                    </h2>

                    <OwlCarousel adClass="owl-theme" options={ mainSlider6 }>
                        {
                            posts && posts.length > 0 ?
                                posts.slice( 15, 18 ).map( ( post, index ) => (
                                    <div className="blog-post" key={ "post-eight" + index }>
                                        <PostSix post={ post } adClass="overlay-zoom" isOriginal={ true } btnAdClass="" />
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