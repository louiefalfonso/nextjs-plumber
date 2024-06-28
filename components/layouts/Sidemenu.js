import React from 'react'

export default function Sidemenu() {
  return (
    <>
    <div className="sidemenu-wrapper d-none d-lg-block ">
        <div className="sidemenu-content">
        <button className="closeButton sideMenuCls">
            <i className="far fa-times" />
        </button>
        <div className="widget woocommerce widget_shopping_cart">
            <h3 className="widget_title">Shopping cart</h3>
            <div className="widget_shopping_cart_content">
            <ul className="woocommerce-mini-cart cart_list product_list_widget ">
                <li className="woocommerce-mini-cart-item mini_cart_item">
                <a href="#" className="remove remove_from_cart_button">
                    <i className="far fa-times" />
                </a>
                <a href="#">
                    <img
                    src="img/product/product_thumb_1_1.jpg"
                    alt="Cart Image"
                    />
                    Switches Breaker
                </a>
                <span className="quantity">
                    1 ×
                    <span className="woocommerce-Price-amount amount">
                    <span className="woocommerce-Price-currencySymbol">$</span>
                    940.00
                    </span>
                </span>
                </li>
                <li className="woocommerce-mini-cart-item mini_cart_item">
                <a href="#" className="remove remove_from_cart_button">
                    <i className="far fa-times" />
                </a>
                <a href="#">
                    <img
                    src="img/product/product_thumb_1_2.jpg"
                    alt="Cart Image"
                    />
                    Bathroom Sink Tap
                </a>
                <span className="quantity">
                    1 ×
                    <span className="woocommerce-Price-amount amount">
                    <span className="woocommerce-Price-currencySymbol">$</span>
                    899.00
                    </span>
                </span>
                </li>
                <li className="woocommerce-mini-cart-item mini_cart_item">
                <a href="#" className="remove remove_from_cart_button">
                    <i className="far fa-times" />
                </a>
                <a href="#">
                    <img
                    src="img/product/product_thumb_1_3.jpg"
                    alt="Cart Image"
                    />
                    Villeroy &amp; Boch Sink
                </a>
                <span className="quantity">
                    1 ×
                    <span className="woocommerce-Price-amount amount">
                    <span className="woocommerce-Price-currencySymbol">$</span>
                    756.00
                    </span>
                </span>
                </li>
                <li className="woocommerce-mini-cart-item mini_cart_item">
                <a href="#" className="remove remove_from_cart_button">
                    <i className="far fa-times" />
                </a>
                <a href="#">
                    <img
                    src="img/product/product_thumb_1_4.jpg"
                    alt="Cart Image"
                    />
                    Red Pipe Wrench
                </a>
                <span className="quantity">
                    1 ×
                    <span className="woocommerce-Price-amount amount">
                    <span className="woocommerce-Price-currencySymbol">$</span>
                    723.00
                    </span>
                </span>
                </li>
                <li className="woocommerce-mini-cart-item mini_cart_item">
                <a href="#" className="remove remove_from_cart_button">
                    <i className="far fa-times" />
                </a>
                <a href="#">
                    <img
                    src="img/product/product_thumb_1_5.jpg"
                    alt="Cart Image"
                    />
                    Stanley Screw Gun
                </a>
                <span className="quantity">
                    1 ×
                    <span className="woocommerce-Price-amount amount">
                    <span className="woocommerce-Price-currencySymbol">$</span>
                    1080.00
                    </span>
                </span>
                </li>
            </ul>
            <p className="woocommerce-mini-cart__total total">
                <strong>Subtotal:</strong>
                <span className="woocommerce-Price-amount amount">
                <span className="woocommerce-Price-currencySymbol">$</span>4398.00
                </span>
            </p>
            <p className="woocommerce-mini-cart__buttons buttons">
                <a href="cart.html" className="themeholy-btn wc-forward">
                View cart
                </a>
                <a
                href="checkout.html"
                className="themeholy-btn checkout wc-forward"
                >
                Checkout
                </a>
            </p>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}
