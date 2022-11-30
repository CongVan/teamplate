import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';

import ALink from '~/components/features/custom-link';

import CartMenu from '~/components/common/partials/cart-menu';
import SearchBox from '~/components/common/partials/search-box';
import LoginModal from '~/components/features/modals/login-modal';

import { headerBorderRemoveList } from '~/utils/data/menu'

export default function Header(props) {
    const router = useRouter();

    useEffect(() => {
        let header = document.querySelector('header');
        if (header) {
            if (headerBorderRemoveList.includes(router.pathname) && header.classList.contains('header-border')) header.classList.remove('header-border')
            else if (!headerBorderRemoveList.includes(router.pathname)) document.querySelector('header').classList.add('header-border');
        }
    }, [router.pathname])

    function tabControl(e) {
        e.preventDefault();
    }

    const showMobileMenu = () => {
        document.querySelector('body').classList.add('mmenu-active');
    }

    return (
        <header className="header">
            <div className="header-top">
                <div className="container">
                    <div className="header-left">
                        <p className="welcome-msg">Welcome to Riode store message or remove it!</p>
                    </div>
                    <div className="header-right">
                        <div className="dropdown">
                            <ALink href="#">USD</ALink>
                            <ul className="dropdown-box">
                                <li><ALink href="#">USD</ALink></li>
                                <li><ALink href="#">EUR</ALink></li>
                            </ul>
                        </div>

                        <div className="dropdown">
                            <ALink href="#">ENG</ALink>
                            <ul className="dropdown-box">
                                <li>
                                    <ALink href="#">ENG</ALink>
                                </li>
                                <li>
                                    <ALink href="#">FRH</ALink>
                                </li>
                            </ul>
                        </div>

                        <span className="divider"></span>
                        <ALink href="/pages/contact-us" className="contact d-lg-show"><i className="d-icon-map"></i>Contact</ALink>
                        <ALink href="#" className="help d-lg-show"><i className="d-icon-info"></i> Need Help</ALink>
                        <LoginModal />
                    </div>
                </div>
            </div>
            <div className="sticky-header sticky-content p-0">
                <Tabs selectedTabClassName="active" selectedTabPanelClassName="active" defaultIndex={0}>
                    <div className="header-middle fix-top has-center">
                        <div className="container">
                            <div className="header-left">
                                <ALink href="#" className="mobile-menu-toggle" onClick={showMobileMenu}>
                                    <i className="d-icon-bars2"></i>
                                </ALink>

                                <ALink href="/" className="logo">
                                    <img src='./images/home/logo.png' alt="logo" width="100" height="27" />
                                </ALink>

                                <div className="tab tab-menu">
                                    <TabList className="nav nav-tabs" role="tablist">
                                        <Tab className="nav-item">
                                            <a className="nav-link" href="#women" onClick={tabControl}>Women's</a>
                                        </Tab>
                                        <Tab className="nav-item">
                                            <a className="nav-link" href="#women" onClick={tabControl}>Men's</a>
                                        </Tab>
                                    </TabList>
                                </div>
                            </div>

                            <div className="header-center">
                                <SearchBox />
                            </div>

                            <div className="header-right">
                                <ALink href="tel:#" className="icon-box icon-box-side">
                                    <div className="icon-box-icon mr-0 mr-lg-2">
                                        <i className="d-icon-phone"></i>
                                    </div>
                                    <div className="icon-box-content d-lg-show">
                                        <h4 className="icon-box-title">Call Us Now:</h4>
                                        <p>0(800) 123-456</p>
                                    </div>
                                </ALink>
                                <span className="divider"></span>
                                <ALink href="/pages/wishlist" className="wishlist mr-4">
                                    <i className="d-icon-heart"></i>
                                </ALink>
                                <span className="divider"></span>
                                <CartMenu />
                            </div>
                        </div>
                    </div>
                    <div className="header-bottom has-center pb-0">
                        <div className="container">
                            <div className="tab-content w-100">
                                <TabPanel className="tab-pane fade p-0">
                                    <ul className="menu scrollable">
                                        <li><ALink href={{ pathname: "/shop", query: { category: "sale" } }}>Sale</ALink></li>
                                        <li><ALink href={{ pathname: "/shop", query: { category: "new-arrivals" } }}>New Arrivals</ALink></li>
                                        <li><ALink href={{ pathname: "/shop", query: { category: "trousers" } }}>Trousers</ALink></li>
                                        <li><ALink href={{ pathname: "/shop", query: { category: "dresses" } }}>Dresses</ALink></li>
                                        <li><ALink href={{ pathname: "/shop", query: { category: "bags-and-backpacks" } }}>Bags & Backpacks</ALink></li>
                                        <li><ALink href={{ pathname: "/shop", query: { category: "shoes-and-boots" } }}>Shoes & Boots</ALink></li>
                                        <li><ALink href={{ pathname: "/shop", query: { category: "accessories" } }}>Accessories</ALink></li>
                                        <li><ALink href={{ pathname: "/shop", query: { category: "jacket" } }}>Jacket</ALink></li>
                                        <li><ALink href={{ pathname: "/shop", query: { category: "sweater" } }}>Sweater</ALink></li>
                                        <li><ALink href={{ pathname: "/shop", query: { category: "inspire-me" } }}>Inspire Me</ALink></li>
                                        <li><ALink href={{ pathname: "/shop", query: { category: "sneakers" } }}>Sneakers</ALink></li>
                                    </ul>
                                </TabPanel>
                                <TabPanel className="tab-pane fade p-0">
                                    <ul className="menu scrollable">
                                        <li><ALink href={{ pathname: "/shop", query: { category: "sale" } }}>Sale</ALink></li>
                                        <li><ALink href={{ pathname: "/shop", query: { category: "new-arrivals" } }}>New Arrivals</ALink></li>
                                        <li><ALink href={{ pathname: "/shop", query: { category: "trousers" } }}>Trousers</ALink></li>
                                        <li><ALink href={{ pathname: "/shop", query: { category: "clothing" } }}>Clothing</ALink></li>
                                        <li><ALink href={{ pathname: "/shop", query: { category: "bags-and-backpacks" } }}>Bags & Backpacks</ALink></li>
                                        <li><ALink href={{ pathname: "/shop", query: { category: "shoes-and-boots" } }}>Shoes & Boots</ALink></li>
                                        <li><ALink href={{ pathname: "/shop", query: { category: "accessories" } }}>Accessories</ALink></li>
                                        <li><ALink href={{ pathname: "/shop", query: { category: "jacket" } }}>Jacket</ALink></li>
                                        <li><ALink href={{ pathname: "/shop", query: { category: "sweater" } }}>Sweater</ALink></li>
                                        <li><ALink href={{ pathname: "/shop", query: { category: "inspire-me" } }}>Inspire Me</ALink></li>
                                        <li><ALink href={{ pathname: "/shop", query: { category: "sneakers" } }}>Sneakers</ALink></li>
                                    </ul>
                                </TabPanel>
                            </div>
                        </div>
                    </div>
                </Tabs>
            </div>
        </header >
    );
}