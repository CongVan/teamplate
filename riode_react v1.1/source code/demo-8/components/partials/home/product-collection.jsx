import { LazyLoadImage } from 'react-lazy-load-image-component';
import Reveal from 'react-awesome-reveal';

import OwlCarousel from '~/components/features/owl-carousel';
import ProductTwo from '~/components/features/product/product-two';

import { fadeIn } from '~/utils/data/keyframes';
import { featuredSlider } from '~/utils/data/carousel';

export default function ProductCollection( props ) {
    const { products, loading } = props;

    return (
        <>
            <Reveal keyframes={ fadeIn } triggerOnce>
                <section className="products-section row gutter-no align-items-center">
                    <div className="col-lg-6">
                        <div className="intro-media" style={ { backgroundColor: "#efefef" } }>
                            <LazyLoadImage effect="opacity" threshold={ 300 } src="./images/home/banners/3.jpg" alt="banner" width="951" height="645" />
                        </div>
                    </div>

                    <div className="col-lg-6 order-lg-first">
                        <div className="product-wrapper">
                            <h2 className="title title-simple">Decoration</h2>
                            {
                                loading ?
                                    <OwlCarousel adClass="owl-theme owl-nav-full" options={ featuredSlider }>
                                        {
                                            [ 1, 2, 3 ].map( ( item ) =>
                                                <div className="product-loading-overlay" key={ 'featured-skel-' + item }></div>
                                            )
                                        }
                                    </OwlCarousel>
                                    :
                                    <OwlCarousel adClass="owl-theme owl-nav-full" options={ featuredSlider }>
                                        {
                                            products.slice( 0, 3 ).map( item =>
                                                <ProductTwo product={ item } key={ `featured-${ item.slug }` } isCategory={ false } />
                                            ) }
                                    </OwlCarousel>
                            }
                        </div>
                    </div>
                </section>
            </Reveal>

            <Reveal keyframes={ fadeIn } triggerOnce>
                <section className="products-section row gutter-no align-items-center">
                    <div className="col-lg-6">
                        <div className="intro-media" style={ { backgroundColor: "#efefef" } }>
                            <LazyLoadImage effect="opacity" threshold={ 300 } src="./images/home/banners/4.jpg" alt="banner" width="960" height="664" />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="product-wrapper">
                            <h2 className="title title-simple">Small Furniture</h2>
                            {
                                loading ?
                                    <OwlCarousel adClass="owl-theme owl-nav-full" options={ featuredSlider }>
                                        {
                                            [ 4, 5, 6 ].map( ( item ) =>
                                                <div className="product-loading-overlay" key={ 'featured-skel-' + item }></div>
                                            )
                                        }
                                    </OwlCarousel>
                                    :
                                    <OwlCarousel adClass="owl-theme owl-nav-full" options={ featuredSlider }>
                                        {
                                            products.slice( 3, 6 ).map( item =>
                                                <ProductTwo product={ item } key={ `featured-${ item.slug }` } isCategory={ false } />
                                            ) }
                                    </OwlCarousel>
                            }
                        </div>
                    </div>
                </section>
            </Reveal>
        </>
    )
}