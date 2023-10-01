import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className="text-center text-white rgb(23, 23, 23) h-15 p-2 flex rounded justify-center">
      <label class="relative block">
  <span class="sr-only">Search</span>
  <button class="absolute inset-y-0 right-3 flex items-center pl-2">
  <svg href="" class="Seacrhicon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314Z"/></svg>
    </button>
   <input class=" placeholder:italic placeholder:text-slate-400 block bg-gray-800 w-full border border-gray-600 rounded-full py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search" type="text" name="search"/>
  </label>
  <div>
  <button className="bg-gray-800 p-2 rounded-full ms-2">
  <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 384 512"><path d="M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z"/></svg>
    </button>
    </div>
    <button className="bg-gray-800 p-2 rounded-full ms-2 ml-96">
    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 128 512"><path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/></svg>
    </button>
    </div>
    <div className="flex h-8 p-0.5 space-x-1.5">
        <a href="" className="bg-gray-800 text-white justify-center p-1 rounded">All</a>
        <a href="" className="bg-gray-800 text-white justify-center p-1 rounded">Music</a>
        <a href="" className="bg-gray-800 text-white justify-center p-1 rounded">Live</a>
        <a href="" className="bg-gray-800 text-white justify-center p-1 rounded">Bollywood Music</a>
        <a href="" className="bg-gray-800 text-white justify-center p-1 rounded">Dramedy</a>
        <a href="" className="bg-gray-800 text-white justify-center p-1 rounded">Action Thrillers</a>
        <a href="" className="bg-gray-800 text-white justify-center p-1 rounded">Tamil Cinemas</a>
        <a href="" className="bg-gray-800 text-white justify-center p-1 rounded">News</a>
        <a href="" className="bg-gray-800 text-white justify-center p-1 rounded">Cricket</a>
        <a href="" className="bg-gray-800 text-white justify-center p-1 rounded">Gaming</a>
        <a href="" className="bg-gray-800 text-white justify-center p-1 rounded">Game Shows</a>
        <a href="" className="bg-gray-800 text-white justify-center p-1 rounded">Bhajan Music</a>
        <a href="" className="bg-gray-800 text-white justify-center p-1 rounded">Astronomy</a>
        <a href="" className="bg-gray-800 text-white justify-center p-1 rounded">Cooking Shows</a>
        <a href="" className="bg-gray-800 text-white justify-center p-1 rounded">Recenlty Uploaded</a>
    </div>
    </div>
  )
}

export default Navbar