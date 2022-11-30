import OwlCarousel from '~/components/features/owl-carousel';

import ProductThree from '~/components/features/product/product-three';

import { mainSlider21, mainSlider17 } from '~/utils/data/carousel';

export default function RelatedProducts( props ) {
    const { products, adClass = "pt-3 mt-10", type = "innerwidth" } = props;

    return (
        products.length > 0 ?
            <section className={ `${ adClass }` }>
                <h2 className="title title-simple title-related font-primary text-dark text-capitalize">Related Products</h2>

                <OwlCarousel adClass="owl-carousel owl-theme owl-nav-full" options={ type === 'fullwidth' ? mainSlider21 : mainSlider17 }>
                    {
                        products && products.slice( 0, 7 ).map( ( item, index ) =>
                            <div className="product-wrap" key={ 'related-product-' + index }>
                                <ProductThree product={ item } adClass='' isCategory={ false } />
                            </div>
                        )
                    }
                </OwlCarousel>
            </section> : ''
    )
}