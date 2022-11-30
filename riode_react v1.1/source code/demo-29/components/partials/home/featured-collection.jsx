import Reveal from 'react-awesome-reveal';
import React from 'react';

import OwlCarousel from '~/components/features/owl-carousel';

import ProductNine from '~/components/features/product/product-nine';
import SmallProduct from '~/components/features/product/product-small';

import { productSlider2 } from '~/utils/data/carousel';
import { fadeIn, fadeInUpShorter } from '~/utils/data/keyframes';

function FeaturedCollection(props) {
    const { products, loading } = props;

    return (
        <section className="grey-section pt-10 pb-10">
            <div className="container pt-6 mb-4">
                <Reveal keyframes={fadeIn} delay={300} duration={1200} triggerOnce>
                    <h2 className="title title-center d-block">Our Featured</h2>
                </Reveal>
                <div className="row mb-10 pb-4">
                    {
                        loading ?
                            <>
                                {
                                    [1, 2, 3, 4, 5].map((item) =>
                                        <div className="col-md-6 col-lg-4 col-xl-4 col-xxl-3" key={'featured-skel-' + item}>
                                            <div className="product-loading-overlay"></div>
                                        </div>
                                    )
                                }
                            </>
                            :
                            <>
                                {
                                    products && products.map((item, index) =>
                                        <div className="col-md-6 col-lg-4 col-xl-4 col-xxl-3" key={`featured-product-${index}`}>
                                            <SmallProduct
                                                product={item} />
                                        </div>
                                    )
                                }
                            </>
                    }
                </div>
                <div className="row product-wrapper">
                    <Reveal keyframes={fadeInUpShorter} delay={500} duration={1200} triggerOnce>
                        <h2 className="title title-center d-block">Best of the Week</h2>
                        {
                            loading ?
                                <OwlCarousel adClass="owl-theme" options={productSlider2}>
                                    {
                                        [1, 2, 3, 4, 5].map((item) =>
                                            <div className="product-loading-overlay" key={'featured-skel-' + item}></div>
                                        )
                                    }
                                </OwlCarousel>
                                :
                                <OwlCarousel adClass="owl-theme" options={productSlider2}>
                                    {
                                        products && products.slice(0, 6).map((item, index) =>
                                            <ProductNine
                                                product={item}
                                                key={`featured-product-${index}`} />
                                        )
                                    }
                                </OwlCarousel>
                        }
                    </Reveal>
                </div>
            </div>
        </section >
    )
}

export default React.memo(FeaturedCollection);
