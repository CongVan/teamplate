import { useQuery } from "@apollo/react-hooks";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import withApollo from '~/server/apollo';
import { GET_SHOP_SIDEBAR_DATA } from '~/server/queries';

import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import SmallProduct from '~/components/features/product/product-sm';

import { mainSlider7 } from '~/utils/data/carousel';

function ProductsSidebar ( props ) {
    const { adClass = '', type = "right" } = props;
    const { data, loading, error } = useQuery( GET_SHOP_SIDEBAR_DATA, { variables: { featured: true } } );
    const featured = data && data.shopSidebarData.featured;

    const toggleSidebarHandler = ( e ) => {
        if ( type === "right" )
            document.querySelector( 'body' ).classList.toggle( 'right-sidebar-active' );
        else
            document.querySelector( 'body' ).classList.toggle( 'sidebar-active' );
    }

    const hideSidebarhandler = ( e ) => {
        if ( type === "right" )
            document.querySelector( 'body' ).classList.remove( 'right-sidebar-active' );
        else
            document.querySelector( 'body' ).classList.remove( 'sidebar-active' );
    }

    return (
        <aside className={ `col-lg-3 sidebar-fixed sticky-sidebar-wrapper ${ adClass } ${ type === 'left' ? 'sidebar' : 'right-sidebar' }` }>
            <div className="sidebar-overlay" onClick={ hideSidebarhandler }>
                <ALink className="sidebar-close" href="#">
                    <i className="d-icon-times"></i>
                </ALink>
            </div>

            <div className="sidebar-toggle" onClick={ toggleSidebarHandler }>
                {
                    type === "right" ?
                        <i className="fas fa-chevron-left"></i>
                        :
                        <i className="fas fa-chevron-right"></i>
                }
            </div>

            <div className="sidebar-content">
                {
                    loading ? <div className="widget-2"></div> :
                        <div className="sticky-sidebar">
                            <div className="service-list border-no p-0 mb-3">
                                <div className="icon-box icon-box-side icon-inversed icon-box1 border-no">
                                    <i className="icon-box-icon d-icon-butterfly2 ml-1"></i>
                                    <div className="icon-box-content">
                                        <h4 className="icon-box-title text-capitalize">Free Shipping &amp; Return
                                        </h4>
                                        <p className="ls-s">On orders over $99</p>
                                    </div>
                                </div>
                                <div className="icon-box icon-box-side icon-inversed icon-box2 border-no">
                                    <i className="icon-box-icon d-icon-dinner-set"></i>
                                    <div className="icon-box-content">
                                        <h4 className="icon-box-title text-capitalize">Money Back Guarantee</h4>
                                        <p className="ls-s">Any back within 30 days</p>
                                    </div>
                                </div>
                                <div className="icon-box icon-box-side icon-inversed icon-box3 border-no">
                                    <i className="icon-box-icon d-icon-birthday-cake2"></i>
                                    <div className="icon-box-content">
                                        <h4 className="icon-box-title text-capitalize">Customer Support</h4>
                                        <p className="ls-s">Call or email us 24/7</p>
                                    </div>
                                </div>
                            </div>

                            <div className="banner banner-fixed mb-1 text-center">
                                <h5 className="banner-subtitle font-weight-normal color-dark text-uppercase mb-0">
                                    Baby Milk</h5>
                                <h3 className="banner-title text-uppercase mb-0">New Trend 2021</h3>
                                <div className="banner-price-info text-white">
                                    <span>SALE OFF</span><strong className="font-weight-semi-bold">25%</strong>
                                </div>
                                <LazyLoadImage
                                    src="images/home/product/product-banner.png"
                                    alt="banner"
                                    width={ 175 }
                                    height={ 121 }
                                    effect="opacity"
                                />
                            </div>

                            <div className="widget widget-products border-no">
                                <h4 className="widget-title ls-normal">Our Featured</h4>

                                <ul className="widget-body">
                                    <OwlCarousel adClass="owl-nav-top" options={ mainSlider7 }>
                                        <div className="products-col">
                                            {
                                                featured.slice( 0, 3 ).map( ( product, index ) => (
                                                    <SmallProduct product={ product } key={ "small-product-" + index } />
                                                ) )
                                            }
                                        </div>

                                        <div className="products-col">
                                            {
                                                featured.slice( 0, 3 ).map( ( product, index ) => (
                                                    <SmallProduct product={ product } key={ "small-product-" + index } />
                                                ) )
                                            }
                                        </div>
                                    </OwlCarousel>
                                </ul>
                            </div>
                        </div>
                }
            </div>
        </aside>
    );
}

export default withApollo( { ssr: typeof window === "undefined" } )( ProductsSidebar );