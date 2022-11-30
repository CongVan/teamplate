import React from 'react';
import SlideToggle from 'react-slide-toggle';
import { useRouter } from 'next/router';

import ALink from '~/components/features/custom-link';

function CategorySidebar() {
    const router = useRouter();
    const query = router.query;

    const toggleSidebarHandler = () => {
        document.querySelector( 'body' ).classList.toggle( 'category-sidebar-active' );
    }

    return (
        <aside className="sidebar category-sidebar">
            <div className="sidebar-content">
                <ALink href="#" className="sidebar-toggle" onClick={ toggleSidebarHandler }>
                    <i className="d-icon-bars2 text-secondary"></i><span className="text-white text-uppercase">Categories</span>
                </ALink>

                <div className="viewport scrollable">
                    <ul className="menu toggle-menu category-menu">
                        <SlideToggle duration={ 300 } collapsed >
                            { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                <li className={ `submenu ${ toggleState === 'EXPANDED' ? 'show' : '' }` }>
                                    <ALink href={ { pathname: '/shop', query: { category: 'fashion', grid: query.grid } } } scroll={ false }>
                                        <i className="d-icon-t-shirt1"></i>Fashion
                                        <span className={ `toggle-btn ${ toggleState.toLowerCase() }` } onClick={ e => { e.stopPropagation(); e.preventDefault(); onToggle(); } }></span>
                                    </ALink>

                                    <div ref={ setCollapsibleElement } style={ { overflow: 'hidden' } }>
                                        <ul style={ { display: "block", background: "#232323" } }>
                                            <li><ALink href={ { pathname: '/shop', query: { category: 'dress', grid: query.grid } } } scroll={ false }>Dress</ALink></li>
                                            <li><ALink href={ { pathname: '/shop', query: { category: 'shirts', grid: query.grid } } } scroll={ false }>Shirts</ALink></li>
                                            <li><ALink href={ { pathname: '/shop', query: { category: 'bags', grid: query.grid } } } scroll={ false }>Bags</ALink></li>
                                            <li><ALink href={ { pathname: '/shop', query: { category: 'trousers', grid: query.grid } } } scroll={ false }>Trousers</ALink></li>
                                        </ul>
                                    </div>
                                </li>
                            ) }
                        </SlideToggle>

                        <SlideToggle duration={ 300 } collapsed >
                            { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                <li className={ `submenu ${ toggleState === 'EXPANDED' ? 'show' : '' }` }>
                                    <ALink href={ { pathname: '/shop', query: { category: 'electronics', grid: query.grid } } } scroll={ false }>
                                        <i className="d-icon-camera2"></i>Electronics
                                        <span className={ `toggle-btn ${ toggleState.toLowerCase() }` } onClick={ e => { e.stopPropagation(); e.preventDefault(); onToggle(); } }></span>
                                    </ALink>

                                    <div ref={ setCollapsibleElement } style={ { overflow: 'hidden' } }>
                                        <ul style={ { display: "block", background: "#232323" } }>
                                            <li><ALink href={ { pathname: '/shop', query: { category: 'watches', grid: query.grid } } } scroll={ false }>Watches</ALink></li>
                                            <li><ALink href={ { pathname: '/shop', query: { category: 'equipments', grid: query.grid } } } scroll={ false }>Equipments</ALink></li>
                                            <li><ALink href={ { pathname: '/shop', query: { category: 'machines', grid: query.grid } } } scroll={ false }>Machines</ALink></li>
                                        </ul>
                                    </div>
                                </li>
                            ) }
                        </SlideToggle>

                        <SlideToggle duration={ 300 } collapsed >
                            { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                <li className={ `submenu ${ toggleState === 'EXPANDED' ? 'show' : '' }` }>
                                    <ALink href={ { pathname: '/shop', query: { category: 'computer-and-laptops', grid: query.grid } } } scroll={ false }>
                                        <i className="d-icon-desktop"></i>Computer &amp; Laptops
                                        <span className={ `toggle-btn ${ toggleState.toLowerCase() }` } onClick={ e => { e.stopPropagation(); e.preventDefault(); onToggle(); } }></span>
                                    </ALink>

                                    <div ref={ setCollapsibleElement } style={ { overflow: 'hidden' } }>
                                        <ul style={ { display: "block", background: "#232323" } }>
                                            <li><ALink href={ { pathname: '/shop', query: { category: 'computers', grid: query.grid } } } scroll={ false }>Computers</ALink></li>
                                            <li><ALink href={ { pathname: '/shop', query: { category: 'laptops', grid: query.grid } } } scroll={ false }>Laptops</ALink></li>
                                        </ul>
                                    </div>
                                </li>
                            ) }
                        </SlideToggle>

                        <SlideToggle duration={ 300 } collapsed >
                            { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                <li className={ `submenu ${ toggleState === 'EXPANDED' ? 'show' : '' }` }>
                                    <ALink href={ { pathname: '/shop', query: { category: 'home-and-kitchen', grid: query.grid } } } scroll={ false }>
                                        <i className="d-icon-cook"></i>Home &amp; kitchen
                                        <span className={ `toggle-btn ${ toggleState.toLowerCase() }` } onClick={ e => { e.stopPropagation(); e.preventDefault(); onToggle(); } }></span>
                                    </ALink>

                                    <div ref={ setCollapsibleElement } style={ { overflow: 'hidden' } }>
                                        <ul style={ { display: "block", background: "#232323" } }>
                                            <li><ALink href={ { pathname: '/shop', query: { category: 'home', grid: query.grid } } } scroll={ false }>Home</ALink></li>
                                            <li><ALink href={ { pathname: '/shop', query: { category: 'kitchen', grid: query.grid } } } scroll={ false }>Kitchen</ALink></li>
                                        </ul>
                                    </div>
                                </li>
                            ) }
                        </SlideToggle>

                        <li>
                            <ALink href={ { pathname: '/shop', query: { category: 'toys-and-babycare', grid: query.grid } } } scroll={ false }><i className="d-icon-babycare"></i>Toys &amp; Babycare</ALink>
                        </li>
                        <li>
                            <ALink href={ { pathname: '/shop', query: { category: 'sports', grid: query.grid } } } scroll={ false }><i className="d-icon-basketball1"></i>Sports</ALink>
                        </li>
                        <li>
                            <ALink href={ { pathname: '/shop', query: { category: 'backpack-and-bags', grid: query.grid } } } scroll={ false }><i className="d-icon-officebag"></i>Backpack &amp; Bags</ALink>
                        </li>
                        <li>
                            <ALink href={ { pathname: '/shop', query: { category: 'gaming-and-accessories', grid: query.grid } } } scroll={ false }><i className="d-icon-gamepad1"></i>Gaming &amp; Accessories</ALink>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    );
}

export default React.memo( CategorySidebar );