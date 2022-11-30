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
import FeaturedCollection from '~/components/partials/home/featured-collection';
import BannerSection from '~/components/partials/home/banner-section';
import NewCollection from '~/components/partials/home/new-collection';
import CategorySection from '~/components/partials/home/category-section';
import PromoSection from '~/components/partials/home/promo-section';
import InstagramSection from '~/components/partials/home/instagram-section';

function HomePage() {
    const { data, loading, error } = useQuery( GET_HOME_DATA, { variables: { productsCount: 5 } } );
    const bestSelling = data && data.specialProducts.bestSelling;
    const latest = data && data.specialProducts.latest;
    const featured = data && data.specialProducts.featured;

    return (
        <div className="main home">
            <Helmet>
                <title>Riode React eCommerce Template - Home</title>
            </Helmet>


            <h1 className="d-none">Riode React eCommerce Template - Home</h1>

            <div className="page-content">
                <IntroSection />

                <CategorySection />

                <BestCollection products={ bestSelling } loading={ loading } />

                <FeaturedCollection products={ featured } loading={ loading } />

                <BannerSection />

                <NewCollection products={ latest } loading={ loading } />

                <PromoSection />

                <InstagramSection />
            </div>

            <NewsletterModal />
        </div>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( HomePage );