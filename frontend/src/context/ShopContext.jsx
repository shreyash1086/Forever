import { createContext, useState } from "react"
import { products } from "../assets/assets";


export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '$';
    const delevery_fee = '10';
    // we are defining state variable and exporting them so that we dont have to do the prop drilling
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false) // if true we will display the searchbar if false we will hide the search bar

    const value = {
        products, currency, delevery_fee, search, setSearch, showSearch, setShowSearch
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;