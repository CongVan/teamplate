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
import BannerSection from '~/components/partials/home/banner-section';
import FeaturedProduct from '~/components/partials/home/featured-product';
import FeaturedCollection from '~/components/partials/home/featured-collection';
import CategorySection from '~/components/partials/home/category-section';
import BlogSection from '~/components/partials/home/blog-section';
import InstagramSection from '~/components/partials/home/instagram-section';

function HomePage() {
    const { data, loading, error } = useQuery( GET_HOME_DATA, { variables: { productsCount: 6 } } );
    const featured = data && data.specialProducts.featured;
    const bestSelling = data && data.specialProducts.bestSelling;
    const latest = data && data.specialProducts.latest;
    const onSale = data && data.specialProducts.onSale;
    const posts = data && data.posts.data;

    return (
        <div className="main home">
            <Helmet>
                <title>Riode React eCommerce Template - Home</title>
            </Helmet>


            <h1 className="d-none">Riode React eCommerce Template - Home</h1>

            <div className="page-content">
                <div className="intro-section">
                    <IntroSection />

                    <CategorySection />
                </div>

                <BestCollection products={ bestSelling } loading={ loading } />

                <BannerSection />

                <FeaturedProduct products={ featured } loading={ loading } />

                <FeaturedCollection products={ latest } loading={ loading } />

                <BlogSection posts={ posts } />

                <InstagramSection />
            </div>

            <NewsletterModal />
        </div>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( HomePage );