import Reveal from "react-awesome-reveal";
import { useRouter } from 'next/router';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import Custom Components
import ALink from '~/components/features/custom-link';

import { fadeIn, fadeInUpShorter, fadeInLeftShorter, fadeInRightShorter } from '~/utils/data/keyframes';

export default function Bannergroup() {
    const router = useRouter();

    return (
        <Reveal keyframes={fadeIn} delay={300} duration={1000} triggerOnce>
            <div className="container banner-container">
                <section className="banners-group banners-group1 mt-10 pt-5">
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
                            <div className="col-md-6 banner-desc-wrapper d-flex align-items-center mb-10 mb-md-0">
                                <div className="banner-content pr-lg-10">
                                    <Reveal keyframes={fadeInRightShorter} delay={300} duration={1000} triggerOnce>
                                        <h3 className="banner-title font-weight-bold ls-m">
                                            Sign up to Riode</h3>
                                    </Reveal>
                                    <Reveal keyframes={fadeInRightShorter} delay={300} duration={1000} triggerOnce>
                                        <p className="text-body mb-4 pr-6">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing dolore magna aliqua. Ut
                                            enim ad minim veniam, quis nostrud exercitation.
                                </p>
                                    </Reveal>
                                    <Reveal keyframes={fadeInRightShorter} delay={300} duration={1000} triggerOnce>
                                        <form action="#" method="get"
                                            className="input-wrapper input-wrapper-inline ml-lg-auto mb-1">
                                            <input type="email" className="form-control font-primary font-italic form-solid"
                                                name="email" id="email" placeholder="Email address here..." required />
                                            <button className="btn btn-dark btn-rounded ls-m" type="submit">Subscribe<i
                                                className="d-icon-arrow-right"></i></button>
                                        </form>
                                    </Reveal>
                                </div>
                            </div>
                            <div className="col-md-6 banner-images-wrapper">
                                <div className="row">
                                    <div className="col-6 d-flex align-items-center">
                                        <ALink href={{ pathname: "/shop", query: { category: "accessories" } }}>
                                            <div className="category category-badge category-absolute overlay-zoom w-100">
                                                <Reveal keyframes={fadeInLeftShorter} delay={400} duration={1000} className="w-100" triggerOnce>
                                                    <img
                                                        className="w-100 d-block"
                                                        src="./images/home/banner/5.jpg"
                                                        alt="banner"
                                                        width="325"
                                                        height="318"
                                                    />
                                                </Reveal>
                                                <label className="category-link">Accessories</label>
                                            </div>
                                        </ALink>
                                    </div>
                                    <div className="col-6">
                                        <Reveal keyframes={fadeInLeftShorter} delay={500} duration={1000} triggerOnce>
                                            <ALink href={{ pathname: "/shop", query: { category: "essentials" } }}>
                                                <div className="category category-badge category-absolute overlay-zoom mb-4">
                                                    <img
                                                        className="w-100 d-block"
                                                        src="./images/home/banner/6.jpg"
                                                        alt="banner"
                                                        width="325"
                                                        height="318"
                                                    />
                                                    <label className="category-link">Essentials</label>
                                                </div>
                                            </ALink>
                                        </Reveal>
                                        <Reveal keyframes={fadeInLeftShorter} delay={600} duration={1000} triggerOnce>
                                            <ALink href={{ pathname: "/shop", query: { category: "ladies-jacket" } }}>
                                                <div className="category category-badge category-absolute overlay-zoom">
                                                    <img
                                                        className="mx-auto d-block"
                                                        src="./images/home/banner/7.jpg"
                                                        alt="banner"
                                                        width="325"
                                                        height="318"
                                                    />
                                                    <label className="category-link">Ladies Jacket</label>
                                                </div>
                                            </ALink>
                                        </Reveal>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="banner-group2 align-items-center mt-10 pt-5">
                        <div className="banner-left-section">
                            <Reveal keyframes={fadeInRightShorter} delay={300} duration={1000} triggerOnce>
                                <div className="banner" style={{ backgroundColor: 'rgb(21, 22, 17)' }}>
                                    <LazyLoadImage
                                        className="d-block"
                                        src="./images/home/banner/8.jpg"
                                        alt="banner"
                                        effect="opacity"
                                        width="680"
                                        height="346"
                                    />
                                </div>
                            </Reveal>
                        </div>
                        <div className="banner-right-section bg-white mt-4 mt-md-0">
                            <div className="banner-content pr-3 pl-3 pr-lg-10 y-50">
                                <Reveal keyframes={fadeInUpShorter} delay={400} duration={1000} triggerOnce>
                                    <h4 className="banner-subtitle text-uppercase font-weight-normal text-body">NEWS
                                <span className="font-weight-semi-bold text-dark">15.02.2021</span></h4>
                                    <h3 className="banner-title font-weight-bold ls-m mb-2">Summer Season’s</h3>
                                    <p className="ls-normal mb-8 pr-5">Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit, sed
                                    do
                                    eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.</p>
                                    <ALink href="/shop" className="btn btn-primary btn-rounded btn-outline mb-1">Read more
                                <i className="d-icon-arrow-right"></i></ALink>
                                </Reveal>
                            </div>
                        </div>
                        <div className="decoration deco-bottom deco-1">
                            <img
                                src="./images/home/banner/deco-1.png"
                                alt="banner"
                                width="84"
                                height="84"
                            />
                        </div>
                        <div className="decoration deco-bottom deco-2">
                            <img
                                className="d-block"
                                src="./images/home/banner/deco-2.png"
                                alt="banner"
                                width="232"
                                height="232"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </Reveal >
    )
}