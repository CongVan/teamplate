import React from 'react';
import Reveal from 'react-awesome-reveal';

import OwlCarousel from '~/components/features/owl-carousel';

import PostEight from '~/components/features/post/post-eight';

import { mainSlider6 } from '~/utils/data/carousel';
import { fadeIn } from '~/utils/data/keyframes';

function BlogSection ( props ) {
    const { posts } = props;

    return (
        <section className="blog-section">
            <div className="shape-divider">
                <div className="shape shape8">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 58.416 100 2.377" enableBackground="new 0 58.416 100 2.377">
                        <path fill="#fafafa" d="M0,58.529c0,0,24.974,2.082,49.96,2.082c25.013,0,50.04-2.082,50.04-2.082V39.388H0V58.529z">
                        </path>
                    </svg>
                </div>
                <div className="shape shape9">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 39.281 100 2.406" enableBackground="new 0 39.281 100 2.406">
                        <path fill="#fafafa" d="M100,41.471c0,0-24.975-2.083-49.96-2.083C25.026,39.388,0,41.471,0,41.471v19.14h100V41.471z">
                        </path>
                    </svg>
                </div>
            </div>
            <div className="title-wrapper">
                <div className="container">
                    <h2 className="title">Recent Stories And Articles</h2>
                    <span className="title-info">Our Blog</span>
                </div>
            </div>
            <div className="container">
                <OwlCarousel adClass="owl-theme owl-shadow-carousel pb-10" options={ mainSlider6 }>
                    {
                        posts && posts.length ?
                            posts.slice( 15, 18 ).map( ( post, index ) => (
                                <Reveal keyframes={ fadeIn } delay={ 500 } duration={ 1200 } key={ "post-eight" + index } triggerOnce>
                                    <PostEight post={ post } adClass="overlay-zoom" />
                                </Reveal>
                            ) ) : ''
                    }
                </OwlCarousel>
            </div>
        </section >
    )
}

export default React.memo( BlogSection );