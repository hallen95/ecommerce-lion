import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import './cartwidget.css';

 class CartWidget extends React.Component {
    render() {
      return <div className="cartStyle"> <FiShoppingCart /> </div>
    }
  }

export default CartWidget;

  
// export const cartWidget = () => {
//     return (    
//         <span>
//             <FiShoppingCart />
//         </span>
//     )
// };

