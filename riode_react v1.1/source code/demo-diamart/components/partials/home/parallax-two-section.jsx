import React, { useEffect } from 'react';

import { parallaxHandler } from '~/utils';

function ParallaxSection () {
    useEffect( () => {
        window.addEventListener( 'scroll', parallaxHandler, true );

        return () => {
            window.removeEventListener( 'scroll', parallaxHandler, true );
        }
    }, [] )

    return (
        <div className="parallax-section2 p-relative pt-1 parallax" style={ { backgroundColor: "#D7E9E9", backgroundImage: "url(images/home/banner/7.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" } } data-option="{'speed':10}">
            <div className="shape-divider2">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                    x="0px" y="0px" viewBox="0 57 100 4.4" enableBackground="new 0 57 100 4.4">
                    <path fill="#FFFFFF" d="M0,60.7c0,0,8.7-2.7,16.1-3c7.4-0.3,16.6,3.9,27.9,2.8c8.7-0.8,9.5-2.9,23.4-3.5c7.8-0.3,17.4,3.2,23.7,4
                        c6.3,0.8,9-0.3,9-0.3V57H0V60.7z"></path>
                </svg>
            </div>
            <div className="banner">
            </div>
            <div className="shape-divider4">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                    x="0px" y="0px" width="1920px" height="333.685px" viewBox="0 0 1920 333.685"
                    enableBackground="new 0 0 1920 333.685" preserveAspectRatio="none">
                    <path fillRule="evenodd" clipRule="evenodd" fill="#FFFFFF" d="M1920,221.322c-99.207,71.121-408.589,227.236-984.515-29.646
                        c-593.735-264.827-935.792,0-935.792,0V59.411H1920V221.322z" style={ { opacity: ".3" } }>
                    </path>
                    <path fillRule="evenodd" clipRule="evenodd" fill="#FFFFFF" d="M1069.111,144.92C437.355,449.328,103.156,261.719,0,180.615
                        V-1.944L1919.902,0.02v144.9C1919.902,144.92,1654.825-137.301,1069.111,144.92z"
                        style={ { opacity: ".3" } }></path>
                    <path fillRule="evenodd" clipRule="evenodd" fill="#FFFFFF" d="M-1,99.586l766.898-0.277c0,0-347.053,156.721-766.898,199.021
                        V99.586z" style={ { opacity: ".3" } }></path>
                    <path fillRule="evenodd" clipRule="evenodd" fill="#FFFFFF" d="M1920,325.707c-163.159-2.652-337.318-38.631-509.596-131.365
                        c-160.974-86.652-317.795-63.449-422.109-59.617V76.862L1920,77.566V325.707z"
                        style={ { opacity: ".3" } }></path>
                </svg>
            </div>
        </div>
    )
}

export default React.memo( ParallaxSection );