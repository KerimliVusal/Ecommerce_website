import Bestseller from './bestseller';
import ScrollToTop from './scroll';
import Header from './header';
import NavScrollExample from './Navbar'
import Trend from './Trend';
import News from './news';
import Footer from './footer';
import Blog from './Blog'
import {Routes,Route} from 'react-router-dom';
import Contact from './contact';
import Shop from './shop';
import Login from './login';
import Cart from './cart';
import product1 from './imag/product1.png.webp';
import product2 from './imag/product2.png.webp';
import product3 from './imag/product3.png.webp';
import product4 from './imag/product4.png.webp';
import product5 from './imag/product5.png.webp';
import product6 from './imag/product6.png.webp';
import product7 from './imag/product7.png.webp';
import product8 from './imag/product8.png.webp';
import log1 from './imag/hero-banner.png.webp'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import RingLoader from "react-spinners/RingLoader";


const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
export const data=[{
  id:1,
  imgurl:product1,
  name:"Quartz Belt Watch",
  cost:150,
  amount:1,

},
 { id:2,
  imgurl:product2,
  name:"Women Freshwash",
  cost:150,
  amount:1,
},
 { id:3,
  imgurl:product3,
  name:"Room Flash Light",
  cost:150,
  amount:1,
},
 { id:4,
  imgurl:product4,
  name:"Room Flash Light",
  cost:150,
  amount:1,
},
  {id:5,
  imgurl:product5,
  name:"Man Office Bag",
  cost:150,
  amount:1,},
 { id:6,
  imgurl:product6,
  name:"Charging Car",
  cost:150,
  amount:1,},
 { id:7,
  imgurl:product7,
  name:"Blutooth",
  cost:150,
  amount:1,},
  {id:8,
  imgurl:product8,
  name:"Charger",
  cost:150,
  amount:1,
},
{
  id:9,
  imgurl:product1,
  name:"Quartz Belt Watch",
  cost:150,
  amount:1,
},
]

function App() {
  const[basket,setBasket]=useState(false)
  const[total,setTotal]=useState([])
  let [loading, setLoading] = useState(true);

 useEffect(()=>{
  setTimeout(()=>{
    setLoading(false)
  },4000);
 },[])
  
 const cart=useSelector(state=>state.counter)
  const Total=()=>{
    let s=0;
    cart.map((sum,index)=>(
     s+=sum.cost*sum.amount
    ))
      setTotal(s)
   }
  
  return (
    <div className="App">
      {loading?
       <div className="sweet-loading">
      <RingLoader
        color='white'
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
        className='sweetspin'
      />
    </div>
    :<div>
    <NavScrollExample setBasket={setBasket}/>
    {basket?(<Cart setBasket={setBasket} total={total} setTotal={setTotal} Total={Total}/>)
    :( <Routes>
      <Route path='/' element={<Header />}/>
      <Route path='/Blog' element={<Blog />}/>
      <Route path='/Shop' element={<Shop setTotal={setTotal} total={total} Total={Total}/>}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/login' element={<Login />}/>
      <Route path="/cart" element={<Cart  /> }/>
    </Routes>)
    }
    </div>
   } 
   </div>);
}

export default App;
