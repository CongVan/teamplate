import React from 'react';
import Reveal from 'react-awesome-reveal';

import OwlCarousel from '~/components/features/owl-carousel';

import PostTen from '~/components/features/post/post-ten';

import { fadeIn, fadeInRightShorter } from '~/utils/data/keyframes';
import { mainSlider12 } from '~/utils/data/carousel';

function BlogSection(props) {
    const { posts } = props;

    return (
        <section className="blog-section pt-10 mt-3 pb-8">
            <div className="container">
                <h2 className="title title-center d-block">Latest News</h2>
                <OwlCarousel adClass="owl-theme" options={mainSlider12}>
                    {
                        posts && posts.length ?
                            posts.slice(15, 19).map((post, index) => (
                                <React.Fragment key={"post-eight" + index}>
                                    <Reveal keyframes={fadeInRightShorter} delay={100} duration={1000} triggerOnce>

                                        <div className="blog-post mb-4">
                                            <PostTen post={post} adClass="overlay-zoom" isDesc={false} isOriginal={true} />
                                        </div>
                                    </Reveal>
                                </React.Fragment>
                            )) : <div></div>
                    }
                </OwlCarousel>
            </div>
        </section>
    )
}

export default React.memo(BlogSection);