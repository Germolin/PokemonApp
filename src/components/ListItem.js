import React from "react";

class ListItem extends React.Component {
    render() {
        const { pokemon, addItemToCart, cartItems } = this.props;

        const doesItemExistInCart = cartItems.filter(cartItem => pokemon.id === cartItem.id).length > 0;

        return(
        <div className={`listItem ${doesItemExistInCart === true ? 'listItem--added': ''}`}>
            <img src={pokemon.image} alt={pokemon.name} title={pokemon.name} />
            <h3 className="listItem__name">{pokemon.name}</h3>
            <div className="listItem__price">
              <div className="listItem__priceTxt">$40</div>
            </div>
            <div className="listItem__addButton" onClick={(e) => this.props.addItemToCart(e, pokemon) }>{`${doesItemExistInCart === true ? 'Added' : 'Add to Cart'}`}</div>
        </div>
        )
    }
}

export default ListItem;