import { useRouter } from 'next/router';

import ALink from '~/components/features/custom-link';

function MainMenu() {
    const router = useRouter();
    const pathname = router.pathname;
    const query = router.query;

    return (
        <div className="header-category-menu row gutter-no text-white w-100">
            <div className="category-menu-content scrollable scrollable-light">
                <div className={`${query.category === 'computer' ? 'active' : ''} category category-icon`}>
                    <ALink href={{ pathname: "/shop", query: { category: "computer" } }} scroll={false}>
                        <figure className="category-media">
                            <i className="d-icon-desktop"></i>
                        </figure>
                        <div className="category-content">
                            <h4 className="category-name">Computers</h4>
                        </div>
                    </ALink>
                </div>
                <div className={`${query.category === 'component' ? 'active' : ''} category category-icon`}>
                    <ALink href={{ pathname: "/shop", query: { category: "component" } }} scroll={false}>
                        <figure className="category-media">
                            <i className="d-icon-wireless"></i>
                        </figure>
                        <div className="category-content">
                            <h4 className="category-name">Component</h4>
                        </div>
                    </ALink>
                </div>
                <div className={`${query.category === 'electronics' ? 'active' : ''} category category-icon`}>
                    <ALink href={{ pathname: "/shop", query: { category: "electronics" } }} scroll={false}>
                        <figure className="category-media">
                            <i className="d-icon-camera2"></i>
                        </figure>
                        <div className="category-content">
                            <h4 className="category-name">Electronics</h4>
                        </div>
                    </ALink>
                </div>
                <div className={`${query.category === 'game-consoles' ? 'active' : ''} category category-icon`}>
                    <ALink href={{ pathname: "/shop", query: { category: "game-consoles" } }} scroll={false}>
                        <figure className="category-media">
                            <i className="d-icon-gamepad2" style={{ fontSize: '3.3rem', marginBottom: '4px' }}></i>
                        </figure>
                        <div className="category-content">
                            <h4 className="category-name">Game consoles</h4>
                        </div>
                    </ALink>
                </div>
                <div className={`${query.category === 'networks' ? 'active' : ''} category category-icon`}>
                    <ALink href={{ pathname: "/shop", query: { category: "networks" } }} scroll={false}>
                        <figure className="category-media">
                            <i className="d-icon-wifi" style={{ fontSize: '4rem', margin: '-7px auto 3px' }}></i>
                        </figure>
                        <div className="category-content">
                            <h4 className="category-name">Networks</h4>
                        </div>
                    </ALink>
                </div>
                <div className={`${query.category === 'office-solution' ? 'active' : ''} category category-icon`}>
                    <ALink href={{ pathname: "/shop", query: { category: "office-solution" } }} scroll={false}>
                        <figure className="category-media">
                            <i className="d-icon-officebag"></i>
                        </figure>
                        <div className="category-content">
                            <h4 className="category-name">Office Solution</h4>
                        </div>
                    </ALink>
                </div>
                <div className={`${query.category === 'smartphone' ? 'active' : ''} category category-icon`}>
                    <ALink href={{ pathname: "/shop", query: { category: "smartphone" } }} scroll={false}>
                        <figure className="category-media">
                            <i className="d-icon-mobile" style={{ fontSize: '3.7rem', margin: '-3px auto 2px' }}></i>
                        </figure>
                        <div className="category-content">
                            <h4 className="category-name">SmartPhone</h4>
                        </div>
                    </ALink>
                </div>
                <div className={`${query.category === 'industrial' ? 'active' : ''} category category-icon`}>
                    <ALink href={{ pathname: "/shop", query: { category: "industrial" } }} scroll={false}>
                        <figure className="category-media">
                            <i className="d-icon-bridge-lamp"></i>
                        </figure>
                        <div className="category-content">
                            <h4 className="category-name">Industrial</h4>
                        </div>
                    </ALink>
                </div>
                <div className={`${query.category === 'headphones' ? 'active' : ''} category category-icon`}>
                    <ALink href={{ pathname: "/shop", query: { category: "headphones" } }} scroll={false}>
                        <figure className="category-media">
                            <i className="d-icon-headphone"></i>
                        </figure>
                        <div className="category-content">
                            <h4 className="category-name">Headphones</h4>
                        </div>
                    </ALink>
                </div>
                <div className={`${query.category === 'accessories' ? 'active' : ''} category category-icon`}>
                    <ALink href={{ pathname: "/shop", query: { category: "accessories" } }} scroll={false}>
                        <figure className="category-media">
                            <i className="d-icon-memory" style={{ fontSize: '3.6rem', margin: '-5px auto 4px' }}></i>
                        </figure>
                        <div className="category-content">
                            <h4 className="category-name">Accessories</h4>
                        </div>
                    </ALink>
                </div>
                <div className={`${query.category === '' ? 'active' : ''} category category-icon`}>
                    <ALink href="/shop" scroll={false}>
                        <figure className="category-media">
                            <i className="d-icon-category"></i>
                        </figure>
                        <div className="category-content">
                            <h4 className="category-name">All Categories</h4>
                        </div>
                    </ALink>
                </div>
            </div>
        </div>
    )
}

export default MainMenu;