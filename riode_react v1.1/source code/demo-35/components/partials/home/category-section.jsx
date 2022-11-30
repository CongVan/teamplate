import React from 'react';
import { useRouter } from 'next/router';

import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { catySlider } from '~/utils/data/carousel';

function CategorySection() {
    const router = useRouter();
    const pathname = router.pathname;
    const query = router.query;

    return (
        <OwlCarousel adClass="owl-theme category-banners" options={catySlider}>
            <div className="category category-banner category-absolute text-white overlay-dark"
                style={{ backgroundColor: '#45494c' }}>
                <ALink href={{ pathname: "/shop", query: { category: "shop-men" } }} className="">
                    <figure className="category-media">
                        <img
                            src="./images/home/banners/1.jpg"
                            alt="banner"
                            width={380}
                            height={196}
                        />
                    </figure>
                </ALink>
                <div className="category-content">
                    <h4 className="category-name text-uppercase">Shop Men</h4>
                    <span className="category-count">
                        <span>6</span> Products
                    </span>
                    <ALink href={{ pathname: "/shop", query: { category: "shop-men" } }} className="btn btn-underline btn-link">
                        Shop Now</ALink>
                </div>
            </div>
            <div className="category category-banner category-absolute text-white overlay-dark"
                style={{ backgroundColor: '#b6afa9' }}>
                <ALink href={{ pathname: "/shop", query: { category: "shop-women" } }}>
                    <figure className="category-media">
                        <img
                            src="./images/home/banners/2.jpg"
                            alt="banner"
                            width={380}
                            height={196}
                        />
                    </figure>
                </ALink>
                <div className="category-content">
                    <h4 className="category-name text-uppercase">Shop Women</h4>
                    <span className="category-count">
                        <span>6</span> Products
                    </span>
                    <ALink href={{ pathname: "/shop", query: { category: "shop-women" } }} className="btn btn-underline btn-link">Shop Now</ALink>
                </div>
            </div>
            <div className="category category-banner category-absolute text-white overlay-dark">
                <ALink href={{ pathname: "/shop", query: { category: "shop-electric" } }}>
                    <figure className="category-media">
                        <img
                            src="./images/home/banners/3.jpg"
                            alt="banner"
                            width={380}
                            height={196}
                        />
                    </figure>
                </ALink>
                <div className="category-content">
                    <h4 className="category-name text-uppercase">Shop Electric</h4>
                    <span className="category-count">
                        <span>6</span> Products
                    </span>
                    <ALink href={{ pathname: "/shop", query: { category: "shop-electric" } }} className="btn btn-underline btn-link">Shop Now</ALink>
                </div>
            </div>
        </OwlCarousel>
    )
}

export default React.memo(CategorySection);