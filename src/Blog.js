import {Row,Col,Container} from 'react-bootstrap'
import { BsCart2,BsFillPersonFill,BsFillCalendarDateFill,BsFillEyeFill,BsTwitter, BsSearch,BsInstagram,BsLinkedin,BsFacebook} from 'react-icons/bs';
import {BiMessageDetail} from 'react-icons/bi'
import {MdOutlineLocalPostOffice} from 'react-icons/md'
import cat1 from './imag/cat1.webp';
import cat2 from './imag/cat2.webp';
import cat3 from './imag/cat3.webp';
import astron1 from './imag/astronom1.webp';
import astron2 from './imag/astronomi2.webp';
import astron3 from './imag/astronomi3.webp';
import astron4 from './imag/astronomi4.webp';
import bloginsta1 from './imag/ins-1.jpg.webp';
import bloginsta2 from './imag/ins-2.jpg.webp';
import bloginsta3 from './imag/ins-3.jpg.webp';
import bloginsta4 from './imag/ins-4.jpg.webp';
import bloginsta6 from './imag/ins-6.jpg.webp';
import Pagination from 'react-bootstrap/Pagination';
import carli from './imag/author.png.webp';
import post1 from './imag/post1.jpg.webp';
import post2 from './imag/post2.jpg.webp';
import post3 from './imag/post3.jpg.webp';
import post4 from './imag/post4.jpg.webp';


const Blog=()=>{
    
let active = 1;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}
    return(<Container fluid className="mb-5">
        <Row className="ourblog">
            <Col className="blog1"><h1>Our Blog</h1>
            <p>Home blog</p>
             </Col>
        </Row>
        <Row lg={3} className="ms-4 " id="blog15">
            <Col lg={4}><div className="cat py-3"><img src={cat1}/><div className="cat1"><h1>Social Life</h1><p>Enjoy your social life</p></div></div></Col>
            <Col lg={4} ><div className="cat py-3"><img src={cat2}/><div className="cat1"><h1>Politics</h1><p>Be a part of politics</p></div></div></Col>
            <Col lg={4}><div className="cat py-3"><img src={cat3}/><div className="cat1"><h1>Foods</h1><p>Let the food be finished</p></div></div></Col>
        </Row>
        <Row className="pt-5 mt-5" lg={1}>
            <Col lg={9}>
            <Row xs={1} lg={1} sm={1} data-aos='fade-up' data-aos-duration='2000'>
                <Col lg={3} >
                 <div className="blog4" >
                   <ul className="blog5"> 
                    <li>Food, Technology</li>
                    <li>Mark wiens  <BsFillPersonFill className='blogicon'></BsFillPersonFill> </li>
                    <li>19 Dec,2017 <BsFillCalendarDateFill className='blogicon'></BsFillCalendarDateFill></li>
                    <li>1.2M Views  <BsFillEyeFill className='blogicon'></BsFillEyeFill></li>
                    <li>06 Comments <BiMessageDetail className='blogicon'></BiMessageDetail> </li>
                    </ul>
                    </div>
                    </Col>
                    <Col className="blog3" lg={6} sm={3} xs={1}><img src={astron1}/>
                    <h2>Astronomy Binoculars A Great Alternative</h2>
                    <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.</p>
                    <button>View More</button>
                    </Col>
                    </Row>
                    <Row xs={1} lg={1} className="pt-5" data-aos='fade-up' data-aos-duration='2000'>
                <Col lg={3}>
                <div className="blog4">
                   <ul className="blog5"> 
                    <li>Food, Technology</li>
                    <li>Mark wiens  <BsFillPersonFill className='blogicon'></BsFillPersonFill> </li>
                    <li>19 Dec,2017 <BsFillCalendarDateFill className='blogicon'></BsFillCalendarDateFill></li>
                    <li>1.2M Views  <BsFillEyeFill className='blogicon'></BsFillEyeFill></li>
                    <li>06 Comments <BiMessageDetail className='blogicon'></BiMessageDetail> </li>
                    </ul>
                    </div>
                    </Col>
                    <Col className="blog3" lg={3}><img src={astron2}/>
                    <h2>The Basics Of Buying A Telescope</h2>
                    <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.</p>
                    <button>View More</button>
                    </Col>
                    </Row>
                    <Row xs={1} lg={1} className="pt-5" data-aos='fade-up' data-aos-duration='2000'>
                <Col lg={3}>
                <div className="blog4">
                   <ul className="blog5"> 
                    <li>Food, Technology</li>
                    <li>Mark wiens  <BsFillPersonFill className='blogicon'></BsFillPersonFill> </li>
                    <li>19 Dec,2017 <BsFillCalendarDateFill className='blogicon'></BsFillCalendarDateFill></li>
                    <li>1.2M Views  <BsFillEyeFill className='blogicon'></BsFillEyeFill></li>
                    <li>06 Comments <BiMessageDetail className='blogicon'></BiMessageDetail> </li>
                    </ul>
                    </div>
                    </Col>
                    <Col className="blog3" lg={3}><img src={astron3}/>
                    <h2>The Night Sky</h2>
                    <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.</p>
                    <button>View More</button>
                   
                    </Col>
                    </Row>
                    </Col>
                  <Col lg={3}> 
                    <Row lg={1} md={2} className="carlisection">
                          <Col className="p-0" ><div className="carli" data-aos='fade-up' data-aos-duration='2000'>
                            <div className="carli1"><input type="text" placeholder='Search'/><BsSearch></BsSearch></div>
                    <div className="carli2"><span><img src={carli}/><h5>Charli Barber</h5><p>Senior blog writer</p>
                    <div className="carliicon"><span><BsInstagram></BsInstagram></span> <span><BsFacebook></BsFacebook> </span><span><BsLinkedin></BsLinkedin> </span><span><BsTwitter></BsTwitter></span></div>
                    </span>
                    <p>Boot camps have its supporters andit sdetractors. Some people do not understand why you should have to spend money on boot camp when you can get. Boot camps have itssuppor ters andits detractors.</p>
                </div>
                          </div>
                          </Col>
                          <Col className="popularpost" data-aos='fade-up' data-aos-duration='2000'><Row lg={1} sm={1} xs={1} className="mb-3">
                           <Col><h5>Popular Posts</h5></Col>
                            <Col ><Row className="mt-3">
                                <Col ><img src={post1} /></Col>
                                <Col><p>Space The Final Frontier</p>
                                <p>02 hours ago</p></Col>
                                </Row></Col>
                            <Col><Row>
                                <Col><img src={post2} /></Col>
                                <Col><p>The Amazing Hubble</p><p>03 hours ago</p></Col>
                                </Row></Col>
                            <Col><Row>
                                <Col><img src={post3} /></Col>
                                <Col><p>Astronomy Or Astrology</p><p>02 hours ago</p></Col>
                                </Row></Col>
                            <Col><Row>
                                <Col><img src={post4} /></Col>
                                <Col><p>Asteroids telescope</p><p>01 hours ago</p></Col>
                                </Row></Col>
                            </Row></Col>
                          <Col><Row className="mb-3"><Col className="postcatigories" data-aos='fade-up' data-aos-duration='2000'><h5>Post Catigories</h5>
                          <Col><div className="postcatigories1"><div><p>Technology</p></div><div><p>37</p></div></div></Col>
                          <Col><div className="postcatigories1"><div><p>Lifestyle</p></div><div><p>24</p></div></div></Col>
                          <Col><div className="postcatigories1"><div><p>Fashion</p></div><div><p>34</p></div></div></Col>
                          <Col><div className="postcatigories1"><div><p>Art</p></div><div><p>45</p></div></div></Col>
                          <Col><div className="postcatigories1"><div><p>Food</p></div><div><p>36</p></div></div></Col>
                          <Col><div className="postcatigories1"><div><p>Architecture</p></div><div><p>53</p></div></div></Col>
                          </Col></Row></Col>
                          <Col><Row lg={1} xs={1} sm={1} data-aos='fade-up' data-aos-duration='2000'>
                            <Col className="postcatigores3"><h5>Newsletter</h5></Col>
                            <Col className="postcatigores3 mt-3"><p>Here, I focus on a range of items and features that we use in life without giving them a second thought.</p></Col>
                            <Col><div className="postcatigoriesemail"><div className="postcatigoriesicon"><MdOutlineLocalPostOffice color={'blue'}></MdOutlineLocalPostOffice></div><input type="text" placeholder="Enter email"/><button>Subscribe</button></div></Col>
                            </Row>
                            </Col>     
                    </Row>
                     </Col>  
        </Row>
        <Row className="m-5 ">
                        <Col className="pagin"><div className="pagination"><Pagination >{items}</Pagination></div></Col>
                    </Row>
        <Row lg={6} sm={3} xs={3} md={3} className="insta pt-5 p-0 m-0" data-aos='fade-up' data-aos-duration='2000'>
                        <Col><img src={bloginsta1}/></Col>
                        <Col><img src={bloginsta2}/></Col>
                        <Col><img src={bloginsta3}/></Col>
                        <Col><img src={bloginsta4}/></Col>
                        <Col><img src={bloginsta3}/></Col>
                        <Col><img src={bloginsta6}/></Col>
                       <div className="visitinsta"> <button>Visit us on Instagram <BsInstagram></BsInstagram></button></div>
                        
                </Row>      
    </Container>
    );
}; export default Blog