import React from 'react';

import ALink from '~/components/features/custom-link';

function BannerTwoSection () {
    return (
        <div className="banner banner-radius banner-wrapper mb-10" style={ { backgroundImage: "url(images/home/banner/7.jpg)", backgroundColor: "#e7ebee" } }>
            <div className="banner-content d-flex align-items-center justify-content-end">
                <h3 className="banner-title font-secondary font-weight-bold text-uppercase text-center mb-0 ls-m">
                    Gift <span className="text-secondary">50% Off</span> Perfect Styles<br />
                    <span className="banner-text font-primary font-weight-normal text-normal ls-normal d-inline-block">
                        Only until the end of this week</span>
                    <span className="banner-text font-primary font-weight-normal text-normal ls-normal">. Terms and conditions apply</span>
                </h3>
                <ALink href="/shop" className="btn btn-white btn-rounded">Discover Now<i className="d-icon-arrow-right"></i></ALink>
            </div>
        </div>
    )
}

export default React.memo( BannerTwoSection );