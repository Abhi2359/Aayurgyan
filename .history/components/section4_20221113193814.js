import Link from 'next/link'
import Image from 'next/image'
import Author from './_child/author'

export default function Section4() {
  const{data,isLoading,isError}=fetcher('api/popular')

  if(isLoading) return <Spinner></Spinner>;
  if(isError) return <Error></Error>;
  return (
    <section className="container mx-auto md:px-20 py-16">
       <div className="grid lg:grid-cols-2">
        <div className="item">
        <h1 className="font-bold text-4xl py-12 ">Bussiness</h1>
        <div className="flex flex-col gap-6">
           {Post()}
           {Post()}
           {Post()}
           {Post()}
           {Post()}
        </div>

        </div>
        <div className="item">
        <h1 className="font-bold text-4xl py-12 ">Travel</h1>
           {Post()}
           {Post()}
           {Post()}
           {Post()}
           {Post()}
          
        </div>
       </div>
    </section>
  )
}


function Post(){
    return(
        <div className="flex gap-5"> 
       <div className="image flex flex-col justify-start">
       <Link href={"/"}>  <Image src={"/images/img1.jpg"}  width={300} height={250}  className="rounded"/></Link>
       </div>
       <div className="info flex justify-center flex-col">
       <div className="cat">
              <Link href={"/"} className="text-orange-600 hover:text-orange-800">Bussiness,Travel</Link>
              <Link href={"/"} className="text-gray-800 hover:text-gray-600">- October 29,2022</Link>
          </div>
          <div className='title'>
      <Link href={"/"} className="text-xl  font-bold text-gray-800 hover:text-gray-600">Your most unhappy costumers are your greatest source of learning</Link>
          </div>
          <Author></Author>
    </div>
        </div>
    )
}