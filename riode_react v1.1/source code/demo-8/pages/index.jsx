import React from 'react';
import { Helmet } from 'react-helmet';

import { useQuery } from "@apollo/react-hooks";

// Import Apollo Server and Query
import withApollo from '../server/apollo';
import { GET_HOME_DATA } from '../server/queries';

// import Home Components
import NewsletterModal from '~/components/features/modals/newsletter-modal';
import PopularCollection from '~/components/partials/home/popular-collection';
import IntroSection from '~/components/partials/home/intro-section';
import CategorySection from '~/components/partials/home/category-section';
import VideoSection from '~/components/partials/home/video-section';
import PromoSection from '~/components/partials/home/promo-section';
import ProductCollection from '~/components/partials/home/product-collection';
import BestCollection from '~/components/partials/home/best-collection';
import BlogSection from '~/components/partials/home/blog-section';

function HomePage() {
    const { data, loading, error } = useQuery( GET_HOME_DATA, { variables: { productsCount: 6 } } );
    const onSale = data && data.specialProducts.onSale;
    const bestSelling = data && data.specialProducts.bestSelling;
    const latest = data && data.specialProducts.latest;
    const posts = data && data.posts.data;

    return (
        <div className="main home">
            <Helmet>
                <title>Riode React eCommerce Template - Home</title>
            </Helmet>


            <h1 className="d-none">Riode React eCommerce Template - Home</h1>

            <div className="page-content">
                <IntroSection />

                <CategorySection />

                <PopularCollection products={ bestSelling } loading={ loading } />

                <PromoSection />

                <ProductCollection products={ onSale } loading={ loading } />

                <VideoSection />

                <BestCollection products={ latest } loading={ loading } />

                <BlogSection posts={ posts } />
            </div>

            <NewsletterModal />
        </div>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( HomePage );