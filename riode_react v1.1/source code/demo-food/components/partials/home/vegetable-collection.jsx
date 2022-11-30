import React from 'react';
import Reveal from 'react-awesome-reveal';

import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import ProductSeven from '~/components/features/product/product-seven';

import { fadeInUpShorter } from '~/utils/data/keyframes';
import { productSlider } from '~/utils/data/carousel';

function VegetableCollection ( props ) {
    const { products, loading } = props;

    return (
        <section className="products-wrapper container mt-10 pb-lg-4 mb-8">
            <Reveal keyframes={ fadeInUpShorter } duration={ 1200 } triggerOnce>
                <>
                    <div className="title-wrapper mb-4">
                        <h2 className="title title-underline mb-0">Consumer Vegetables</h2>
                        <ALink href={ { pathname: "/shop", query: { category: "vegetables" } } } className="btn btn-link">View All<i className="d-icon-arrow-right"></i></ALink>
                    </div>
                    {
                        loading ?
                            <OwlCarousel adClass="owl-theme" options={ productSlider }>
                                {
                                    [ 1, 2, 3, 4 ].map( ( item ) =>
                                        <div className="product-loading-overlay" key={ 'vegetable-skel-' + item }></div>
                                    )
                                }
                            </OwlCarousel>
                            :
                            <OwlCarousel adClass="owl-theme" options={ productSlider }>
                                {
                                    products && products.map( ( item, index ) =>
                                        <ProductSeven
                                            isRating={ true }
                                            adClass=""
                                            product={ item }
                                            key={ `vegetable-${ index }` }
                                        />
                                    )
                                }
                            </OwlCarousel>
                    }
                </>
            </Reveal>
        </section>
    )
}

export default React.memo( VegetableCollection );
