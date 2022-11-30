import ALink from '~/components/features/custom-link';

export default function Breadcrumb ( props ) {
    return (
        <div className="page-header"
            style={ { backgroundImage: `url( ./images/shop/page-header-back.jpg )`, backgroundColor: "#f1f2f6" } }>
            <h3 className="page-subtitle text-dark">{ props.subTitle }</h3>
            <h1 className="page-title text-dark">{ props.title }</h1>
            <ul className="breadcrumb">
                <li className="text-dark"><ALink href="/" className="text-dark"><i className="d-icon-home"></i></ALink></li>
                <li className="delimiter text-dark">/</li>
                {
                    props.parentUrl ?
                        <>
                            <li className="text-dark"><ALink href={ props.parentUrl } className="text-dark">{ props.subTitle }</ALink></li>
                            <li className="delimiter text-dark">/</li>
                        </>
                        : ""
                }
                <li className="text-dark">{ props.title }</li>
            </ul>
        </div>
    )
}