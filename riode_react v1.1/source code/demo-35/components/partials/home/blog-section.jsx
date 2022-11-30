import React from 'react';

import OwlCarousel from '~/components/features/owl-carousel';
import PostTen from '~/components/features/post/post-ten';

import { mainSlider6 } from '~/utils/data/carousel';

function BlogSection(props) {
    const { posts } = props;

    return (
        <section className="blog-section container mt-10 mb-4">
            <h2 className="title title-underline text-center mb-10">Latest News</h2>
            <OwlCarousel adClass="owl-theme" options={mainSlider6}>
                {
                    posts && posts.length ?
                        posts.slice(15, 18).map((post, index) => (
                            <React.Fragment key={"post-eight" + index}>
                                <PostTen post={post} isOriginal={true} adClass="post-mask gradient overlay-dark" />
                            </React.Fragment>
                        )) : ''
                }
            </OwlCarousel>
        </section>
    )
}

export default React.memo(BlogSection);