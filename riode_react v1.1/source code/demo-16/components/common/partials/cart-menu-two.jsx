import { connect } from 'react-redux';

import ALink from '~/components/features/custom-link';

import { cartActions } from '~/store/cart';

import { getTotalPrice, getCartCount, toDecimal } from '~/utils';

function CartMenuTwo ( props ) {
    const { cartList, removeFromCart } = props;

    const showCartMenu = ( e ) => {
        e.preventDefault();
        e.currentTarget.closest( '.cart-dropdown' ).classList.add( 'opened' );
    }

    // const hideCartMenu = ( e ) => {
    //     e.preventDefault();
    //     e.currentTarget.closest( '.cart-dropdown' ).classList.remove( 'opened' );
    // }

    const hideCartMenu = ( e ) => {
        e.preventDefault();
        e.currentTarget.closest( '.cart-dropdown' ).classList.remove( 'opened' );
    }

    const removeCart = ( item ) => {
        removeFromCart( item );
    }

    return (
        <div className="dropdown cart-dropdown cart-offcanvas">
            <a href="#" className="cart-toggle" onClick={ showCartMenu }>
                <span className="cart-label mr-0">
                    <span className="cart-name">Cart</span>&nbsp;/&nbsp;<span className="cart-price">${ toDecimal( getTotalPrice( cartList ) ) }</span>
                </span><span className="cart-count">&nbsp;({ getCartCount( cartList ) })</span>
            </a>
            <div className="cart-overlay" onClick={ hideCartMenu }></div>
            <div className="dropdown-box">
                <div className="cart-header">
                    <h4 className="cart-title">Shopping Cart</h4>
                    <a href="#" className="btn btn-dark btn-link btn-icon-right btn-close" onClick={ hideCartMenu }>close<i
                        className="d-icon-arrow-right"></i><span className="sr-only">Cart</span></a>
                </div>
                {
                    cartList.length > 0 ?
                        <>
                            <div className="products scrollable">
                                {
                                    cartList.map( ( item, index ) =>
                                        <div className="product product-cart" key={ 'cart-menu-product-' + index }>
                                            <figure className="product-media pure-media">
                                                <ALink href={ '/product/default/' + item.slug } onClick={ hideCartMenu }>
                                                    <img src={ process.env.NEXT_PUBLIC_ASSET_URI + item.pictures[ 0 ].url } alt="product" width="80"
                                                        height="88" />
                                                </ALink>
                                                <button className="btn btn-link btn-close" onClick={ () => { removeCart( item ) } }>
                                                    <i className="fas fa-times"></i><span className="sr-only">Close</span>
                                                </button>
                                            </figure>
                                            <div className="product-detail">
                                                <ALink href={ '/product/default/' + item.slug } className="product-name" onClick={ hideCartMenu }>{ item.name }</ALink>
                                                <div className="price-box">
                                                    <span className="product-quantity">{ item.qty }</span>
                                                    <span className="product-price">${ toDecimal( item.price ) }</span>
                                                </div>
                                            </div>
                                        </div>
                                    ) }
                            </div>

                            <div className="cart-total">
                                <label>Subtotal:</label>
                                <span className="price">${ toDecimal( getTotalPrice( cartList ) ) }</span>
                            </div>

                            <div className="cart-action">
                                <ALink href="/pages/cart" className="btn btn-dark btn-link" onClick={ hideCartMenu }>View Cart</ALink>
                                <ALink href="/pages/checkout" className="btn btn-dark" onClick={ hideCartMenu }><span>Go To Checkout</span></ALink>
                            </div>
                        </> :
                        <p className="mt-4 text-center font-weight-semi-bold ls-normal text-body">No products in the cart.</p>
                }
            </div>
        </div >
    )
}

function mapStateToProps ( state ) {
    return {
        cartList: state.cart.data
    }
}

export default connect( mapStateToProps, { removeFromCart: cartActions.removeFromCart } )( CartMenuTwo );