import React from 'react';
import Reveal from 'react-awesome-reveal';

import OwlCarousel from '~/components/features/owl-carousel';

import PostThree from '~/components/features/post/post-three';

import { fadeIn, fadeInUpShorter } from '~/utils/data/keyframes';
import { mainSlider14 } from '~/utils/data/carousel';

function BlogSection(props) {
    const { posts } = props;

    return (
        <section className="blog mt-10 pt-3 pb-lg-5">
            <div className="container">
                <Reveal keyframes={fadeIn} duration={1000} triggerOnce>
                    <h2 className="title title-simple text-left">Latest News</h2>
                </Reveal>

                <OwlCarousel adClass="owl-theme owl-nav-full" options={mainSlider14}>
                    {
                        posts && posts.length ?
                            posts.slice(15, 17).map((post, index) => (
                                <React.Fragment key={"post-three" + index}>
                                    <Reveal keyframes={fadeInUpShorter} duration={1000} delay={index * 200 + 300} triggerOnce>
                                        <PostThree post={post} adClass="overlay-zoom" isCalender={true} btnAdClass="btn-sm btn-outline" />
                                    </Reveal>
                                </React.Fragment>
                            )) : ''
                    }
                </OwlCarousel>
            </div>
        </section>
    )
}

export default React.memo(BlogSection);