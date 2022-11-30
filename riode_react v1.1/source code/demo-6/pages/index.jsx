import React from 'react';
import { Helmet } from 'react-helmet';

// import Home Components
import NewsletterModal from '~/components/features/modals/newsletter-modal';
import IntroSection from '~/components/partials/home/intro-section';
import ProductCollection from '~/components/partials/home/product-collection';
import HomeSidebar from '~/components/partials/home/home-sidebar';

function HomePage() {
    return (
        <div className="main home">
            <Helmet>
                <title>Riode React eCommerce Template - Home</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Home</h1>

            <div className="page-content">
                <IntroSection />

                <ProductCollection />

                <HomeSidebar />
            </div>

            <NewsletterModal />
        </div>
    )
}

export default HomePage;