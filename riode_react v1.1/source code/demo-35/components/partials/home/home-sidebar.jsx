// import { useRouter } from 'next/router';
import ALink from '~/components/features/custom-link';

export default function HomeSidebar() {
    return (
        <div className="col-lg-3 d-none d-lg-block">
            <div className="category-menu">
                <ul className="category-menu">
                    <li><ALink href="/shop" className="menu-title"><span>Browse Our Categories</span></ALink></li>
                    {/* <li><ALink href={{ pathname: "/shop", query: { category: "sale" } }}>Get Free Riode Gifts!</ALink></li> */}
                    <li><ALink href="/shop">Get Free Riode Gifts!</ALink></li>
                    <li><ALink href="/shop">Coupon Rain</ALink></li>
                    <li><ALink href="/shop">Black Friday Deals</ALink></li>
                    <li><ALink href="/shop">48H Only Lighting Deals</ALink></li>
                    <li><ALink href="/shop">Save 60% With 2Pcs</ALink></li>
                    <li><ALink href="/shop">Brand Sale</ALink></li>
                    <li><ALink href="/shop">Must-Buy Electronics</ALink></li>
                    <li><ALink href="/shop">Christmas Special Offer</ALink></li>
                    <li><ALink href="/shop">Cool Man Fashion</ALink></li>
                    <li><ALink href="/shop">Under $25</ALink></li>
                </ul>
            </div>
        </div>
    )
}