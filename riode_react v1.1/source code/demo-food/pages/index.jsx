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
import SpecialCollection from '~/components/partials/home/speical-collection';
import BannerSection from '~/components/partials/home/banner-section';
import VegetableCollection from '~/components/partials/home/vegetable-collection';
import BigBannerSection from '~/components/partials/home/big-banner-section';
import SmallCollection from '~/components/partials/home/small-collection';
import BrandSection from '~/components/partials/home/brand-section';
import InstagramSection from '../components/partials/home/instagram-section';

function HomePage () {
    const { data, loading, error } = useQuery( GET_HOME_DATA, { variables: { productsCount: 7 } } );
    const special = data && data.specialProducts;
    const vegetables = data && data.vegetables.data;

    return (
        <div className="main home">
            <Helmet>
                <title>Riode React eCommerce Template - Home</title>
            </Helmet>


            <h1 className="d-none">Riode React eCommerce Template - Home</h1>

            <div className="page-content">
                <IntroSection />

                <ServiceBox />

                <SpecialCollection products={ special } loading={ loading } />

                <BannerSection />

                <VegetableCollection products={ vegetables } loading={ loading } />

                <BigBannerSection />

                <SmallCollection products={ special } loading={ loading } />

                <BrandSection />

                <InstagramSection />
            </div>

            <NewsletterModal />
        </div>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( HomePage );