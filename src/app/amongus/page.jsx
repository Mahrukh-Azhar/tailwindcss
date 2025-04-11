import React from "react";

function page() {
  return (
    <div className="bg-radial-[at_50%_50%] from-yellow-300 to-orange-500 h-screen w-screen ">
      <div className="flex flex-row items-center  justify-center h-screen w-screen">
        <div className="bg-red-800 rounded-4xl h-15 w-5  border-2" />
        <div className="flex flex-col">
          <div className="bg-red-800 rounded-t-4xl h-30 w-22 mr-4 flex items-start justify-end border-t-2 border-r-2 border-l-2">
            <div className="bg-radial-[at_50%_50%] from-white to-gray-500 h-6 w-12 rounded-2xl my-5 border-2" />
          </div>
          <div className="flex flex-row">
            <div className="bg-red-800 h-6 w-10 rounded-b-2xl  border-b-2 border-r-2 border-l-2" />
            <div className="bg-red-800 h-6 w-10 rounded-b-2xl  ml-2 border-b-2 border-r-2 border-l-2" />
          </div>
        </div>
        <div className="bg-green-800 rounded-4xl h-15 w-5  border-2" />
        <div className="flex flex-col">
          <div className="bg-green-800 rounded-t-4xl h-30 w-22 mr-4 flex items-start justify-end border-t-2 border-r-2 border-l-2">
            <div className="bg-radial-[at_50%_50%] from-white to-gray-500 h-6 w-12 rounded-2xl my-5 border-2" />
          </div>
          <div className="flex flex-row">
            <div className="bg-green-800 h-6 w-10 rounded-b-2xl  border-b-2 border-r-2 border-l-2" />
            <div className="bg-green-800 h-6 w-10 rounded-b-2xl  ml-2 border-b-2 border-r-2 border-l-2" />
          </div>
        </div>
        <div className="bg-purple-800 rounded-4xl h-15 w-5  border-2" />
        <div className="flex flex-col">
          <div className="bg-purple-800 rounded-t-4xl h-30 w-22 mr-4 flex items-start justify-end border-t-2 border-r-2 border-l-2">
            <div className="bg-radial-[at_50%_50%] from-white to-gray-500 h-6 w-12 rounded-2xl my-5 border-2" />
          </div>
          <div className="flex flex-row">
            <div className="bg-purple-800 h-6 w-10 rounded-b-2xl  border-b-2 border-r-2 border-l-2" />
            <div className="bg-purple-800 h-6 w-10 rounded-b-2xl  ml-2 border-b-2 border-r-2 border-l-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
