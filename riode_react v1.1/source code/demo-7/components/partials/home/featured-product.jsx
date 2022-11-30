import Reveal from 'react-awesome-reveal';
import { Magnifier } from 'react-image-magnifiers';

import OwlCarousel from '~/components/features/owl-carousel';

import DetailSeven from '~/components/partials/product/detail/detail-seven';

import { fadeIn } from '~/utils/data/keyframes';
import { singleSlider } from '~/utils/data/carousel';

export default function FeaturedProduct( { products } ) {
    return (
        <Reveal keyframes={ fadeIn } delay={ 200 } triggerOnce>
            <section className="mt-10 pt-7">
                <div className="container">
                    <h2 className="title title-center mb-6">Featured Item</h2>
                    {
                        products && products[ 0 ] ?
                            <div className="product product-single row">
                                <div className="col-md-6 product-gallery mb-0">
                                    <OwlCarousel adClass="rotate-slider product-single-carousel owl-theme owl-nav-arrow" options={ singleSlider }>
                                        {
                                            products[ 0 ].large_pictures.map( ( image, index ) =>
                                                <div key={ image + '-' + index }>
                                                    <Magnifier
                                                        imageSrc={ process.env.NEXT_PUBLIC_ASSET_URI + image.url }
                                                        imageAlt="magnifier"
                                                        largeImageSrc={ process.env.NEXT_PUBLIC_ASSET_URI + image.url }
                                                        dragToMove={ false }
                                                        mouseActivation="hover"
                                                        cursorStyleActive="crosshair"
                                                        className="product-image large-image"
                                                    />
                                                </div>
                                            ) }
                                    </OwlCarousel>
                                </div>

                                <div className="col-md-6">
                                    <DetailSeven product={ products[ 0 ] } />
                                </div>
                            </div> :
                            ''
                    }
                </div>
            </section>
        </Reveal>
    )
}