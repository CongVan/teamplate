import React from 'react';
import { Helmet } from 'react-helmet';
import { useQuery } from "@apollo/react-hooks";

// Import Apollo Server and Query
import withApollo from '../server/apollo';
import { GET_HOME_DATA } from '../server/queries';

// import Home Components
import NewsletterModal from '~/components/features/modals/newsletter-modal';
import IntroSection from '~/components/partials/home/intro-section';
import NewCollection from '~/components/partials/home/new-collection';
import BestCollection from '~/components/partials/home/best-collection';
import HomeSidebar from '~/components/partials/home/home-sidebar';
import FeaturedCollection from '~/components/partials/home/featured-collection';
import SmallCollection from '~/components/partials/product/small-collection';
import BrandSection from '~/components/partials/home/brand-section';

function HomePage() {
    const { data, loading, error } = useQuery( GET_HOME_DATA, { variables: { productsCount: 8 } } );
    const featured = data && data.specialProducts.featured;
    const bestSelling = data && data.specialProducts.bestSelling;
    const latest = data && data.specialProducts.latest;
    const onSale = data && data.specialProducts.onSale;
    const posts = data && data.posts.data;

    return (
        <div className="main home mb-8 riode-rounded-skin">
            <Helmet>
                <title>Riode React eCommerce Template - Home</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Home</h1>

            <div className="page-content">
                <div className="container">
                    <div className="row">
                        <HomeSidebar products={ featured } loading={ loading } posts={ posts } />

                        <div className="col-xl-9 col-lg-8">
                            <IntroSection />

                            <NewCollection products={ latest } loading={ loading } />

                            <FeaturedCollection products={ featured } loading={ loading } />

                            <BestCollection products={ bestSelling } loading={ loading } />

                            <SmallCollection latest={ latest } bestSelling={ bestSelling } onSale={ onSale } loading={ loading } />

                            <BrandSection />
                        </div>
                    </div>
                </div>
            </div>

            <NewsletterModal />
        </div>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( HomePage );