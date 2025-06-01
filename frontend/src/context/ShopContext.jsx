import { createContext, useEffect, useState } from "react"
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '$';
    const delevery_fee = 10;
    // we are defining state variable and exporting them so that we dont have to do the prop drilling
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false) // if true we will display the searchbar if false we will hide the search bar
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();

    const addToCart = async (itemId, size) => {
        
        if (!size) {
            toast.error('Select Product Size');
            return
        }

        let cartData = structuredClone(cartItems) 
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            }
            else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData)
    }

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalCount;
    }

    useEffect(() => {
        console.log(cartItems);
    },[cartItems])

    const updateQuantity = async (itemId,size,quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;
        setCartItems(cartData);
    }

    const getCartAmount =  () => {
        // to find total amount of the cart

        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items);
            console.log(itemInfo)
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalAmount += itemInfo.price * cartItems[items][item]
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalAmount;
    }

    const value = {
        products, currency, delevery_fee, search, setSearch, showSearch, setShowSearch,cartItems, addToCart, getCartCount, updateQuantity, getCartAmount, navigate
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;