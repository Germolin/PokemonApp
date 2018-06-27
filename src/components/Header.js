import React from 'react';

class Header extends React.Component {
    render() {
        const { toggleCart, cartItems } = this.props;

        return (
            <header className="header">
                <div className="logo">
                    <img src="img/pokeball.svg" alt="" />
                </div>
                <div className="cartBtn" onClick={(e) => toggleCart(e, true)}>
                    <div className="cartItemCount">{cartItems.length}</div>
                    <img src="img/shopping-cart.svg" alt="" />
                </div>
            </header>
        );
    }
}

export default Header;