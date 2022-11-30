import React from 'react';
import Reveal from 'react-awesome-reveal';

import SmallProduct from '~/components/features/product/product-sm';

import { fadeIn, fadeInLeftShorter, fadeInRightShorter } from '~/utils/data/keyframes';

function SmallCollection ( props ) {
    const { products, loading } = props;

    return (
        <section className="product-widget-wrapper container mt-10 pt-lg-4 skeleton-body">
            <div className="row">
                <div className="col-md-4 mb-4">
                    <Reveal keyframes={ fadeInLeftShorter } delay={ 500 } duration={ 1200 } triggerOnce>
                        <div className="widget widget-products">
                            <div className="title-wrapper mb-4">
                                <h2 className="title title-underline mb-0">Featured</h2>
                            </div>

                            <div className="products-col">
                                {
                                    loading ?
                                        <>
                                            {
                                                [ 1, 2, 3 ].map( ( item ) =>
                                                    <div className="skel-pro-list mb-4" key={ 'sale-small-skel-' + item }></div>
                                                )
                                            }
                                        </> :
                                        products.featured && products.featured.slice( 0, 3 ).map( ( item, index ) => (
                                            <SmallProduct
                                                product={ item }
                                                key={ `sale-sm-product-${ index }` }
                                                isReviewCount={ false }
                                            />
                                        ) )
                                }
                            </div>
                        </div>
                    </Reveal>
                </div>

                <div className="col-md-4 mb-4">
                    <Reveal keyframes={ fadeIn } delay={ 300 } duration={ 1200 } triggerOnce>
                        <div className="widget widget-products">
                            <div className="title-wrapper mb-4">
                                <h2 className="title title-underline mb-0">Latest Products</h2>
                            </div>

                            <div className="products-col">
                                {
                                    loading ?
                                        <>
                                            {
                                                [ 1, 2, 3 ].map( ( item ) =>
                                                    <div className="skel-pro-list mb-4" key={ 'latest-small-skel-' + item }></div>
                                                )
                                            }
                                        </> :
                                        products.latest && products.latest.slice( 0, 3 ).map( ( item, index ) => (
                                            <SmallProduct
                                                product={ item }
                                                key={ `latest-sm-product-${ index }` }
                                                isReviewCount={ false }
                                            />
                                        ) )
                                }
                            </div>
                        </div>
                    </Reveal>
                </div>

                <div className="col-md-4 mb-4">
                    <Reveal keyframes={ fadeInRightShorter } delay={ 500 } duration={ 1200 } triggerOnce>
                        <div className="widget widget-products">
                            <div className="title-wrapper mb-4">
                                <h2 className="title title-underline mb-0">Top Rated</h2>
                            </div>

                            <div className="products-col">
                                {
                                    loading ?
                                        <>
                                            {
                                                [ 1, 2, 3 ].map( ( item ) =>
                                                    <div className="skel-pro-list mb-4" key={ 'best-small-skel-' + item }></div>
                                                )
                                            }
                                        </> :
                                        products.topRated && products.topRated.slice( 0, 3 ).map( ( item, index ) => (
                                            <SmallProduct
                                                product={ item }
                                                key={ `best-sm-product-${ index }` }
                                                isReviewCount={ false }
                                            />
                                        ) )
                                }
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}

export default React.memo( SmallCollection );