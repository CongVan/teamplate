import { LazyLoadImage } from 'react-lazy-load-image-component';

// import Custom Components
import ALink from '~/components/features/custom-link';

export default function LargeBanner() {
    return (
        <div className="banner banner-big mt-6">
            <figure>
                <LazyLoadImage
                    src="./images/home/banners/7.jpg"
                    alt="banner big"
                    effect="opacity"
                    width="1180"
                    height="446"
                />
            </figure>
            <div className="banner-content y-50">
                <h4 className="banner-subtitle text-uppercase font-weight-bold text-primary mb-3">Flash Sale
                            </h4>
                <h3 className="banner-title font-weight-bold mb-1">Electric Kettle</h3>
                <p className="banner-desc mb-3">Safe &amp; Water boiling in 60 seconds</p>
                <strong className="text-uppercase mb-4">Start at $29.00</strong>
                <ALink href="/shop"
                    className="btn btn-rounded btn-md btn-primary text-uppercase mb-3">Shop Now</ALink>
            </div>
        </div>
    )
}