export default function ShopBanner ( props ) {
    const { count = 38, title = "Riode Shop", current = "Riode Shop", adClass = '' } = props;

    return (
        <div className={ "page-header " + adClass } style={ { backgroundImage: `url( ./images/shop/page-header-back.jpg )`, backgroundColor: "#3C63A4" } }>
            {
                title ? <h1 className="page-title">{ title }</h1> : ''
            }
            {
                count ? <h3 className="page-subtitle">{ count } products</h3> : ''
            }
        </div>
    )
}