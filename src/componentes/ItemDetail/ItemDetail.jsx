import { useState } from 'react';
import Contador from '../Contador/Contador';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';
import './ItemDetail.css';

const ItemDetail = ({id, nombre, stock, precio, img}) => {
  const [agregarCantidad, setAgregarCantidad]  = useState(0);
 
  const {agregarAlCarrito} = useContext(CarritoContext);
  
  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
   
    const item = {id, nombre, precio};
    agregarAlCarrito(item, cantidad);
  }

  return (
    <div className="contenedorItem">
      <img src={img} alt={nombre} />
      <div className="contenido-derecho">
        <h2>Nombre: {nombre} </h2>
        <p>Precio:{precio} </p>
        <p>ID:{id} </p>
        <p>
          Prendas hechas a la medida con los mejores materiales del mercado.
        </p>
        {agregarCantidad > 0 ? (
          <Link className="terminar-compra" to="/cart">
            Terminar Compra
          </Link>
        ) : (
          <Contador
            inicial={1}
            stock={stock}
            funcionAgregar={manejadorCantidad}
          />
        )}
      </div>
    </div>
  )
}


export default ItemDetail