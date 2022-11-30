import React from 'react';
import Reveal from "react-awesome-reveal";
import { useRouter } from 'next/router';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import Custom Components
import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { bannerSlider } from '~/utils/data/carousel';
import { fadeInLeftShorter, fadeIn, fadeInRightShorter, fadeInUpShorter } from '~/utils/data/keyframes';

export default function BannerGroup() {
    const router = useRouter();
    const pathname = router.pathname;
    const query = router.query;

    return (
        <section className="banner-group pt-10 mt-6 pb-2 mb-10">
            <div className="container">
                <OwlCarousel adClass="owl-theme mb-4" options={bannerSlider}>
                    <Reveal keyframes={fadeInLeftShorter} delay={300} duration={1500} triggerOnce>
                        <div className="category category-banner category-absolute category-group-icon text-white chevron-inherit" style={{ background: '#2C3642' }}>
                            <ALink href={{ pathname: "/shop", query: { category: "headphones" } }} className="pr-0">
                                <figure className="category-media">
                                    <LazyLoadImage
                                        src="./images/home/banner/6.jpg"
                                        alt="banner"
                                        effect="opacity"
                                        width="380"
                                        height="213"
                                    />
                                </figure>
                            </ALink>
                            <div className="category-content">
                                <h4>Headphones</h4>
                                <ul className="category-list">
                                    <li><ALink href={{ pathname: "/shop", query: { category: "samsung" } }}>Samsung</ALink></li>
                                    <li><ALink href={{ pathname: "/shop", query: { category: "american-dreams" } }}>American Dreams</ALink></li>
                                    <li><ALink href={{ pathname: "/shop", query: { category: "apple" } }}>Apple</ALink></li>
                                    <li><ALink href={{ pathname: "/shop", query: { category: "acer" } }}>Acer</ALink></li>
                                    <li><ALink href={{ pathname: "/shop", query: { category: "arcade-1-up" } }}>Arcade 1 UP</ALink></li>
                                </ul>
                            </div>
                        </div>
                    </Reveal>
                    <Reveal keyframes={fadeIn} delay={300} duration={1500} triggerOnce>
                        <div className="category category-banner category-absolute category-group-icon" style={{ background: '#e6e6e6' }}>
                            <ALink href={{ pathname: "/shop", query: { category: "cameras" } }} className="pr-0">
                                <figure className="category-media">
                                    <LazyLoadImage
                                        src="./images/home/banner/7.jpg"
                                        alt="banner"
                                        effect="opacity"
                                        width="380"
                                        height="213"
                                    />
                                </figure>
                            </ALink>
                            <div className="category-content">
                                <h4>Cameras</h4>
                                <ul className="category-list">
                                    <li><ALink href={{ pathname: "/shop", query: { category: "samsung" } }}>Samsung</ALink></li>
                                    <li><ALink href={{ pathname: "/shop", query: { category: "nikon-d850" } }}>Nikon D850</ALink></li>
                                    <li><ALink href={{ pathname: "/shop", query: { category: "sony" } }}>Sony</ALink></li>
                                    <li><ALink href={{ pathname: "/shop", query: { category: "canon-eos-80d" } }}>Canon EOS 80D</ALink></li>
                                    <li><ALink href={{ pathname: "/shop", query: { category: "lumix" } }}>Lumix</ALink></li>
                                </ul>
                            </div>
                        </div>
                    </Reveal>
                    <Reveal keyframes={fadeInRightShorter} delay={300} duration={1500} triggerOnce>
                        <div className="category category-banner category-absolute category-group-icon text-white" style={{ background: '#6a6c71' }}>
                            <ALink href={{ pathname: "/shop", query: { category: "watches" } }} className="pr-0">
                                <figure className="category-media">
                                    <LazyLoadImage
                                        src="./images/home/banner/8.jpg"
                                        alt="banner"
                                        effect="opacity"
                                        width="380"
                                        height="213"
                                    />
                                </figure>
                            </ALink>

                            <div className="category-content">
                                <h4>Watches</h4>
                                <ul className="category-list">
                                    <li><ALink href={{ pathname: "/shop", query: { category: "dell" } }}>Dell</ALink></li>
                                    <li><ALink href={{ pathname: "/shop", query: { category: "lenovo" } }}>Lenovo</ALink></li>
                                    <li><ALink href={{ pathname: "/shop", query: { category: "apple" } }}>Apple</ALink></li>
                                    <li><ALink href={{ pathname: "/shop", query: { category: "sony" } }}>Sony</ALink></li>
                                    <li><ALink href={{ pathname: "/shop", query: { category: "samsung" } }}>Samsung</ALink></li>
                                </ul>
                            </div>
                        </div>
                    </Reveal>
                </OwlCarousel>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <Reveal keyframes={fadeInUpShorter} delay={400} duration={1000} triggerOnce>
                            <div className="banner banner5 banner-fixed overlay-light content-middle">
                                <figure>
                                    <LazyLoadImage
                                        src="./images/home/banner/9.jpg"
                                        alt="banner"
                                        effect="opacity"
                                        width="280"
                                        height="207"
                                    />
                                </figure>
                                <div className="banner-content pl-8">
                                    <h4 className="banner-subtitle text-white font-weight-bold">Flash Sale <span
                                        className="text-primary">50%
                                                OFF</span>
                                    </h4>
                                    <h3 className="banner-title text-white font-weight-bold">Wireless Earphone
                                        </h3>
                                    <p className="text-white font-weight-normal">
                                        Only until the end of this Week</p>
                                    <ALink href="/shop" className="btn btn-rounded btn-white btn-outline">Shop
                                            Now<i className="d-icon-arrow-right"></i></ALink>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                    <div className="col-md-6 mb-4">
                        <Reveal keyframes={fadeInUpShorter} delay={600} duration={1000} triggerOnce>
                            <div className="banner banner6 banner-fixed overlay-light content-middle">
                                <figure>
                                    <LazyLoadImage
                                        src="./images/home/banner/10.jpg"
                                        alt="banner"
                                        effect="opacity"
                                        width="280"
                                        height="207"
                                    />
                                </figure>
                                <div className="banner-content pl-8">
                                    <h4 className="banner-subtitle text-white font-weight-normal mb-0">Best Sellers
                                            Store</h4>
                                    <h3 className="banner-title text-white font-weight-bold">Up To 30% OFF</h3>
                                    <p className="text-white font-weight-normal opacity-8">
                                        Feel the charm in this spot</p>
                                    <ALink href="/shop" className="btn btn-rounded btn-white btn-outline">Shop
                                            Now<i className="d-icon-arrow-right"></i></ALink>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    )
}