import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import Custom Components
import ALink from '~/components/features/custom-link';

import { fadeIn, fadeInUpShorter, fadeInLeftShorter } from '~/utils/data/keyframes';

export default function Bannergroup() {
    return (
        <div className="container banner-container">
            <Reveal keyframes={fadeIn} delay={300} duration={1000} triggerOnce>
                <section className="banners-group mt-10 pt-1">
                    <div className="banner-group1">
                        <div className="decoration deco-top deco-1">
                            <img
                                src="./images/home/banner/deco-1.png"
                                alt="banner"
                                width="84"
                                height="84"
                            />
                        </div>
                        <div className="decoration deco-top deco-2">
                            <img
                                src="./images/home/banner/deco-2.png"
                                alt="banner"
                                width="232"
                                height="232"
                            />
                        </div>
                        <div className="row">
                            <div className="col-md-6 banner-desc-wrapper d-flex align-items-center mb-4 mb-lg-0">
                                <div className="banner-content pr-lg-10">
                                    <Reveal keyframes={fadeInUpShorter} delay={300} duration={1000} triggerOnce>
                                        <h3 className="banner-title font-weight-bold ls-m mb-7">
                                            Shop Men's Footwear<br />
                                            &amp; Trainers
                                        </h3>
                                    </Reveal>
                                    <Reveal keyframes={fadeInUpShorter} delay={400} duration={1000} triggerOnce>
                                        <p className="text-body mb-5">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing dolore magna aliqua. Ut
                                            enim
                                            ad minim veniam, quis nostrud exercitation.
                                        </p>
                                    </Reveal>
                                    <Reveal keyframes={fadeInUpShorter} delay={500} duration={1000} triggerOnce>
                                        <p className="text-body mb-8 ls-normal">
                                            nisi ut aliquip ex ea commodo consequat.<br />
                                            Duis aute irure dolor in reprehenderit in voluptate velit
                                        </p>
                                    </Reveal>
                                    <Reveal keyframes={fadeInUpShorter} delay={600} duration={1000} triggerOnce>
                                        <ALink href="/shop"
                                            className="btn btn-primary btn-rounded btn-outline mb-1">Shop
                                            now
                                            <i className="d-icon-arrow-right"></i></ALink>
                                    </Reveal>
                                </div>
                            </div>
                            <div className="col-md-6 banner-images-wrapper">
                                <div className="row">
                                    <div className="col-6 d-flex align-items-center">
                                        <Reveal keyframes={fadeInUpShorter} className="w-100 first-banner" delay={400} duration={1000} triggerOnce>
                                            <LazyLoadImage
                                                className="w-100"
                                                src="./images/home/banner/1.jpg"
                                                alt="banner"
                                                effect="opacity"
                                                width="325"
                                                height="318"
                                            />
                                        </Reveal>
                                    </div>
                                    <div className="col-6">
                                        <Reveal keyframes={fadeInUpShorter} delay={500} duration={1000} triggerOnce>
                                            <LazyLoadImage
                                                className="mb-4 d-block mx-auto"
                                                src="./images/home/banner/2.jpg"
                                                alt="banner"
                                                effect="opacity"
                                                width="325"
                                                height="248"
                                            />
                                        </Reveal>
                                        <Reveal keyframes={fadeInUpShorter} delay={600} duration={1000} triggerOnce>
                                            <LazyLoadImage
                                                className="d-block mx-auto"
                                                src="./images/home/banner/3.jpg"
                                                alt="banner"
                                                effect="opacity"
                                                width="325"
                                                height="248"
                                            />
                                        </Reveal>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="banner-group2 align-items-center mt-10 pt-4">
                        <div className="banner-left-section">
                            <Reveal keyframes={fadeInLeftShorter} delay={500} duration={1000} triggerOnce>
                                <div className="banner">
                                    <LazyLoadImage
                                        className="d-block"
                                        src="./images/home/banner/4.jpg"
                                        alt="banner"
                                        effect="opacity"
                                        width="680"
                                        height="346"
                                    />
                                    <div className="banner-content p-4 y-50">
                                        <h4
                                            className="banner-subtitle text-uppercase font-weight-normal text-white pb-10 mb-10">
                                            <strong className="text-primary">Riode</strong>Sports
                                        </h4>
                                        <h3 className="banner-title font-weight-normal text-white ls-m mb-5">Only Pay
                                            For<br />
                                            <strong className="font-weight-bold">Sports You Love</strong>
                                        </h3>
                                        <ALink href="/shop" className="text-uppercase btn btn-link btn-primary">Shop
                                            Now<i className="d-icon-arrow-right"></i></ALink>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                        <div className="banner-right-section bg-white mt-4 mt-md-0">
                            <div className="banner-content pr-3 pl-3 pr-lg-10 y-50">
                                <Reveal keyframes={fadeInLeftShorter} delay={700} duration={1000} triggerOnce>
                                    <h4 className="banner-subtitle text-uppercase font-weight-normal text-dark">Introducing
                                        The</h4>
                                    <h3 className="banner-title font-weight-bold ls-m mb-3">Jodan Collection</h3>
                                    <p className="mb-7">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                    eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua.</p>
                                    <ALink href="/shop" className="btn btn-primary btn-rounded btn-outline mb-1">Shop
                                    now
                                        <i className="d-icon-arrow-right"></i></ALink>
                                </Reveal>
                            </div>
                        </div>
                        <div className="decoration deco-bottom deco-1">
                            <LazyLoadImage
                                className="d-block"
                                src="./images/home/banner/deco-1.png"
                                alt="banner"
                                effect="opacity"
                                width="84"
                                height="84"
                            />
                        </div>
                        <div className="decoration deco-bottom deco-2">
                            <LazyLoadImage
                                className="d-block"
                                src="./images/home/banner/deco-2.png"
                                alt="banner"
                                effect="opacity"
                                width="232"
                                height="232"
                            />
                        </div>
                    </div>
                </section>
            </Reveal>
        </div>
    )
}