import { ImFacebook, ImWikipedia, ImYoutube } from "react-icons/im";
import Link from 'next/link'
import Newsletter from './_child/newsletter';

export default function Footer() {
  // const bg={
  //   backgroundImage:"url('/images/footerbg.jpeg') ",
  //   backgroundRepeat:"no-repeat",
  //   backgroundSize:"cover"
  // }


  return (
    <footer className="bg-gray-50" >
      <Newsletter></Newsletter>
  <div className="container mx-auto flex justify-center py-12"> 
   <div className="py-5">
    <div className="flex gap-6 justify-center">
    <Link href={"https://www.facebook.com/groups/herbsmedicinalplants/?mibextid=HsNCOg"}><ImFacebook color="#1a1a00" /></Link>
                    <Link href={"https://en.wikipedia.org/wiki/Medicinal_plants"}><ImWikipedia color="#1a1a00" className="w-16"/></Link>
                    <Link href={"https://www.youtube.com/watch?v=Kt0Lgy17I78"}><ImYoutube color="#1a1a00" /></Link>
                      </div>
        <p className="py-5 text-black text-xl font-extrabold">Copyright ©2022 All rights reserved | This blogging website is made to access knowledge about medicinal plants</p>
         <p className="text-black hover:text-red-800 text-center cursor-pointer">Terms & Condition</p>
   </div>
  </div>

    </footer>

  )
}
