import ALink from '~/components/features/custom-link';

export default function ShopBanner ( props ) {
    const { subTitle = '', title = "Riode Shop", current = "Riode Shop" } = props;

    return (
        <div className="page-header shop-banner" style={ { backgroundImage: `url( ./images/shop/page-header-back.jpg )`, backgroundColor: "#3C63A4" } }>
            {
                subTitle ? <h3 className="page-subtitle">{ subTitle }</h3> : ''
            }
            {
                title ? <h1 className="page-title font-weight-bold ls-md mb-1">{ title }</h1> : ''
            }
            <ul className="breadcrumb p-0">
                <li><ALink href="/"><i className="d-icon-home"></i></ALink></li>
                <li className="delimiter"><i className="fas fa-angle-right"></i></li>
                <li>{ current }</li>
            </ul>
        </div>
    )
}