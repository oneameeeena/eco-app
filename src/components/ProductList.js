import { useDispatch } from "react-redux";
import { addToCart } from "../redux/carteSlice";

import pc from "../assets/pc1.jfif";
import phone from "../assets/phone1.jfif";
import headset from "../assets//hd1.jfif";

import pc1 from "../assets/pc2.jfif";
import phone1 from "../assets/phone2.jfif";
import headset1 from "../assets//hd2.jfif";


const products = [
  { id: 1, name: "PC", price: 6000, image: pc },
  { id: 2, name: "Phone", price: 3000, image: phone },
  { id: 3, name: "Headset", price: 400, image: headset },
  { id: 4, name: "PC", price: 6000, image: pc1 },
  { id: 5, name: "Phone", price: 3000, image: phone1 },
  { id: 6, name: "Headset", price: 400, image: headset1 }
];

export default function ProductList() {
  const dispatch = useDispatch();

  return (
    <div className="box">
      <h2>Produits</h2>

      {products.map(p => (
        <div key={p.id} className="product">
          <img src={p.image} alt={p.name} className="product-img" />

          <div>
            <p><b>{p.name}</b></p>
            <p>{p.price} DH</p>

            <button onClick={() => dispatch(addToCart(p))}>
              Ajouter au panier
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
