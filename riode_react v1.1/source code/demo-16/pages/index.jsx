import React from 'react';
import Helmet from 'react-helmet';

import { useQuery } from "@apollo/react-hooks";

// Import Apollo Server and Query
import withApollo from '../server/apollo';
import { GET_HOME_DATA } from '../server/queries';

// import Home Components
import NewsletterModal from '~/components/features/modals/newsletter-modal';
import IntroSection from '~/components/partials/home/intro-section';
import ServiceBox from '~/components/partials/home/service-section';
import LatestCollection from '~/components/partials/home/latest-collection';
import CategorySection from '~/components/partials/home/category-section';
import NewsletterSection from '~/components/partials/home/newsletter-section';
import FeaturedCollection from '~/components/partials/home/featured-collection';
import BrandSection from '~/components/partials/home/brand-section';
import BlogSection from '~/components/partials/home/blog-section';

function HomePage() {
    const { data, loading, error } = useQuery( GET_HOME_DATA, { variables: { productsCount: 7 } } );
    const featured = data && data.specialProducts.featured;
    const latest = data && data.specialProducts.latest;
    const posts = data && data.posts.data;

    return (
        <div className="main home mt-lg-4 homepage">
            <Helmet>
                <title>Riode React eCommerce Template - Home</title>
            </Helmet>


            <h1 className="d-none">Riode React eCommerce Template - Home</h1>

            <div className="page-content">
                <IntroSection />

                <ServiceBox />

                <LatestCollection products={ latest } loading={ loading } />

                <CategorySection />

                <NewsletterSection />

                <FeaturedCollection products={ featured } loading={ loading } />

                <BlogSection posts={ posts } />

                <BrandSection />
            </div>

            <NewsletterModal />
        </div>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( HomePage );