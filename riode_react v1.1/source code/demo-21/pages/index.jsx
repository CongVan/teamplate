import React from 'react';
import Helmet from 'react-helmet';

import { useQuery } from "@apollo/react-hooks";

// Import Apollo Server and Query
import withApollo from '../server/apollo';
import { GET_HOME_DATA } from '../server/queries';

// import Home Components
import NewsletterModal from '~/components/features/modals/newsletter-modal';
import IntroSection from '~/components/partials/home/intro-section';
import CategorySection from '~/components/partials/home/category-section';
import NewCollection from '~/components/partials/home/new-collection';
import CtaSection from '~/components/partials/home/cta-section';
import ServiceSection from '~/components/partials/home/service-section';
import ProductCollection from '~/components/partials/home/product-collection';
import VideoSection from '~/components/partials/home/video-section';
import NewsletterSection from '~/components/partials/home/newsletter-section';
import BlogSection from '~/components/partials/home/blog-section';
import BrandSection from '~/components/partials/home/brand-section';

function HomePage() {
    const { data, loading, error } = useQuery( GET_HOME_DATA, { variables: { productsCount: 10 } } );
    const latest = data && data.specialProducts.latest;
    const fashion = data && data.fashion.data;
    const sports = data && data.sports.data;
    const posts = data && data.posts.data;

    return (
        <div className="main homepage">
            <Helmet>
                <title>Riode React eCommerce Template - Home</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Home</h1>

            <div className="page-content">
                <IntroSection />

                <CategorySection />

                <NewCollection products={ latest } loading={ loading } />

                <CtaSection />

                <ServiceSection />

                <ProductCollection products={ fashion && fashion.slice( 4, 8 ) } loading={ loading } />

                <ProductCollection products={ fashion && fashion.slice( 0, 4 ) } loading={ loading } subTitle="Featured Products" title="For Him" price={ 32 } url="./images/home/banner/6.jpg" />

                <VideoSection />

                <ProductCollection products={ sports && sports.slice( 0, 4 ) } loading={ loading } subTitle="Our Featured" title="Shoes" price={ 46 } url="./images/home/banner/7.jpg" adClass="mt-4 pt-4 mt-sm-10 pt-sm-6 pb-6" />

                <NewsletterSection />

                <BlogSection posts={ posts } />

                <BrandSection />
            </div>

            <NewsletterModal />
        </div>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( HomePage );