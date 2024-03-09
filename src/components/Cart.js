import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { delCart } from './Redux/action';

function Cart() {
  const cartItems = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(delCart(id));
  };

  const totalPrice = cartItems.reduce((total, item) => total + (item.price * (item.qty || 1)), 0);

  return (
    <div className="container py-4">
      <h2 className="mb-4">Cart Items</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div className="card mb-3" key={item.id}>
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Quantity: {item.qty || 1}</p>
                <p className="card-text">Price: ${item.price}</p>
                <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>Delete</button>
              </div>
            </div>
          ))}
          <p className="fw-bold">Total Price: ${totalPrice.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}

export default Cart;



// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { delCart } from './Redux/action';

// function Cart() {
//   const cartItems = useSelector((state) => state.handleCart);
//   const dispatch = useDispatch();

//   const handleDelete = (id) => {
//     dispatch(delCart(id));
//   };

//   const totalPrice = cartItems.reduce((total, item) => total + item.price * item.qty, 0);

//   return (
//     <div>
//       <h2>Cart Items</h2>
//       {cartItems.length === 0 ? (
//         <p>No items in the cart</p>
//       ) : (
//         <div>
//           {cartItems.map((item) => (
//             <div key={item.id}>
//               <p>{item.name} - Quantity: {item.qty} - Price: {item.price}</p>
//               <button onClick={() => handleDelete(item.id)}>Delete</button>
//             </div>
//           ))}
//           <p>Total Price: {totalPrice}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Cart;



// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { delCart } from './Redux/action';

// function Cart() {
//     const cartItems = useSelector((state) => state.handleCart);
//     const dispatch = useDispatch();
  
//     const handleDelete = (id) => {
//       dispatch(delCart(id));
//     };
  
//     const totalPrice = cartItems.reduce((total, item) => total + (item.price * (item.qty || 1)), 0);
  
//     return (
//       <div>
//         <h2>Cart Items</h2>
//         {cartItems.length === 0 ? (
//           <p>No items in the cart</p>
//         ) : (
//           <div>
//             {cartItems.map((item) => (
//               <div key={item.id}>
//                 <p>{item.name} - Quantity: {item.qty || 1} - Price: {item.price}</p>
//                 <button onClick={() => handleDelete(item.id)}>Delete</button>
//               </div>
//             ))}
//             <p>Total Price: {totalPrice}</p>
//           </div>
//         )}
//       </div>
//     );
//   }
  
//   export default Cart;
  