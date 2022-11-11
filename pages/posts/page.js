import Format from "../../layout/format"

import Author from './../../components/_child/author';
export default function Page(){
    return(
     <Format>
        <section className="container mx-auto md:px-2 py-16 w-1/2">
         <div className="flex justify-center">
     <Author></Author>
     <div className="post py-10">
      <h1>Your most unhappy customers are your greatest source of learning,"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</h1>
     </div>
         </div>
        </section>
     </Format>
    )
}

