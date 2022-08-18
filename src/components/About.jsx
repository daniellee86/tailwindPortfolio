//IMAGES
import dots from "../img/dots.png"
import portrait from "../img/portrait.jpg"
import happyportrait from "../img/happyportrait.jpg"

const About = ({theme}) => {
  return (
    <div id="about" class="px-10 dark:bg-slate-900">
    <div
      class="container mx-auto py-20 flex flex-col-reverse lg:flex-row items-center gap-20"
    >
      {/* LEFT */}
      <div class="relative">
        <img class="h-1/4 absolute top-0 left-0" src={dots} alt=""/>
        <div class="h-full rounded-full overflow-hidden">
          <img  src={theme === "dark" ? portrait : happyportrait} alt="" />
        </div>
      </div>
      {/* RIGHT */}
      <div class="my-auto flex flex-col gap-3">
        <h1 class="text-indigo-600 font-bold">ABOUT ME</h1>
        <h1 class="text-3xl font-medium dark:text-white">Better Design</h1>
        <h1 class="text-3xl font-medium dark:text-white">Better Experience</h1>
        <p class="text-gray-400">
          I design and build digital experiences. I'm a multi-disciplinary cyber creative. I also build full-stack web-apps, websites, interactive web-based tools and games.
        </p>
        <div id="skillWrapper">
         <h2 class="text-indigo-600 dark:text-gray-400 font-medium">HTML</h2>
         <div class="w-full bg-gray-200 h-1.5 rounded-md">
          <div class="w-11/12 bg-indigo-600 h-1.5 rounded-md"></div>
         </div>
         <div id="percentage" className="w-full p-1 flex align-center justify-between text-xs dark:text-gray-200 font-bold">
           <p>0%</p>
           <p>100%</p>
           <p className="uppercase">infinite%</p>
         </div>
        </div>
        <div id="skillWrapper">
         <h2 class="text-indigo-600 dark:text-gray-400 font-medium">Tailwind</h2>
         <div class="w-full bg-gray-200 h-1.5 rounded-md">
          <div class="w-11/12 bg-indigo-600 h-1.5 rounded-md"></div>
         </div>
         <div id="percentage" className="w-full p-1 flex align-center justify-between text-xs dark:text-gray-200 font-bold">
           <p>0%</p>
           <p>100%</p>
           <p className="uppercase">infinite%</p>
         </div>
        </div>
        <div id="skillWrapper">
         <h2 class="text-indigo-600 dark:text-gray-400 font-medium">React</h2>
         <div class="w-full bg-gray-200 h-1.5 rounded-md">
          <div class="w-11/12 bg-indigo-600 h-1.5 rounded-md"></div>
         </div>
         <div id="percentage" className="w-full p-1 flex align-center justify-between text-xs dark:text-gray-200 font-bold">
           <p>0%</p>
           <p>100%</p>
           <p className="uppercase">infinite%</p>
         </div>
        </div>
        <div id="skillWrapper">
         <h2 class="text-indigo-600 dark:text-gray-400 font-medium">Javascript</h2>
         <div class="w-full bg-gray-200 h-1.5 rounded-md">
          <div class="w-11/12 bg-indigo-600 h-1.5 rounded-md"></div>
         </div>
         <div id="percentage" className="w-full p-1 flex align-center justify-between text-xs dark:text-gray-200 font-bold">
           <p>0%</p>
           <p>100%</p>
           <p className="uppercase">infinite%</p>
         </div>
        </div>
     
      </div>
    </div>
  </div>
  
  )
}

export default About