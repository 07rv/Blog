const newletter = () => {
  return (
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
  );
};

export default newletter;
