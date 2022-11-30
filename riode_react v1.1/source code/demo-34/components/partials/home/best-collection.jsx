import React from 'react';
import { useRouter } from 'next/router';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import Custom Components
import ALink from '~/components/features/custom-link';

import ProductTwo from '~/components/features/product/product-two';

// import { fadeIn } from '~/utils/data/keyframes';

function BestCollection(props) {
    const { products, loading, perpage } = props;
    const router = useRouter();
    const pathname = useRouter().pathname;
    const query = router.query;

    return (
        // <Reveal keyframes={ fadeIn } delay={ 300 } duration={ 1200 } triggerOnce>
        <section className={perpage === 4 ? 'featured-collection mt-8 pt-6 mt-lg-10 pt-lg-10 pb-10' : 'top-collection mt-4 pt-6 mt-lg-8 pt-lg-10 pb-6'}>
            <div className="container">
                <h3 className={`text-center font-weight-bold lh-1 ls-m mb-5 ${perpage === 4 ? 'mt-4' : 'mt-6'} `}>
                    {
                        perpage === 4 ?
                            'Our Featured'
                            :
                            'Best Sellers'
                    }
                </h3>
                <div className={`products-group split-line row box-shadow-2 bg-white gutter-no ${perpage === 4 ? 'mb-6' : 'mb-8 pt-8'}`}>
                    {
                        perpage !== 4 ?
                            loading ?
                                <>
                                    {
                                        [1, 2, 3, 4, 5, 6, 7, 8].map((item) =>
                                            <div className="col-lg-3 col-md-4 col-6" key={'best-selling-skel-' + item}>
                                                <div className="product-loading-overlay"></div>
                                            </div>
                                        )
                                    }
                                </>
                                :
                                <>
                                    {
                                        products && products.map((item, index) =>
                                            <div className="col-lg-3 col-md-4 col-6" key={`top-selling-product ${index}`}>
                                                <div className="product-wrap">
                                                    <ProductTwo
                                                        product={item}
                                                        adClass="text-center"
                                                    />
                                                </div>
                                            </div>
                                        )
                                    }
                                </>
                            :
                            loading ?
                                <>
                                    {
                                        [1, 2, 3, 4].map((item) =>
                                            <div className="col-lg-3 col-md-4 col-6" key={'best-selling-skel-' + item}>
                                                <div className="product-loading-overlay"></div>
                                            </div>
                                        )
                                    }
                                </>
                                :
                                <>
                                    {
                                        products && products.slice(3, 7).map((item, index) =>
                                            <div className="col-lg-3 col-md-4 col-6" key={`top-selling-product ${index}`}>
                                                <div className="product-wrap">
                                                    <ProductTwo
                                                        product={item}
                                                        adClass="text-center"
                                                    />
                                                </div>
                                            </div>
                                        )
                                    }
                                </>
                    }
                </div>
                {
                    perpage === 4 ?
                        <div className="row mb-2">
                            <div className="col-lg-6">
                                <div className="banner mb-4" style={{ backgroundColor: '#F3D1C7' }}>
                                    <figure>
                                        <LazyLoadImage
                                            src="./images/home/banners/5.jpg"
                                            alt="banner"
                                            effect="opacity"
                                            width="580"
                                            height="149"
                                        />
                                    </figure>
                                    <div className="banner-content y-50">
                                        <h3 className="banner-title font-weight-bold">New Accessories</h3>
                                        <ALink href={{ pathname: "/shop", query: { category: "accessories" } }} className={`${query.category === 'accessories' ? 'active' : ''} btn btn-link btn-dark btn-underline text-uppercase`}>
                                            Shop Now<i className="d-icon-arrow-right"></i></ALink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="banner mb-4" style={{ backgroundColor: '#222' }}>
                                    <figure>
                                        <LazyLoadImage
                                            src="./images/home/banners/6.jpg"
                                            alt="banner"
                                            effect="opacity"
                                            width="580"
                                            height="149"
                                        />
                                    </figure>
                                    <div className="banner-content y-50">
                                        <h3 className="banner-title text-white font-weight-bold">Comfort Shoes</h3>
                                        <ALink href={{ pathname: "/shop", query: { category: "shoes" } }} className={`${query.category === 'shoes' ? 'active' : ''} btn btn-link btn-white btn-underline text-uppercase`}>
                                            Shop Now<i className="d-icon-arrow-right"></i></ALink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        ''
                }
            </div>
        </section >
        // </Reveal>
    )
}

export default React.memo(BestCollection);
