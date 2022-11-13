import Link from 'next/link';
import Image from 'next/image'
import Author from './author';
import { data } from 'autoprefixer';


export default function Related() {
    return(
        <section className="pt-20">

        <h1 className="font-bold text-3xl py-10 ">Related</h1>
       <div className="flex flex-col gap-10">
         {Post()}
         {Post()}
         {Post()}
         {Post()}
         {Post()}
       </div>
        </section>
    )
}


function Post({data}){

  const {title,category,img,published,author} =data;
    return(
      <div className="flex gap-5">
         <div className="image flex flex-col justify-start">
       <Link href={"/"}>  <Image src={img ||""}  width={300} height={200}  className="rounded"/></Link>
       </div>
       <div className="info flex justify-center flex-col">
       <div className="cat">
              <Link href={"/"} className="text-orange-600 hover:text-orange-800">{category ||""}</Link>
              <Link href={"/"} className="text-gray-800 hover:text-gray-600">- {published ||""}</Link>
          </div>
          <div className='title'>
      <Link href={"/"} className="text-xl  font-bold text-gray-800 hover:text-gray-600"></Link>
          </div>
        {author? <Author {...author}></Author>:<></>}
    </div>
      </div>
    )
}