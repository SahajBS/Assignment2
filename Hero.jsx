import React from 'react'

const Hero = () => {
  return (
    <div className="flex">
        <div className="justify-items-center w-96 h-56 ml-96 p-2">
        <button className="">
        <video className="h-full w-full rounded-lg" controls autoPlay loop>
      <source src="/sample-vid.mp4" type="video/mp4" />
      Your browser does not support the video tag.
        </video>
        </button>
        </div>
        <div>
            <div className="">
        <button className="">
            <img className="rounded-2xl m-1 h-24" src="heroad2.png"></img>
        </button>
        </div>
        <div className="flex">
            <div className="ml-10 mt-5"><button>
        <svg className="bg-white rounded-full p-3" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="70" height="70" viewBox="0 0 50 50">
         <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"></path>
          </svg>
         </button>
         </div>
         <div className=" text-white font-bold ms-5 text-xs">
            <span className="pb-2">iPhone 15 Pro with titanium</span><br></br>
            <div className="pt-2"><span className="font-extrabold">Ad </span>
            <span>. Apple India</span></div><br></br>
            <button className="rounded-full bg-blue-500 pt-2 pb-2 pl-4 pr-4">Learn more</button>
         </div>
         <div className="ml-auto">
            <button className="">
            <svg  className="bg-gray-800 rounded-full p-2" xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 128 512"><path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/></svg>
            </button>
         </div>
        </div>
        </div>
    </div>
  )
}

export default Hero