import React from 'react';
import { useRouter } from 'next/router';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import Custom Components
import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { mainSlider13 } from '~/utils/data/carousel';

export default function BannerGroup() {
    const router = useRouter();
    const pathname = router.pathname;
    const query = router.query;

    return (
        <OwlCarousel adClass="banner-group owl-theme mb-4" options={mainSlider13}>
            <div className="banner banner-lg overlay-zoom overlay-dark" style={{ backgroundColor: '#88A58F' }}>
                <figure>
                    <LazyLoadImage
                        src="./images/home/banners/4.jpg"
                        alt="banner"
                        effect="opacity"
                        width="621"
                        height="312"
                    />
                </figure>
                <div className="banner-content y-50">
                    <h4 className="banner-subtitle text-white text-uppercase mb-0">Must-Buy</h4>
                    <h2 className="banner-title text-white font-weight-bold mb-8">Electronics</h2>
                    <ALink href={{ pathname: "/shop", query: { category: "electronics" } }}
                        className="btn btn-rounded btn-md btn-outline btn-white text-uppercase">Shop
                        now</ALink>
                </div>
            </div>
            <div className="banner banner-lg overlay-zoom overlay-dark" style={{ backgroundColor: '#A1A09E' }}>
                <figure>
                    <LazyLoadImage
                        src="./images/home/banners/5.jpg"
                        alt="banner"
                        effect="opacity"
                        width="621"
                        height="312"
                    />
                </figure>
                <div className="banner-content y-50">
                    <h4 className="banner-subtitle text-white text-uppercase mb-0">Brand Sale</h4>
                    <h2 className="banner-title text-white font-weight-bold mb-8">Fashion Shoes</h2>
                    <ALink href={{ pathname: "/shop", query: { category: "fashion-shoes" } }}
                        className="btn btn-rounded btn-md btn-outline btn-white text-uppercase">Shop
                        now</ALink>
                </div>
            </div>
            <div className="banner banner-lg overlay-zoom overlay-dark" style={{ backgroundColor: '#48484A' }}>
                <figure>
                    <LazyLoadImage
                        src="./images/home/banners/6.jpg"
                        alt="banner"
                        effect="opacity"
                        width="621"
                        height="312"
                    />
                </figure>
                <div className="banner-content y-50">
                    <h4 className="banner-subtitle text-white text-uppercase mb-0">Flash Sale</h4>
                    <h2 className="banner-title text-white font-weight-bold mb-8">Accessories</h2>
                    <ALink href={{ pathname: "/shop", query: { category: "accessories" } }}
                        className="btn btn-rounded btn-md btn-outline btn-white text-uppercase">Shop now</ALink>
                </div>
            </div>
        </OwlCarousel>
    )
}