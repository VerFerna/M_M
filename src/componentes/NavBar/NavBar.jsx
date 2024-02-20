import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import Logo from '../Img/logo.png';
import './NavBar.css';

const NavBar = () => {
  return (
    <header>
<div class="header">
    <div class="logo">
        <img src={Logo} alt="" />
    </div>
    <div class="title">
            <h1>Margarita Maia</h1>
    </div>
</div>


        <nav>
            <ul>
                <li>
                <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                <NavLink to="/">Productos</NavLink>
                </li>
                <li>
                    <NavLink to="/categoria/1">Damas</NavLink>
                </li>

                <li>
                    <NavLink to="/categoria/2">Caballeros</NavLink>
                </li>
                <li>
                    <NavLink to="/categoria/3">Niños</NavLink>
                </li>
            </ul>
        </nav>

        <CartWidget/>

    </header>
  )
}

export default NavBar