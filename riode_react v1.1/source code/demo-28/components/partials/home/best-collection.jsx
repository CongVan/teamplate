import React from 'react';
import Reveal from 'react-awesome-reveal';

import OwlCarousel from '~/components/features/owl-carousel';

import ProductTwo from '~/components/features/product/product-two';

import { productSlider } from '~/utils/data/carousel';
import { fadeIn } from '~/utils/data/keyframes';

function BestCollection(props) {
    const { products, loading } = props;

    return (
        <Reveal keyframes={fadeIn} delay={300} duration={1200} triggerOnce>
            <section className="mt-10 pt-lg-4 products-section-1">
                {
                    loading ?
                        <OwlCarousel adClass="owl-theme owl-nav-full" options={productSlider}>
                            {
                                [1, 2, 3, 4, 5].map((item) =>
                                    <div className="product-loading-overlay" key={'best-selling-skel-' + item}></div>
                                )
                            }
                        </OwlCarousel>
                        :
                        <OwlCarousel adClass="owl-theme owl-nav-full" options={productSlider}>
                            {
                                products && products.map((item, index) =>
                                    <ProductTwo
                                        product={item}
                                        key={`top-selling-product ${index}`}
                                    />
                                )
                            }
                        </OwlCarousel>
                }
            </section>
        </Reveal>
    )
}

export default React.memo(BestCollection);
