import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/custom-link';

import { fadeInUpShorter, fadeIn } from '~/utils/data/keyframes';

export default function BannerSection() {
    return (
        <section className="banner-group pt-2 mt-10">
            <div className="row cols-md-2 gutter-sm">
                <Reveal triggerOnce keyframes={ fadeIn }>
                    <div className="banner banner-fixed overlay-dark">
                        <figure>
                            <LazyLoadImage effect="opacity" src="./images/home/banners/1.jpg" width="945" height="390" alt="banner" style={ { backgroundColor: "rgb(37, 38, 39)" } } />
                        </figure>

                        <div className="banner-content y-50">
                            <Reveal triggerOnce keyframes={ fadeInUpShorter } delay={ 200 }>
                                <h4 className="banner-subtitle text-uppercase text-primary font-weight-bold">
                                    Equipment</h4>
                                <h3 className="banner-title text-white font-weight-bold mb-3">Highly Recommend
                            Lifestyle Shoes</h3>
                                <p className="font-weight-semi-bold mb-6">Start at &29.00</p>
                                <ALink href="/shop" className="btn btn-primary btn-rounded">Shop Now<i
                                    className="d-icon-arrow-right"></i></ALink>
                            </Reveal>
                        </div>
                    </div>
                </Reveal>

                <Reveal triggerOnce keyframes={ fadeIn }>
                    <div className="banner banner-fixed overlay-dark">
                        <figure>
                            <LazyLoadImage effect="opacity" src="./images/home/banners/2.jpg" width="945" height="390" alt="banner" style={ { backgroundColor: "rgb(236, 237, 239)" } } />
                        </figure>
                        <div className="banner-content y-50">
                            <Reveal triggerOnce keyframes={ fadeInUpShorter } delay={ 300 }>
                                <h4 className="banner-subtitle text-uppercase text-primary font-weight-bold">
                                    Bestseller</h4>
                                <h3 className="banner-title font-weight-bold mb-3">Latest and Greatest Collection
                            2021</h3>
                                <p className="font-weight-semi-bold mb-6 text-body">Start at &29.00</p>
                                <ALink href="/shop" className="btn btn-dark btn-rounded">Shop Now<i
                                    className="d-icon-arrow-right"></i></ALink>
                            </Reveal>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}