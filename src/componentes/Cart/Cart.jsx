import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import './Cart.css';

const Cart = () => {
    const {carrito, vaciarCarrito, total, cantidadTotal} = useContext(CarritoContext);

    if(cantidadTotal === 0 ) {
        return (
            <>
                <h2>Tu carrito esta vacio! </h2>
                <Link className="btnCart" to="/"> Ver Productos </Link>
            </>
        )
    }

  return (
    <div>
        {
            carrito.map(producto => <CartItem key={producto.item.id} {...producto} />)
        }
        <h3>Total: $ {total} </h3>
        <h3>Cantidad Total: {cantidadTotal} </h3>
        <button className="btn" onClick={()=> vaciarCarrito()}> Vaciar Carrito</button>
        <Link className="btn" to="/checkout"> Finalizar Compra </Link>
    </div>
  )
}

export default Cart