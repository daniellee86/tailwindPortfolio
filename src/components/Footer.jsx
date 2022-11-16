//IMAGES
import facebook from "../img/facebook.png"
import instagram from "../img/instagram.png"
import linkedin from "../img/linkedin.png"
import twitter from "../img/twitter.png"
const Footer = () => {
  return (
    <div class="w-full bg-gray-800">
    <div class="container mx-auto py-5 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <img class="w-8" src="./img/logo.png" alt="" />
        <span class="text-2xl font-bold text-yellow-400">Tailwind Practice.</span>
      </div>
      <span class="hidden md:block font-medium text-white"
        >© 2022. Daniel Clough.</span
      >
      <div class="flex gap-10">
        <img class="w-8 cursor-pointer" src={facebook} alt="" />
        <img class="w-8 cursor-pointer" src={instagram} alt="" />
        <img class="w-8 cursor-pointer" src={twitter} alt="" />
        <img class="w-8 cursor-pointer" src={linkedin} alt="" />
      </div>
    </div>
  </div>
  )
}

export default Footer