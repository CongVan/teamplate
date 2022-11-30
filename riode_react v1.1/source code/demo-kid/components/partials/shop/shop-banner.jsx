export default function ShopBanner ( props ) {
    const { subTitle = '', title = "Riode Shop", current = "Riode Shop" } = props;

    return (
        <>
            <div className="page-header" style={ { backgroundImage: `url( ./images/shop/page-header-back.jpg )`, backgroundColor: "#fee3d8" } }>
                {
                    subTitle ? <h3 className="page-subtitle">{ subTitle }</h3> : ''
                }
                {
                    title ? <h1 className="page-title font-weight-bold">{ title }</h1> : ''
                }
            </div>
        </>
    )
}