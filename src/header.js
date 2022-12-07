import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import log1 from './imag/hero-banner.png.webp';
import slide1 from './imag/hero-slide1.png.webp';
import slide2 from './imag/hero-slide2.png.webp';
import slide3 from './imag/hero-slide3.png.webp';
import Trend from './Trend';
import Bestseller from './bestseller';
import News from './news';
import Footer from './footer';
function Header() {
  return (<>
    <Container fluid >
     <Row lg={2} sm={1} xs={1} className="mb-3">
      <Col  className="head1" xs={12}><img src={log1} /></Col>
      <Col xs={12} className="p-0"><div className="head2" ><h2>Shop is fun</h2>
    <h1>BROWSE OUR PREMIUM PRODUCT</h1>
    <p>Us which over of signs divide dominion deep fill bring they're meat beho upon own earth without morning over third. Their male dry. They are great appear whose land fly grass.</p>
    <span className='btn' ><button disable data-aos='fade-down' data-aos-duration='2000'>Shop Now</button></span>
    </div> 
    </Col>
     </Row>
     <Row className="Slide" xs={1} sm={2} data-aos='fade-up' data-aos-duration='3000' >
      <Col  md={4} className="slid" > <img src={slide1}  /><span className="slid1" ><p>New Brand Shoes </p> </span> </Col>
      <Col  md={4} className="slid"> <img src={slide2}/> <span className="slid1"><p> Headphones </p></span></Col>
      <Col  md={4} className="slid" > <img src={slide3 } /><span className="slid1"><p>Accessories</p></span> </Col>
     </Row>
    </Container>
    <Trend/>
    <Bestseller/>
    <News/>
    <Footer/>
  </>
    
    
    
  );
}

export default Header;
