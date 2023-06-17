import React from "react";

const header = () => {
  return (
    <header className="bg-gray-50">
      <div
        className="xl:container xl:mx-auto flex flex-col 
                items-center sm:flex-row sm:justify-between text-center py-3"
      >
        <div
          className="md:flex-none w-96 order-2 sm:order-1 flex 
                justify-center py-4 sm:py-0"
        >
          <input type="text" placeholder="Search..." />
        </div>
        <div>
          <a>Design</a>
        </div>
        <div className="flex">
          <a>Facebook</a>
          <a>Twitter</a>
          <a>Youtube</a>
        </div>
      </div>
    </header>
    // <div class="header-2">
    //   <nav class="bg-white py-2 md:py-4">
    //     <div class="container px-4 mx-auto md:flex md:items-center">
    //       <div class="flex justify-between items-center">
    //         <a href="#" class="font-bold text-xl text-indigo-600">
    //           FWR
    //         </a>
    //         <button
    //           class="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
    //           id="navbar-toggle"
    //         >
    //           <i class="fas fa-bars"></i>
    //         </button>
    //       </div>

    //       <div
    //         class="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
    //         id="navbar-collapse"
    //       >
    //         <a
    //           href="#"
    //           class="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600"
    //         >
    //           Home
    //         </a>
    //         <a
    //           href="#"
    //           class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
    //         >
    //           About
    //         </a>
    //         <a
    //           href="#"
    //           class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
    //         >
    //           Features
    //         </a>
    //         <a
    //           href="#"
    //           class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
    //         >
    //           Pricing
    //         </a>
    //         <a
    //           href="#"
    //           class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
    //         >
    //           Contact
    //         </a>
    //         <a
    //           href="#"
    //           class="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300"
    //         >
    //           Login
    //         </a>
    //         <a
    //           href="#"
    //           class="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
    //         >
    //           Signup
    //         </a>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
  );
};

export default header;
