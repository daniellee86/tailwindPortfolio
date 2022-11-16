const Services = () => {
  return (
    <div id="services" class="dark:bg-slate-900">
      <div class="container mx-auto">
        {/* TOP */}
        <div class="flex flex-col gap-5 items-center">
          <h1 class="text-yellow-400 font-bold">SERVICES</h1>
          <h1 class="text-3xl dark:text-white">What do I offer?</h1>
          <p class="w-1/2 text-center text-gray-400">
            My approach to website design is to create a website that
            strengthens your company’s brand and increases customer engagemnt while ensuring ease of use and
            simplicity for your audience.
          </p>
        </div>
        {/* BOTTOM */}
        <div class="p-5 flex flex-wrap justify-between">
          {/* CARD */}
          <div
            class="w-full md:w-[30%] border border-indigo-900 dark:border-yellow-400 shadow-lg rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3"
          >
            <img class="w-10" src="./img/icon.png" alt="" />
            <h1 class="font-medium text-lg dark:text-white">UX / UI Design</h1>
            <p class="text-gray-400">
              Laboris ad ipsum pariatur laborum duis cillum duis cupidatat.
            </p>
            <a class="text-indigo-900 font-semibold text-sm" href="/"
              >Read More</a
            >
          </div>
           {/* CARD */}
          <div
            class="w-full md:w-[30%]  border  border-indigo-900 dark:border-yellow-400  shadow-lg rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3"
          >
            <img class="w-10" src="./img/icon.png" alt="" />
            <h1 class="font-medium text-lg dark:text-white">Webflow Websites</h1>
            <p class="text-gray-400">
              Culpa ipsum Lorem fugiat et consectetur duis cillum.
            </p>
            <a class="text-indigo-900 font-semibold text-sm" href="/"
              >Read More</a
            >
          </div>
          {/* CARD */}
          <div
            class="w-full md:w-[30%] border  border-indigo-900 dark:border-yellow-400  shadow-lg rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3"
          >
            <img class="w-10" src="./img/icon.png" alt="" />
            <h1 class="font-medium text-lg dark:text-white">Shopify Ecommerce</h1>
            <p class="text-gray-400">
              Duis magna deserunt cillum fugiat duis adipisicing dolore.
            </p>
            <a class="text-indigo-900 font-semibold text-sm" href="/"
              >Read More</a
            >
          </div>
           {/* CARD */}
          <div
            class="w-full md:w-[30%]  border  border-indigo-900 dark:border-yellow-400  shadow-lg rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3"
          >
            <img class="w-10" src="./img/icon.png" alt="" />
            <h1 class="font-medium text-lg dark:text-white">Social Media Marketing</h1>
            <p class="text-gray-400">
              Laborum cillum do duis non pariatur qui cupidatat minim elit.
            </p>
            <a class="text-indigo-900 font-semibold text-sm" href="/"
              >Read More</a
            >
          </div>
          {/* CARD */}
          <div
            class="w-full md:w-[30%] border  border-indigo-900 dark:border-yellow-400  shadow-lg rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3"
          >
            <img class="w-10" src="./img/icon.png" alt="" />
            <h1 class="font-medium text-lg dark:text-white">Content Creation</h1>
            <p class="text-gray-400">
              Pariatur in et officia mollit Lorem et duis elit laboris adipisicing nulla tempor laborum.
            </p>
            <a class="text-indigo-900 font-semibold text-sm" href="/"
              >Read More</a
            >
          </div>
           {/* CARD */}
          <div
            class="w-full md:w-[30%] border  border-indigo-900 dark:border-yellow-400  shadow-lg rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3"
          >
            <img class="w-10" src="./img/icon.png" alt="" />
            <h1 class="font-medium text-lg dark:text-white">SEO Services</h1>
            <p class="text-gray-400">
              Quis consequat enim exercitation commodo qui ex labore pariatur.
            </p>
            <a class="text-indigo-900 font-semibold text-sm" href="/"
              >Read More</a
            >
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services