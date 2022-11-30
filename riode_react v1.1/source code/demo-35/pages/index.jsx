import React from 'react';
import { Helmet } from 'react-helmet';

import { useQuery } from "@apollo/react-hooks";

// Import Apollo Server and Query
import withApollo from '../server/apollo';
import { GET_HOME_DATA } from '../server/queries';

// import Home Components
import NewsletterModal from '~/components/features/modals/newsletter-modal';
import HomeSidebar from '~/components/partials/home/home-sidebar';
import IntroSection from '~/components/partials/home/intro-section';
import ProductCollection from '~/components/partials/home/product-collection';
import CategorySection from '~/components/partials/home/category-section';
import LargeBanner from '~/components/partials/home/large-banner';
import ServiceBox from '~/components/partials/home/service-section';
import BannerGroup from '~/components/partials/home/banner-group';
import BestCollection from '~/components/partials/home/best-collection';
import BlogSection from '~/components/partials/home/blog-section';

function HomePage() {
    const { data, loading, error } = useQuery(GET_HOME_DATA, { variables: { productsCount: 10 } });
    const featured = data && data.specialProducts.featured;
    const bestSelling = data && data.specialProducts.bestSelling;
    const latest = data && data.specialProducts.latest;
    const posts = data && data.posts.data;

    return (
        <div className="main home mt-4 mm-8">
            <Helmet>
                <title>Riode React eCommerce Template - Home</title>
            </Helmet>


            <h1 className="d-none">Riode React eCommerce Template - Home</h1>

            <div className="page-content">
                <div className="container">
                    <div className="row">
                        <HomeSidebar />

                        <IntroSection />

                        <CategorySection />

                    </div>

                    <ProductCollection featured={featured} bestSelling={bestSelling} latest={latest} loading={loading} />

                </div>

                <BannerGroup />

                <div className="container pt-6 mt-4 mt-lg-8">
                    <h2 className="title title-underline text-center mb-10">Best of the Week</h2>

                    <BestCollection products={bestSelling} loading={loading} />

                    <LargeBanner />

                </div>

                <BlogSection posts={posts} />

                <ServiceBox />
            </div>

            <NewsletterModal />
        </div>
    )
}

export default withApollo({ ssr: typeof window === 'undefined' })(HomePage);