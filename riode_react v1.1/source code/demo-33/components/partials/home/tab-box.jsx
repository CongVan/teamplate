import Reveal from "react-awesome-reveal";
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';

import ALink from '~/components/features/custom-link';
import SearchBox from '~/components/common/partials/search-box';
import HomeFilter from '~/components/partials/home/home-filter';

import { fadeIn } from '~/utils/data/keyframes';

export default function TabBox() {

    return (
        <div className="container filter-tabs-wrapper">
            <Reveal keyframes={fadeIn} delay={300} duration={1200} triggerOnce>
                <div className="mx-auto">
                    <div className="tab tab-nav-simple tab-nav-center tab-nav-boxed">
                        <Tabs selectedTabClassName="active" selectedTabPanelClassName="active" defaultIndex={0}>
                            <TabList className="nav nav-tabs" role="tablist">
                                <Tab className="nav-item">
                                    <ALink className="nav-link" href="#">Filter By</ALink>
                                </Tab>
                                <Tab className="nav-item">
                                    <ALink className="nav-link" href="#">Search By</ALink>
                                </Tab>
                            </TabList>
                            <div className="tab-content">
                                <TabPanel className="tab-pane fade in">
                                    <HomeFilter />
                                </TabPanel>
                                <TabPanel className="tab-pane fade in">
                                    <SearchBox homesearch={true} />
                                </TabPanel>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </Reveal>
        </div>
    )
}