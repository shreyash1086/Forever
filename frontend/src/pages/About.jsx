import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px] ' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi quia atque voluptas iusto dolorem possimus quisquam inventore eaque laborum error tempora maxime illo facilis assumenda, autem incidunt adipisci libero? Totam minima, ea laudantium nam expedita perferendis sapiente, ut consectetur quas, iusto esse minus ex animi veritatis qui reiciendis culpa voluptatum quisquam laborio.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos non nihil assumenda et dicta. Repellat incidunt modi voluptate, quam possimus, pariatur delectus ullam laborum reprehenderit debitis neque illo molestiae qui praesentium ut quasi, magnam iusto corporis fugiat suscipit? Corporis, dicta?</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, impedit tenetur laboriosam corrupti animi id dignissimos vitae consequuntur accusamus minima atque veniam, dolores quas maiores ipsam necessitatibus ut reiciendis sunt numquam fugiat aut ab. Culpa reprehenderit incidunt dolore optio quam!</p>
        </div>
      </div>
      <div className='text-2xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dignissimos cum ducimus nam voluptas odio esse reiciendis assumenda. Animi, debitis?</p>
        </div>
        <div className='border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dignissimos cum ducimus nam voluptas odio esse reiciendis assumenda. Animi, debitis?</p>
        </div>
        <div className='border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dignissimos cum ducimus nam voluptas odio esse reiciendis assumenda. Animi, debitis?</p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About