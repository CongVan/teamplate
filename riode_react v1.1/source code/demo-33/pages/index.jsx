import React from 'react';
import { Helmet } from 'react-helmet';

import { useQuery } from "@apollo/react-hooks";

// Import Apollo Server and Query
import withApollo from '../server/apollo';
import { GET_HOME_DATA } from '../server/queries';

// import Home Components
import NewsletterModal from '~/components/features/modals/newsletter-modal';
import IntroSection from '~/components/partials/home/intro-section';
import TabBox from '~/components/partials/home/tab-box';
import BannerGroup from '~/components/partials/home/banner-group';
import BannerGroupTwo from '~/components/partials/home/banner-group-two';
import Instagram from '~/components/partials/home/instagram';
import CategorySection from '~/components/partials/home/category-section';
import BestCollection from '~/components/partials/home/best-collection';

function HomePage() {
    const { data, loading, error } = useQuery(GET_HOME_DATA, { variables: { productsCount: 7 } });
    const featured = data && data.specialProducts.featured;
    const latest = data && data.specialProducts.latest;

    return (
        <div className="main home">
            <Helmet>
                <title>Riode React eCommerce Template - Home</title>
            </Helmet>


            <h1 className="d-none">Riode React eCommerce Template - Home</h1>

            <div className="page-content">

                <IntroSection />

                <TabBox />

                <BannerGroup />

                <BestCollection products={latest} loading={loading} />

                <CategorySection />

                <BannerGroupTwo />

                <BestCollection products={featured} loading={loading} featured={true} />

                <Instagram />

            </div>

            <NewsletterModal />
        </div>
    )
}

export default withApollo({ ssr: typeof window === 'undefined' })(HomePage);