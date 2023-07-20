//import data
import {hero} from "@/assets/data.js";

export default function Hero() {
    //destructure hero data
    const {title, subtitle, buttonText} = hero;
    

    return (
        <section className="h-[850px] w-full bg-hero bg-right bg-cover bg-no-repeat text-white pt-[255px] pb-[254px] relative mb-12 lg:bg-center lg:mb-28">
            <div className="container mx-auto text-center"> 
            <h1 className="text-2xl mx-auto font-semibold mb-[30px] lg:text-[52px]"> {title}</h1>
            <h2> {subtitle}</h2>
            <button className="bg-white text-black px-8 py-4 rounded-full mt-8 shadow-lg font-bold hover:shadow-xl active:scale-90 transition duration-150">{buttonText}</button>

            </div>
        </section>
    )
}