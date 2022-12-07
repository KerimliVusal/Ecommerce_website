import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import pro1 from './imag/product1.png.webp';
import pro2 from './imag/product2.png.webp'
import pro3 from './imag/product3.png.webp'
import pro4 from './imag/product4.png.webp'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Bestseller=()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 1000, min: 200 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 664, min: 0 },
          items: 1
        }
      };
    return(<>
        <div className="bestseller" data-aos='fade-right' data-aos-duration="2000" ><p>Popular item in market</p>
        <h2>Best <span className='undertrend'>Sellers</span></h2></div>
        <Carousel responsive={responsive} 
       infinite={true} className="owl-carousel owl-theme skill-slider coruselimg" autoPlay={true} centerMode={true} arrows={false}
        >       
  <div xs={2}> <img src={pro1} /></div>
  <div xs={2}><img src={pro2} /></div>
  <div xs={2}><img src={pro3} /></div>
  <div xs={2}><img src={pro4} /></div>
</Carousel>
        </>
    );
}

export default Bestseller