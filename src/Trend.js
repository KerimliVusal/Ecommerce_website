import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import product1 from './imag/product1.png.webp';
import product2 from './imag/product2.png.webp';
import product3 from './imag/product3.png.webp';
import product4 from './imag/product4.png.webp';
import product5 from './imag/product5.png.webp';
import product6 from './imag/product6.png.webp';
import product7 from './imag/product7.png.webp';
import product8 from './imag/product8.png.webp';
import log1 from './imag/hero-banner.png.webp'
import {BsSearch,BsHeart} from 'react-icons/bs'
import {GiShoppingCart} from 'react-icons/gi';
import {data} from './App'

const Trend=()=>{
  
    return(<>
    
      <Container fluid  >
        <Row xs={1}>
            <Col><div className='trendheader'><p data-aos="fade-down" data-aos-duration='2000'>Popular item in market</p><h1 data-aos="fade-right" data-aos-duration='3000'>Trending <span className='undertrend'>Products</span></h1></div></Col>
        </Row>
        <Row  className="p-0" xs={1} lg={4} className="trendcenter">
        { (data.filter((item,index)=>index!==8)).map((product,item)=>(
            <Col sm ={6} xs={9} md={6} lg={3} size={product.length} key={product.item} className="trendcenter" data-aos='zoom-in' data-aos-duration='3000' ><div className="product"><img src={product.imgurl}/><div className="producticon"><GiShoppingCart size={30} ></GiShoppingCart> <BsHeart size={23} > </BsHeart> </div></div><div className="producttext"><p>{product.name}</p> <h2>{product.name} </h2><p>{product.cost}</p> </div></Col>
       ))} 
       </Row>
       <Row xs={1} data-aos='fade-up' data-aos-duration='2000'>
        <Col className="p-0"><div className="discount"  ><div className="discounttext" ><h2 data-aos='fade-right' data-aos-duration="2000">Up To 50% Off</h2><p>Winter sales</p><button className="button1" data-aos='fade-down' data-aos-duration='3000'>Shop Now</button></div><img src={log1}/></div></Col>
       </Row>
      </Container>
      </>
    );
}
export default Trend