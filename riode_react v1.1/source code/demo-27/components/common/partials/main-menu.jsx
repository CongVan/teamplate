import { useRouter } from 'next/router';

import ALink from '~/components/features/custom-link';

function MainMenu() {
    const router = useRouter();
    const pathname = router.pathname;
    const query = router.query;

    return (
        <div className="row align-items-center gutter-no scrollable">
            <ALink href={{ pathname: "/shop", query: { category: "mobile" } }} className={`${query.category === 'mobile' ? 'active' : ''} category category-icon-inline`} scroll={false}>
                <div className="category-media" style={{ fontSize: '3.8rem' }}>
                    <i className="d-icon-mobile"></i>
                </div>
                <div className="category-content">
                    <h4 className="category-name">Mobile Phone <br />&amp; Accessories</h4>
                </div>
            </ALink>
            <ALink href={{ pathname: "/shop", query: { category: "camera" } }} className={`${query.category === 'camera' ? 'active' : ''} category category-icon-inline`} scroll={false}>
                <div className="category-media">
                    <i className="d-icon-camera1"></i>
                </div>
                <div className="category-content">
                    <h4 className="category-name">Camera, Photo<br /> &amp; Accessories</h4>
                </div>
            </ALink>
            <ALink href={{ pathname: "/shop", query: { category: "headphone" } }} className={`${query.category === 'headphone' ? 'active' : ''} category category-icon-inline`} scroll={false}>
                <div className="category-media">
                    <i className="d-icon-headphone"></i>
                </div>
                <div className="category-content">
                    <h4 className="category-name">Portable <br />Headphone</h4>
                </div>
            </ALink>
            <ALink href={{ pathname: "/shop", query: { category: "computer" } }} className={`${query.category === 'computer' ? 'active' : ''} category category-icon-inline`} scroll={false}>
                <div className="category-media">
                    <i className="d-icon-desktop"></i>
                </div>
                <div className="category-content">
                    <h4 className="category-name">Computers <br />&amp; Tablets</h4>
                </div>
            </ALink>
            <ALink href={{ pathname: "/shop", query: { category: "kitchen" } }} className={`${query.category === 'kitchen' ? 'active' : ''} category category-icon-inline`} scroll={false}>
                <div className="category-media">
                    <i className="d-icon-cook"></i>
                </div>
                <div className="category-content">
                    <h4 className="category-name">Home, Kitchen <br />Electronics</h4>
                </div>
            </ALink>
            <ALink href={{ pathname: "/shop", query: { category: "gaming" } }} className={`${query.category === 'gaming' ? 'active' : ''} category category-icon-inline`} scroll={false}>
                <div className="category-media">
                    <i className="d-icon-table-tv"></i>
                </div>
                <div className="category-content">
                    <h4 className="category-name">Home Video <br />&amp; Theater</h4>
                </div>
            </ALink>
            <ALink href={{ pathname: "/shop", query: { category: "accessories" } }} className={`${query.category === 'accessories' ? 'active' : ''} category category-icon-inline`} scroll={false}>
                <div className="category-media" style={{ fontSize: '3.3rem' }}>
                    <i className="d-icon-gamepad2"></i>
                </div>
                <div className="category-content">
                    <h4 className="category-name">Gaming &amp; <br />Accessories</h4>
                </div>
            </ALink>
            <ALink href={{ pathname: "/shop", query: { category: "mobile" } }} className={`${query.category === 'mobile' ? 'active' : ''} category category-icon-inline`} scroll={false}>
                <div className="category-media">
                    <i className="d-icon-category"></i>
                </div>
                <div className="category-content">
                    <h4 className="category-name">Browse <br />More</h4>
                </div>
            </ALink>
        </div>
    )
}

export default MainMenu;