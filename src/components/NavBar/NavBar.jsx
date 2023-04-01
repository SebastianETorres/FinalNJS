import CartWidget from "../CartWidget/CartWidget";
const NavBar = () => {
    return (
        <nav className="Barra">
            <h2>Happy Program</h2>
            <div>
                <button>Programación</button>
                <button>Estructuras de los Computadores</button>
                <button>CiberSeguridad</button>
            </div>
            <CartWidget />
        </nav>
    );
}

export default NavBar;
