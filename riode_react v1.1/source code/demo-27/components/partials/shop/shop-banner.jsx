import ALink from '~/components/features/custom-link';

export default function ShopBanner(props) {
    return (
        <div className="shop-banner banner" style={{ backgroundImage: `url( ./images/home/page-header.jpg )`, backgroundColor: "#eee" }}>
            <div className="banner-content">
                <h3 className="banner-subtitle mb-2 text-uppercase ls-l text-primary font-weight-bold">Up to
                25% Off
							</h3>
                <h1 className="banner-title mb-1 text-uppercase ls-m font-weight-bold">Cromebook simlicity</h1>
                <p className="font-primary ls-m text-dark">Galaxy Style</p>
                <ALink href="/shop" className="btn btn-outline btn-dark btn-rounded">Shop now</ALink>
            </div>
        </div>
    )
}