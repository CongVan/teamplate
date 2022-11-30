import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { instagramSlider } from '~/utils/data/carousel';

function InstagramSection () {
    return (
        <div className="instagram-section">
            <OwlCarousel adClass="instagram-carousel" options={ instagramSlider }>
                <figure className="instagram">
                    <ALink href="#">
                        <LazyLoadImage
                            src="images/home/instagram/1.jpg"
                            alt="Instagram"
                            width="320"
                            height="320"
                            effect="opacity"
                        />
                    </ALink>
                </figure>
                <figure className="instagram">
                    <ALink href="#">
                        <LazyLoadImage
                            src="images/home/instagram/2.jpg"
                            alt="Instagram"
                            width="320"
                            height="320"
                            effect="opacity"
                        />
                    </ALink>
                </figure>
                <figure className="instagram">
                    <ALink href="#">
                        <LazyLoadImage
                            src="images/home/instagram/3.jpg"
                            alt="Instagram"
                            width="320"
                            height="320"
                            effect="opacity"
                        />
                    </ALink>
                </figure>
                <figure className="instagram">
                    <ALink href="#">
                        <LazyLoadImage
                            src="images/home/instagram/4.jpg"
                            alt="Instagram"
                            width="320"
                            height="320"
                            effect="opacity"
                        />
                    </ALink>
                </figure>
                <figure className="instagram">
                    <ALink href="#">
                        <LazyLoadImage
                            src="images/home/instagram/5.jpg"
                            alt="Instagram"
                            width="320"
                            height="320"
                            effect="opacity"
                        />
                    </ALink>
                </figure>
                <figure className="instagram">
                    <ALink href="#">
                        <LazyLoadImage
                            src="images/home/instagram/6.jpg"
                            alt="Instagram"
                            width="320"
                            height="320"
                            effect="opacity"
                        />
                    </ALink>
                </figure>
            </OwlCarousel>
        </div>
    )
}

export default React.memo( InstagramSection );