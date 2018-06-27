import React from "react";
import ListItem from "./ListItem";

class List extends React.Component {
    

    render() {
        
        return(
            <div className="list">
                {this.renderPokemons()}
            </div>
        )
    }
    renderPokemons(){
        const { pokemons, addItemToCart, cartItems } = this.props;
        return(
            this.props.pokemons.map(pokemon => <ListItem key={pokemon.name} 
                                                    pokemon={pokemon} 
                                                    addItemToCart={addItemToCart}
                                                    cartItems={cartItems}/>)
        )
    }
}

export default List;