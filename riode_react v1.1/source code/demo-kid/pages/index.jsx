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
import SpecialCollection from '~/components/partials/home/special-collection';
import BannerSection from '~/components/partials/home/banner-section';
import ProductCollection from '~/components/partials/home/product-collection';
import CtaSection from '~/components/partials/home/cta-section';
import BlogSection from '~/components/partials/home/blog-section';
import BrandSection from '~/components/partials/home/brand-section';
import InstagramSection from '~/components/partials/home/instagram-section';

function HomePage () {
    const { data, loading, error } = useQuery( GET_HOME_DATA, { variables: { productsCount: 7 } } );
    const special = data && data.specialProducts;
    const clothings = data && data.clothings.data;
    const toys = data && data.toys.data;
    const foods = data && data.foods.data;
    const posts = data && data.posts.data;

    return (
        <div className="main home mt-4">
            <Helmet>
                <title>Riode React eCommerce Template - Home</title>
            </Helmet>


            <h1 className="d-none">Riode React eCommerce Template - Home</h1>

            <div className="page-content">
                <div className="container">
                    <div className="intro-section">
                        <IntroSection />

                        <ServiceBox />
                    </div>

                    <SpecialCollection products={ special } loading={ loading } />

                    <BannerSection />

                    <ProductCollection clothings={ clothings } toys={ toys } foods={ foods } loading={ loading } />

                    <CtaSection />

                    <BlogSection posts={ posts } />

                    <BrandSection />

                    <InstagramSection />
                </div>
            </div>

            <NewsletterModal />
        </div>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( HomePage );