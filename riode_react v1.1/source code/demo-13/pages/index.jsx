import React from 'react';
import { Helmet } from 'react-helmet';

import { useQuery } from "@apollo/react-hooks";

// Import Apollo Server and Query
import withApollo from '../server/apollo';
import { GET_HOME_DATA } from '../server/queries';

// import Home Components
import NewsletterModal from '~/components/features/modals/newsletter-modal';
import IntroSection from '~/components/partials/home/intro-section';
import SpecialCollection from '~/components/partials/home/special-collection';
import BannerSection from '~/components/partials/home/banner-section';
import SaleCollection from '~/components/partials/home/sale-collection';
import PromoSection from '~/components/partials/home/promo-section';
import BlogSection from '~/components/partials/home/blog-section';
import BrandSection from '~/components/partials/home/brand-section'

function HomePage() {
    const { data, loading, error } = useQuery( GET_HOME_DATA, { variables: { productsCount: 6 } } );
    const bestSelling = data && data.specialProducts.bestSelling;
    const latest = data && data.specialProducts.latest;
    const featured = data && data.specialProducts.featured;
    const onSale = data && data.specialProducts.onSale;
    const posts = data && data.posts.data;

    return (
        <div className="main home">
            <Helmet>
                <title>Riode React eCommerce Template - Home</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Home</h1>

            <div className="page-content">
                <IntroSection />

                <SpecialCollection featured={ featured } loading={ loading } latest={ latest } bestSelling={ bestSelling } />

                <BannerSection />

                <SaleCollection products={ onSale } loading={ loading } />

                <PromoSection />

                <BlogSection posts={ posts } />

                <BrandSection />
            </div>

            <NewsletterModal />
        </div>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( HomePage );