import Reveal from "react-awesome-reveal";
import { useRef, useEffect } from "react";

// import Custom Components
import ProductTwo from '~/components/features/product/product-two';

import { fadeIn } from '~/utils/data/keyframes';

export default function ProudctCollection(props) {
    const { products, loading } = props;
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
        <Reveal keyframes={fadeIn} delay={300} duration={1000} triggerOnce>
            <section className="product-wrapper grey-section pb-4 pt-10">
                <div className="container pb-10 pt-3">
                    <div className="title-wrapper with-filters align-items-center justify-content-between">
                        <h2 className="title title-simple">
                            Best Selling Products
                            </h2>
                        <ul className="nav-filters product-filters filter-underline">
                            <li><a href="#" className="nav-filter active" onClick={e => isoFilter(e, '')}>All</a></li>
                            <li><a href="#" className="nav-filter" onClick={e => isoFilter(e, 'mobile')}>Mobile</a></li>
                            <li><a href="#" className="nav-filter" onClick={e => isoFilter(e, 'headphone')}>Headphone</a></li>
                            <li><a href="#" className="nav-filter" onClick={e => isoFilter(e, 'camera')}>Camera</a></li>
                            <li><a href="#" className="nav-filter" onClick={e => isoFilter(e, 'drone')}>Drone</a></li>
                            <li><a href="#" className="nav-filter" onClick={e => isoFilter(e, 'speaker')}>Speaker</a></li>
                        </ul>
                    </div>
                    <div className="grid-border">
                        <div className="row grid products-grid gutter-no" ref={ref}>
                            {
                                loading ?
                                    <div className="grid-item col-xl-5col col-lg-3 col-sm-4 col-5">
                                        {
                                            [1, 2, 3, 4, 5, 6].map((item) =>
                                                <div className="product-loading-overlay" key={'best-selling-skel-' + item}></div>
                                            )
                                        }
                                    </div>
                                    :
                                    products && products.map((item, index) =>
                                        <div className={`grid-item col-xl-5col col-lg-3 col-sm-4 col-5 ${getProductCategory(item)} `} key={`best-product-${index}`}>
                                            <ProductTwo
                                                adClass="text-center"
                                                product={item} />
                                        </div>
                                    )
                            }
                        </div>
                    </div>
                </div>
            </section>
        </Reveal>
    )
}