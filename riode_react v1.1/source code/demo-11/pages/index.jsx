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
import ProductCollection from '~/components/partials/home/product-collection';
import CategorySection from '~/components/partials/home/category-section';
import CtaSection from '~/components/partials/home/cta-section';
import BestCollection from '~/components/partials/home/best-collection';
import BrandSection from '~/components/partials/home/brand-section';
import BlogSection from '~/components/partials/home/blog-section';
import InstagramSection from '~/components/partials/home/instagram-section';

function HomePage() {
    const { data, loading, error } = useQuery( GET_HOME_DATA, { variables: { productsCount: 5 } } );
    const featured = data && data.specialProducts.featured;
    const bestSelling = data && data.specialProducts.bestSelling;
    const latest = data && data.specialProducts.latest;
    const onSale = data && data.specialProducts.onSale;
    const posts = data && data.posts.data;

    return (
        <div className="main home mt-lg-1 mb-10 pb-6">
            <Helmet>
                <title>Riode React eCommerce Template - Home</title>
            </Helmet>


            <h1 className="d-none">Riode React eCommerce Template - Home</h1>

            <div className="page-content">
                <div className="container">
                    <IntroSection />

                    <SpecialCollection featured={ featured } loading={ loading } latest={ latest } bestSelling={ bestSelling } />

                    <CategorySection />

                    <ProductCollection shoes={ latest } accessories={ featured } loading={ loading } />

                    <CtaSection />

                    <BestCollection products={ bestSelling } loading={ loading } />

                    <BlogSection posts={ posts } />
                </div>

                <BrandSection />

                <InstagramSection />
            </div>

            <NewsletterModal />
        </div>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( HomePage );