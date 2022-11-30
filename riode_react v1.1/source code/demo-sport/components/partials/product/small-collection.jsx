import React from 'react';
import Reveal from 'react-awesome-reveal';

import SmallProduct from '~/components/features/product/product-sm';

import { fadeInLeftShorter, fadeInRightShorter } from '~/utils/data/keyframes';

function SmallCollection ( props ) {
    const { featured, bestSelling, topRated, loading } = props;

    return (
        <section className="products-wrapper product-list-collection pt-7 mb-8 skeleton-body">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <Reveal keyframes={ fadeInLeftShorter } delay={ 500 } duration={ 1200 } triggerOnce>
                            <div className="widget widget-products">
                                <div className="title-wrapper title-underline mb-4">
                                    <h2 className="title mb-0">Featured</h2>
                                </div>

                                <div className="products-col">
                                    {
                                        loading ?
                                            <>
                                                {
                                                    [ 1, 2, 3 ].map( ( item ) =>
                                                        <div className="skel-pro-list mb-4" key={ 'featured-small-skel-' + item }></div>
                                                    )
                                                }
                                            </> :
                                            featured && featured.slice( 0, 3 ).map( ( item, index ) => (
                                                <SmallProduct
                                                    product={ item }
                                                    key={ `featured-sm-product-${ index }` }
                                                    isReviewCount={ false }
                                                />
                                            ) )
                                    }
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="col-md-4 mb-4">
                        <Reveal keyframes={ fadeInLeftShorter } delay={ 300 } duration={ 1200 } triggerOnce>
                            <div className="widget widget-products">
                                <div className="title-wrapper title-underline mb-4">
                                    <h2 className="title mb-0">Best Selling</h2>
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
                                            bestSelling && bestSelling.slice( 0, 3 ).map( ( item, index ) => (
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

                    <div className="col-md-4 mb-4">
                        <Reveal keyframes={ fadeInRightShorter } delay={ 500 } duration={ 1200 } triggerOnce>
                            <div className="widget widget-products">
                                <div className="title-wrapper title-underline mb-4">
                                    <h2 className="title mb-0">Top Rated</h2>
                                </div>

                                <div className="products-col">
                                    {
                                        loading ?
                                            <>
                                                {
                                                    [ 1, 2, 3 ].map( ( item ) =>
                                                        <div className="skel-pro-list mb-4" key={ 'rated-small-skel-' + item }></div>
                                                    )
                                                }
                                            </> :
                                            topRated && topRated.slice( 0, 3 ).map( ( item, index ) => (
                                                <SmallProduct
                                                    product={ item }
                                                    key={ `rated-sm-product-${ index }` }
                                                    isReviewCount={ false }
                                                />
                                            ) )
                                    }
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default React.memo( SmallCollection );