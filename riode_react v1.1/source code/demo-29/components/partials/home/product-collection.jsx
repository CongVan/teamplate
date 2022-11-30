import React from 'react';
import Reveal from "react-awesome-reveal";
import { useRef, useEffect } from "react";

// import Custom Components
import ProductNine from '~/components/features/product/product-nine';

import { fadeInLeftShorter, fadeInRightShorter } from '~/utils/data/keyframes';

export default function ProudctCollection(props) {
    const { products, loading, bestselling } = props;
    const ref = useRef();
    let iso;

    useEffect(() => {
        if (products && products.length > 0) {
            isotopeLoad();
        }
    }, [products])

    async function isotopeLoad() {
        const Isotope = (await import('isotope-layout')).default;
        iso = new Isotope(ref.current, {
            itemSelector: '.grid-item',
        });
    }

    function getProductCategory(product) {
        return product.categories.reduce((acc, cur) => {
            return acc + " " + cur.slug;
        }, "");
    }

    function isoFilter(e, cat) {
        e.preventDefault();
        e.currentTarget.closest('.nav-filters').querySelector('.active').classList.remove('active');
        e.currentTarget.classList.add('active');
        iso.arrange({
            filter: function (index, itemElem) {
                if (cat == '') return true;
                return itemElem.classList.contains(cat);
            }
        });
    }

    return (
        <>
            <div className="title-wrapper with-filters d-flex align-items-center justify-content-between pt-2 mb-4">
                <h2 className="title title-simple mb-md-0"><Reveal keyframes={fadeInLeftShorter} delay={200} duration={1000} triggerOnce><span>{!bestselling ? 'New Arrivals' : 'Best Sellers'}</span></Reveal></h2>
                <ul className="nav-filters product-filters font-weight-semi-bold mr-0">
                    <Reveal keyframes={fadeInRightShorter} delay={200} duration={1000} triggerOnce>
                        <li><a href="#" className="nav-filter active" onClick={e => isoFilter(e, '')}>All</a></li>
                        <li><a href="#" className="nav-filter" onClick={e => isoFilter(e, 'headphones')}>Headphones</a></li>
                        <li><a href="#" className="nav-filter" onClick={e => isoFilter(e, 'accessories')}>Accessories</a></li>
                        <li><a href="#" className="nav-filter" onClick={e => isoFilter(e, 'speakers')}>Speakers</a></li>
                    </Reveal>
                </ul>
            </div>
            <div className="row grid products-grid pb-2 mb-8" ref={ref}>
                {
                    loading ?
                        <div className="grid-item col-xl-2 col-lg-3 col-sm-4 col-6">
                            {
                                [1, 2, 3, 4, 5, 6].map((item) =>
                                    <div className="product-loading-overlay" key={'best-selling-skel-' + item}></div>
                                )
                            }
                        </div>
                        :
                        products && products.slice(0, 6).map((item, index) =>
                            <div className={`grid-item col-xl-2 col-lg-3 col-sm-4 col-6 ${getProductCategory(item)}`} key={`best-product-${index}`}>
                                <ProductNine
                                    adClass="text-center"
                                    product={item} />
                            </div>
                        )
                }
            </div>
        </>
    )
}