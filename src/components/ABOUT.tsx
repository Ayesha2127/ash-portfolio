import style from "./Hero.module.css";

export default function About() {
  return (
    <div className={`flex w-full justify-center items-center font-serif ${style.bgGradient} min-h-screen text-[#f0f0f0] p-4`}>
      <div className="flex flex-col w-full h-full justify-center items-center max-w-[90%] md:max-w-[80%] lg:max-w-[60%]">
        {/* Heading */}
        <h1 className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-center italic ${style['gradient-text']}`}>
          About Me
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg text-[#708090] md:text-1xl pt-4 text-center">
          I&apos;m Ayesha Waseem, a passionate Frontend Web Developer specializing in Next.js, AI, and Web 3.0. With expertise in HTML5, CSS3, JavaScript, and frameworks like Tailwind CSS, I create responsive, user-friendly websites that blend design and functionality. From personal portfolios to dynamic projects.I&apos;m dedicated to building innovative digital experiences. Let&apos;s collaborate and shape the future of the web together!
        </p>
      </div>
    </div>
  );
}