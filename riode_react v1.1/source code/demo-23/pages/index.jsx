import React from 'react';
import Helmet from 'react-helmet';

import { useQuery } from "@apollo/react-hooks";

// Import Apollo Server and Query
import withApollo from '../server/apollo';
import { GET_HOME_DATA } from '../server/queries';

// import Home Components
import NewsletterModal from '~/components/features/modals/newsletter-modal';
import IntroSection from '~/components/partials/home/intro-section';
import DealCollection from '~/components/partials/home/deal-collection';
import CategorySection from '~/components/partials/home/category-section';
import ProductCollection from '~/components/partials/home/product-collection';
import BannerSection from '~/components/partials/home/banner-section';
import FeaturedCollection from '~/components/partials/home/featured-collection';
import BlogSection from '~/components/partials/home/blog-section';

function HomePage() {
    const { data, loading, error } = useQuery( GET_HOME_DATA, { variables: { productsCount: 10 } } );
    const featured = data && data.specialProducts.featured;
    const bestSelling = data && data.specialProducts.bestSelling;
    const sports = data && data.sports.data;
    const electronics = data && data.electronics.data;
    const posts = data && data.posts.data;

    return (
        <div className="main homepage">
            <Helmet>
                <title>Riode React eCommerce Template - Home</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Home</h1>

            <div className="page-content">
                <IntroSection />

                <DealCollection products={ bestSelling } loading={ loading } />

                <CategorySection />

                <ProductCollection
                    products={ sports }
                    loading={ loading }
                />

                <BannerSection />

                <ProductCollection
                    products={ electronics }
                    loading={ loading }
                    adClass="mt-10 pt-5"
                    title="Electronics"
                    url="./images/home/banner/2.jpg"
                    bannerSubTitle="Multiple Sports Modes"
                    bannerTitle="Professional<br/>Mi Smart Band 5C"
                    btnAdClass="mb-1"
                />

                <BannerSection
                    subTitle="Black Friday Sale"
                    title="Latest Power Bank"
                    url="./images/home/banner/4.jpg"
                    titleAdClass="ls-s"
                />

                <FeaturedCollection products={ featured } loading={ loading } />

                <BlogSection posts={ posts } />
            </div>

            <NewsletterModal />
        </div>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( HomePage );