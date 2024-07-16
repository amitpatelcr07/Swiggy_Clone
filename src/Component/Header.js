import logo from '../logo.png'
import '../App.css';

const Title=()=>{
    return <>
      
      <img src={logo} className='Title'/> 
     
    </>
  }

const Header=()=>{
    return <>
    <div className='Header'>
       {/* <Title/> */}
       <img src={logo}/> 
       <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
       </ul>
       </div>
    </>
}

export default Header;