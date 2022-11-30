import React from 'react';

import ProductNine from '~/components/features/product/product-nine';

function FeaturedCollection(props) {
    const { products, loading } = props;

    return (
        <div className="row cols-xl-5 cols-lg-4 cols-md-3 cols-2">
            {
                loading ?
                    <>
                        {
                            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) =>
                                <div className="product-loading-overlay" key={'featured-skel-' + item}></div>
                            )
                        }
                    </>
                    :
                    <>
                        {
                            products && products.map((item, index) =>
                                <div className="product-wrap" key={`featured-product-${index}`}>
                                    <ProductNine product={item} />
                                </div>
                            )
                        }
                    </>
            }
        </div >
    )
}

export default React.memo(FeaturedCollection);
