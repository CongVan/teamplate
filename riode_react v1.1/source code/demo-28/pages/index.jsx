import React from 'react';
import { Helmet } from 'react-helmet';

import { useQuery } from "@apollo/react-hooks";

// Import Apollo Server and Query
import withApollo from '../server/apollo';
import { GET_HOME_DATA } from '../server/queries';

// import Home Components
import NewsletterModal from '~/components/features/modals/newsletter-modal';
import IntroSection from '~/components/partials/home/intro-section';
import ServiceBox from '~/components/partials/home/service-section';
import CategorySection from '~/components/partials/home/category-section';
import BestCollection from '~/components/partials/home/best-collection';
import CategoryBanner from '~/components/partials/home/category-banner';
import Instagram from '~/components/partials/home/instagram';
import BrandSection from '~/components/partials/home/brand-section';

function HomePage() {
    const { data, loading, error } = useQuery(GET_HOME_DATA, { variables: { productsCount: 7 } });
    const featured = data && data.specialProducts.featured;
    const bestSelling = data && data.specialProducts.bestSelling;

    return (
        <div className="main home">
            <Helmet>
                <title>Riode React eCommerce Template - Home</title>
            </Helmet>


            <h1 className="d-none">Riode React eCommerce Template - Home</h1>

            <div className="page-content">

                <IntroSection />

                <div className="container">
                    <CategorySection />

                    <ServiceBox />

                    <BestCollection products={bestSelling} loading={loading} />

                </div>

                <CategoryBanner />

                <div className="container">

                    <BestCollection products={featured} loading={loading} />

                    <section className="mt-10 mb-5">
                        <Instagram />

                        <BrandSection />

                    </section>
                </div>
            </div>

            <NewsletterModal />

        </div>
    )
}

export default withApollo({ ssr: typeof window === 'undefined' })(HomePage);