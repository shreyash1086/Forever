import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {

    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
    const [visible, setVisible] = useState(false); // decides the visibility if the user present in the collection only
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.includes('collection')) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    },[location])

    //the showSearch will only change if the user is present in the collection section as given above logic and once user click on the search icon in which present in the header
    
  return showSearch && visible ? (
      <div className='border-t border-b border-gray-300 bg-gray-50 text-center'>
          <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
              <input value={search} onChange={(e) => setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm' type="text" placeholder='Search' />
              <img className='w-4' src={assets.search_icon} alt="" />
          </div>
          <img onClick={()=>setShowSearch(false)} className='inline w-3 cursor-pointer' src={assets.cross_icon} alt=""/>
      </div>
    ) : null
    // if showSearch && visible are true then only the div will be displayed else it remains hidden
}

export default SearchBar