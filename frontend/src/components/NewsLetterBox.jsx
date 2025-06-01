import React from 'react'

const NewsLetterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault(); //  so that when we submit the form it will not reload the webpage
    }

  return (
      <div className='text-center'>
          <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% Off</p>
          <p className='text-gray-400 mt-3'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius iure omnis fugit nobis ab explicabo nulla harum 
          </p>
          <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 border-gray-200'>
              <input type="email" placeholder='Enter your email' className='w-full sm:flex-1 outline-none' required />
              <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
          </form>
    </div>
  )
}

export default NewsLetterBox