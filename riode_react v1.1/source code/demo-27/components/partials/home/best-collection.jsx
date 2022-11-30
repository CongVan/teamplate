import React from 'react';
import Reveal from 'react-awesome-reveal';

import ALink from '~/components/features/custom-link';
import Countdown from '~/components/features/countdown';

import ProductTwo from '~/components/features/product/product-two';
import SmallProduct from '~/components/features/product/product-sm';

import { fadeIn } from '~/utils/data/keyframes';

function BestCollection(props) {
    const { products, loading, deal } = props;

    return (
        <Reveal keyframes={fadeIn} delay={300} duration={1200} triggerOnce>
            <section className={`product-wrapper container best-container mt-10 ${deal ? 'pt-3' : 'pt-1  pb-4'}`}>
                {
                    deal ?
                        <div className="title-wrapper">
                            <h2 className="title mr-md-4 mt-1 mb-1">Today’s Best Deals</h2>
                            <Countdown type={3} />
                            <ALink href="/shop" className="btn btn-link">View more<i className="d-icon-arrow-right"></i></ALink>
                        </div>
                        :
                        <h2 className="title title-simple with-link">Our Featured<ALink href="/shop">View more<i className="d-icon-arrow-right"></i></ALink></h2>
                }
                {
                    loading ?
                        <div className="grid grid-float row gutter-no">
                            <div className="grid-item col-lg-3 col-sm-6 height-x3">
                                <div className="product-loading-overlay"></div>
                            </div>
                            <div className="grid-item col-lg-3 col-sm-6 height-x1">
                                {
                                    [1, 2, 3, 4, 5, 6].map((item) =>
                                        <div className="product-loading-overlay" key={'best-selling-skel-' + item}></div>
                                    )
                                }
                            </div>
                        </div>
                        :
                        <div className="product-grid">
                            <div className="grid grid-float row gutter-no">
                                <div className="grid-item col-lg-3 col-sm-6 height-x3">
                                    {
                                        products && products.slice(1, 2).map((item, index) =>
                                            <ProductTwo
                                                adClass="text-center"
                                                product={item}
                                                key={`best-product-${index}`} />
                                        )
                                    }
                                </div>
                                {
                                    products && products.slice(1, 10).map((item, index) =>
                                        <div className="grid-item col-lg-3 col-sm-6 height-x1" key={`best-product-${index}`}>
                                            <SmallProduct product={item} />
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                }
            </section>
        </Reveal >
    )
}

export default React.memo(BestCollection);