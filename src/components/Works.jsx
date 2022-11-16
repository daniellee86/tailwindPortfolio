import two from "../img/two.webp"
import one from "../img/one.webp"
import three from "../img/three.webp"
import four from "../img/four.webp"
import five from "../img/five.webp"
import six from "../img/six.webp"
import seven from "../img/seven.webp"
import eight from "../img/eight.webp"

const Works = () => {
  return (
    <div id="works" class="py-40 dark:bg-slate-900">
    <div class="container mx-auto">
      {/* TOP */}
      <div class="flex flex-col gap-3 items-center">
        <h1 class="text-yellow-400 font-bold">PORTFOLIO</h1>
        <h1 class="text-3xl dark:text-white">Works & Projects</h1>
        <p class="w-1/2 text-center text-gray-400">
          I help designers, agencies and businesses bring their ideas to
          life. From project inception to helping manage latter stage scope-creep , I turn your requirements
          into well-designed websites.
        </p>
      </div>
      {/* BOTTOM */}
      <div class="p-5 sm:p-0 flex flex-wrap justify-between">
        {/* CARD */}
        <div
          className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110"
        >
          <img alt="work" src={one} className="object-cover" />
        </div>
        {/* CARD */}
        <div
          className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110"
        >
          <img alt="work"  src={two} className="h-full object-cover" />
        </div>
        {/* CARD */}
        <div
          className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110"
        >
          <img  alt="work" src={three} className="h-full object-cover" />
        </div>
         {/* CARD */}
        <div
          className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110"
        >
          <img alt="work" src={four} className="h-full object-cover"/>
        </div>
         {/* CARD */}
        <div
          className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110"
        >
          <img  alt="work" src={five} className="h-full object-cover"/>
        </div>
         {/* CARD */}
        <div
          className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110"
        >
          <img alt="work" src={six} className="h-full object-cover"/>
        </div>
         {/* CARD */}
        <div
          className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110"
        >
          <img alt="work" src={seven} className="h-full object-cover" />
        </div>
        {/* CARD */}
        <div
          className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110"
        >
          <img alt="work" src={eight} className="h-full object-cover"/>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Works