import React from 'react';

function CtaSection () {
    return (
        <section className="mt-8">
            <div className="banner banner-newsletter border-no" style={ { backgroundImage: "url(images/home/banners/8.jpg)", backgroundColor: "#6BB7EB" } }>
                <div className="banner-content row gutter-no align-items-center pb-6">
                    <div className="col-xl-5 col-lg-6">
                        <div className="icon-box icon-box-side mb-4 mb-lg-0">
                            <div className="icon-box-content">
                                <h4 className="icon-box-title font-weight-bold text-white">SUBSCRIBE TO THE NEWSLETTER</h4>
                                <p className="text-white">Stay up to date regarding the newest product &amp; offers.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-6 d-lg-block d-flex justify-content-center">
                        <form action="#" method="get" className="input-wrapper input-wrapper-inline ml-lg-auto">
                            <input type="email" className="form-control font-primary font-italic form-solid" name="email" id="email" placeholder="Enter Your E-mail Address..." required />
                            <button className="btn btn-dark" type="submit">Subscribe <i className="d-icon-arrow-right"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default React.memo( CtaSection );