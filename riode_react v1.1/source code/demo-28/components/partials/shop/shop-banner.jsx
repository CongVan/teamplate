import ALink from '~/components/features/custom-link';

export default function ShopBanner() {
    return (
        <div className="shop-banner banner"
            style={{ backgroundImage: 'url(images/home/shop-banner.jpg)', backgroundColor: '#8bd1c7' }}>
            <div className="banner-content">
                <h4 className="banner-subtitle text-uppercase ls-m font-weight-bold">
                    Shop Women</h4>
                <h1 className="banner-title font-weight-bold text-white text-uppercase">Summer Season’s
									</h1>
                <p className="font-primary text-white lh-1 ls-m">Intuitive operating experience</p>
                <ALink href="/shop" className="btn btn-outline btn-dark btn-rounded">Shop now</ALink>
            </div>
        </div>
    )
}