import React from 'react';
import Reveal from 'react-awesome-reveal';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';

import OwlCarousel from '~/components/features/owl-carousel';

import ProductNine from '~/components/features/product/product-nine';

import { productSlider } from '~/utils/data/carousel';
import { fadeIn } from '~/utils/data/keyframes';

function SpecialCollection ( props ) {
    const { products, loading } = props;

    return (
        <Reveal keyframes={ fadeIn } delay={ 500 } duration={ 1200 } triggerOnce>
            <section className="product-wrapper pt-2 mt-10">
                <Tabs selectedTabClassName="show" selectedTabPanelClassName="active" defaultIndex={ 0 } className="tab tab-nav-center">
                    <TabList className="nav nav-tabs">
                        <Tab className="nav-item"><span className="nav-link">Best Sellers</span></Tab>
                        <Tab className="nav-item"><span className="nav-link">New Arrivals</span></Tab>
                        <Tab className="nav-item"><span className="nav-link">Our Featured</span></Tab>
                    </TabList>

                    <div className="tab-content">
                        <TabPanel className="tab-pane">
                            {
                                loading ?
                                    <OwlCarousel adClass="owl-theme owl-nav-full" options={ productSlider }>
                                        {
                                            [ 1, 2, 3, 4 ].map( ( item ) =>
                                                <div className="product-loading-overlay" key={ 'best-selling-skel-' + item }></div>
                                            )
                                        }
                                    </OwlCarousel>
                                    :
                                    <OwlCarousel adClass="owl-theme owl-nav-full" options={ productSlider }>
                                        {
                                            products && products.bestSelling.map( ( item, index ) =>
                                                <ProductNine
                                                    product={ item }
                                                    key={ `best-selling-product ${ index }` }
                                                />
                                            )
                                        }
                                    </OwlCarousel>
                            }
                        </TabPanel>
                        <TabPanel className="tab-pane new-products">
                            {
                                loading ?
                                    <OwlCarousel adClass="owl-theme owl-nav-full" options={ productSlider }>
                                        {
                                            [ 1, 2, 3, 4 ].map( ( item ) =>
                                                <div className="product-loading-overlay" key={ 'new-arrivals-skel-' + item }></div>
                                            )
                                        }
                                    </OwlCarousel>
                                    :
                                    <OwlCarousel adClass="owl-theme owl-nav-full" options={ productSlider }>
                                        {
                                            products && products.latest.map( ( item, index ) =>
                                                <ProductNine
                                                    product={ item }
                                                    key={ `new-arrivals-product ${ index }` }
                                                />
                                            )
                                        }
                                    </OwlCarousel>
                            }
                        </TabPanel>
                        <TabPanel className="tab-pane">
                            {
                                loading ?
                                    <OwlCarousel adClass="owl-theme owl-nav-full" options={ productSlider }>
                                        {
                                            [ 1, 2, 3, 4 ].map( ( item ) =>
                                                <div className="product-loading-overlay" key={ 'featured-skel-' + item }></div>
                                            )
                                        }
                                    </OwlCarousel>
                                    :
                                    <OwlCarousel adClass="owl-theme owl-nav-full" options={ productSlider }>
                                        {
                                            products && products.featured.map( ( item, index ) =>
                                                <ProductNine
                                                    product={ item }
                                                    key={ `featured-product ${ index }` }
                                                />
                                            )
                                        }
                                    </OwlCarousel>
                            }
                        </TabPanel>
                    </div>
                </Tabs>
            </section>
        </Reveal>
    )
}

export default React.memo( SpecialCollection );
