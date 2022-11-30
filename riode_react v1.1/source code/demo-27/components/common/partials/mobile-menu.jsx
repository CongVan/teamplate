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

                <ul className="mobile-menu mmenu-anim">
                    <li>
                        <ALink href="/">Home</ALink>
                    </li>

                    <li>
                        <ALink href={{ pathname: "/shop", query: { category: "mobile" } }}>
                            <i className="d-icon-mobile"></i>
                            <h4 className="mobile-catyname">Mobile Phone &amp; Accessories</h4>
                        </ALink>
                    </li>

                    <li>
                        <ALink href={{ pathname: "/shop", query: { category: "camera" } }}>
                            <i className="d-icon-camera1"></i>
                            <h4 className="mobile-catyname">Cy Photo &amp; Accessories</h4>
                        </ALink>
                    </li>

                    <li>
                        <ALink href={{ pathname: "/shop", query: { category: "headphone" } }}>
                            <i className="d-icon-headphone"></i>
                            <h4 className="mobile-catyname">Pye Headphone</h4>
                        </ALink>
                    </li>

                    <li>
                        <ALink href={{ pathname: "/shop", query: { category: "computer" } }}>
                            <i className="d-icon-desktop"></i>
                            <h4 className="mobile-catyname">Cyrs &amp; Tablets</h4>
                        </ALink>
                    </li>

                    <li>
                        <ALink href={{ pathname: "/shop", query: { category: "kitchen" } }}>
                            <i className="d-icon-cook"></i>
                            <h4 className="mobile-catyname">Hyitchen Electronics</h4>
                        </ALink>
                    </li>

                    <li>
                        <ALink href={{ pathname: "/shop", query: { category: "gaming" } }}>
                            <i className="d-icon-table-tv"></i>
                            <h4 className="mobile-catyname">Hydeo &amp; Theater</h4>
                        </ALink>
                    </li>
                    <li>
                        <ALink href={{ pathname: "/shop", query: { category: "accessories" } }}>
                            <i className="d-icon-gamepad2"></i>
                            <h4 className="mobile-catyname">Gy&amp; Accessories</h4>
                        </ALink>
                    </li>
                    <li>
                        <ALink href={{ pathname: "/shop", query: { category: "mobile" } }}>
                            <i className="d-icon-category"></i>
                            <h4 className="mobile-catyname">ByMore</h4>
                        </ALink>
                    </li>

                    <li className="pb-0"><ALink href="#">Buy Riode!</ALink></li>
                </ul>

                <ul className="mobile-menu mmenu-anim">
                    <li className="pt-0"><ALink href={'/pages/account'}>Login</ALink></li>
                    <li><ALink href={'/pages/cart'}>My Cart</ALink></li>
                    <li><ALink href={'/pages/wishlist'}>Wishlist</ALink></li>
                </ul>
            </div>
        </div>
    )
}

export default React.memo(MobileMenu);