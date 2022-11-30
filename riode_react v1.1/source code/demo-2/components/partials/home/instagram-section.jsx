import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import OwlCarousel from '~/components/features/owl-carousel';
import ALink from '~/components/features/custom-link';

import { fadeIn } from '~/utils/data/keyframes';
import { instaSlider } from '~/utils/data/carousel';

export default function InstagramSection() {
    return (
        <section className="instagram-section mt-10 pt-7 pb-8 mb-10" keyframes={ fadeIn } delay={ 200 } duration={ 500 }>
            <Reveal keyframes={ fadeIn } triggerOnce>
                <h2 className="title title-simple">Our Instagram</h2>
                <OwlCarousel adClass="owl-theme" options={ instaSlider }>
                    <figure className="instagram">
                        <ALink href="#">
                            <LazyLoadImage
                                src="./images/home/instagram/1.jpg"
                                alt="Instagram"
                                width="220"
                                effect="opacity"
                                height="220" />
                        </ALink>
                    </figure>
                    <figure className="instagram">
                        <ALink href="#">
                            <LazyLoadImage
                                src="./images/home/instagram/2.jpg"
                                alt="Instagram"
                                width="220"
                                effect="opacity"
                                height="220" />
                        </ALink>
                    </figure>
                    <figure className="instagram">

                        <ALink href="#">
                            <LazyLoadImage
                                src="./images/home/instagram/3.jpg"
                                alt="Instagram"
                                width="220"
                                effect="opacity"
                                height="220" />
                        </ALink>
                    </figure>
                    <figure className="instagram">
                        <ALink href="#">
                            <LazyLoadImage
                                src="./images/home/instagram/4.jpg"
                                alt="Instagram"
                                width="220"
                                effect="opacity"
                                height="220" />
                        </ALink>
                    </figure>
                    <figure className="instagram">
                        <ALink href="#">
                            <LazyLoadImage
                                src="./images/home/instagram/5.jpg"
                                alt="Instagram"
                                width="220"
                                effect="opacity"
                                height="220" />
                        </ALink>
                    </figure>
                </OwlCarousel>
            </Reveal>
        </section>
    )
}