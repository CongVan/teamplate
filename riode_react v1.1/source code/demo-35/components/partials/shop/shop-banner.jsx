import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/custom-link';

export default function ShopBanner() {
    return (
        <div className="banner banner-big shop-banner">
            <figure>
                <LazyLoadImage
                    className="shop-image"
                    src="images/home/banners/7.jpg"
                    alt="Intro Slider"
                    effect="opacity"
                    width="878"
                    height="360"
                />
            </figure>
            <div className="banner-content y-50">
                <h4 className="banner-subtitle text-uppercase text-primary font-weight-bold mb-1">Flash Sale</h4>
                <h3 className="banner-title font-weight-bold text-uppercase mb-1">Electric Kettle</h3>
                <p className="banner-desc mb-2">Safe &amp; Water boiling in 60 seconds</p>
                <strong className="text-uppercase mb-4">Start at $29.00</strong>
                <ALink href="/shop" className="btn btn-md btn-primary text-uppercase mb-3">Shop Now</ALink>
            </div>
        </div>
    )
}