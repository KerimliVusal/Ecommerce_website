import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './imag/logo.png.webp';
import {BsSearch} from 'react-icons/bs'
import {GiShoppingCart} from 'react-icons/gi'
import './App.css';
import {NavLink} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
function NavScrollExample({setBasket}) {
  const selectornavbar=useSelector(state=>state.counter);
  const Basket=()=>{
      setBasket()
  }
 return (<>
         <Navbar collapseOnSelect expand="lg"  variant="light" className="navv" sticky="top">
          <Container >
            <Navbar.Brand href="#home" ><img src={logo} className="me-5" onClick={()=>setBasket(false)} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" >
              <Nav className="me-auto">
                <Nav.Link   className=" me-5 "><NavLink to="/" className="navtext" onClick={()=>setBasket(false)}>Home</NavLink></Nav.Link>
                <Nav.Link  className=" me-5"><NavLink to="/Blog" className="navtext">Blog</NavLink></Nav.Link>
                <Nav.Link  className=" me-5"><NavLink   to="/shop"  className="navtext" onClick={()=>setBasket(false)}>Shop</NavLink></Nav.Link>
                <Nav.Link className=" me-5"><NavLink    to="/contact"   className="navtext">Contact</NavLink></Nav.Link>
                <Nav.Link className=" me-5"><NavLink    to="/login"    className="navtext">Login</NavLink></Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#deets" ><span className='inpt m-0'><input type="text" placeholder="search"/> <BsSearch size={20} > </BsSearch> </span> </Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  <GiShoppingCart size={30} onClick={()=>setBasket(true)}></GiShoppingCart>
                  {selectornavbar.length!==0?
                  <span>{selectornavbar.length}</span>
                  :''}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </>
      );
    
};



export default NavScrollExample;