import ALink from '~/components/features/custom-link';

export default function ShopBanner ( props ) {
    const { subTitle = '', title = "Riode Shop", current = "Riode Shop" } = props;

    return (
        <>
            <div className="page-header" style={ { backgroundImage: `url( ./images/shop/page-header-back.jpg )`, backgroundColor: "#f1f2f6" } }>
                {
                    subTitle ? <h3 className="page-subtitle text-dark">{ subTitle }</h3> : ''
                }
                {
                    title ? <h1 className="page-title font-weight-bold text-dark">{ title }</h1> : ''
                }
                <ul className="breadcrumb pb-0">
                    <li className="text-dark"><ALink href="/" className="text-dark"><i className="d-icon-home"></i></ALink></li>
                    <li className="delimiter text-dark">/</li>
                    <li className="text-dark">Riode Shop</li>
                </ul>
            </div>
        </>
    )
}