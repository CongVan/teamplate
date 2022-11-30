import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/custom-link';

import { blurIn, fadeInUpShorter } from '~/utils/data/keyframes';

export default function BannerGroup() {
    return (
        <section className="banner-group row gutter-no mt-10 pt-4">
            <div className="col-lg-6">
                <div className="banner1 banner banner-fixed" style={{ backgroundColor: '#1b72d3' }}>
                    <figure>
                        <LazyLoadImage
                            src="./images/home/banner/5.jpg"
                            alt="banner"
                            effect="opacity"
                            width="100%"   //951
                            height="auto"   //353
                        />
                    </figure>
                    <div className="banner-content y-50">
                        <Reveal keyframes={blurIn} delay={200} duration={1200} triggerOnce>
                            <h3 className="banner-title text-white ls-m">Don’t Miss<br />Get
                                    Our Special Offer</h3>
                        </Reveal>
                        <Reveal keyframes={fadeInUpShorter} delay={300} duration={1200} triggerOnce>
                            <p>Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nibh id
                                    elit.</p>
                        </Reveal>
                        <Reveal keyframes={fadeInUpShorter} delay={500} duration={1200} triggerOnce>
                            <ALink href="/shop" className="btn btn-outline btn-white font-weight-bold">Shop now</ALink>
                        </Reveal>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="banner2 banner banner-fixed" style={{ backgroundColor: '#202022' }}>
                    <figure>
                        <LazyLoadImage
                            src="./images/home/banner/6.jpg"
                            alt="banner"
                            effect="opacity"
                            width="100%"   //951
                            height="auto"   //353
                        />
                    </figure>
                    <div className="banner-content y-50">
                        <Reveal keyframes={blurIn} delay={200} duration={1200} triggerOnce>
                            <h3 className="banner-title text-white ls-m">New Arrivals <span
                                className="text-uppercase text-primary">HD8</span><br />for Education</h3>
                        </Reveal>
                        <Reveal keyframes={fadeInUpShorter} delay={300} duration={1200} triggerOnce>
                            <p>Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nibh id
                                    elit.</p>
                        </Reveal>
                        <Reveal keyframes={fadeInUpShorter} delay={500} duration={1200} triggerOnce>
                            <ALink href="/shop" className="btn btn-primary font-weight-bold">Shop now</ALink>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    )
}