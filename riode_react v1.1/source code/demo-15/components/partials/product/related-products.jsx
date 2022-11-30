import OwlCarousel from '~/components/features/owl-carousel';

import ProductFive from '~/components/features/product/product-five';

import { mainSlider17 } from '~/utils/data/carousel';

export default function RelatedProducts( props ) {
    const { products, adClass = "product-wrapper" } = props;

    return (
        products.length > 0 ?
            <section className="product-wrapper">
                <h2 className="title title-simple">Related Products</h2>

                <OwlCarousel adClass="owl-theme owl-nav-inner owl-split" options={ { ...mainSlider17, margin: 1 } }>
                    {
                        products && products.slice( 0, 7 ).map( ( item, index ) =>
                            <div className="product-wrap" key={ 'related-product-' + index }>
                                <ProductFive product={ item } adClass='' isCategory={ false } />
                            </div>
                        )
                    }
                </OwlCarousel>
            </section > : ''
    )
}