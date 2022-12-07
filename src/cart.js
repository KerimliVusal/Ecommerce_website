import {Col,Row,Container} from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux';
import {remove,countamount} from './storeslice';
import {useState} from 'react'
import {amont} from './likeslice'
const Cart=({setBasket,total,Total})=>{
    const[say,setSay]=useState([])
    const[pay,setPay]=useState(1)
const cart=useSelector(state=>state.counter)
const added=useSelector(state=>state.like.cartadd)
const Amount=(product,d)=>{
    const ind=cart.indexOf(product)
    cart[ind].amount=4
}
const dispatch=useDispatch();
const removelast=(product)=>{
   dispatch(remove(product))
};Total();
console.log('say',say)
    return(<Container>
       
        <Row lg={1} >
          { cart.map((product,item)=>(
           <Col>
            <Row lg={2}>
            <Row lg={2}>
            <Col  className="my-3" sm ={6} xs={9} md={6} lg={6} size={product.length} key={product.id}><div className="cartimg"><img src={product.imgurl}/></div></Col>
            <Col lg={3}><div className="carttext mt-5"><p>{product.name}</p> <h2>{product.name} </h2><p>{product.cost}</p> </div></Col>
            </Row>
            <Col ><Row className="cartbutton mt-5" lg={2}>
                <Col className="cartbutton"><div><button onClick={()=>removelast(product.id)}>remove</button>
                </div><div className="butonaddremove"><button onClick={()=>Amount(product)}>-</button></div><div className="butonaddremove"><button onClick={()=>dispatch(countamount(product))} >+</button></div><div className="butonamount">{product.cost}$</div>
                </Col>
                </Row>
                </Col>
            </Row>
            </Col>
          
       ))} 
       <Row ><Col className="carttotal ">
        {cart.length?<p>Total:{total}$</p>:<p id="cartempty" onClick={()=>setBasket(false)}>Cart is empty.Go Shop!</p>}</Col></Row>
        </Row>
    </Container>

    );
}; export default Cart