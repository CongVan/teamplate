import ALink from '~/components/features/custom-link';

export default function ShopBanner ( props ) {
    const { subTitle = '', title = "Riode Shop", current = "Riode Shop" } = props;

    return (
        <div className="page-header" style={ { backgroundImage: `url( ./images/shop/page-header-back.jpg )`, backgroundColor: "#bec7d0" } }>
            {
                subTitle ? <h3 className="page-subtitle font-weight-bold ls-m">{ subTitle }</h3> : ''
            }
            {
                title ? <h1 className="page-title font-weight-bold ls-m">{ title }</h1> : ''
            }
            <ul className="breadcrumb ls-normal">
                <li><ALink href="/"><i className="d-icon-home"></i></ALink></li>
                <li className="delimiter"><i className="d-icon-angle-right"></i></li>
                <li>{ current }</li>
            </ul>
        </div>
    )
}