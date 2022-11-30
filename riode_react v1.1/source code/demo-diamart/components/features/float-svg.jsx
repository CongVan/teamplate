import React, { useRef, useEffect } from 'react';

export default function FloatSVG ( props ) {
    const { children, options = {} } = props;
    const el = useRef( null );
    const defaultOptions = {
        delta: 15,
        speed: 10,
        size: 1
    };
    let floatOptions = { ...defaultOptions, options };
    let svg;
    let timeStart;
    let timer;

    useEffect( () => {
        window.addEventListener( "resize", updateSVG );
        window.addEventListener( "scroll", updateSVG, { passive: true } );
        timeStart = Date.now() - parseInt( Math.random() * 100 );
        svg = el && el.current.querySelector( 'svg' );
        svg.querySelectorAll( 'path' ).forEach( path => {
            path.setAttribute( "data-original", path.getAttribute( 'd' ).replace( /([\d])\s*\-/g, '$1,-' ) )
        } )
        updateSVG();

        return () => {
            window.removeEventListener( "resize", updateSVG );
            window.removeEventListener( "scroll", updateSVG );
        }
    }, [] )

    function getDeltaY ( dx ) {
        return Math.sin( 2 * Math.PI * dx / svg.clientWidth * floatOptions.size ) * floatOptions.delta;
    }

    function updateSVG () {
        if ( svg.getBoundingClientRect().top < window.innerHeight && svg.getBoundingClientRect().top > 0 ) {
            timer && clearInterval( timer );
            timer = setInterval( draw, 16 );
        } else {
            return timer && clearInterval( timer );
        }
    }

    function draw () {
        let _dx = ( Date.now() - timeStart ) * floatOptions.speed / 200;
        if ( !svg.clientWidth ) {
            return;
        }
        svg.querySelectorAll( 'path' ).forEach( path => {
            var dx = _dx, dy = 0;
            var origin = path.getAttribute( 'data-original' );
            path.setAttribute( 'd', origin
                .replace( /M([\d|\.]*),([\d|\.]*)/, function ( match, p1, p2 ) {
                    if ( p1 && p2 ) {
                        return 'M' + p1 + ',' + ( parseFloat( p2 ) + ( dy = getDeltaY( dx += parseFloat( p1 ) ) ) ).toFixed( 3 );
                    }
                    return match;
                } )
                .replace( /([c|C])[^A-Za-z]*/g, function ( match, p1 ) {
                    if ( p1 ) {
                        var v = match.slice( 1 ).split( ',' ).map( parseFloat );
                        if ( v.length == 6 ) {
                            if ( 'C' == p1 ) {
                                v[ 1 ] += getDeltaY( _dx + v[ 0 ] );
                                v[ 3 ] += getDeltaY( _dx + v[ 2 ] );
                                v[ 5 ] += getDeltaY( dx = _dx + v[ 4 ] );
                            } else {
                                v[ 1 ] += getDeltaY( dx + v[ 0 ] ) - dy;
                                v[ 3 ] += getDeltaY( dx + v[ 2 ] ) - dy;
                                v[ 5 ] += getDeltaY( dx += v[ 4 ] ) - dy;
                            }
                            dy = getDeltaY( dx );

                            return p1 + v.map( function ( v ) {
                                return v.toFixed( 3 );
                            } ).join( ',' );
                        }
                    }
                    return match;
                } )
            );
        } );
        updateSVG();
    }

    return (
        <div className="float-svg" ref={ el }>
            { children }
        </div>
    )
}