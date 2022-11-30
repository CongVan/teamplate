import React from 'react';

import OwlCarousel from '~/components/features/owl-carousel';

import { brandSlider } from '~/utils/data/carousel';

function BrandSection () {
    return (
        <OwlCarousel adClass="owl-theme brand-carousel" options={ brandSlider }>
            <figure className="brand">
                <img src="images/home/brands/1.png" alt="brand" width="125" height="53" />
            </figure>
            <figure className="brand">
                <img src="images/home/brands/2.png" alt="brand" width="104" height="56" />
            </figure>
            <figure className="brand">
                <img src="images/home/brands/3.png" alt="brand" width="117" height="31" />
            </figure>
            <figure className="brand">
                <img src="images/home/brands/4.png" alt="brand" width="139" height="58" />
            </figure>
            <figure className="brand">
                <img src="images/home/brands/5.png" alt="brand" width="123" height="36" />
            </figure>
            <figure className="brand">
                <img src="images/home/brands/6.png" alt="brand" width="113" height="36" />
            </figure>
            <figure className="brand">
                <img src="images/home/brands/7.png" alt="brand" width="144" height="43" />
            </figure>
        </OwlCarousel>
    )
}

export default React.memo( BrandSection );