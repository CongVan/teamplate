import React from 'react';
import Reveal from 'react-awesome-reveal';

import OwlCarousel from '~/components/features/owl-carousel';

import PostEight from '~/components/features/post/post-eight';

import { fadeIn } from '~/utils/data/keyframes';
import { mainSlider6 } from '~/utils/data/carousel';

function BlogSection(props) {
    const { posts } = props;

    return (
        <section className="blog-section container mt-4 mt-lg-10 pt-4 mb-0 mb-lg-6">
            <Reveal keyframes={fadeIn} duration={1000} triggerOnce>
                <h3 className="text-center font-weight-bold lh-1 ls-m pt-4 mb-5">Latest News</h3>

                <OwlCarousel adClass="owl-theme post-slider" options={mainSlider6}>
                    {
                        posts && posts.length ?
                            posts.slice(15, 18).map((post, index) => (
                                <React.Fragment key={"post-eight" + index}>
                                    <div className="blog-post mb-4">
                                        <PostEight post={post} adClass="overlay-zoom" />
                                    </div>
                                </React.Fragment>
                            )) : ''
                    }
                </OwlCarousel>
            </Reveal>
        </section>
    )
}

export default React.memo(BlogSection);