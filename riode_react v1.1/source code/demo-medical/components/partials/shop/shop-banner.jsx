import ALink from '~/components/features/custom-link';

export default function ShopBanner ( props ) {
    const { subTitle = '', title = "Riode Shop", current = "Shop", isDefault = false } = props;

    return (
        <div className="page-header" style={ { backgroundImage: `url( ./images/shop/page-header-back.jpg )`, backgroundColor: "#3C63A4" } }>
            <div className="container">
                {
                    !isDefault && subTitle ? <h3 className="page-subtitle text-uppercase mb-2 text-white">{ subTitle }</h3> : ''
                }
                {
                    title ? <h1 className="page-title text-white">{ title }</h1> : ''
                }
                {
                    isDefault && subTitle ? <h3 className="page-subtitle text-uppercase mb-2 text-white">{ subTitle }</h3> : ''
                }
                <ul className="breadcrumb text-white">
                    <li><ALink href="/"><i className="d-icon-home text-white"></i></ALink></li>
                    <li className="delimiter"><i className="fas fa-chevron-right"></i></li>
                    <li className="text-white">{ current }</li>
                </ul>
            </div>
        </div>
    )
}