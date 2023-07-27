import { hero } from "@/assets/data.js";

export default function Hero() {
  const { title, subtitle, buttonText } = hero;

  return (
    <section className="h-[600px] w-full bg-black text-white pt-[255px] pb-[254px] relative mb-12 lg:bg-center lg:mb-28">
      {/* Video Background */}
      <video
        className="w-full h-full object-cover absolute top-0 left-0 opacity-30"
        autoPlay
        loop
        muted
      >
        <source src="/video/hero.mp4" type="video/mp4" />
        {/* Add additional source tags for different video formats if needed */}
      </video>

      <div className="container mx-auto text-center">
        <h1 className="text-2xl mx-auto font-semibold mb-[30px] lg:text-[52px]">
          {title}
        </h1>
        <h2>{subtitle}</h2>
        <button className="bg-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.5)] 
            px-[35px] py-[9px] mb-[160px] mt-[30px]
            text-xl rounded-md backdrop-blur-md transition">
          {buttonText}
        </button>
      </div>
    </section>
  );
}
