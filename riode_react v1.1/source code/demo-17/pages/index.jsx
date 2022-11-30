import React from 'react';
import Helmet from 'react-helmet';

import { useQuery } from "@apollo/react-hooks";

// Import Apollo Server and Query
import withApollo from '../server/apollo';
import { GET_HOME_DATA } from '../server/queries';

// import Home Components
import NewsletterModal from '~/components/features/modals/newsletter-modal';
import IntroSection from '~/components/partials/home/intro-section';
import BannerSection from '~/components/partials/home/banner-section';
import CategorySection from '~/components/partials/home/category-section';
import BestCollection from '~/components/partials/home/best-collection';
import CtaSection from '~/components/partials/home/cta-section';
import FeaturedCollection from '~/components/partials/home/featured-collection';
import BrandSection from '~/components/partials/home/brand-section';

function HomePage() {
    const { data, loading, error } = useQuery( GET_HOME_DATA, { variables: { productsCount: 10 } } );
    const featured = data && data.specialProducts.featured;
    const bestSelling = data && data.specialProducts.bestSelling;

    return (
        <div className="main mt-lg-4 homepage">
            <Helmet>
                <title>Riode React eCommerce Template - Home</title>
            </Helmet>


            <h1 className="d-none">Riode React eCommerce Template - Home</h1>

            <div className="page-content">
                <IntroSection />

                <BannerSection />

                <CategorySection />

                <BestCollection products={ bestSelling } loading={ loading } />

                <CtaSection />

                <FeaturedCollection products={ featured } loading={ loading } />

                <BrandSection />
            </div>

            <NewsletterModal />
        </div>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( HomePage );