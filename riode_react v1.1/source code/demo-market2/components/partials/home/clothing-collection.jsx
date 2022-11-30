import React, { useEffect, useState } from 'react';
import Reveal from 'react-awesome-reveal';

import { useLazyQuery } from "@apollo/react-hooks";

// Import Apollo Server and Query
import { GET_PRODUCTS } from '~/server/queries';

import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import ProductNine from '~/components/features/product/product-nine';

import { productSlider2 } from '~/utils/data/carousel';
import { fadeIn } from '~/utils/data/keyframes';

function ClothingCollection ( props ) {
    const [ cat, setCat ] = useState( "clothing-apparel" );
    const [ getProducts, { data, loading } ] = useLazyQuery( GET_PRODUCTS );
    const products = data && data.products.data;

    useEffect( () => {
        getProducts( {
            variables: {
                category: cat
            }
        } )
    }, [ cat ] );

    return (
        <Reveal keyframes={ fadeIn } duration={ 1200 } triggerOnce>
            <div className="product-wrapper row mb-10 pb-2">
                <div className="col-xl-5col col-lg-3 col-md-4 mb-4">
                    <div className="category-wrapper bg-white d-flex flex-column align-items-start h-100">
                        <h2 className="title text-left">Clothing &amp; Apparel</h2>
                        <ul className="pl-0 mt-0 flex-1">
                            <li><ALink href="#" className={ cat === "watches" ? "active" : "" } onClick={ () => setCat( "watches" ) }>Watches</ALink></li>
                            <li><ALink href="#" className={ cat === "sunglasses" ? "active" : "" } onClick={ () => setCat( "sunglasses" ) }>Sunglasses</ALink></li>
                            <li><ALink href="#" className={ cat === "rayban" ? "active" : "" } onClick={ () => setCat( "rayban" ) }>Rayban</ALink></li>
                            <li><ALink href="#" className={ cat === "peter-england-shirts" ? "active" : "" } onClick={ () => setCat( "peter-england-shirts" ) }>Peter England Shirts</ALink></li>
                            <li><ALink href="#" className={ cat === "men-s-t-shirt" ? "active" : "" } onClick={ () => setCat( "men-s-t-shirt" ) }>Men's T-shirt</ALink></li>
                            <li><ALink href="#" className={ cat === "men-s-sneaker" ? "active" : "" } onClick={ () => setCat( "men-s-sneaker" ) }>Men's Sneaker</ALink></li>
                            <li><ALink href="#" className={ cat === "leather-backpack" ? "active" : "" } onClick={ () => setCat( "leather-backpack" ) }>Leather Backpack</ALink></li>
                        </ul>
                        <ALink href={ { pathname: "/shop", query: { category: "clothing-apparel" } } } className="btn btn-dark btn-link btn-underline text-left">Browse All<i className="d-icon-arrow-right"></i></ALink>
                    </div>
                </div>
                <div className="col-xl-5col4 col-lg-9 col-md-8 mb-4">
                    {
                        loading ?
                            <OwlCarousel adClass="owl-theme owl-nav-inner h-100" options={ productSlider2 }>
                                {
                                    [ 1, 2, 3, 4, 5, 6, 7, 8 ].map( item =>
                                        <div className="product-wrap h-100 mb-0" key={ 'clothing-' + item }>
                                            <div className="product-loading-overlay"></div>
                                        </div>
                                    )
                                }
                            </OwlCarousel>
                            :
                            <OwlCarousel adClass="owl-theme owl-nav-inner h-100" options={ productSlider2 }>
                                {
                                    products && products.map( ( item, index ) =>
                                        <div className="product-wrap h-100 mb-0" key={ `clothing-${ index }` }>
                                            <ProductNine
                                                product={ item }
                                                adClass="h-100"
                                            />
                                        </div>
                                    )
                                }
                            </OwlCarousel>
                    }
                </div>
            </div>
        </Reveal>
    )
}

export default React.memo( ClothingCollection );
