import { Helmet } from 'react-helmet';

import { useQuery } from "@apollo/react-hooks";

// Import Apollo Server and Query
import withApollo from '../server/apollo';
import { GET_HOME_DATA } from '../server/queries';

// import Home Components
import NewsletterModal from '~/components/features/modals/newsletter-modal';
import IntroSection from '~/components/partials/home/intro-section';
import BestCollection from '~/components/partials/home/best-collection';
import BannerGroup from '~/components/partials/home/banner-group';
import BannerSection from '~/components/partials/home/banner-section';
import ProductCollection from '~/components/partials/home/product-collection';
import LatestCollection from '~/components/partials/home/latest-collection';
import BlogSection from '~/components/partials/home/blog-section';

function HomePage() {
    const { data, loading, error } = useQuery(GET_HOME_DATA, { variables: { productsCount: 10 } });
    const featured = data && data.specialProducts.featured;
    const bestSelling = data && data.specialProducts.bestSelling;
    const latest = data && data.specialProducts.latest;
    const posts = data && data.posts.data;

    return (
        <div className="main home mt-lg-0 mt-4">
            <Helmet>
                <title>Riode React eCommerce Template - Home</title>
            </Helmet>


            <h1 className="d-none">Riode React eCommerce Template - Home</h1>

            <div className="page-content">

                <IntroSection />

                <BestCollection products={bestSelling} loading={loading} deal={true} />

                <BannerGroup />

                <ProductCollection products={bestSelling} loading={loading} />

                <BestCollection products={featured} loading={loading} />

                <BannerSection />

                <LatestCollection products={latest} loading={loading} />

                <BlogSection posts={posts} />

            </div>

            <NewsletterModal />
        </div>
    )
}

export default withApollo({ ssr: typeof window === 'undefined' })(HomePage);