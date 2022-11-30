import React from 'react';
import { Helmet } from 'react-helmet';

import { useQuery } from "@apollo/react-hooks";

// Import Apollo Server and Query
import withApollo from '../server/apollo';
import { GET_HOME_DATA } from '../server/queries';

// import Home Components
import NewsletterModal from '~/components/features/modals/newsletter-modal';
import IntroSection from '~/components/partials/home/intro-section';
import BestCollection from '~/components/partials/home/best-collection';
import CategorySection from '~/components/partials/home/category-section';
import PromoSection from '~/components/partials/home/promo-section';
import FeaturedCollection from '~/components/partials/home/featured-collection';
import InstagramSection from '~/components/partials/home/instagram-section';
import ServiceBox from '~/components/partials/home/service-section';

function HomePage() {
    const { data, loading, error } = useQuery( GET_HOME_DATA, { variables: { productsCount: 8 } } );
    const featured = data && data.specialProducts.featured;
    const bestSelling = data && data.specialProducts.bestSelling;

    return (
        <div className="main home demo2-cls">
            <Helmet>
                <title>Riode React eCommerce Template - Home</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Home</h1>

            <div className="page-content">
                <div className="container">
                    <IntroSection />

                    <BestCollection products={ bestSelling } loading={ loading } />

                    <CategorySection />

                    <PromoSection />

                    <FeaturedCollection products={ featured } loading={ loading } />

                    <ServiceBox />

                    <InstagramSection />
                </div>
            </div>

            <NewsletterModal />
        </div>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( HomePage );