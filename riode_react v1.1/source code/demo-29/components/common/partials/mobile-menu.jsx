import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

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

                <ul className="mobile-menu mmenu-anim border-no">
                    <li>
                        <ALink href="/" onClick={hideMobileMenu}>Home</ALink>
                    </li>

                    <li>
                        <ALink href={{ pathname: "/shop", query: { category: "computers" } }} onClick={hideMobileMenu}>
                            <i className="d-icon-desktop"></i>
                            <h4 className="mobile-catyname">Computers</h4>
                        </ALink>
                    </li>

                    <li>
                        <ALink href={{ pathname: "/shop", query: { category: "component" } }} onClick={hideMobileMenu}>
                            <i className="d-icon-wireless"></i>
                            <h4 className="mobile-catyname">Component</h4>
                        </ALink>
                    </li>

                    <li>
                        <ALink href={{ pathname: "/shop", query: { category: "electronics" } }} onClick={hideMobileMenu}>
                            <i className="d-icon-camera2"></i>
                            <h4 className="mobile-catyname">Electronics</h4>
                        </ALink>
                    </li>

                    <li>
                        <ALink href={{ pathname: "/shop", query: { category: "game-consoles" } }} onClick={hideMobileMenu}>
                            <i className="d-icon-gamepad2"></i>
                            <h4 className="mobile-catyname">Game consoles</h4>
                        </ALink>
                    </li>

                    <li>
                        <ALink href={{ pathname: "/shop", query: { category: "networks" } }} onClick={hideMobileMenu}>
                            <i className="d-icon-wifi"></i>
                            <h4 className="mobile-catyname">Networks</h4>
                        </ALink>
                    </li>

                    <li>
                        <ALink href={{ pathname: "/shop", query: { category: "office-solution" } }} onClick={hideMobileMenu}>
                            <i className="d-icon-officebag"></i>
                            <h4 className="mobile-catyname">Office Solution</h4>
                        </ALink>
                    </li>
                    <li>
                        <ALink href={{ pathname: "/shop", query: { category: "smartPhone" } }} onClick={hideMobileMenu}>
                            <i className="d-icon-mobile"></i>
                            <h4 className="mobile-catyname">SmartPhone</h4>
                        </ALink>
                    </li>
                    <li>
                        <ALink href={{ pathname: "/shop", query: { category: "industrial" } }} onClick={hideMobileMenu}>
                            <i className="d-icon-bridge-lamp"></i>
                            <h4 className="mobile-catyname">Industrial</h4>
                        </ALink>
                    </li>
                    <li>
                        <ALink href={{ pathname: "/shop", query: { category: "headphones" } }} onClick={hideMobileMenu}>
                            <i className="d-icon-headphone"></i>
                            <h4 className="mobile-catyname">Headphones</h4>
                        </ALink>
                    </li>
                    <li>
                        <ALink href={{ pathname: "/shop", query: { category: "accessories" } }} onClick={hideMobileMenu}>
                            <i className="d-icon-memory"></i>
                            <h4 className="mobile-catyname">Accessories</h4>
                        </ALink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default React.memo(MobileMenu);