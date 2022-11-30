import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/custom-link';

import ProductTwo from '~/components/features/product/product-two';

import { fadeIn, fadeInRightShorter, fadeInLeftShorter, blurIn } from '~/utils/data/keyframes';

function BestCollection ( props ) {
    const { products, loading } = props;

    return (
        <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1200 } triggerOnce>
            <section className="product-wrapper best-products mt-10 pt-7 pb-8">
                <Reveal keyframes={ blurIn } delay={ 100 } duration={ 1200 } triggerOnce>
                    <h2 className="title title-simple">Best Selling</h2>
                </Reveal>

                <div className="product-grid row">
                    <div className="col-lg-4 mb-6">
                        <Reveal keyframes={ fadeInRightShorter } delay={ 500 } duration={ 1200 } triggerOnce>
                            <div className="banner banner-fixed overlay-effect-three" style={ { backgroundColor: "#2f2f2f" } }>
                                <figure>
                                    <LazyLoadImage
                                        src="./images/home/banner/6.jpg"
                                        alt="banner"
                                        effect="opacity"
                                        width={ 100 }
                                        height={ 705 }
                                    />
                                </figure>

                                <div className="banner-content">
                                    <h4 className="banner-subtitle ls-s font-weight-normal">Featured</h4>
                                    <h3 className="banner-title ls-m text-uppercase font-weight-bold">New Lifestyle<span className="d-block ls-s text-normal">Collection</span></h3>
                                    <ALink href="/shop" className="btn btn-sm btn-solid btn-rounded">Shop now</ALink>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="col-lg-8">
                        <Reveal keyframes={ fadeInLeftShorter } delay={ 500 } duration={ 1200 } triggerOnce>
                            <div className="row">
                                {
                                    loading ?
                                        <>
                                            {
                                                [ 1, 2, 3, 4, 5, 6 ].map( ( item ) =>
                                                    <div className="col-md-4 col-6" key={ 'best-selling-skel-' + item }>
                                                        <div className="product-loading-overlay"></div>
                                                    </div>
                                                )
                                            }
                                        </>
                                        :
                                        <>
                                            {
                                                products && products.slice( 0, 6 ).map( ( item, index ) =>
                                                    <div className="col-md-4 col-6" key={ `best-selling-product ${ index }` }>
                                                        <ProductTwo
                                                            product={ item }
                                                            isCat={ false }
                                                            isRating={ false }
                                                        />
                                                    </div>
                                                )
                                            }
                                        </>
                                }
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>
        </Reveal >
    )
}

export default React.memo( BestCollection );
