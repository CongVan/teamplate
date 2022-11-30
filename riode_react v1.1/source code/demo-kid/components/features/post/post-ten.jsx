import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { videoHandler } from '~/utils';
import { mainSlider20 } from '~/utils/data/carousel';

function PostTen ( props ) {
    const { post, adClass = '', isLazy = false, isOriginal = false, btnText = "Read more", btnAdClass = '' } = props;
    const months = [ "JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC" ];
    const longMonths = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];


    return (
        <div className={ `post post-list overlay-dark ${ post.type === 'video' ? 'post-video' : '' } ${ adClass }` }>
            {
                post.type === 'image' || post.type === 'video' ?
                    <figure className="post-media overlay-zoom">
                        {
                            isLazy ?
                                <ALink href={ `/blog/single/${ post.slug }` }>
                                    {
                                        isOriginal ? <LazyLoadImage
                                            src={ process.env.NEXT_PUBLIC_ASSET_URI + post.large_picture[ 0 ].url }
                                            alt="post image"
                                            width={ 280 }
                                            height={ 210 }
                                            effect="opacity"
                                            style={ { backgroundColor: "#DEE6E8" } }
                                        />
                                            :
                                            <LazyLoadImage
                                                src={ process.env.NEXT_PUBLIC_ASSET_URI + post.picture[ 0 ].url }
                                                alt="post image"
                                                width={ 280 }
                                                height={ 210 }
                                                effect="opacity"
                                                style={ { backgroundColor: "#DEE6E8" } }
                                            />
                                    }
                                </ALink>
                                :
                                <ALink href={ `/blog/single/${ post.slug }` }>
                                    {
                                        isOriginal ? <img
                                            src={ process.env.NEXT_PUBLIC_ASSET_URI + post.large_picture[ 0 ].url }
                                            alt="post image"
                                            width={ 280 }
                                            height={ post.large_picture[ 0 ].height }
                                        /> :

                                            <img
                                                src={ process.env.NEXT_PUBLIC_ASSET_URI + post.picture[ 0 ].url }
                                                alt="post image"
                                                width={ post.picture[ 0 ].width }
                                                height={ post.picture[ 0 ].height }
                                            />
                                    }
                                </ALink>
                        }
                        {
                            post.type === 'video' ?
                                <>
                                    <span className="video-play" onClick={ videoHandler }></span>
                                    <video width="380">
                                        <source src={ process.env.NEXT_PUBLIC_ASSET_URI + post.video.url } type="video/mp4" />
                                    </video>
                                </>
                                : ''
                        }
                        <div className="post-calendar">
                            <span className="post-day">{ ( new Date( post.date ).getDay() + 1 ).toString().padStart( 2, "0" ) }</span>
                            <span className="post-month">{ months[ new Date( post.date ).getMonth() ] }</span>
                        </div>
                    </figure> :
                    <figure className="post-media">
                        {
                            isLazy ?
                                <OwlCarousel adClass="owl-theme owl-dot-inner owl-dot-white gutter-no" options={ mainSlider20 }>
                                    {
                                        post.picture.map( ( item, index ) =>
                                            <LazyLoadImage
                                                src={ process.env.NEXT_PUBLIC_ASSET_URI + item.url }
                                                alt="post gallery"
                                                key={ item.title + '-' + index }
                                                width={ 280 }
                                                height={ 206 }
                                                effect="opacity"
                                                style={ { backgroundColor: "#DEE6E8" } }
                                            />
                                        ) }
                                </OwlCarousel>
                                :
                                <OwlCarousel adClass="owl-theme owl-dot-inner owl-dot-white gutter-no" options={ mainSlider20 }>
                                    {
                                        post.picture.map( ( item, index ) =>
                                            <img
                                                src={ process.env.NEXT_PUBLIC_ASSET_URI + item.url }
                                                alt="post gallery"
                                                key={ item.title + '-' + index }
                                                width={ item.width }
                                                height={ item.height }
                                            />
                                        ) }
                                </OwlCarousel>
                        }
                        <div className="post-calendar">
                            <span className="post-day">{ ( new Date( post.date ).getDay() + 1 ).toString().padStart( 2, "0" ) }</span>
                            <span className="post-month">{ months[ new Date( post.date ).getMonth() ] }</span>
                        </div>
                    </figure>
            }

            <div className="post-details">
                <div className="post-meta">
                    on <ALink href={ `/blog/single/${ post.slug }` } className="post-date">{ longMonths[ new Date( post.date ).getMonth() ] } { new Date( post.date ).getDay() + 1 }, { new Date( post.date ).getFullYear() }</ALink>&nbsp; | &nbsp;
                    <ALink href={ `/blog/single/${ post.slug }` } className="post-comment"><span>{ post.comments }</span> Comment</ALink>
                </div>
                <h4 className="post-title">
                    <ALink href={ `/blog/single/${ post.slug }` }>{ post.title }</ALink>
                </h4>
                <p className="post-content">{ post.content }</p>
                <ALink href={ `/blog/single/${ post.slug }` } className={ `btn btn-outline btn-sm btn-primary ${ btnAdClass }` }>{ btnText }<i className="d-icon-arrow-right"></i></ALink>
            </div>
        </div >
    )
}

export default PostTen;