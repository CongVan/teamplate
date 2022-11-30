import React from 'react';
import Reveal from 'react-awesome-reveal';

import OwlCarousel from '~/components/features/owl-carousel';

import ProductTwo from '~/components/features/product/product-two';

import { productSlider } from '~/utils/data/carousel';
import { fadeInUpShorter, blurIn, fadeIn } from '~/utils/data/keyframes';

function BestCollection(props) {
    const { products, loading } = props;

    return (
        <section className="mt-8 pb-1">
            <div className="container">
                <div className="title-wrapper text-center">
                    <Reveal keyframes={fadeInUpShorter} delay={300} duration={1000} triggerOnce>
                        <h5 className="title-info text-grey font-weight-normal lh-1 ls-md">New Collection</h5>
                    </Reveal>
                    <Reveal keyframes={blurIn} delay={400} duration={1000} triggerOnce>
                        <h3 className="title-lg font-weight-bold lh-1 mb-0">Best Sellers</h3>
                    </Reveal>
                </div>
                {
                    loading ?
                        <OwlCarousel adClass="owl-theme owl-dot-dark owl-dot-close products" options={productSlider}>
                            {
                                [1, 2, 3, 4, 5].map((item) =>
                                    <div className="product-loading-overlay" key={'best-selling-skel-' + item}></div>
                                )
                            }
                        </OwlCarousel>
                        :
                        <OwlCarousel adClass="owl-theme owl-dot-dark owl-dot-close products" options={productSlider}>
                            {
                                products && products.map((item, index) =>
                                    <Reveal keyframes={fadeIn} delay={500} duration={1000} key={`top-selling-product ${index}`} triggerOnce>
                                        <ProductTwo
                                            product={item}
                                            adClass="text-center"
                                        />
                                    </Reveal>
                                )
                            }
                        </OwlCarousel>
                }
            </div>
        </section>
    )
}

export default React.memo(BestCollection);
