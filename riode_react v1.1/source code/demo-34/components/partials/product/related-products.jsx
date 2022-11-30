import OwlCarousel from '~/components/features/owl-carousel';

import ProductTwo from '~/components/features/product/product-two';

import { productSlider3 } from '~/utils/data/carousel';

export default function RelatedProducts(props) {
    const { products, adClass = "pt-3 mt-10" } = props;

    return (
        products.length > 0 ?
            <section className={`${adClass} related-collection`}>
                <h2 className="title justify-content-center">Related Products</h2>

                <OwlCarousel adClass="owl-theme owl-nav-full split-line" options={productSlider3}>
                    {
                        products && products.slice(0, 4).map((item, index) =>
                            <ProductTwo product={item} key={'product-two-' + index} adClass='text-center shadow-media' />
                        )
                    }
                </OwlCarousel>
            </section> : ''
    )
}