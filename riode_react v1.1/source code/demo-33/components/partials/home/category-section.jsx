import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Reveal from "react-awesome-reveal";

import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { productSlider3 } from '~/utils/data/carousel';
import { fadeIn, fadeInRightShorter } from '~/utils/data/keyframes';

import { parallaxHandler } from '~/utils';

function CategorySection() {
    const router = useRouter();

    useEffect(() => {
        window.addEventListener('scroll', parallaxHandler, true);

        return () => {
            window.removeEventListener('scroll', parallaxHandler, true);
        }
    }, [])

    return (
        <Reveal keyframes={fadeIn} delay={300} duration={1200} triggerOnce>
            <section className="pt-10 pb-10 mt-1 caty-section parallax"
                style={{ backgroundImage: 'url(images/home/parallax.jpg)' }}
                data-option="{'speed': 3}">
                <div className="container pt-4 pb-6">
                    <h2 className="title title-center text-white">Popular Categories</h2>
                    <Reveal keyframes={fadeInRightShorter} delay={300} duration={1200} triggerOnce>
                        <OwlCarousel adClass="owl-theme" options={productSlider3}>
                            <div className="category category-absolute category-classic overlazy-zoom">
                                <figure className="category-media">
                                    <img
                                        src="./images/categories/category5.jpg"
                                        alt="Cateogry"
                                        width={280}
                                        height={280}
                                    />
                                </figure>
                                <ALink href={{ pathname: "/shop", query: { category: "women-s-collection" } }}>
                                    <div className="category-content">
                                        <h4 className="category-name">Women's Collection</h4>
                                        <span className="category-count">7 Products</span>
                                    </div>
                                </ALink>
                            </div>
                            <div className="category category-absolute category-classic overlazy-zoom">
                                <figure className="category-media">
                                    <img
                                        src="./images/categories/category6.jpg"
                                        alt="Cateogry"
                                        width={280}
                                        height={280}
                                    />
                                </figure>
                                <ALink href={{ pathname: "/shop", query: { category: "electronics" } }}>
                                    <div className="category-content">
                                        <h4 className="category-name">Electronics</h4>
                                        <span className="category-count">7 Products</span>
                                    </div>
                                </ALink>
                            </div>
                            <div className="category category-absolute category-classic overlazy-zoom">
                                <figure className="category-media">
                                    <img
                                        src="./images/categories/category7.jpg"
                                        alt="Cateogry"
                                        width={280}
                                        height={280}
                                    />
                                </figure>
                                <ALink href={{ pathname: "/shop", query: { category: "for-men-s" } }}>
                                    <div className="category-content">
                                        <h4 className="category-name">For Men's</h4>
                                        <span className="category-count">5 Products</span>
                                    </div>
                                </ALink>
                            </div>
                            <div className="category category-absolute category-classic overlazy-zoom">
                                <figure className="category-media">
                                    <img
                                        src="./images/categories/category8.jpg"
                                        alt="Cateogry"
                                        width={280}
                                        height={280}
                                    />
                                </figure>
                                <ALink href={{ pathname: "/shop", query: { category: "sporting-goods" } }}>
                                    <div className="category-content">
                                        <h4 className="category-name">Sporting Goods</h4>
                                        <span className="category-count">5 Products</span>
                                    </div>
                                </ALink>
                            </div>
                        </OwlCarousel>
                    </Reveal>
                </div>
            </section>
        </Reveal >
    )
}

export default React.memo(CategorySection);