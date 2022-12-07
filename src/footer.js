import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from './imag/r1.jpg.webp';
import img2 from './imag/r2.jpg.webp';
import img3 from './imag/r3.jpg.webp';
import img4 from './imag/r7.jpg.webp';
import {NavLink} from 'react-router-dom';
import {AiOutlineMail} from 'react-icons/ai';
import {FaPhone,FaLocationArrow} from 'react-icons/fa'
const Footer=()=>{
    return(<Container fluid className="foterrelative">
        <Row lg={1} className="fotersubscribe1" data-aos="fade-down" data-aos-duration='2000'><Col lg={12} className="fotersubscribe"><h3>GET UPDATE FROM ANYWHERE</h3>
        <div className="fotersbscribeinpt"><input type="email" placeholder="Enter your email"/><button>Subscribe Now</button></div></Col></Row>
        <Row  xs={1} sm={2} md={3} lg={4} className="footer">
            <Col  className="footer1"><h1>Our Mission</h1>
            <p>So seed seed green that winged cattle in. Gathering thing made fly you're no divided deep moved us lan Gathering thing us land years living.</p>

             <p>So seed seed green that winged cattle in. Gathering thing made fly you're no divided deep moved</p></Col>
            <Col className="footerlinks"><h5>Quick Links</h5>
            <ul >
                <li><NavLink to='/header' className="footerlink1">Home</NavLink></li>
                <li><NavLink to='/shop' className="footerlink1">Shop</NavLink></li>
                <li><NavLink to='/Blog' className="footerlink1">Blog</NavLink></li>
                <li><NavLink to='/contact' className="footerlink1">Contact</NavLink></li>
                <li><NavLink to='/login' className="footerlink1">Login</NavLink></li>
            </ul>
            </Col>
            <Col className="galeriya"><h5 >Gallery</h5>
             <Row lg={2} className="" xs={3} sm={2} md={2}>
                <Col  lg={5}><img src={img1}/></Col>
                <Col  lg={5}><img src={img3}/></Col>
                <Col  lg={5}><img src={img2}/></Col>
                <Col  lg={5}><img src={img4}/></Col>
                <Col  lg={5}><img src={img3}/></Col>
                <Col  lg={5}><img src={img1}/></Col>
             </Row>
            </Col>
            <Col>
            <Row><Col className=" footercontact "><h5 >Contact</h5></Col></Row>
            <Row  className=" footercontact " lg={3} xs={1} md={1}>
                <Col className=" footercontact1" sm={9} md={9} lg={9}><div><AiOutlineMail  size={15} className=" footercontact2"></AiOutlineMail></div><div><p> Email Adderss</p> 
                <p>free@infoexample.com www.infoexample.com</p></div>
                </Col>
                <Col className=" footercontact1" sm={9} md={9} lg={9}><div><FaPhone size={15} className=" footercontact2"></FaPhone></div><div><p>Phone Number</p>
                <p> +123 456 7890  +123 456 7890</p></div></Col>
                <Col className=" footercontact1" sm={9} md={9} lg={9}><div><FaLocationArrow size={15} className=" footercontact2"></FaLocationArrow></div><div><p>Head Office</p>
                <p>123, Main Street, Your City</p></div></Col>
            </Row>
            </Col>
        </Row>
        <Row lg={1} >
        <Col className="p-0"><p className="footer2">Copyright ©2022 All rights reserved | This template is made with  by Colorlib</p></Col>
        </Row>
    </Container>
    );
}; export default Footer