import React from 'react';
import Reveal from 'react-awesome-reveal';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';

import OwlCarousel from '~/components/features/owl-carousel';

import ProductNine from '~/components/features/product/product-nine';

import { productSlider } from '~/utils/data/carousel';
import { fadeIn } from '~/utils/data/keyframes';

function SelectedCollection ( props ) {
    const { products, loading } = props;

    return (
        <Tabs selectedTabClassName="show" selectedTabPanelClassName="active" defaultIndex={ 0 }>
            <Reveal keyframes={ fadeIn } duration={ 1200 } triggerOnce>
                <div className="title-wrapper d-flex justify-content-between flex-wrap mb-3 pt-6">
                    <h2 className="title d-block text-left mr-4">
                        Selected Products<br />
                        <span className="d-block font-weight-normal text-body text-normal ls-normal">All our new arrivals in a exclusive brand selection</span>
                    </h2>
                    <div className="tab tab-nav-boxed">
                        <TabList className="nav nav-tabs border-no">
                            <Tab className="nav-item"><span className="nav-link">New Arrivals</span></Tab>
                            <Tab className="nav-item"><span className="nav-link">Best Seller</span></Tab>
                            <Tab className="nav-item"><span className="nav-link">Most Popular</span></Tab>
                            <Tab className="nav-item"><span className="nav-link">View All</span></Tab>
                        </TabList>
                    </div>
                </div>
            </Reveal>
            <Reveal keyframes={ fadeIn } duration={ 1200 } triggerOnce>
                <div className="tab-content mb-10 pb-6">
                    <TabPanel className="tab-pane new-products">
                        {
                            loading ?
                                <OwlCarousel adClass="owl-theme owl-nav-inner" options={ productSlider }>
                                    {
                                        [ 1, 2, 3, 4, 5 ].map( ( item ) =>
                                            <div className="product-loading-overlay" key={ 'new-arrivals-skel-' + item }></div>
                                        )
                                    }
                                </OwlCarousel>
                                :
                                <OwlCarousel adClass="owl-theme owl-nav-inner" options={ productSlider }>
                                    {
                                        products && products.latest.map( ( item, index ) =>
                                            <div className="product-wrap" key={ `new-arrivals-product ${ index }` }>
                                                <ProductNine
                                                    product={ item }
                                                />
                                            </div>
                                        )
                                    }
                                </OwlCarousel>
                        }
                    </TabPanel>
                    <TabPanel className="tab-pane">
                        {
                            loading ?
                                <OwlCarousel adClass="owl-theme owl-nav-inner" options={ productSlider }>
                                    {
                                        [ 1, 2, 3, 4, 5 ].map( ( item ) =>
                                            <div className="product-loading-overlay" key={ 'best-selling-skel-' + item }></div>
                                        )
                                    }
                                </OwlCarousel>
                                :
                                <OwlCarousel adClass="owl-theme owl-nav-inner" options={ productSlider }>
                                    {
                                        products && products.bestSelling.map( ( item, index ) =>
                                            <div className="product-wrap" key={ `best-selling-product ${ index }` }>
                                                <ProductNine
                                                    product={ item }
                                                />
                                            </div>
                                        )
                                    }
                                </OwlCarousel>
                        }
                    </TabPanel>
                    <TabPanel className="tab-pane">
                        {
                            loading ?
                                <OwlCarousel adClass="owl-theme owl-nav-inner" options={ productSlider }>
                                    {
                                        [ 1, 2, 3, 4, 5 ].map( ( item ) =>
                                            <div className="product-loading-overlay" key={ 'popular-skel-' + item }></div>
                                        )
                                    }
                                </OwlCarousel>
                                :
                                <OwlCarousel adClass="owl-theme owl-nav-inner" options={ productSlider }>
                                    {
                                        products && products.topRated.map( ( item, index ) =>
                                            <div className="product-wrap" key={ `popular-product ${ index }` }>
                                                <ProductNine
                                                    product={ item }
                                                />
                                            </div>
                                        )
                                    }
                                </OwlCarousel>
                        }
                    </TabPanel>
                    <TabPanel className="tab-pane">
                        {
                            loading ?
                                <OwlCarousel adClass="owl-theme owl-nav-inner" options={ productSlider }>
                                    {
                                        [ 1, 2, 3, 4, 5 ].map( ( item ) =>
                                            <div className="product-loading-overlay" key={ 'featured-skel-' + item }></div>
                                        )
                                    }
                                </OwlCarousel>
                                :
                                <OwlCarousel adClass="owl-theme owl-nav-inner" options={ productSlider }>
                                    {
                                        products && products.featured.map( ( item, index ) =>
                                            <div className="product-wrap" key={ `featured-product ${ index }` }>
                                                <ProductNine
                                                    product={ item }
                                                />
                                            </div>
                                        )
                                    }
                                </OwlCarousel>
                        }
                    </TabPanel>
                </div>
            </Reveal>
        </Tabs>
    )
}

export default React.memo( SelectedCollection );
