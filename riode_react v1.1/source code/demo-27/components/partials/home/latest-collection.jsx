import Reveal from "react-awesome-reveal";

// import Custom Components
import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';
import ProductTwo from '~/components/features/product/product-two';

import { productSlider } from '~/utils/data/carousel';
import { fadeIn } from '~/utils/data/keyframes';

export default function LatestCollection(props) {
    const { products, loading } = props;

    return (
        <Reveal keyframes={fadeIn} delay={300} duration={1000} triggerOnce>
            <section className="product-wrapper pt-10 pb-10 grey-section">
                <div className="container pt-3 pb-4">
                    <h2 className="title title-simple with-link">
                        Most Viewed
                        <ALink href="/shop">View more<i className="d-icon-arrow-right"></i></ALink>
                    </h2>
                    {
                        loading ?
                            <OwlCarousel adClass="owl-theme owl-nav-inner owl-split bg-white" options={productSlider}>
                                {
                                    [1, 2, 3, 4, 5].map((item) =>
                                        <div className="product-loading-overlay" key={'best-selling-skel-' + item}></div>
                                    )
                                }
                            </OwlCarousel>
                            :
                            <OwlCarousel adClass="owl-theme owl-nav-inner owl-split bg-white" options={productSlider}>
                                {
                                    products && products.slice(1, 6).map((item, index) =>
                                        <ProductTwo
                                            adClass="text-center"
                                            product={item}
                                            key={`best-product-${index}`} />
                                    )
                                }
                            </OwlCarousel>
                    }
                </div>
            </section>
        </Reveal>
    )
}