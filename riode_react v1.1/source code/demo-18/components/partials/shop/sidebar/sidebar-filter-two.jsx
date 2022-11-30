import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import SlideToggle from 'react-slide-toggle';

import ALink from '~/components/features/custom-link';
import Card from '~/components/features/accordion/card';



import filterData from '~/utils/data/shop';
import { scrollTopHandler } from '~/utils';

function SidebarFilterTwo() {
    const router = useRouter();
    const [ isFirst, setFirst ] = useState( true );
    const query = router.query;

    const prices = [
        { min: '0', max: '50' },
        { min: '50', max: '100' },
        { min: '100', max: '200' },
        { min: '200', max: '' }
    ]

    useEffect( () => {
        window.addEventListener( 'resize', resizeHandler, false );

        return () => {
            window.removeEventListener( 'resize', resizeHandler );
        }
    }, [] )

    useEffect( () => {
        if ( isFirst ) {
            setFirst( false );
        } else {
            scrollTopHandler();
        }
    }, [ query ] )

    const containsAttrInUrl = ( type, value ) => {
        const currentQueries = query[ type ] ? query[ type ].split( ',' ) : [];
        if ( type === 'min_price' || type === 'max_price' ) {
            return currentQueries && ( ( value === '' && currentQueries.length === 0 ) || currentQueries.includes( value ) )
        } else {
            return currentQueries && currentQueries.includes( value );
        }
    }

    const getUrlForAttrs = ( type, value ) => {
        let currentQueries = query[ type ] ? query[ type ].split( ',' ) : [];
        if ( type === 'min_price' || type === 'max_price' ) {
            currentQueries = currentQueries.length > 0 && currentQueries.includes( value ) ? [] : [ value ]
        } else {
            currentQueries = containsAttrInUrl( type, value ) ? currentQueries.filter( item => item !== value ) : [ ...currentQueries, value ];
        }
        return currentQueries.join( ',' );
    }

    const hideSidebar = ( e ) => {
        e.preventDefault();
        document.querySelector( 'body' ).classList.remove( "right-sidebar-active" );
    }

    const resizeHandler = () => {
        document.querySelector( 'body' ).classList.remove( "right-sidebar-active" );
    }

    return (
        <aside className="right-sidebar shop-sidebar">
            <div className="sidebar-overlay" onClick={ hideSidebar }></div>
            <a className="sidebar-close" href="#" onClick={ hideSidebar }><i className="d-icon-times"></i></a>

            <div className="sidebar-content">
                <div>
                    <div className="filter-actions mb-4">
                        <a href="#" className="sidebar-toggle-btn toggle-remain btn btn-sm btn-outline btn-rounded btn-primary" onClick={ hideSidebar }>
                            Filter<i className="d-icon-arrow-right"></i>
                        </a>
                        <ALink href={ { pathname: router.pathname, query: { type: router.query.type ? router.query.type : null } } } className="filter-clean" scroll={ false } >Clean All</ALink>
                    </div>

                    <div className="widget widget-collapsible">
                        <Card title="<h3 class='widget-title'>Filter by Price<span class='toggle-btn p-0 parse-content'></span></h3>" type="parse" expanded={ true }>
                            <div className="widget-body filter-items filter-price">
                                {
                                    prices.map( ( price, index ) =>
                                        <li
                                            className={ containsAttrInUrl( 'min_price', price.min ) && containsAttrInUrl( 'max_price', price.max ) ? 'active' : '' }
                                            key={ "price-filter-" + index }
                                        >
                                            <ALink href={ { pathname: router.pathname, query: { ...query, page: 1, min_price: getUrlForAttrs( 'min_price', price.min ), max_price: getUrlForAttrs( 'max_price', price.max ), type: router.query.type ? router.query.type : null } } } scroll={ false }>
                                                {
                                                    price.min === '' && price.max === '' ? 'All'
                                                        :
                                                        price.max === '' ? `$${ price.min }.00 +`
                                                            :
                                                            `$${ price.min }.00 - $${ price.max }.00`

                                                }
                                            </ALink>
                                        </li>
                                    )
                                }
                            </div>
                        </Card>
                    </div>

                    <div className="widget widget-collapsible">
                        <Card title="<h3 class='widget-title'>Filter by Color<span class='toggle-btn p-0 parse-content'></span></h3>" type="parse" expanded={ true }>
                            <div className="widget-body filter-items">
                                {
                                    filterData.colors.map( ( item, index ) =>
                                        <li
                                            className={ containsAttrInUrl( 'colors', item.slug ) ? 'active' : '' }
                                            key={ item + ' - ' + index }
                                        >
                                            <ALink href={ { pathname: router.pathname, query: { ...query, page: 1, colors: getUrlForAttrs( 'colors', item.slug ), type: router.query.type ? router.query.type : null } } } scroll={ false }>{ item.name }
                                            </ALink>
                                        </li>
                                    )
                                }
                            </div>
                        </Card>
                    </div>

                    <div className="widget widget-collapsible">
                        <Card title="<h3 class='widget-title'>Filter by Size<span class='toggle-btn p-0 parse-content'></span></h3>" type="parse" expanded={ true }>
                            <div className="widget-body filter-items">
                                {
                                    filterData.sizes.map( ( item, index ) =>
                                        <li
                                            className={ containsAttrInUrl( 'sizes', item.slug ) ? 'active' : '' }
                                            key={ item + ' - ' + index }
                                        >
                                            <ALink href={ { pathname: router.pathname, query: { ...query, page: 1, sizes: getUrlForAttrs( 'sizes', item.slug ), type: router.query.type ? router.query.type : null } } } scroll={ false }>{ item.name }
                                            </ALink>
                                        </li>
                                    )
                                }
                            </div>
                        </Card>
                    </div>

                    <div className="widget widget-collapsible">
                        <Card title="<h3 class='widget-title'>Tags<span class='toggle-btn p-0 parse-content'></span></h3>" type="parse" expanded={ true }>
                            <div className="widget-body">
                                {
                                    filterData.tag.map( ( item, index ) =>
                                        <ALink href={ { pathname: router.pathname, query: { ...query, page: 1, tag: getUrlForAttrs( 'tag', item.slug ), type: router.query.type ? router.query.type : null } } } className={ `${ containsAttrInUrl( 'tag', item.slug ) ? 'active' : '' } tag` } key={ "tag-" + index }>{ item.name }
                                        </ALink>
                                    )
                                }
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </aside >
    )
}

export default ( SidebarFilterTwo );