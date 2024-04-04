import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {add ,remove} from "../redux/Slices/CartSlice";
import {motion} from "framer-motion";



const Product = ({post}) => {

  const {cart} = useSelector((state) => state);
  
  const dispatch = useDispatch();

  
  const addToCart = () => {
    dispatch(add(post));
  

    toast.success("Item added to Cart");
  }

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");
  }

  return (
    <motion.div whileHover={{scale:1.1}}  transition={{duration:0.3}} className="flex flex-col items-center justify-between 
    gap-3 p-4 mt-10 ml-5 rounded-xl outline   ">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{post.title}</p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">A recipe is a set of instructions used for preparing and producing a certain food, dish, or drink123. It includes a precise record of the ingredients used, the amounts needed, and the way they are combined1.</p>
      </div>
      <div className="h-[180px]">
        <img src={post.image} className="h-full w-full " />
      </div>

      <div className="flex justify-between gap-12 items-center w-full mt-5 ">
        <div>
          <p className="text-green-600 font-semibold">$2</p>
        </div>
        
        {
          cart.some((p) => p.id == post.id) ?
          (<button 
         className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in
         "
          onClick={removeFromCart}>
            Remove Item
          </button>) :
          (<button
          className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
          onClick={addToCart}>
            Add to Cart
          </button>)
        }
      </div>
     

    </motion.div>
  );
};

export default Product;
