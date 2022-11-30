import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import OwlCarousel from '~/components/features/owl-carousel';
import ALink from '~/components/features/custom-link';

import { instaSlider } from '~/utils/data/carousel';
import { fadeIn } from '~/utils/data/keyframes';

export default function InstagramSection() {
    return (
        <Reveal keyframes={ fadeIn } delay={ 200 } triggerOnce>
            <section className="instagram-section mt-10 pt-8 pb-8 mb-10">
                <div className="container">
                    <h2 className="title title-center">Instagram</h2>
                    <OwlCarousel adClass="owl-theme" options={ instaSlider }>
                        <figure className="instagram">
                            <ALink href="#">
                                <LazyLoadImage effect="opacity" src="./images/home/instagram/1.jpg" alt="Instagram" width="257"
                                    height="257" />
                            </ALink>
                        </figure>
                        <figure className="instagram">
                            <ALink href="#">
                                <LazyLoadImage effect="opacity" src="./images/home/instagram/2.jpg" alt="Instagram" width="257"
                                    height="257" />
                            </ALink>
                        </figure>
                        <figure className="instagram">
                            <ALink href="#">
                                <LazyLoadImage effect="opacity" src="./images/home/instagram/3.jpg" alt="Instagram" width="257"
                                    height="257" />
                            </ALink>
                        </figure>
                        <figure className="instagram">
                            <ALink href="#">
                                <LazyLoadImage effect="opacity" src="./images/home/instagram/4.jpg" alt="Instagram" width="257"
                                    height="257" />
                            </ALink>
                        </figure>
                        <figure className="instagram">
                            <ALink href="#">
                                <LazyLoadImage effect="opacity" src="./images/home/instagram/5.jpg" alt="Instagram" width="257"
                                    height="257" />
                            </ALink>
                        </figure>
                        <figure className="instagram">
                            <ALink href="#">
                                <LazyLoadImage effect="opacity" src="./images/home/instagram/6.jpg" alt="Instagram" width="257"
                                    height="257" />
                            </ALink>
                        </figure>
                    </OwlCarousel>
                </div>
            </section>
        </Reveal>
    )
}