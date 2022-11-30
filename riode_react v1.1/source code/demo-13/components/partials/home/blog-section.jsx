import React from 'react';
import Reveal from 'react-awesome-reveal';

import OwlCarousel from '~/components/features/owl-carousel';
import PostSeven from '~/components/features/post/post-seven';
import ALink from '~/components/features/custom-link';

import { fadeIn } from '~/utils/data/keyframes';
import { postSlider } from '~/utils/data/carousel';

function BlogSection( props ) {
    const { posts } = props;

    return (
        <section className="blog container pt-7 mt-10 pb-1 mb-10">
            <div className="row">
                 <div className="col-lg-6">
                    <Reveal keyframes={ fadeIn } triggerOnce>
                       {
                            posts && posts.length > 0 ?
                                <>
                                      <h2 className="title title-simple text-dark text-left mb-4">Who We Are?</h2>
                                     <div className="post post-list overlay-light">
                                        <figure className="post-media">
                                            <ALink href={ `/blog/single/${ posts[ 15 ].slug }` }>
                                                <img src={ process.env.NEXT_PUBLIC_ASSET_URI + posts[ 15 ].large_picture[ 0 ].url } width="280" height="221" alt="post" />
                                            </ALink>
                                        </figure>
                                       <div className="post-details">
                                            <h4 className="post-title"><ALink href={ `/blog/single/${ posts[ 15 ].slug }` }>{ posts[ 15 ].title }</ALink></h4>
                                            <p className="post-content text-grey">{ posts[ 15 ].content }</p>

                                            <ALink href={ `/blog/single/${ posts[ 15 ].slug }` } className="btn btn-link btn-underline btn-sm btn-dark">Read
                            More<i className="d-icon-arrow-right"></i></ALink>
                                        </div> 
                                    </div>
                                </>
                                : <div></div>
                        }
                    </Reveal>
                </div>

                <div className="col-lg-6 mb-4">
                    <Reveal keyframes={ fadeIn } triggerOnce>
                        <h2 className="title title-simple text-left text-dark mb-4">
                            Latest Blog<span className="divider"></span>
                            <ALink href="/blog/classic" className="btn btn-link btn-primary btn-underline btn-sm">View all
                            <i className="d-icon-arrow-right"></i></ALink>
                        </h2>

                        <OwlCarousel adClass="owl-theme owl-nav-full" options={ postSlider }>
                            {
                                posts && posts.length ?
                                    posts.slice( 16, 18 ).map( ( post, index ) =>
                                        <PostSeven post={ post } adClass="" isOriginal={ true } key={ "post-eight" + index } btnAdClass="text-capitalize font-primary font-weight-semi-bold" />
                                    ) : ''
                            }
                        </OwlCarousel>
                    </Reveal>
                </div>
            </div>
        </section >
    )
}

export default React.memo( BlogSection );