import { useEffect, useLayoutEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useLazyQuery } from '@apollo/react-hooks';
import Reveal from 'react-awesome-reveal';

import ALink from '~/components/features/custom-link';
import ProductTwo from '~/components/features/product/product-two';

import SearchBox from '~/components/common/partials/search-box';

import { scrollTopHandler } from '~/utils';
import { fadeIn } from '~/utils/data/keyframes';
import { homeCategories } from '~/utils/data/menu';

import withApollo from '~/server/apollo';
import { GET_PRODUCTS } from '~/server/queries';

function ProductCollection() {
    const router = useRouter();
    const [ isFirst, setFirst ] = useState( true );
    const [ products, setProducts ] = useState( [] );
    const [ newLoading, setNewLoading ] = useState( false );

    const query = router.query;
    const [ getInitData, { data, loading, error } ] = useLazyQuery( GET_PRODUCTS, { fetchPolicy: 'no-cache' } );
    const [ loadMoreProducts, { data: newData } ] = useLazyQuery( GET_PRODUCTS, { fetchPolicy: 'no-cache' } );
    const totalCount = data && data.products.total;

    useEffect( () => {
        getInitData( {
            variables: {
                search: query.search,
                colors: query.colors ? query.colors.split( ',' ) : [],
                sizes: query.sizes ? query.sizes.split( ',' ) : [],
                brands: query.brands ? query.brands.split( ',' ) : [],
                min_price: parseInt( query.min_price ),
                max_price: parseInt( query.max_price ),
                category: query.category,
                tag: query.tag,
                sortBy: query.sortby,
                from: 0,
                to: 12
            }
        } );
        if ( isFirst ) {
            setFirst( false );
        } else {
            scrollTopHandler();
        }
    }, [ query ] )

    useLayoutEffect( () => {
        data && setProducts( data.products.data );
    }, [ data ] )

    useEffect( () => {
        let newProducts = newData ? newData.products.data : [];
        setProducts( [ ...products, ...newProducts ] );
    }, [ newData ] )

    const productLoadHandler = () => {
        setNewLoading( true );

        setTimeout( () => {
            loadMoreProducts( {
                variables: {
                    search: query.search,
                    colors: query.colors ? query.colors.split( ',' ) : [],
                    sizes: query.sizes ? query.sizes.split( ',' ) : [],
                    brands: query.brands ? query.brands.split( ',' ) : [],
                    min_price: parseInt( query.min_price ),
                    max_price: parseInt( query.max_price ),
                    category: query.category,
                    tag: query.tag,
                    sortBy: query.sortby,
                    from: products.length,
                    to: products.length + 4
                }
            } );

            setTimeout( () => {
                setNewLoading( false );
            }, 200 );
        }, 1500 );
    }

    const showSidebar = () => {
        document.querySelector( 'body' ).classList.add( 'right-sidebar-active' );
    }

    return (
        <Reveal keyframes={ fadeIn }>
            <section className="product-wrapper mb-10 pb-8">
                <div className="container">
                    <div className="toolbox">
                        <div className="toolbox-left">
                            <ul className="nav-filters product-filters" data-target="#products-grid">
                                <li><ALink scroll={ false } href={ { pathname: '/', query: { category: 'all' } } } className={ `nav-filter font-weight-semi-bold ${ !router.query.category || router.query.category === '' || router.query.category === 'all' ? 'active' : '' }` }>All</ALink></li>
                                {
                                    homeCategories.map( cat =>
                                        <li key={ `home-cat-${ cat.slug }` }>
                                            <ALink scroll={ false } href={ { pathname: '/', query: { category: cat.slug } } } className={ `nav-filter font-weight-semi-bold ${ router.query.category === cat.slug ? 'active' : '' }` }>{ cat.title }</ALink>
                                        </li>
                                    ) }
                            </ul>
                            <span className="divider"></span>
                            <SearchBox />
                        </div>

                        <div className="toolbox-right">
                            <ALink href="#" className="btn btn-link right-sidebar-toggle font-weight-semi-bold mr-0 p-0" onClick={ showSidebar }><i
                                className="d-icon-filter-3"></i>Filter</ALink>
                        </div>
                    </div>

                    <div className="row product-wrapper cols-2 cols-sm-3 cols-md-4">
                        {
                            loading ?
                                [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ].map( ( item ) =>
                                    <div className="product-loading-overlay" key={ 'popup-skel-' + item }></div>
                                )
                                :
                                products && products.map( item =>
                                    <div className="product-wrap" key={ 'intro-' + item.name }>
                                        <ProductTwo product={ item } />
                                    </div>
                                )
                        }
                    </div>

                    {
                        products.length < totalCount ?
                            <div className="text-center">
                                <ALink className="btn btn-outline btn-dark btn-load" href="#" onClick={ productLoadHandler }>
                                    { newLoading ? "Loading..." : "Load more" }
                                </ALink>
                            </div>
                            : ''
                    }

                    {
                        products.length === 0 ?
                            <p>No products were found matching your selection.</p> : ''
                    }
                </div>
            </section>
        </Reveal>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( ProductCollection );