import { useRouter } from 'next/router';

import ALink from '~/components/features/custom-link';

export default function CategoryMenu() {
    const router = useRouter();
    const pathname = useRouter().pathname;
    const query = router.query;

    function filterHandler() {
        if (document.querySelector('.select-items'))
            document.querySelector('.select-items').style.visibility = "hidden";
    }

    return (
        <section className="category-menu-section">
            <div className="container">
                <div className="p-relative">
                    <ul className="menu menu-options vertical-menu category-menu">
                        <li onClick={filterHandler}>
                            <ALink href={{ pathname: "/shop", query: { category: "computer" } }} className={`${query.category === 'computer' ? 'active' : ''}`}>
                                <i className="d-icon-desktop"></i>Computer &amp; Laptops
                        </ALink>
                        </li>
                        <li className="submenu" onClick={filterHandler}>
                            <ALink href={{ pathname: "/shop", query: { category: "t-shirt" } }} className={`${query.category === 't-shirt' ? 'active' : ''}`}>
                                <i className="d-icon-t-shirt1"></i>Travel &amp; Clothing
                        </ALink>
                            <div className="megamenu">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <h4 className="menu-title">Women’s Clothing</h4>
                                        <ul>
                                            <li><ALink href="#">Bottoms</ALink></li>
                                            <li><ALink href="#">Dresses</ALink></li>
                                            <li><ALink href="#">Outwear</ALink></li>
                                            <li><ALink href="#">Sleepwear</ALink></li>
                                            <li><ALink href="#">Swimwear</ALink></li>
                                            <li><ALink href="#">Tops</ALink></li>
                                            <li><ALink href="#">Two-Piece Set</ALink></li>
                                            <li><ALink href="#">Women's Accessories</ALink></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-4">
                                        <h4 className="menu-title">Men’s Clothing</h4>
                                        <ul>
                                            <li><ALink href="#">Bottoms</ALink></li>
                                            <li><ALink href="#">Men's Accessories</ALink></li>
                                            <li><ALink href="#">Outdoors</ALink></li>
                                            <li><ALink href="#">Outwear</ALink></li>
                                            <li><ALink href="#">Sleepwear</ALink></li>
                                            <li><ALink href="#">Swimwear</ALink></li>
                                            <li><ALink href="#">Tops</ALink></li>
                                            <li><ALink href="#">Underwear</ALink></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="menu-banner menu-banner3 banner banner-fixed">
                                            <figure>
                                                <img src="images/menu/banner-3.jpg" alt="Banner" width="280"
                                                    height="374" />
                                            </figure>
                                            <div className="banner-content banner-date">
                                                <h6 className=" text-white font-weight-bold text-uppercase lh-1 mb-0">
                                                    20-22<sup>tm</sup>April</h6>
                                            </div>
                                            <div className="banner-content x-50 w-100 text-center">
                                                <h4
                                                    className="banner-subtitle bg-primary d-inline-block mb-1 text-white lh-1 ls-normal text-uppercase font-weight-semi-bold">
                                                    Ultimate Sale</h4>
                                                <h3
                                                    className="banner-title text-white text-uppercase font-weight-bold lh-1 ls-l mb-0">
                                                    Up To 70%</h3>
                                                <p className="text-white font-weight-normal ls-normal mb-2">
                                                    Discount Selected Items</p>
                                                <ALink href="/shop" className="btn btn-white btn-link btn-underline"><span>Shop Now</span><i className="d-icon-arrow-right"></i></ALink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="submenu" onClick={filterHandler}>
                            <ALink href={{ pathname: "/shop", query: { category: "game-accessories" } }} className={`${query.category === 'game-accessories' ? 'active' : ''}`}>
                                <i className="d-icon-gamepad1"></i>Gaming Accessories
                        </ALink>
                            <div className="megamenu">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <h4 className="menu-title">Computers</h4>
                                        <ul>
                                            <li><ALink href="#">Riode</ALink></li>
                                            <li><ALink href="#">Acer</ALink></li>
                                            <li><ALink href="#">American Dreams</ALink></li>
                                            <li><ALink href="#">Apple</ALink></li>
                                            <li><ALink href="#">Arcade1UP</ALink></li>
                                            <li><ALink href="#">Samsung</ALink></li>
                                            <li><ALink href="#">HP</ALink></li>
                                            <li><ALink href="#">Sonny</ALink></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-4">
                                        <h4 className="menu-title">Tables</h4>
                                        <ul>
                                            <li><ALink href="#">Ipad</ALink></li>
                                            <li><ALink href="#">Dell</ALink></li>
                                            <li><ALink href="#">Lenovo</ALink></li>
                                            <li><ALink href="#">Peach</ALink></li>
                                            <li><ALink href="#">Macintosh</ALink></li>
                                            <li><ALink href="#">5G</ALink></li>
                                            <li><ALink href="#">Samsung</ALink></li>
                                            <li><ALink href="#">Sonny</ALink></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="menu-banner menu-banner3 banner banner-fixed">
                                            <figure>
                                                <img src="images/menu/banner-3.jpg" alt="Banner" width="280"
                                                    height="374" />
                                            </figure>
                                            <div className="banner-content banner-date">
                                                <h6 className=" text-white font-weight-bold text-uppercase lh-1 mb-0">
                                                    20-22<sup>tm</sup>April</h6>
                                            </div>
                                            <div className="banner-content x-50 w-100 text-center">
                                                <h4
                                                    className="banner-subtitle bg-primary d-inline-block mb-1 text-white lh-1 ls-normal text-uppercase font-weight-semi-bold">
                                                    Ultimate Sale</h4>
                                                <h3
                                                    className="banner-title text-white text-uppercase font-weight-bold lh-1 ls-l mb-0">
                                                    Up To 70%</h3>
                                                <p className="text-white font-weight-normal ls-normal mb-2">
                                                    Discount Selected Items</p>
                                                <ALink href="/shop" className="btn btn-white btn-link btn-underline"><span>Shop Now</span><i className="d-icon-arrow-right"></i></ALink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li onClick={filterHandler}>
                            <ALink href={{ pathname: "/shop", query: { category: "electronics" } }} className={`${query.category === 'electronics' ? 'active' : ''}`}>
                                <i className="d-icon-camera1"></i>Electronics
                        </ALink>
                        </li>
                        <li onClick={filterHandler}>
                            <ALink href={{ pathname: "/shop", query: { category: "home-kitchen" } }} className={`${query.category === 'home-kitchen' ? 'active' : ''}`}>
                                <i className="d-icon-cook"></i>Home &amp; Kitchen
                        </ALink>
                        </li>
                        <li onClick={filterHandler}>
                            <ALink href={{ pathname: "/shop", query: { category: "sporting-goods" } }} className={`${query.category === 'sporting-goods' ? 'active' : ''}`}>
                                <i className="d-icon-basketball2"></i>Sporting Goods
                        </ALink>
                        </li>
                        <li onClick={filterHandler}>
                            <ALink href={{ pathname: "/shop", query: { category: "backpack-and-bags" } }} className={`${query.category === 'backpack-and-bags' ? 'active' : ''}`}>
                                <i className="d-icon-handbag"></i>Backpack &amp; Bags
                        </ALink>
                        </li>
                        <li onClick={filterHandler}>
                            <ALink href={{ pathname: "/shop", query: { category: "toys" } }} className={`${query.category === 'toys' ? 'active' : ''}`}>
                                <i className="d-icon-babycare"></i>Toys &amp; Babycare
                        </ALink>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}