import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/custom-link';

import { fadeIn } from '~/utils/data/keyframes';

export default function BannerSection() {
    return (
        <section className="banner-group pt-4 mt-10">
            <div className="grid m-0">
                <div className="grid-item height-x2">
                    <Reveal keyframes={ fadeIn } triggerOnce>
                        <div className="banner1 banner banner-fixed overlay-dark">
                            <figure style={ { backgroundColor: "#424a4d" } }>
                                <LazyLoadImage effect="opacity" threshold={ 300 } src="./images/home/banner/5.jpg" alt="banner" width="470" height="667" />
                            </figure>
                            <div className="banner-content w-100 x-50 y-50 text-center">
                                <h4 className="banner-subtitle mb-2 ls-normal text-white">New Arrivals</h4>
                                <h3 className="banner-title text-white text-uppercase mb-7">Trends For Men</h3>
                                <ALink href={ { pathname: "/shop", query: { category: 'for-men-s' } } } className="btn btn-rounded btn-outline btn-white">Shop now<i
                                    className="d-icon-arrow-right"></i></ALink>
                            </div>
                        </div>
                    </Reveal>
                </div>
                <div className="grid-item height-x1">
                    <Reveal keyframes={ fadeIn } triggerOnce>
                        <div className="banner2 banner banner-fixed overlay-dark">
                            <figure style={ { backgroundColor: "#212121" } }>
                                <LazyLoadImage effect="opacity" threshold={ 300 } src="./images/home/banner/6.jpg" alt="banner" width="980" height="334" />
                            </figure>
                            <div className="banner-content w-100 y-50 text-left">
                                <h4 className="banner-subtitle mb-1 ls-m text-white font-weight-normal">Flash Sale
                            50% Off</h4>
                                <h3 className="banner-title mb-2 ls-l text-white font-weight-bold">Classic Style <span
                                    className="text-primary">ETT 02</span> Gunmetal</h3>
                                <p className="font-primary ls-m text-grey">The Only Watches you’ll need...</p>
                                <ALink href="/shop" className="btn btn-rounded btn-primary">Shop now<i
                                    className="d-icon-arrow-right"></i></ALink>
                            </div>
                        </div>
                    </Reveal>
                </div>
                <div className="grid-item height-x2">
                    <Reveal keyframes={ fadeIn } triggerOnce>
                        <div className="banner3 banner banner-fixed overlay-dark">
                            <figure style={ { backgroundColor: "#797979" } }>
                                <LazyLoadImage effect="opacity" threshold={ 300 } src="./images/home/banner/7.jpg" alt="banner" width="470" height="667" />
                            </figure>
                            <div className="banner-content w-100 text-center">
                                <h4 className="banner-subtitle mb-2 ls-normal font-weight-bold">Flash Sale</h4>
                                <h3 className="banner-title text-uppercase mb-7">FOR WOMEN'S</h3>
                                <ALink href={ { pathname: '/shop', query: { category: 'for-women-s' } } } className="btn btn-rounded btn-primary">Shop now<i
                                    className="d-icon-arrow-right"></i></ALink>
                            </div>
                        </div>
                    </Reveal>
                </div>
                <div className="grid-item height-x1">
                    <Reveal keyframes={ fadeIn } triggerOnce>
                        <div className="banner4 banner row gutter-no align-items-center" style={ { backgroundColor: "#1c1f21" } }>
                            <figure className="col-6" style={ { backgroundColor: "#1c1f21" } }>
                                <LazyLoadImage effect="opacity" threshold={ 300 } src="./images/home/banner/8.jpg" alt="banner" width="490" height="333" />
                            </figure>
                            <div className="col-6 banner-content w-100 text-center pl-3 pr-3">
                                <h3 className="banner-title mb-3 font-weight-bold text-white">LookBook
                            2021</h3>
                                <p className="font-primary mb-6">Lorem ipsum dolor sit amet, consectetur<br />
                                adipiscing elit, sed do eiusmod ...</p>
                                <ALink href="/shop" className="btn btn-link btn-underline btn-white">Shop now<i
                                    className="d-icon-arrow-right"></i></ALink>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}