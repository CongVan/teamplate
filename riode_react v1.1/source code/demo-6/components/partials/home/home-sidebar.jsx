import { useRouter } from 'next/router';

import ALink from '~/components/features/custom-link'
import Card from '~/components/features/accordion/card';

import filterData from '~/utils/data/shop';

export default function HomeSidebar() {
    const router = useRouter();
    const query = router.query;

    const prices = [
        { min: '0', max: '50' },
        { min: '50', max: '100' },
        { min: '100', max: '200' },
        { min: '200', max: '' }
    ]

    const hideSidebar = () => {
        document.querySelector( 'body' ).classList.remove( 'right-sidebar-active' );
    }

    const containsAttrInUrl = ( type, value ) => {
        const currentQueries = query[ type ] ? query[ type ].split( ',' ) : [];
        return currentQueries && currentQueries.includes( value );
    }

    const getUrlForAttrs = ( type, value ) => {
        let currentQueries = query[ type ] ? query[ type ].split( ',' ) : [];
        currentQueries = containsAttrInUrl( type, value ) ? currentQueries.filter( item => item !== value ) : [ ...currentQueries, value ];
        return currentQueries.join( ',' );
    }

    return (
        <aside className="right-sidebar shop-sidebar">
            <div className="sidebar-overlay" onClick={ hideSidebar }></div>
            <div className="sidebar-content">
                <div className="filter-actions mb-4">
                    <ALink href="#"
                        className="sidebar-toggle-btn toggle-remain btn btn-outline btn-primary text-uppercase btn-icon-right" onClick={ hideSidebar }>Filter<i
                            className="d-icon-arrow-right"></i></ALink>
                    <ALink href="/" className="filter-clean">Clean All</ALink>
                </div>
                <div className="widget widget-collapsible price-with-count">
                    <Card title="<h3 class='widget-title'>Filter by price<span class='toggle-btn p-0 parse-content'></span></h3>" type="parse" expanded={ true }>
                        <ul className="widget-body filter-items filter-price">
                            {
                                prices.map( ( price, index ) =>
                                    <li key={ price + ' - ' + index } className={ query.min_price === price.min && query.max_price === price.max ? 'active' : '' }>
                                        <ALink href={ { pathname: router.pathname, query: { ...query, min_price: price.min === query.min_price ? '' : price.min, max_price: price.max === query.max_price ? '' : price.max } } } scroll={ false }>
                                            {
                                                price.max === '' ? `$${ price.min }.00 +`
                                                    :
                                                    `$${ price.min }.00 - $${ price.max }.00`

                                            }
                                        </ALink>
                                    </li>
                                )
                            }
                        </ul>
                    </Card>
                </div>
                <div className="widget widget-collapsible">
                    <Card title="<h3 class='widget-title'>Size<span class='toggle-btn p-0 parse-content'></span></h3>" type="parse" expanded={ true }>
                        <ul className="widget-body filter-items">
                            {
                                filterData.sizes.map( ( item, index ) =>
                                    <li
                                        className={ containsAttrInUrl( 'sizes', item.slug ) ? 'active' : '' }
                                        key={ item + ' - ' + index }
                                    >
                                        <ALink scroll={ false } href={ { pathname: router.pathname, query: { ...query, page: 1, sizes: getUrlForAttrs( 'sizes', item.slug ), type: router.query.type ? router.query.type : null } } }>{ item.name }
                                        </ALink>
                                    </li>
                                )
                            }
                        </ul>
                    </Card>
                </div>
                <div className="widget widget-collapsible">
                    <Card title="<h3 class='widget-title'>Color<span class='toggle-btn p-0 parse-content'></span></h3>" type="parse" expanded={ true }>
                        <ul className="widget-body filter-items">
                            {
                                filterData.colors.map( ( item, index ) =>
                                    <li
                                        className={ containsAttrInUrl( 'colors', item.slug ) ? 'active' : '' }
                                        key={ item + ' - ' + index }
                                    >
                                        <ALink scroll={ false } href={ { pathname: router.pathname, query: { ...query, page: 1, colors: getUrlForAttrs( 'colors', item.slug ), type: router.query.type ? router.query.type : null } } }>{ item.name }
                                        </ALink>
                                    </li>
                                )
                            }
                        </ul>
                    </Card>
                </div>
                <div className="widget widget-collapsible">
                    <Card title="<h3 class='widget-title'>Brands<span class='toggle-btn p-0 parse-content'></span></h3>" type="parse" expanded={ true }>
                        <ul className="widget-body filter-items">
                            {
                                filterData.brands.map( ( item, index ) =>
                                    <li
                                        className={ containsAttrInUrl( 'brands', item.slug ) ? 'active' : '' }
                                        key={ item + ' - ' + index }
                                    >
                                        <ALink scroll={ false } href={ { pathname: router.pathname, query: { ...query, page: 1, brands: getUrlForAttrs( 'brands', item.slug ), type: router.query.type ? router.query.type : null } } }>{ item.name }
                                        </ALink>
                                    </li>
                                )
                            }
                        </ul>
                    </Card>
                </div>
            </div>
        </aside> )
}