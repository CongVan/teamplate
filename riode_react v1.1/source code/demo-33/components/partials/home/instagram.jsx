import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import Custom Components
import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { mainSlider8 } from '~/utils/data/carousel';
import { fadeIn, fadeInLeftShorter } from '~/utils/data/keyframes';

export default function Instagram() {
    return (
        <div className="container instagram-section">
            <Reveal keyframes={fadeInLeftShorter} delay={300} duration={1200} triggerOnce>
                <OwlCarousel adClass="owl-theme" options={mainSlider8}>
                    <Reveal keyframes={fadeIn} delay={300} duration={1200} triggerOnce>
                        <figure className="instagram">
                            <ALink href="#">
                                <LazyLoadImage
                                    src="./images/home/instagram/1.jpg"
                                    alt="Intro Slider"
                                    effect="opacity"
                                    width="196"
                                    height="197"
                                />
                            </ALink>
                        </figure>
                    </Reveal>
                    <Reveal keyframes={fadeIn} delay={300} duration={1200} triggerOnce>
                        <figure className="instagram">
                            <ALink href="#">
                                <LazyLoadImage
                                    src="./images/home/instagram/2.jpg"
                                    alt="Intro Slider"
                                    effect="opacity"
                                    width="196"
                                    height="197"
                                    style={{ backgroundColor: '#abafb8' }}
                                />
                            </ALink>
                        </figure>
                    </Reveal>
                    <figure className="instagram">
                        <ALink href="#">
                            <LazyLoadImage
                                src="./images/home/instagram/3.jpg"
                                alt="Intro Slider"
                                effect="opacity"
                                width="196"
                                height="197"
                            />
                        </ALink>
                    </figure>
                    <figure className="instagram">
                        <ALink href="#">
                            <LazyLoadImage
                                src="./images/home/instagram/4.jpg"
                                alt="Intro Slider"
                                effect="opacity"
                                width="196"
                                height="197"
                            />
                        </ALink>
                    </figure>
                    <figure className="instagram">
                        <ALink href="#">
                            <LazyLoadImage
                                src="./images/home/instagram/5.jpg"
                                alt="Intro Slider"
                                effect="opacity"
                                width="196"
                                height="197"
                            />
                        </ALink>
                    </figure>
                    <figure className="instagram">
                        <ALink href="#">
                            <LazyLoadImage
                                src="./images/home/instagram/6.jpg"
                                alt="Intro Slider"
                                effect="opacity"
                                width="196"
                                height="197"
                            />
                        </ALink>
                    </figure>
                </OwlCarousel>
            </Reveal>
        </div>
    )
}