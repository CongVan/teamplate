import ALink from '~/components/features/custom-link';

export default function ShopBanner(props) {
    const { current = "Riode Shop", isbreadcrumb = false } = props;

    return (
        <div className={`page-header ${isbreadcrumb ? 'mb-4' : ''}`} style={{ backgroundImage: `url( images/home/page-header.jpg )`, backgroundColor: "#dbdee3" }}>
            <h1 className="page-title text-dark ls-m">Riode Shop</h1>
            {
                isbreadcrumb ?
                    <ul className="breadcrumb">
                        <li><ALink href="/"><i className="d-icon-home text-dark"></i></ALink></li>
                        <li className="delimiter text-dark">/</li>
                        <li className="text-dark">{current}</li>
                    </ul>
                    :
                    ''
            }
        </div>
    )
}