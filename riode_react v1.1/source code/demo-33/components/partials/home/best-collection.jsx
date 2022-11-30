import React from 'react';
import Reveal from 'react-awesome-reveal';

import OwlCarousel from '~/components/features/owl-carousel';

import ProductTwo from '~/components/features/product/product-two';

import { productSlider } from '~/utils/data/carousel';
import { fadeIn } from '~/utils/data/keyframes';

function BestCollection(props) {
    const { products, loading, featured = false } = props;

    return (
        <Reveal keyframes={fadeIn} delay={300} duration={1200} triggerOnce>
            <section className={`product-wrapper container mt-10 ${featured ? 'pt-8 pb-2 mb-8' : 'new-arrival pt-9 pb-8'}`}>
                <h2 className="title title-center mb-5">{featured ? 'Our Featured' : 'New Arrivals'}</h2>

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