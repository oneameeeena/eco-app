import { useDispatch, useSelector } from "react-redux";
import {
  increaseQty,
  decreaseQty,
  removeFromCart
} from "../redux/carteSlice";

export default function Cart() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="box">
      <h2>Panier</h2>

      {items.map(item => (
        <div key={item.id} className="item">
          <p>
            {item.name} ({item.quantity}) - {item.price} DH
          </p>

          <div>
            <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
            <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
            <button
              className="delete"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              X
            </button>
          </div>
        </div>
      ))}

      <p className="total">Total : {total} DH</p>
    </div>
  );
}
