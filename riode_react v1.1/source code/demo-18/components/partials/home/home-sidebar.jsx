import React from 'react';
import { useRouter } from 'next/router';

import ALink from '~/components/features/custom-link';

function HomeSidebar( props ) {
    const { adClass = 'col-lg-3' } = props;
    const router = useRouter();
    const query = router.query;

    const toggleSidebarHandler = ( e ) => {
        e.preventDefault();
        document.querySelector( 'body' ).classList.toggle( 'sidebar-active' );
    }

    const hideSidebarhandler = () => {
        document.querySelector( 'body' ).classList.remove( 'sidebar-active' );
    }

    return (
        <aside className={ "sidebar sidebar-fixed sticky-sidebar-wrapper " + adClass }>
            <div className="sidebar-overlay" onClick={ hideSidebarhandler }>
                <ALink className="sidebar-close" href="#">
                    <i className="d-icon-times"></i>
                </ALink>
            </div>

            <a href="#" className="sidebar-toggle" onClick={ toggleSidebarHandler }>
                <i className="fas fa-chevron-right"></i>
            </a>

            <div className="sidebar-content">
                <div className="sticky-sidebar">
                    <div className="widget widget-category mb-8">
                        <ul className="menu vertical-menu category-menu">
                            <li className={ query.category === 'accessories' ? 'show' : '' }><ALink href={ { pathname: '/', query: { category: 'accessories' } } } scroll={ false }>Accessories</ALink></li>
                            <li className={ query.category === 'backpack-and-fashion-bags' ? 'show' : '' }><ALink href={ { pathname: '/', query: { category: 'backpack-and-fashion-bags' } } } scroll={ false }>Backpack &amp; Fashion Bags</ALink></li>
                            <li className={ query.category === 'casual-clothing' ? 'show' : '' }><ALink href={ { pathname: '/', query: { category: 'casual-clothing' } } } scroll={ false }>Casual Clothing</ALink></li>
                            <li className={ query.category === 'gift' ? 'show' : '' }><ALink href={ { pathname: '/', query: { category: 'gift' } } } scroll={ false }>Gift</ALink></li>
                            <li className={ query.category === 'jewellery' ? 'show' : '' }><ALink href={ { pathname: '/', query: { category: 'jewellery' } } } scroll={ false }>Jewellery</ALink></li>
                            <li className={ query.category === 'leather-goods' ? 'show' : '' }><ALink href={ { pathname: '/', query: { category: 'leather-goods' } } } scroll={ false }>Leather Goods</ALink></li>
                            <li className={ query.category === 'merry-christmas' ? 'show' : '' }><ALink href={ { pathname: '/', query: { category: 'merry-christmas' } } } scroll={ false }>Merry Christmas</ALink></li>
                            <li className={ query.category === 'under-25' ? 'show' : '' }><ALink href={ { pathname: '/', query: { category: 'under-25' } } } scroll={ false }>Under $25</ALink></li>
                            <li className={ query.category === 'watches' ? 'show' : '' }><ALink href={ { pathname: '/', query: { category: 'watches' } } } scroll={ false }>Watches</ALink></li>
                            <li><ALink href={ { pathname: '/', query: { sortby: 'popularity' } } } scroll={ false }>Best Selling Products</ALink></li>
                            <li><ALink href={ { pathname: '/', query: { sortby: 'rating' } } } scroll={ false }>Trends 2021</ALink></li>
                            <li><ALink href="https://d-themes.com/buynow/riodereact">Buy Riode</ALink></li>
                        </ul>
                    </div>

                    <div className="banner banner-newsletter mb-10">
                        <div className="banner-content text-center">
                            <p className="banner-subtitle">Premium Brand</p>
                            <h3 className="banner-title">Sale</h3>
                            <form action="#">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Email address here..." required />
                                <button className="btn btn-dark" type="submit">Subscribe<i className="d-icon-arrow-right"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default React.memo( HomeSidebar );