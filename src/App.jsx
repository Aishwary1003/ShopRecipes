import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import { Route } from "react-router-dom";
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { updateCart } from "./redux/Slices/CartSlice";


const App = () => {
  const dispatch=useDispatch();
  const{cart}=useSelector((state)=>state);


  useEffect(()=>{
    const savedcart=  window.localStorage.getItem("Aishwary");
   
    dispatch(updateCart(JSON.parse(savedcart)));
  
    },[])

  useEffect(()=>{
    window.localStorage.setItem("Aishwary",JSON.stringify(cart));
  },[cart]);
  return (<div>
        <div >
          <Navbar/>
        </div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
  </div>)
};

export default App;
