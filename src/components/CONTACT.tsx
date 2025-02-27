import style from "./Hero.module.css";
export default function Contact() {
    return (
      <section className={`flex w-full justify-center items-center font-serif gap-10 flex-col ${style['bgGradient']} py-6`}>
        <div className={`text-6xl font-bold italic ${style['gradient-text']} h-full p-6`}>
       Get In Touch
      </div>
      <form className="w-full flex flex-col justify-center items-center">
  <div className="px-4 sm:px-6 lg:px-8 w-full max-w-4xl flex flex-col gap-4">
    <div className="flex flex-col sm:flex-row gap-4">
      <input
        type="text"
        placeholder="First Name"
        required
        className="p-3 bg-transparent border-2 w-full sm:w-[48%] py-3 border-[#F0F0F0] rounded-lg placeholder-[#F0F0F0] focus:outline-none"
      />
      <input
        type="text"
        placeholder="Last Name"
        required
        className="p-3 bg-transparent border-2 w-full sm:w-[48%] py-3 border-[#F0F0F0] rounded-lg placeholder-[#F0F0F0] focus:outline-none"
      />
    </div>
    <div className="flex flex-col sm:flex-row gap-4">
      <input
        type="text"
        placeholder="Phone Number"
        required
        className="p-3 bg-transparent border-2 w-full sm:w-[48%] py-3 border-[#F0F0F0] rounded-lg placeholder-[#F0F0F0] focus:outline-none"
      />
      <input
        type="email"
        placeholder="Email"
        required
        className="p-3 bg-transparent border-2 w-full sm:w-[48%] py-3 border-[#F0F0F0] rounded-lg placeholder-[#F0F0F0] focus:outline-none"
      />
    </div>
    <textarea
      placeholder="Message"
      required
      className="p-3 bg-transparent border-2 w-full py-3 border-[#F0F0F0] rounded-lg placeholder-[#F0F0F0] focus:outline-none h-40"
    />
  </div>
  <button className="py-3 bg-[#F0F0F0] px-8 mt-6 text-black rounded-lg font-bold border border-[#F0F0F0] hover:bg-[#0A2647] hover:text-[#F0F0F0] -transition-colors duration-300">
    SUBMIT
  </button>
</form>
      </section>
      
    );
  }
  