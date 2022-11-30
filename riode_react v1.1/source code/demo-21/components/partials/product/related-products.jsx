import OwlCarousel from '~/components/features/owl-carousel';

import ProductFive from '~/components/features/product/product-five';

import { relatedProductSlider } from '~/utils/data/carousel';

export default function RelatedProducts ( props ) {
    const { products, adClass = "" } = props;

    return (
        products.length > 0 ?
            <section className={ `${ adClass }` }>
                <h2 className="title title-simple">Related Products</h2>

                <OwlCarousel adClass="owl-theme owl-nav-inner owl-split no-border" options={ relatedProductSlider }>
                    {
                        products && products.slice( 0, 5 ).map( ( item, index ) =>
                            <ProductFive product={ item } key={ 'product-two-' + index } isCat={ false } />
                        )
                    }
                </OwlCarousel>
            </section> : ''
    )
}