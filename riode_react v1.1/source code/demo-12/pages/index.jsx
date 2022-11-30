import React from 'react';
import { Helmet } from 'react-helmet';

import { useQuery } from "@apollo/react-hooks";

// Import Apollo Server and Query
import withApollo from '../server/apollo';
import { GET_HOME_DATA } from '../server/queries';

// import Home Components
import NewsletterModal from '~/components/features/modals/newsletter-modal';
import IntroSection from '~/components/partials/home/intro-section';
import NewCollection from '~/components/partials/home/new-collection';
import CategorySection from '~/components/partials/home/category-section';
import PromoSection from '~/components/partials/home/promo-section';
import FeaturedCollection from '~/components/partials/home/featured-collection';
import ServiceBox from '~/components/partials/home/service-section';
import CtaSection from '~/components/partials/home/cta-section';
import BlogSection from '~/components/partials/home/blog-section';
import SmallCollection from '~/components/partials/product/small-collection';

function HomePage() {
    const { data, loading, error } = useQuery( GET_HOME_DATA, { variables: { productsCount: 7 } } );
    const featured = data && data.specialProducts.featured;
    const bestSelling = data && data.specialProducts.bestSelling;
    const latest = data && data.specialProducts.latest;
    const onSale = data && data.specialProducts.onSale;
    const posts = data && data.posts.data;

    return (
        <div className="main home mt-4">
            <Helmet>
                <title>Riode React eCommerce Template - Home</title>
            </Helmet>


            <h1 className="d-none">Riode React eCommerce Template - Home</h1>

            <div className="page-content">
                <div className="intro-section container pb-5">
                    <IntroSection />

                    <ServiceBox />
                </div>

                <CategorySection />

                <NewCollection products={ latest } loading={ loading } />

                <PromoSection />

                <FeaturedCollection products={ featured } loading={ loading } />

                <BlogSection posts={ posts } />

                <CtaSection />

                <SmallCollection featured={ featured } bestSelling={ bestSelling } onSale={ onSale } loading={ loading } />
            </div>

            <NewsletterModal />
        </div>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( HomePage );