import {Row,Col,Container} from 'react-bootstrap';
import Footer from './footer';
import logo2 from './imag/logo2.png'
import {GrUserAdmin} from 'react-icons/gr'
const Login=()=>{
    return(<>
    <Container fluid>
        <Row><Col className="loginus12"><h2>Register/Login</h2></Col></Row>
        <Row lg={2} className='loginborder'>
            <Col lg={6} className='login1 p-5'><h3>New to our website?</h3>
            <p>There are advances being made in science and technology everyday, and a good example of this is the</p>
           <button>Create Account</button>
            </Col>
            <Col lg={5} xs={12} className='loginh3'><h3>Login <GrUserAdmin size={23}></GrUserAdmin></h3>
            <div className='logininpt'><input type="text" placeholder="username" /></div>
            <div className='logininpt'><input type="password" placeholder="password" /></div>
            <div style={{color:'#7a7a7a',marginLeft:'20px'}}><input type="checkbox"/>Keep me logged in</div>
            <div className='loginbtn'><button>Log in</button><p>Forgot Password?</p></div>
            </Col>
        </Row>
    </Container>
    <Footer/>
    </>
    );

};export default Login