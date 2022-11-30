import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/custom-link';

import ProductTwo from '~/components/features/product/product-two';

import { fadeIn, fadeInLeftShorter, fadeInRightShorter, blurIn } from '~/utils/data/keyframes';

function FeaturedCollection ( props ) {
    const { products, loading } = props;

    return (
        <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1200 } triggerOnce>
            <section className="product-wrapper featured-products mt-10 pt-7 pb-8">
                <Reveal keyframes={ blurIn } delay={ 100 } duration={ 1200 } triggerOnce>
                    <h2 className="title title-simple">Featured</h2>
                </Reveal>

                <div className="product-grid row">
                    <div className="col-lg-4 mb-6 order-lg-last">
                        <Reveal keyframes={ fadeInLeftShorter } delay={ 500 } duration={ 1200 } triggerOnce>
                            <div className="banner banner-fixed overlay-effect-three" style={ { backgroundColor: "#2f2f2f" } }>
                                <figure>
                                    <LazyLoadImage
                                        src="./images/home/banner/7.jpg"
                                        alt="banner"
                                        effect="opacity"
                                        width={ 100 }
                                        height={ 705 }
                                    />
                                </figure>

                                <div className="banner-content">
                                    <h4 className="banner-subtitle ls-s text-white font-weight-normal">Featured</h4>
                                    <h3 className="banner-title mb-4 text-uppercase text-white font-weight-bold">Fashion 2021<span className="d-block ls-s text-capitalize">collection</span></h3>
                                    <ALink href="/shop" className="btn btn-sm btn-solid btn-rounded">Shop now</ALink>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="col-lg-8">
                        <Reveal keyframes={ fadeInRightShorter } delay={ 500 } duration={ 1200 } triggerOnce>
                            <div className="row">
                                {
                                    loading ?
                                        <>
                                            {
                                                [ 1, 2, 3, 4, 5, 6 ].map( ( item ) =>
                                                    <div className="col-md-4 col-6" key={ 'featured-skel-' + item }>
                                                        <div className="product-loading-overlay"></div>
                                                    </div>
                                                )
                                            }
                                        </>
                                        :
                                        <>
                                            {
                                                products && products.slice( 0, 6 ).map( ( item, index ) =>
                                                    <div className="col-md-4 col-6" key={ `featured-product ${ index }` }>
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

export default React.memo( FeaturedCollection );
