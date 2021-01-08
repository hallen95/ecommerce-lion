import React from 'react';
import './itemlistcontainer.css';

class ItemListContainer extends React.Component {

 render(){
    return(
        <header className="styleItemContainer">
        {this.props.greeting}
        </header>
        );
}
}
export default ItemListContainer;