import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/custom-link';

import { blurIn, fadeInUpShorter, fadeInRightShorter, fadeIn, fadeInLeftShorter } from '~/utils/data/keyframes';

function CategorySection() {
    const router = useRouter();
    const ref = useRef();
    let iso;

    useEffect(() => {
        isotopeLoad();
    }, [])

    async function isotopeLoad() {
        const Isotope = (await import('isotope-layout')).default;
        iso = new Isotope(ref.current, {
            itemSelector: '.grid-item',
            layoutMode: 'masonry',
            masonry: {
                columnWidth: '.grid-space'
            }
        });
    }

    return (
        <Reveal keyframes={fadeIn} delay={300} duration={1200} triggerOnce>
            <section className="mt-4 category-section p-relative overflow-hidden">
                <div className="container">
                    <div className="title-wrapper text-center">
                        <Reveal keyframes={fadeInUpShorter} delay={300} duration={1000} className="h-100" triggerOnce>
                            <h5 className="title-info text-grey font-weight-normal lh-1 ls-md">New Collection</h5>
                        </Reveal>
                        <Reveal keyframes={blurIn} delay={400} duration={1000} triggerOnce>
                            <h3 className="title-md font-weight-bold lh-1 mb-5">Shop By Categories</h3>
                        </Reveal>
                    </div>

                    <div className="row grid" ref={ref}>
                        <div className="grid-item col-lg-6 col-12 height-x3">
                            <Reveal keyframes={fadeInRightShorter} delay={300} duration={1000} className="h-100" triggerOnce>
                                <div className="category category-banner category-absolute overlay-light justify-content-center"
                                    style={{ backgroundColor: '#D1BDAC' }}>
                                    <ALink href={{ pathname: "/shop", query: { category: "women-s-shoes" } }}>
                                        <figure className="category-media">
                                            <LazyLoadImage
                                                src="./images/home/categories/1.jpg"
                                                alt="category"
                                                effect="opacity; transform"
                                                width="585"
                                                height="397"
                                            />
                                        </figure>
                                    </ALink>
                                    <div className="category-content y-50 x-50">
                                        <h4 className="mb-0">Women's</h4>
                                        <span className="text-uppercase mb-0">
                                            New Releases
                                        </span>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                        <div className="grid-item col-lg-3 col-md-6 col-sm-6 col-12 height-x2">
                            <Reveal keyframes={fadeInLeftShorter} delay={500} duration={1000} className="h-100" triggerOnce>
                                <div className="category category-badge category-absolute overlay-dark"
                                    style={{ backgroundColor: '#cecccd' }}>
                                    <ALink href={{ pathname: "/shop", query: { category: "brand-sale" } }}>
                                        <figure className="category-media">
                                            <LazyLoadImage
                                                src="./images/home/categories/2.jpg"
                                                alt="category"
                                                effect="opacity; transform"
                                                width="585"
                                                height="397"
                                            />
                                        </figure>
                                    </ALink>
                                    <div className="category-content x-50">
                                        <h4 className="category-name">Brand Sale</h4>
                                        <ALink className="btn btn-secondary btn-block" href={{ pathname: "/shop", query: { category: "brand-sale" } }}>Shop Now</ALink>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                        <div className="grid-item col-lg-3 col-md-6 col-sm-6 col-12 height-x1">
                            <Reveal keyframes={fadeInLeftShorter} delay={500} duration={1000} className="h-100" triggerOnce>
                                <div className="category category-badge category-absolute overlay-dark"
                                    style={{ backgroundColor: '#ddded9' }}>
                                    <ALink href="/shop">
                                        <figure className="category-media">
                                            <LazyLoadImage
                                                src="./images/home/categories/4.jpg"
                                                alt="category"
                                                effect="opacity; transform"
                                                width="585"
                                                height="397"
                                            />
                                        </figure>
                                    </ALink>
                                </div>
                            </Reveal>
                        </div>
                        <div className="grid-item col-lg-3 col-md-6 col-sm-6 col-12 height-x2">
                            <Reveal keyframes={fadeInLeftShorter} delay={500} duration={1000} className="h-100" triggerOnce>
                                <div className="category category-badge category-absolute overlay-dark"
                                    style={{ backgroundColor: '#585755' }}>
                                    <ALink href={{ pathname: "/shop", query: { category: "bootwear" } }}>
                                        <figure className="category-media">
                                            <LazyLoadImage
                                                src="./images/home/categories/5.jpg"
                                                alt="category"
                                                effect="opacity; transform"
                                                width="585"
                                                height="397"
                                            />
                                        </figure>
                                    </ALink>
                                    <div className="category-content x-50">
                                        <h4 className="category-name">Bootcare</h4>
                                        <ALink className="btn btn-secondary btn-block" href={{ pathname: "/shop", query: { category: "bootwear" } }}>Shop Now</ALink>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                        <div className="grid-item col-lg-3 col-md-6 col-sm-6 col-12 height-x1">
                            <Reveal keyframes={fadeInLeftShorter} delay={500} duration={1000} className="h-100" triggerOnce>
                                <div className="category category-badge category-absolute overlay-dark"
                                    style={{ backgroundColor: '#363533' }} >
                                    <ALink href="/shop">
                                        <figure className="category-media">
                                            <LazyLoadImage
                                                src="./images/home/categories/3.jpg"
                                                alt="category"
                                                effect="opacity; transform"
                                                width="585"
                                                height="205"
                                            />
                                        </figure>
                                    </ALink>
                                </div>
                            </Reveal>
                        </div>
                        <div className="col-1 grid-space"></div>
                    </div>

                    <Reveal keyframes={blurIn} delay={400} duration={1000} className="h-100" triggerOnce>
                        <div className="category-more p-relative text-center">
                            <ALink href="/shop" className="btn btn-rounded btn-secondary btn-outline mt-8">View all
                                categories</ALink>
                        </div>
                    </Reveal>
                </div>
            </section>
        </Reveal >
    )
}

export default React.memo(CategorySection);