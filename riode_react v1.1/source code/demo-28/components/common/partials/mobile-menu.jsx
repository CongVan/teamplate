import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';

import ALink from '~/components/features/custom-link';

function MobileMenu(props) {
    const [search, setSearch] = useState("");
    const [timer, setTimer] = useState(null);
    const router = useRouter();

    useEffect(() => {
        window.addEventListener('resize', hideMobileMenuHandler);
        document.querySelector("body").addEventListener("click", onBodyClick);

        return () => {
            window.removeEventListener('resize', hideMobileMenuHandler);
            document.querySelector("body").removeEventListener("click", onBodyClick);
        }
    }, [])

    useEffect(() => {
        setSearch("");
    }, [router.query.slug])

    const hideMobileMenuHandler = () => {
        if (window.innerWidth > 991) {
            document.querySelector('body').classList.remove('mmenu-active');
        }
    }

    const hideMobileMenu = () => {
        document.querySelector('body').classList.remove('mmenu-active');
    }

    function onSearchChange(e) {
        setSearch(e.target.value);
    }

    function onBodyClick(e) {
        if (e.target.closest('.header-search')) return e.target.closest('.header-search').classList.contains('show-results') || e.target.closest('.header-search').classList.add('show-results');

        document.querySelector('.header-search.show') && document.querySelector('.header-search.show').classList.remove('show');
        document.querySelector('.header-search.show-results') && document.querySelector('.header-search.show-results').classList.remove('show-results');
    }

    function onSubmitSearchForm(e) {
        e.preventDefault();
        router.push({
            pathname: '/shop',
            query: {
                search: search
            }
        });
    }

    return (
        <div className="mobile-menu-wrapper">
            <div className="mobile-menu-overlay" onClick={hideMobileMenu}>
            </div>

            <ALink className="mobile-menu-close" href="#" onClick={hideMobileMenu}><i className="d-icon-times"></i></ALink>

            <div className="mobile-menu-container scrollable">
                <form action="#" className="input-wrapper" onSubmit={onSubmitSearchForm}>
                    <input type="text" className="form-control" name="search" autoComplete="off" value={search} onChange={onSearchChange}
                        placeholder="Search your keyword..." required />
                    <button className="btn btn-search" type="submit">
                        <i className="d-icon-search"></i>
                    </button>
                </form>

                <ul className="mobile-menu mmenu-anim">
                    <Tabs selectedTabClassName="active" selectedTabPanelClassName="active" defaultIndex={1}>
                        <div className="tab tab-menu border-no">
                            <TabList className="nav nav-tabs" role="tablist">
                                <Tab className="nav-item">
                                    <a className="nav-link">Women's</a>
                                </Tab>
                                <Tab className="nav-item">
                                    <a className="nav-link">Men's</a>
                                </Tab>
                            </TabList>
                        </div>
                        <div className="tab-content w-100">
                            <TabPanel className="tab-pane fade p-0">
                                <ul className="menu scrollable mobile-submenu">
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
                                <ul className="menu scrollable mobile-submenu">
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
                    </Tabs>
                </ul>
            </div>
        </div>
    )
}

export default React.memo(MobileMenu);