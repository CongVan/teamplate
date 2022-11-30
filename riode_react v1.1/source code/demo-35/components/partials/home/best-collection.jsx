import React from 'react';
import Reveal from 'react-awesome-reveal';

import OwlCarousel from '~/components/features/owl-carousel';

import ProductNine from '~/components/features/product/product-nine';

import { productSlider } from '~/utils/data/carousel';
import { fadeIn } from '~/utils/data/keyframes';

function BestCollection(props) {
    const { products, loading } = props;

    return (
        <Reveal keyframes={fadeIn} delay={300} duration={1200} triggerOnce>
            {
                loading ?
                    <OwlCarousel adClass="products-group owl-theme" options={productSlider}>
                        {
                            [1, 2, 3, 4, 5].map((item) =>
                                <div className="product-loading-overlay" key={'best-selling-skel-' + item}></div>
                            )
                        }
                    </OwlCarousel>
                    :
                    <OwlCarousel adClass="products-group owl-theme" options={productSlider}>
                        {
                            products && products.map((item, index) =>
                                <div className="product-wrap" key={'topsell-product' + item}>
                                    <ProductNine
                                        product={item}
                                    />
                                </div>
                            )
                        }
                    </OwlCarousel>
            }
        </Reveal>
    )
}

export default React.memo(BestCollection);
