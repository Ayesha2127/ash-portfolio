import Social from "./SOCIAL"

export default function Footer(){
    return(
        <footer className="flex flex-col justify-center items-center bg-[#708090] text-white font-serif">
        
            
        <div className=" p-2 text-center text-sm ">
        all rights reserved | <span className="font-semibold italic ">Ayesha</span>
        </div>
        <div>
          <Social/>
        </div>
        </footer>
    )
}