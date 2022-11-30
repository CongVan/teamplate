import { LazyLoadImage } from 'react-lazy-load-image-component';
import Reveal from 'react-awesome-reveal';

import OwlCarousel from '~/components/features/owl-carousel';
import ALink from '~/components/features/custom-link';

import { instaSlider } from '~/utils/data/carousel';
import { fadeIn } from '~/utils/data/keyframes';

export default function InstagramSection() {
    return (
        <div className="container">
            <Reveal keyframes={ fadeIn } triggerOnce>
                <section className="mt-10 pt-3">
                    <h2 className="title title-custom title-center text-normal border-no mb-6">Follow us on Instagram</h2>
                    <OwlCarousel adClass="owl-theme" options={ instaSlider }>
                        <figure className="instagram">
                            <ALink href="#">
                                <LazyLoadImage src="./images/home/instagram/1.jpg" alt="Instagram" width="220"
                                    height="220" />
                            </ALink>
                        </figure>
                        <figure className="instagram">
                            <ALink href="#">
                                <LazyLoadImage src="./images/home/instagram/2.jpg" alt="Instagram" width="220"
                                    height="220" />
                            </ALink>
                        </figure>
                        <figure className="instagram">

                            <ALink href="#">
                                <LazyLoadImage src="./images/home/instagram/3.jpg" alt="Instagram" width="220"
                                    height="220" />
                            </ALink>
                        </figure>
                        <figure className="instagram">
                            <ALink href="#">
                                <LazyLoadImage src="./images/home/instagram/4.jpg" alt="Instagram" width="220"
                                    height="220" />
                            </ALink>
                        </figure>
                        <figure className="instagram">
                            <ALink href="#">
                                <LazyLoadImage src="./images/home/instagram/5.jpg" alt="Instagram" width="220"
                                    height="220" />
                            </ALink>
                        </figure>
                    </OwlCarousel>
                </section>
            </Reveal>
        </div>
    )
}