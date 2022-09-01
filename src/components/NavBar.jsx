import 'bulma/css/bulma.min.css';
import { Navbar, Heading } from "react-bulma-components";
import { Link } from "react-router-dom";
import CartWidget from './CartWidget';

export default function NavBar() {

  return (
    <Navbar fixed='top' transparent>
      <Navbar.Brand>
        <Navbar.Item>
          <Link to={'/home'}>
            <Heading>MTC</Heading>
          </Link>
        </Navbar.Item>
        <Navbar.Burger renderAs='a' aria-label="menu" data-target="navBarMenu"/>
      </Navbar.Brand>
      <Navbar.Menu id='navBarMenu' >
        <Navbar.Container align='right'>
          <Navbar.Item>
            <Link to={'/home'}>
              <Heading subtitle>Home</Heading>
            </Link>
          </Navbar.Item>
          <Navbar.Item>
            <Link to={'/info'}>
              <Heading subtitle>Nosotros</Heading>
            </Link>
          </Navbar.Item>
          <Navbar.Item hoverable>
            <Navbar.Link>
              <Link to={'/category/all'}>
                <Heading subtitle>Productos</Heading>
              </Link>
            </Navbar.Link>
            <Navbar.Dropdown>
              <Navbar.Item renderAs='a' value='item'>
                <Link to={'/category/diets'}>Dietas</Link>
              </Navbar.Item>
              <Navbar.Item renderAs='a' value='item'>
                <Link to={'/category/rutins'}>Rutinas</Link>
              </Navbar.Item>
              <Navbar.Item renderAs='a' value='item'>
                <Link to={'/category/combos'}>Paquetes</Link>
              </Navbar.Item>
              <Navbar.Item renderAs='a' value='item'>
                <Link to={'/category/promos'}>Promociones</Link>
              </Navbar.Item>
            </Navbar.Dropdown>
          </ Navbar.Item>
          <Navbar.Item>
            <Link to={'/contact'}>
              <Heading subtitle>Contacto</Heading>
            </Link>
          </Navbar.Item>
        </Navbar.Container>
        <CartWidget quantity={2} />

      </Navbar.Menu>
    </Navbar>
//     <div id="navBarMenu" class="navbar-menu">
//         <div class="navbar-start">
//             <a class="navbar-item">Home</a>
//             <div class="navbar-item has-dropdown is-hoverable">
//                 <a class="navbar-link">Servicios</a>
//                 <div class="navbar-dropdown">
//                     <a class="navbar-item">Rutinas de ejecicios</a>
//                     <a class="navbar-item">Dietas</a>
//                     <a class="navbar-item">Paquetes</a>
//                 </div>
//             </div>
//             <div class="navbar-item has-dropdown is-hoverable">
//                 <a class="navbar-link">Más</a>
//                 <div class="navbar-dropdown">
//                     <a class="navbar-item">Sobre nosotros</a>
//                     <a class="navbar-item">Contacto</a>
//                 </div>
//             </div>
//             <a class="navbar-item">Promociones</a>
//         </div>
//     </div>

  );
}
