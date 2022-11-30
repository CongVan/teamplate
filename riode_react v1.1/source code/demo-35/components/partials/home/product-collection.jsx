import Reveal from 'react-awesome-reveal';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';

import FeaturedCollection from '../home/featured-collection';

import { fadeIn } from '~/utils/data/keyframes';

export default function ProductCollection(props) {
    const { featured, bestSelling, latest, loading } = props;

    return (
        <Reveal keyframes={fadeIn} delay={500} duration={1200} triggerOnce>
            <section className="product-wrapper pt-4 mt-10">
                <Tabs selectedTabClassName="show" selectedTabPanelClassName="active" defaultIndex={0} className="tab tab-nav-simple tab-nav-center">
                    <TabList className="nav nav-tabs nav-tabs-products" role="tablist">
                        <Tab className="nav-item">
                            <span className="nav-link">Best Sellers</span>
                        </Tab>

                        <Tab className="nav-item">
                            <span className="nav-link">New Arrivals</span>
                        </Tab>

                        <Tab className="nav-item">
                            <span className="nav-link">Our Featured</span>
                        </Tab>
                    </TabList>
                    <div className="tab-content">
                        <TabPanel className="tab-pane">
                            <FeaturedCollection products={bestSelling} loading={loading} />
                        </TabPanel>

                        <TabPanel className="tab-pane">
                            <FeaturedCollection products={latest} loading={loading} />
                        </TabPanel>

                        <TabPanel className="tab-pane">
                            <FeaturedCollection products={featured} loading={loading} />
                        </TabPanel>
                    </div>
                </Tabs>
            </section>
        </Reveal>
    )
}