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
import DealCollection from '~/components/partials/home/deal-collection';
import CategorySection from '~/components/partials/home/category-section';
import BannerOneSection from '~/components/partials/home/banner-one-section';
import ElectronicCollection from '~/components/partials/home/electronic-collection';
import BannerTwoSection from '~/components/partials/home/banner-two-section';
import ClothingCollection from '~/components/partials/home/clothing-collection';
import GiftCollection from '~/components/partials/home/gift-collection';
import BrandSection from '~/components/partials/home/brand-section';
import SelectedCollection from '~/components/partials/home/selected-collection';
import RecentCollection from '~/components/partials/home/recent-collection';

function HomePage () {
    const { data, loading, error } = useQuery( GET_HOME_DATA, { variables: { productsCount: 8 } } );
    const onSale = data && data.specialProducts.onSale;
    const specialProducts = data && data.specialProducts
    const latest = data && data.specialProducts.latest;

    return (
        <div className="main home">
            <Helmet>
                <title>Riode React eCommerce Template - Home</title>
            </Helmet>


            <h1 className="d-none">Riode React eCommerce Template - Home</h1>

            <div className="page-content">
                <section className="grey-section pt-4 pb-10">
                    <div className="container">
                        <IntroSection />

                        <ServiceBox />

                        <CategorySection />
                    </div>
                </section>

                <DealCollection products={ onSale } loading={ loading } />

                <section className="grey-section pt-10 pb-10">
                    <div className="container mt-6">
                        <ClothingCollection />

                        <BannerOneSection />

                        <ElectronicCollection />

                        <BannerTwoSection />

                        <GiftCollection />

                        <BrandSection />

                        <SelectedCollection products={ specialProducts } loading={ loading } />

                        <RecentCollection products={ latest } loading={ loading } />
                    </div>
                </section>

                {/* <VendorSection />

                <ElectronicCollection products={ electronics } loading={ loading } />

                <BannerTwoSection />

                <BannerThreeSection />

                <FoodCollection products={ foods } loading={ loading } />

                <BestCollection products={ bestSelling } loading={ loading } />

                <NewsletterSection />

                <BrandSection />

                <BlogSection posts={ posts } />

                <RecentCollection products={ latest } loading={ loading } /> */}
            </div>

            <NewsletterModal />
        </div>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( HomePage );