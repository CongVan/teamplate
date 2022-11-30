import React from 'react';
import Reveal from "react-awesome-reveal";
import { useRouter } from 'next/router';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import Custom Components
import ALink from '~/components/features/custom-link';

import { fadeInUpShorter, fadeInRightShorter, fadeInLeftShorter } from '~/utils/data/keyframes';

export default function BannerSection() {
    const router = useRouter();

    return (
        <section className="banner-section pt-lg-8 mt-md-6 pb-2 overflow-hidden">
            <div className="row gutter-no p-relative">
                <div className="col-lg-6 col-md-12 banner1">
                    <Reveal keyframes={fadeInRightShorter} delay={300} duration={1000} triggerOnce>
                        <div className="banner banner-fixed overlay-dark d-flex justify-content-center overlay-zoom" style={{ backgroundColor: '#173B75' }}>
                            <figure className="w-100">
                                <LazyLoadImage
                                    src="./images/home/banner/1.jpg"
                                    alt="banner"
                                    effect="opacity"
                                    width="952"
                                    height="566"
                                />
                            </figure>
                            <div className="banner-content y-50 text-center pl-2 pr-2">
                                <Reveal keyframes={fadeInUpShorter} delay={200} duration={1000} triggerOnce>
                                    <h4 className="banner-subtitle font-weight-normal text-white text-uppercase">Up to 30% Off</h4>
                                </Reveal>
                                <Reveal keyframes={fadeInUpShorter} delay={300} duration={1000} triggerOnce>
                                    <h3 className="banner-title font-weight-semi-bold text-white mb-3">Cyber Monday Sale</h3>
                                </Reveal>
                                <Reveal keyframes={fadeInUpShorter} delay={400} duration={1000} triggerOnce>
                                    <p className="text-white">Get our outdoor shoe selection has everything<br />
                                            you need to go the distance</p>
                                </Reveal>
                                <Reveal keyframes={fadeInRightShorter} delay={500} duration={1000} triggerOnce>
                                    <div className="d-flex justify-content-center">
                                        <ALink href={{ pathname: "/shop", query: { category: "women-s-shoes" } }}
                                            className="btn btn-rounded btn-outline btn-white text-secondary">Shop Women<i className="d-icon-arrow-right"></i></ALink>
                                        <ALink href={{ pathname: "/shop", query: { category: "men-s-shoes" } }}
                                            className="btn btn-rounded ml-2 btn-outline btn-white text-secondary">Shop Men<i className="d-icon-arrow-right"></i></ALink>
                                    </div>
                                </Reveal>
                            </div>
                        </div>
                    </Reveal>
                </div>
                <div className="col-lg-6 col-md-12">
                    <Reveal keyframes={fadeInLeftShorter} delay={700} duration={1000} triggerOnce>
                        <div className="banner banner2 banner-fixed" style={{ backgroundColor: '#f4f4f4' }}>
                            <figure>
                                <LazyLoadImage
                                    src="./images/home/banner/2.jpg"
                                    alt="banner"
                                    effect="opacity"
                                    width="952"
                                    height="566"
                                />
                            </figure>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}