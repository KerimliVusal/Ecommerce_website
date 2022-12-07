import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import blog1 from "./imag/blog2.png.webp";
import blog4 from "./imag/blog4.png";
import blog3 from "./imag/blog1.png"
import {TfiCommentsSmiley} from 'react-icons/tfi'
import {BsArrowRight} from 'react-icons/bs';
const News=()=>{
    return(
      <Container className="News">
        <Row xs={1} className="p-0">
            <Col className="p-0"><div className="news" data-aos='fade-right' data-aos-duration='2000'><p>Popular item in market</p><h2>Latest <span className='undertrend'>News</span></h2></div></Col>
        </Row>
        <Row xs={1} sm={1} md={2} lg={3} className="trendcenter" >
            <Col data-aos='fade-down' data-aos-duration='3000'><img src={blog1}  /><div className="newstext" ><span><p>By Admin <TfiCommentsSmiley></TfiCommentsSmiley> 2 commets</p></span><h3>The Richland Center Shooping News and weekly shooper</h3><p>Let one fifth i bring fly to div ided face for bearing divide unto seed. Winged divided light Forth.</p><p>Read more <BsArrowRight></BsArrowRight></p></div></Col>
            <Col data-aos='zoom-in' data-aos-duration='3000'><img src={blog4} /><div className="newstext"><span><p>By Admin  <TfiCommentsSmiley></TfiCommentsSmiley> 2 commets</p></span><h3>The Richland Center Shooping News and weekly shooper</h3><p>Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</p><p>Read more <BsArrowRight></BsArrowRight></p></div></Col>
            <Col data-aos='fade-down' data-aos-duration='3000'> <img src={blog3} /><div className="newstext"><span><p>By Admin <TfiCommentsSmiley></TfiCommentsSmiley> 2 commets</p></span><h3>The Richland Center Shooping News and weekly shooper</h3><p>Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</p><p>Read more <BsArrowRight></BsArrowRight></p></div></Col>
        </Row>
      </Container>
    );
}; export default News