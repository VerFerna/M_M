import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import "./CartItem.css";

const CartItem = ({ item, cantidad }) => {
  const { eliminarProducto } = useContext(CarritoContext);

  return (
    <div className="cartItem">
      <h4> {item.nombre} </h4>
      <div className="cartItemProperties">
        <p> Cantidad: {cantidad} </p>
        <p> Precio: {item.precio} </p>
        <button onClick={() => eliminarProducto(item.id)}>
          {" "}
          Eliminar Producto{" "}
        </button>
      </div>
      <hr />
    </div>
  );
};

export default CartItem;
