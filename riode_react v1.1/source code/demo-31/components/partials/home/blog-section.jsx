import React from 'react';
import Reveal from 'react-awesome-reveal';

import OwlCarousel from '~/components/features/owl-carousel';

import PostTen from '~/components/features/post/post-ten';

import { blurIn, fadeInUpShorter } from '~/utils/data/keyframes';
import { mainSlider6 } from '~/utils/data/carousel';

function BlogSection(props) {
    const { posts } = props;

    return (
        <section className="blog-section mt-10 pt-3 pb-8 mt-4 p-relative overflow-hidden">
            <div className="container pb-10">
                <div className="title-wrapper text-center">
                    <Reveal keyframes={fadeInUpShorter} delay={300} duration={1000} triggerOnce>
                        <h5 className="title-info text-grey font-weight-normal lh-1 ls-md">Why buy Riode</h5>
                    </Reveal>
                    <Reveal keyframes={blurIn} delay={400} duration={1000} triggerOnce>
                        <h3 className="title-md font-weight-bold lh-1 mb-3">Latest Blog Post</h3>
                    </Reveal>
                </div>
                <div className="latest-blog">
                    <OwlCarousel adClass="owl-theme show-shadow" options={mainSlider6}>
                        {
                            posts && posts.length ?
                                posts.slice(15, 18).map((post, index) => (
                                    <PostTen post={post} adClass="overlay-zoom" key={"post index" + index} />
                                )) : ''
                        }
                    </OwlCarousel>
                </div>
            </div>
        </section>
    )
}

export default React.memo(BlogSection);