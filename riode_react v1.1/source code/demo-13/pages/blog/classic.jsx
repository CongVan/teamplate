import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import { useLazyQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';

// Import Apollo Server and Query
import withApollo from '~/server/apollo';
import { GET_POSTS } from '~/server/queries';

import Pagination from '~/components/features/pagination';
import Breadcrumb from '~/components/features/breadcrumb';

import PostOne from '~/components/features/post/post-one';
import BlogSidebar from '~/components/partials/post/blog-sidebar';

import { scrollTopHandler } from '~/utils';

function Classic() {
    const router = useRouter();
    const [ isFirst, setFirst ] = useState( true );
    const query = router.query;
    const showingCount = 8;
    const [ getPosts, { data, loading, error } ] = useLazyQuery( GET_POSTS );
    const [ perPage, setPerPage ] = useState( showingCount );
    const posts = data && data.posts.data;
    const totalPage = data ? parseInt( data.posts.total / perPage ) + ( data.posts.total % perPage ? 1 : 0 ) : 1;
    let page = query.page ? query.page : 1;

    useEffect( () => {
        getPosts( {
            variables: {
                category: query.category,
                from: perPage * ( page - 1 ),
                to: perPage * page
            }
        } );

        setTimeout( () => {
            if ( isFirst ) {
                setFirst( false );
            } else {
                scrollTopHandler();
            }
        }, 100 );
    }, [ query ] )

    return (
        <main className="main skeleton-body">
            <Helmet>
                <title>Riode React eCommerce Template | Blog Classic</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Blog Classic</h1>

            <Breadcrumb subTitle="Blog" title="Classic" parentUrl="/blog/classic" />

            <div className="page-content with-sidebar mt-6">
                <div className="container">
                    <div className="row gutter-lg">
                        <div className="col-lg-9">
                            <div className="posts">
                                {
                                    loading ?
                                        new Array( parseInt( perPage ) ).fill( 1 ).map( ( item, index ) => (
                                            <div key={ "Skeleton:" + index }>
                                                <div className="skel-post"></div>
                                            </div>
                                        ) ) :
                                        posts ?
                                            posts.length ?
                                                posts.slice( 0, posts.length ).map( ( post, index ) => (
                                                    <React.Fragment key={ "post-one" + index }>
                                                        <PostOne post={ post } />
                                                    </React.Fragment>
                                                ) ) :
                                                <div className="info-box with-icon"><p className="mt-4">No blogs were found matching your selection.</p></div>
                                            : ''
                                }
                            </div>

                            <Pagination totalPage={ totalPage } />
                        </div>

                        <BlogSidebar />
                    </div>
                </div>
            </div >
        </main >
    )
}

export default withApollo( { ssr: typeof window === "undefined" } )( Classic );