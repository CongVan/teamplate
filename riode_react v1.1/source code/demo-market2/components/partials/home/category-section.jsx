import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/custom-link';

function CategorySection () {
    return (
        <div className="row cols-lg-6 cols-sm-3 cols-2 pt-6 pb-2">
            <div className="category-wrap mb-4">
                <div className="category category-default1 category-absolute">
                    <ALink href={ { pathname: "/shop", query: { category: "fashion" } } }>
                        <figure>
                            <LazyLoadImage
                                src="images/home/category/1.jpg"
                                alt="Category"
                                width="213"
                                height="213"
                            />
                        </figure>
                        <div className="category-content">
                            <h4 className="category-name">Fashion</h4>
                        </div>
                    </ALink>
                </div>
            </div>
            <div className="category-wrap mb-4">
                <div className="category category-default1 category-absolute">
                    <ALink href={ { pathname: "/shop", query: { category: "furniture" } } }>
                        <figure>
                            <LazyLoadImage
                                src="images/home/category/2.jpg"
                                alt="Category"
                                width="213"
                                height="213"
                            />
                        </figure>
                        <div className="category-content">
                            <h4 className="category-name">Furniture</h4>
                        </div>
                    </ALink>
                </div>
            </div>
            <div className="category-wrap mb-4">
                <div className="category category-default1 category-absolute">
                    <ALink href={ { pathname: "/shop", query: { category: "sports" } } }>
                        <figure>
                            <LazyLoadImage
                                src="images/home/category/3.jpg"
                                alt="Category"
                                width="213"
                                height="213"
                            />
                        </figure>
                        <div className="category-content">
                            <h4 className="category-name">Sports</h4>
                        </div>
                    </ALink>
                </div>
            </div>
            <div className="category-wrap mb-4">
                <div className="category category-default1 category-absolute">
                    <ALink href={ { pathname: "/shop", query: { category: "toys" } } }>
                        <figure>
                            <LazyLoadImage
                                src="images/home/category/4.jpg"
                                alt="Category"
                                width="213"
                                height="213"
                            />
                        </figure>
                        <div className="category-content">
                            <h4 className="category-name">Toys</h4>
                        </div>
                    </ALink>
                </div>
            </div>
            <div className="category-wrap mb-4">
                <div className="category category-default1 category-absolute">
                    <ALink href={ { pathname: "/shop", query: { category: "cameras" } } }>
                        <figure>
                            <LazyLoadImage
                                src="images/home/category/5.jpg"
                                alt="Category"
                                width="213"
                                height="213"
                            />
                        </figure>
                        <div className="category-content">
                            <h4 className="category-name">Cameras</h4>
                        </div>
                    </ALink>
                </div>
            </div>
            <div className="category-wrap mb-4">
                <div className="category category-default1 category-absolute">
                    <ALink href={ { pathname: "/shop", query: { category: "gaming" } } }>
                        <figure>
                            <LazyLoadImage
                                src="images/home/category/6.jpg"
                                alt="Category"
                                width="213"
                                height="213"
                            />
                        </figure>
                        <div className="category-content">
                            <h4 className="category-name">Gaming</h4>
                        </div>
                    </ALink>
                </div>
            </div>
        </div>
    )
}

export default React.memo( CategorySection );