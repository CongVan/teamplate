import { useEffect } from 'react';
import StickyBox from 'react-sticky-box';

import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { blogSlider } from '~/utils/data/carousel';

export default function HomeSidebar( props ) {
    const { posts } = props;

    useEffect( () => {
        window.addEventListener( 'resize', hideSidebar );

        return () => {
            window.removeEventListener( 'resize', hideSidebar );
        }
    }, [] )

    const toggleSidebar = () => {
        document.querySelector( 'body' ).classList.toggle( 'home-sidebar-active' );
    }

    const hideSidebar = ( e ) => {
        document.querySelector( 'body' ).classList.remove( 'home-sidebar-active' );
    }

    return (
        <aside className="col-xl-3 col-lg-4 sidebar sidebar-fixed sticky-sidebar-wrapper home-sidebar">
            <div className="sidebar-overlay" onClick={ hideSidebar }>
                <ALink className="sidebar-close" href="#"><i className="d-icon-times"></i></ALink>
            </div>

            <ALink href="#" className="sidebar-toggle" onClick={ toggleSidebar }><i className="fas fa-chevron-right"></i></ALink>

            <StickyBox offsetTop={ 88 } className="home-sidebar-wrapper">
                <div className="sidebar-content pb-lg-8 pb-0">
                    <div className="banner banner-newsletter mb-4">
                        <div className="banner-content text-center">
                            <p className="banner-subtitle">Premium Brand</p>
                            <h3 className="banner-title">Sale</h3>
                            <form action="#" className="">
                                <input type="email" className="form-control" name="email" id="h-email"
                                    placeholder="Email address here..." required />
                                <button className="btn btn-dark" type="submit">Subscribe<i
                                    className="d-icon-arrow-right"></i></button>
                            </form>
                        </div>
                    </div>

                    <div className="banner banner-fixed banner-sale mb-4" style={ { backgroundColor: "#333359" } }>
                        <figure>
                            <img src="./images/home/banner/4.jpg" width="280" height="312"
                                alt="banner" />
                        </figure>
                        <div className="banner-content w-100">
                            <h4 className="banner-subtitle mb-2 text-uppercase text-white">Special Offer
                                            </h4>
                            <h3 className="banner-title text-white mb-4">
                                Black Friday Sale</h3>
                            <ALink href="/shop" className="btn btn-md btn-link btn-underline btn-white">
                                Shop Now<i className="d-icon-arrow-right"></i></ALink>
                        </div>
                    </div>

                    <div className="widget widget-posts">
                        <h4 className="widget-title">Latest Blog</h4>

                        <div className="widget-body">
                            <OwlCarousel adClass="owl-nav-top" options={ blogSlider }>
                                <div className="post-col">
                                    {
                                        posts && posts.slice( 15, 18 ).map( item =>
                                            <div className="post post-list-sm" key={ `post-${ item.slug }` }>
                                                <figure className="post-media">
                                                    <ALink href={ `/blog/single/${ item.slug }` }>
                                                        <img src={ process.env.NEXT_PUBLIC_ASSET_URI + item.large_picture[ 0 ].url } width="84"
                                                            height="84" alt="post" />
                                                    </ALink>
                                                </figure>
                                                <div className="post-details">
                                                    <div className="post-meta">
                                                        <ALink href={ `/blog/single/${ item.slug }` } className="post-date">September 11, 2020</ALink>
                                                    </div>
                                                    <h4 className="post-title">
                                                        <ALink href={ `/blog/single/${ item.slug }` }>{ item.title }</ALink></h4>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </StickyBox>
        </aside>
    )
}