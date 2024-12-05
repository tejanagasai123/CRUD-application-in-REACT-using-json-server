import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom";

const View = () => {
  const {stuid} =useParams();
  const [data, setData] = useState({});
   console.log(stuid);

  useEffect(() => {
 if(stuid)
 {
  fetch(`http://localhost:8000/student/${stuid}`).then((res)=>res.json()).then((data) =>
    setData(data)).catch((err) =>{console.log(err.message)})
 }
 else
 {
  console.log("error");
 }
  }, []);
  return (
    <div className="container w-full flex items-center justify-center  py-6 px-4">
      <div className="w-full  rounded-lg shadow-lg border border-gray-200">
        <div className=" rounded-t-lg p-4 text-center">
          <h2 className="text-lg md:text-xl font-bold  text-blue-500">STUDENT DETAILS</h2>
        </div>
        <div className=" md:space-y-7 p-6 space-y-4 text-white">
          <div className="flex items-center ">
            <span className="font-bold text-lg md:text-xl text-white w-32">ID:</span>
            <span className="text-white text-md md:text-lg px-6 pb-3 border-b-2 border-lime-200">{data.id}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg md:text-xl text-white w-32">Name:</span>
            <span className="text-white text-md md:text-lg px-6 pb-3 border-b-2 border-lime-200 ">{data.name}</span>
          </div>
          <div className="flex items-center">
            <span className="font-bold text-lg md:text-xl text-white w-32">Place:</span>
            <span className="text-white text-md md:text-lg  px-6 pb-3 border-b-2 border-lime-200">{data.place}</span>
          </div>
          <div className="flex items-center">
            <span className="font-bold text-lg md:text-xl text-white w-32">Phone:</span>
            <span className=" text-md md:text-lg  px-6 pb-3 border-b-2 border-lime-200">{data.ph_no}</span>
          </div>
        </div>
        <div className=" p-4  rounded-b-lg flex justify-center md:justify-start">
          <button
            className="bg-red-400 hover:bg-red-800  text-white py-2 px-4 rounded-md  font-semibold focus:outline-none focus:ring focus:ring-blue-300"
            onClick={() => window.history.back()}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default View;
