import Link from "next/link";
import React from "react";

const footer = () => {
  return (
    <div className="footer-2 bg-gray-800 pt-6 md:pt-12">
      <div className="w-full p-3">
        <div className="w-full mb-3 xl:mb-0 sm:text-center">
          <div className="w-full">
            <div className="flex flex-col justify-center sm:flex-row gap-3 w-full">
              <input
                type="text"
                placeholder="Enter your email"
                className="sm:w-2/4 h-12 p-3 text-gray-900 border border-solid border-gray-300 rounded-lg shadow"
              />

              <button
                type="submit"
                className="sm:w-1/4 h-12 text-white bg-indigo-600 rounded-lg shadow transition-all duration-300 ease-in-out hover:bg-indigo-700"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-4 mx-auto">
        <div className="md:flex md:flex-wrap md:-mx-4 py-6 md:pb-12">
          <div className="footer-info lg:w-1/3 md:px-4">
            <h4 className="text-white text-2xl mb-4">
              19K users are using FWR blocks and making their life easy.
            </h4>
            <p className="text-gray-400">
              We have carefully crafted the blocks to suit to everyone's need.
            </p>
            <div className="mt-4">
              <button className="bg-facebook py-2 px-4 text-white rounded mt-2 transition-colors duration-300">
                <span className="fab fa-facebook-f mr-2"></span> Follow
              </button>
              <button className="bg-twitter py-2 px-4 text-white rounded ml-2 mt-2 transition-colors duration-300">
                <span className="fab fa-twitter mr-2"></span> Follow @freeweb19
              </button>
            </div>
          </div>

          <div className="md:w-2/3 lg:w-1/3 md:px-4 xl:pl-16 mt-12 lg:mt-0">
            <div className="sm:flex">
              <div className="sm:flex-1">
                <h6 className="text-base font-medium text-white uppercase mb-2">
                  About
                </h6>
                <div>
                  <Link
                    href="#"
                    className="text-gray-400 py-1 block hover:underline"
                  >
                    Company
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-400 py-1 block hover:underline"
                  >
                    Culture
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-400 py-1 block hover:underline"
                  >
                    Team
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-400 py-1 block hover:underline"
                  >
                    Careers
                  </Link>
                </div>
              </div>
              <div className="sm:flex-1 mt-4 sm:mt-0">
                <h6 className="text-base font-medium text-white uppercase mb-2">
                  What we offer
                </h6>
                <div>
                  <Link
                    href="#"
                    className="text-gray-400 py-1 block hover:underline"
                  >
                    Blocks
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-400 py-1 block hover:underline"
                  >
                    Resources
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-400 py-1 block hover:underline"
                  >
                    Tools
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-400 py-1 block hover:underline"
                  >
                    Tutorials
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-400 py-1 block hover:underline"
                  >
                    Freebies
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/3 md:px-4 md:text-center mt-12 lg:mt-0">
            <h5 className="text-lg text-white font-medium mb-4">
              Explore our site
            </h5>
            <button className="bg-indigo-600 text-white hover:bg-indigo-700 rounded py-2 px-6 md:px-12 transition-colors duration-300">
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
