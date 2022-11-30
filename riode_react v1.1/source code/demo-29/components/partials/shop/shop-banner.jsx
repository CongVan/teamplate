export default function ShopBanner() {

    return (
        <div className="shop-banner-default banner"
            style={{ backgroundImage: 'url(images/home/shop-banner.jpg', backgroundColor: '#f2f2f3' }}>
            <div className="banner-content">
                <h4 className="banner-subtitle mb-2 text-body text-uppercase ls-m font-weight-normal">
                    Riode Shop</h4>
                <h1 className="banner-title font-weight-normal text-uppercase ls-normal mb-4"><strong
                    className="ls-m">Banner</strong> With<br /> Sidebar</h1>
                <p className="font-primary lh-1 ls-m mb-0" style={{ fontSize: '1.6rem' }}>Simple and Fresh ShopStyle</p>
            </div>
        </div>
    )
}