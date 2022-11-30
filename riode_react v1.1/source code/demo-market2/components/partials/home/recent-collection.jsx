import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { productSlider3 } from '~/utils/data/carousel';
import { fadeIn } from '~/utils/data/keyframes';

function RecentCollection ( props ) {
    const { products, loading } = props;

    return (
        <>
            <Reveal keyframes={ fadeIn } duration={ 1200 } triggerOnce>
                <h2 className="title ls-normal">Your Recently Viewed Products</h2>
            </Reveal>
            <Reveal keyframes={ fadeIn } duration={ 1200 } triggerOnce>
                {

                    loading ?
                        <OwlCarousel adClass="recent-view-slider owl-theme mb-8" options={ productSlider3 }>
                            {
                                [ 1, 2, 3, 4, 5, 6, 7, 8 ].map( item =>
                                    <div className="product-loading-overlay" key={ 'recent-' + item }></div> )
                            }
                        </OwlCarousel>
                        :
                        <OwlCarousel adClass="recent-view-slider owl-theme mb-8" options={ productSlider3 }>
                            {
                                products && products.map( ( item, index ) =>
                                    <ALink href={ `/product/default/${ item.slug }` } index={ 'recent-' + index }>
                                        <figure className="product-border">
                                            <LazyLoadImage
                                                src={ process.env.NEXT_PUBLIC_ASSET_URI + item.pictures[ 0 ].url }
                                                alt="Product"
                                                width="153"
                                                height="172"
                                            />
                                        </figure>
                                    </ALink>
                                )
                            }
                        </OwlCarousel>
                }
            </Reveal>
        </>
    )
}

export default React.memo( RecentCollection );