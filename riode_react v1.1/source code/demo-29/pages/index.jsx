import React from 'react';
import { Helmet } from 'react-helmet';

import { useQuery } from "@apollo/react-hooks";

// Import Apollo Server and Query
import withApollo from '../server/apollo';
import { GET_HOME_DATA } from '../server/queries';

// import Home Components
import NewsletterModal from '~/components/features/modals/newsletter-modal';
import IntroSection from '~/components/partials/home/intro-section';
import BannerSection from '~/components/partials/home/banner-section';
import ProductCollection from '~/components/partials/home/product-collection';
import BannerGroup from '~/components/partials/home/banner-group';
import FeaturedCollection from '~/components/partials/home/featured-collection';
import BlogSection from '~/components/partials/home/blog-section';
import Instagram from '~/components/partials/home/instagram';

function HomePage() {
    const { data, loading, error } = useQuery(GET_HOME_DATA, { variables: { productsCount: 8 } });
    const featured = data && data.specialProducts.featured;
    const bestSelling = data && data.specialProducts.bestSelling;
    const latest = data && data.specialProducts.latest;
    const posts = data && data.posts.data;

    return (
        <div className="main home mt-4">
            <Helmet>
                <title>Riode React eCommerce Template - Home</title>
            </Helmet>


            <h1 className="d-none">Riode React eCommerce Template - Home</h1>

            <div className="page-content">

                <IntroSection />

                <div className="container">
                    <BannerSection />
                </div>

                <section className="grey-section product-wrapper mt-10 pt-10 pb-4">
                    <div className="container pt-2">

                        <ProductCollection products={latest} loading={loading} />

                        <ProductCollection products={bestSelling} loading={loading} bestselling={true} />
                    </div>
                </section>

                <BannerGroup />

                <FeaturedCollection products={featured} loading={loading} />

                <BlogSection posts={posts} />

                <Instagram />

            </div>

            <NewsletterModal />
        </div>
    )
}

export default withApollo({ ssr: typeof window === 'undefined' })(HomePage);