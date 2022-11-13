
import { Swiper ,SwiperSlide } from 'swiper/react';
import Link from 'next/link'
import Image from 'next/image'
import Author from './_child/author'
import fetcher from '../lib/fetcher'
import Spinner from './_child/spinner'
import Error from './_child/error'


export default function Section3() {

  const{data,isLoading,isError}=fetcher('api/popular')

  if(isLoading) return <Spinner></Spinner>;
  if(isError) return <Error></Error>;
  
  return (
    <section className="container mx-auto md:px-20 py-16">
        <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>

        {/* Swiper */}
     <Swiper  slidesPerView={2}
     >
    

    {
      data.map((value,index)=>(
        <SwiperSlide key={index}><Post data={value}></Post></SwiperSlide>
      ))
     }

     </Swiper>
    </section>
  )
}



function Post({data}) {
  
  return(
    <div className="grid">
      <div className="images"> 
      <Link href={"/"}>  <Image src={"/images/img1.jpg"}  width={600} height={400} /></Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
      
          <div className="cat">
              <Link href={"/"} className="text-orange-600 hover:text-orange-800">Bussiness,Travel</Link>
              <Link href={"/"} className="text-gray-800 hover:text-gray-600">- October 29,2022</Link>
          </div>
          <div className='title'>
      <Link href={"/"} className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">Your most unhappy costumers are your greatest source of learning</Link>
          </div>
          <p className='text-gray-500  py-3'>
          Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind 
          text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
          </p>
          <Author></Author>
      </div>
    </div>
  )
}