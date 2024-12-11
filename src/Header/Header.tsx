import { Link } from "react-router-dom"
import "./Header.css"

export function Header(){
    return (
        <div className="header">
            <Link to={"/"}>
                <img className="img-header"
                    src="https://img.freepik.com/fotos-premium/logotipo-flor-purpura-petalos-blancos-sobre-fondo-blanco_958124-34098.jpg" alt=""
                />
            </Link>
            <Link to='/posts'>
                <button className="category-button">
                    Categories
                </button>
            </Link>
            <input className="input-header" type="text" placeholder="Search for products...." />
        </div>
    )
  }
  