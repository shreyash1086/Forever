import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {

    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => { 
        const bestProduct = products.filter((item) => (item.bestseller));
        //collecting products from the products by applying the filter on each item selection the items that ha best seller property as true
        setBestSeller(bestProduct.slice(0,5))//providing only 5 products
    }, [products])
    
  return (
      <div className='my-10'>
          <div className='text-center text-3xl py-8'>
              <Title text1={'BEST'} text2={'SELLER'}></Title>
              <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia nam quam, accusantium eos velit sint 
              </p>
          </div>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
              {
                  bestSeller.map((item, index) => (
                      <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
                  ))
              }
          </div>
      </div>
  )
}

export default BestSeller