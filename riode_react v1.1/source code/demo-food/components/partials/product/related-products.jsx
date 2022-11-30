import OwlCarousel from '~/components/features/owl-carousel';

import ProductSeven from '~/components/features/product/product-seven';

import { mainSlider17, productSlider2 } from '~/utils/data/carousel';

export default function RelatedProducts ( props ) {
    const { products, adClass = "pt-3 mt-10", count = 4 } = props;

    return (
        products.length > 0 ?
            <section className={ `${ adClass }` }>
                <h2 className="title justify-content-center">Related Products</h2>

                <OwlCarousel adClass="owl-carousel owl-theme owl-nav-full" options={ count === 4 ? mainSlider17 : productSlider2 }>
                    {
                        products && products.slice( 0, 5 ).map( ( item, index ) =>
                            <ProductSeven isRating={ true } product={ item } key={ 'product-seven-' + index } adClass='' />
                        )
                    }
                </OwlCarousel>
            </section> : ''
    )
}