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
import NewCollection from '~/components/partials/home/new-collection';
import BannerSection from '~/components/partials/home/banner-section';
import FeaturedCollection from '~/components/partials/home/featured-collection';
import BigBannerSection from '~/components/partials/home/big-banner-section';
import SmallCollection from '~/components/partials/product/small-collection';
import InstagramSection from '~/components/partials/home/instagram-section';
// import CategorySection from '~/components/partials/home/category-section';
// import BestCollection from '~/components/partials/home/best-collection';
// import DealSection from '~/components/partials/home/deal-section';
// import CtaSection from '~/components/partials/home/cta-section';
// import BrandSection from '~/components/partials/home/brand-section';
// import BlogSection from '~/components/partials/home/blog-section';

function HomePage () {
    const { data, loading, error } = useQuery( GET_HOME_DATA, { variables: { productsCount: 7 } } );
    const featured = data && data.specialProducts.featured;
    const bestSelling = data && data.specialProducts.bestSelling;
    const latest = data && data.specialProducts.latest;
    const topRated = data && data.specialProducts.topRated;
    const products = data && data.products;

    return (
        <div className="main home">
            <Helmet>
                <title>Riode React eCommerce Template - Home</title>
            </Helmet>


            <h1 className="d-none">Riode React eCommerce Template - Home</h1>

            <div className="page-content">
                <IntroSection />

                <ServiceBox />

                <NewCollection products={ latest } loading={ loading } />

                <BannerSection />

                <FeaturedCollection products={ products } loading={ loading } />

                <BigBannerSection />

                <SmallCollection featured={ featured } bestSelling={ bestSelling } topRated={ topRated } loading={ loading } />

                <InstagramSection />
            </div>

            <NewsletterModal />
        </div>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( HomePage );