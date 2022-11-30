import React from 'react';
import Reveal from "react-awesome-reveal";
import { Magnifier } from 'react-image-magnifiers';

import DetailSeven from '~/components/partials/product/detail/detail-seven';
import OwlCarousel from '~/components/features/owl-carousel';

import { introSlider } from '~/utils/data/carousel';
import { fadeInUpShorter, fadeIn, blurIn } from '~/utils/data/keyframes';

export default function ProductSingle({ product }) {
    return (
        <section className="product-single-collection pt-lg-6 pt-sm-2 mt-8 overflow-hidden">
            <div className="container">
                <div className="title-wrapper text-center">
                    <Reveal keyframes={fadeInUpShorter} delay={300} duration={1000} triggerOnce>
                        <h5 className="title-info text-grey font-weight-normal lh-1 ls-md">Trending 2021</h5>
                    </Reveal>
                    <Reveal keyframes={blurIn} delay={400} duration={1000} triggerOnce>
                        <h3 className="title-lg font-weight-bold lh-1 pb-3 mb-10 ls-normal">Featured Item</h3>
                    </Reveal>
                </div>
                <Reveal keyframes={fadeIn} delay={300} duration={1000} triggerOnce>
                    <div className="product product-single bg-image" style={{ backgroundImage: 'url(images/home/main-product/bg.jpg)' }}>
                        {
                            product && product[2] ?
                                <div className="row">
                                    <div className="col-lg-6 col-12 ">
                                        <div className="product-gallery p-relative">
                                            <OwlCarousel adClass="product-single-carousel owl-theme" options={introSlider}>
                                                {
                                                    product[2].large_pictures.slice(0, 1).map((image, index) =>
                                                        <div key={image + '-' + index}>
                                                            <Magnifier
                                                                imageSrc={process.env.NEXT_PUBLIC_ASSET_URI + image.url}
                                                                imageAlt="magnifier"
                                                                largeImageSrc={process.env.NEXT_PUBLIC_ASSET_URI + image.url}
                                                                dragToMove={false}
                                                                mouseActivation="hover"
                                                                cursorStyleActive="crosshair"
                                                                className="product-image"
                                                            />
                                                        </div>
                                                    )}
                                            </OwlCarousel>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-12 ">
                                        <DetailSeven product={product[2]} />
                                    </div>
                                </div>
                                : ''
                        }
                    </div>
                </Reveal>
            </div>
        </section>
    )
}