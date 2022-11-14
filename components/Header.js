import { ImFacebook, ImYoutube,ImWikipedia } from "react-icons/im";
import Link from 'next/link'

export default function header() {
  return (
    <header className="bg-gradient-to-r from-purple-500 to-pink-500 shadow-2xl ">
        <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3 ">
            <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0 ">
                <input type="text" className="input-text  "  placeholder="Search..."/>
            </div>
            <div className="shrink w-80 sm:order-2 ">
                <Link href={"/"} className="font-bold uppercase text-3xl ">
                    AayurGyan
                </Link>
            </div>
            <div className="w-96 order-3 flex justify-center ">
                <div className="flex gap-6 ">
                    <Link href={"https://www.facebook.com/groups/herbsmedicinalplants/?mibextid=HsNCOg"}><ImFacebook color="#1a1a00" /></Link>
                    <Link href={"https://en.wikipedia.org/wiki/Medicinal_plants"}><ImWikipedia color="#1a1a00" className="w-16"/></Link>
                    <Link href={"https://www.youtube.com/watch?v=Kt0Lgy17I78"}><ImYoutube color="#1a1a00" /></Link>
                </div>
            </div>
        </div>
    </header>
  )
}
