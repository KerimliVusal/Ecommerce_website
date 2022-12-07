import {Col, Row,Container} from 'react-bootstrap';
 import sm1 from './imag/product-sm-1.png.webp';
 import sm2 from './imag/product-sm-2.png.webp';
 import sm3 from './imag/product-sm-3.png.webp';
 import sm4 from './imag/product-sm-4.png.webp';
 import sm5 from './imag/product-sm-5.png.webp';
 import sm6 from './imag/product-sm-6.png.webp';
 import sm7 from './imag/product-sm-7.png.webp';
 import sm9 from './imag/product-sm-9.png.webp';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import {data} from './App';
import {BsSearch,BsHeart,BsFillHeartFill} from 'react-icons/bs';
import {GiShoppingCart} from 'react-icons/gi';
import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import {useState,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { increment } from './storeslice';
import { like } from './likeslice';
import { getStepButtonUtilityClass } from '@mui/material';
import swal from 'sweetalert';

const marks = [
  {
    value: 100,
    label: '100$',
  },
  {
    value: 1000,
    label: '1000$',
  },
  {
    value: 1500,
    label: '1500$',
  },
  {
    value: 3000,
    label: '3000$',
  },
];

function valuetext(value: number) {
  return `${value}$`;
}
const Shop=({Total})=>{
  const[redicon,setRedicon]=useState('whiteicon');
  const[redstate,setRedstate]=useState('')
  const[currentstate,setCurrent]=useState([]);
  const[addtocurrentcart,setAddtocurrentcart]=useState();
  const[option,setOption]=useState('') 
  const[li,setLi]=useState(false) 
  const selectorcart=useSelector(state=>state.counter);
  const likes=useSelector(state=>state.like.count);
  const values=useSelector(state=>state.like.value);
  const dispatch=useDispatch();
  let currentdata=data.find(liked=>liked.id==redstate.id)
  const Addlike=()=>{
   setRedicon(redicon=='whiteicon'?'redicon':'whiteicon')
   setTimeout(()=>{
    setRedicon('whiteicon')
   },500)
   
    
  }
  let currentlikes=data.find(lik=>lik.id===values.id)
  const Addtocart=(product)=>{
   const addtocurrent=data.find(addtobasket=>addtobasket.id==product.id)
    if(addtocurrentcart.indexOf(addtocurrent)!==-1) return;
    else{
      setAddtocurrentcart(addtocurrent)
      setAddtocurrentcart([...addtocurrentcart,addtocurrent])
    }
    // dispatch(increment([addtocurrentcart]))
    
   
  }; 
 
  const addtoRedux=(product)=>{
    dispatch(increment(product))
    swal({
      title: "Successfully added!",
      text: "Product is added!",
      icon: "success",
      button: "Go shop!",
    });
    
    
  }
  Total();
  console.log('like',likes)
  
  
  
    return( <Container fluid>
        <Row lg={1}><Col className="shopenterance p-0"><h3>Shop Category</h3></Col></Row>
           <Row lg={2} className="mt-5 m-5">
            <Col lg={3} >
                <Row lg={1} xs={1} sm={1} md={1} >
                    <Col className="shopcat p-0">
                    <div className="shopcatigories2" ><h4>Browse Categories</h4></div>
                    <div className="shopcatigories1"><label>  <input type="radio" name="test"/> Men (3600)</label></div>
                    <div className="shopcatigories1"><label><input type="radio" name="test"/>  Women (3600)</label></div>
                    <div className="shopcatigories1"><label><input type="radio" name="test"/> Accessories (3600)</label></div>
                    <div className="shopcatigories1"><label><input type="radio" name="test"/> Footwear (3600)</label></div>
                    <div className="shopcatigories1"><label><input type="radio" name="test"/> Bay item (3600)</label></div>
                    <div className="shopcatigories1"><label><input type="radio" name="test"/> Electronics (3600)</label></div>
                    <div className="shopcatigories1"><label><input type="radio" name="test"/> Food (3600)</label></div>
                    
                  </Col>
                    <Col  className="shopcat p-0">
                    <div className="shopcatigories2" ><h4>Product Filters</h4></div>
                    <p> Brands</p>
                    <div className="shopcatigories1"><label>  <input type="radio" name="test"/> Apple(29)</label></div>
                    <div className="shopcatigories1"><label><input type="radio" name="test"/>  Asus(29)</label></div>
                    <div className="shopcatigories1"><label><input type="radio" name="test"/> Gionee(19)</label></div>
                    <div className="shopcatigories1"><label><input type="radio" name="test"/> Micromax(19)</label></div>
                    <div className="shopcatigories1"><label><input type="radio" name="test"/> Samsung(19)</label></div>
                    <div>
                    <p> Colors</p>
                    <div className="shopcatigories1"><label>  <input type="radio" name="test"/> Black(29)</label></div>
                    <div className="shopcatigories1"><label><input type="radio" name="test"/>  Black Leather(29)</label></div>
                    <div className="shopcatigories1"><label><input type="radio" name="test"/> Black with red(19)</label></div>
                    <div className="shopcatigories1"><label><input type="radio" name="test"/> Gold(19)</label></div>
                    </div>
                    <div>
                        <p>Price</p>
                        <div className='inputslider'> <Box sx={{ width: 250 }}>
      <Slider
        aria-label="Custom marks"
        defaultValue={30}
        getAriaValueText={valuetext}
        step={100}
        valueLabelDisplay="auto"
        marks={marks}
        min={100}
        max={3000}
      />
    </Box></div>

                    </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Col>
            <Col lg={9}>
            <Row lg={1}>
            <Col><Row>
                <Col><div className="shop1"><div >
               <span className='shop2'> <select name="shop" value={option} onChange={(e)=>setOption(e.target.value)}>
           <option value="">Default</option>
           <option value="Car">New</option>
           <option value="Bag">Brend</option>
          </select></span><span className='shop3'> <select name="shop" value={option} onChange={(e)=>setOption(e.target.value)}>
           <option value="Watch">watch</option>
           <option value="Car">car</option>
           <option value="Bag">Bag</option>
          </select></span></div><div className='shop4'><span><input type="text" placehollder="search"/></span><span className="shopsearchicon"><BsSearch></BsSearch></span></div></div></Col>
                </Row>
                </Col>
        </Row>
        <Row  className="p-0 m-0" lg={3}>
        { (data.filter(selected=>(selected.name.includes(option)))).map((product,item)=>(
            <Col sm ={6} xs={9} md={6} lg={4} size={product.length} key={product.item}><div className="product"><img src={product.imgurl}/><div className="productshopicon1">
              <GiShoppingCart size={34} onClick={()=>addtoRedux(product)}  ></GiShoppingCart>
             <BsFillHeartFill   size={25} onClick={()=>Addlike()} className={redicon}></BsFillHeartFill></div></div><div className="producttext12"><p>{product.name}</p> <h2>{product.name} </h2><p>{product.cost}</p> </div></Col>
       ))} 
       </Row>
            </Col>
           </Row>
           <Row><Col className='trendshop'><h2>Top <span className="trendshopspan">Products</span></h2></Col></Row>
           <Row lg={4} className="m-5">
            <Col ><Row lg={1} >
                <Col className="sm1"><div><img src={sm1}/></div><div><p>Gray Coffee Cup</p><p>170$</p></div></Col>
                <Col className="sm1"><div><img src={sm2}/></div><div><p>Gray Coffee Cup</p><p>170$</p></div></Col>
                <Col className="sm1"><div><img src={sm3}/></div><div><p>Gray Coffee Cup</p><p>170$</p></div></Col>
                </Row></Col>
                <Col><Row lg={1}>
                <Col className="sm1"><div><img src={sm7}/></div><div><p>Gray Coffee Cup</p><p>170$</p></div></Col>
                <Col className="sm1"><div><img src={sm4}/></div><div><p>Gray Coffee Cup</p><p>170$</p></div></Col>
                <Col className="sm1"><div><img src={sm9}/></div><div><p>Gray Coffee Cup</p><p>170$</p></div></Col>
                </Row></Col>
                <Col><Row lg={1}>
                <Col className="sm1"><div><img src={sm3}/></div><div><p>Gray Coffee Cup</p><p>170$</p></div></Col>
                <Col className="sm1"><div><img src={sm4}/></div><div><p>Gray Coffee Cup</p><p>170$</p></div></Col>
                <Col className="sm1"><div><img src={sm5}/></div><div><p>Gray Coffee Cup</p><p>170$</p></div></Col>
                </Row></Col>
                <Col><Row lg={1}>
                <Col className="sm1"><div><img src={sm6}/></div><div><p>Gray Coffee Cup</p><p>170$</p></div></Col>
                <Col className="sm1"><div><img src={sm7}/></div><div><p>Gray Coffee Cup</p><p>170$</p></div></Col>
                <Col className="sm1"><div><img src={sm9}/></div><div><p>Gray Coffee Cup</p><p>170$</p></div></Col>
                </Row></Col>
            
           </Row>
         </Container>
         );
}; export default Shop
