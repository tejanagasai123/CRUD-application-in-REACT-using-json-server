import React, {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";



const Newdata = () => {
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [ph_no, setPhone] = useState("");
  const [id, setid] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {

    e.preventDefault();

    const studet ={id,name,place,ph_no}

    fetch("http://localhost:8000/student",{method: "POST", headers:{
      'Content-Type': 'application/json'
    },body: JSON.stringify(studet)}).then((res) =>{alert("sucessfully submitted")
      navigate("/");

    }).catch((err) =>console.log(err.message))
   

  };
  

  return (
    <div className="  shadow-lg rounded-lg  border-2 border-neutral-400 w-full md:w-2/3 mx-auto  p-5 md:p-8  ">
      <h2 className="text-2xl font-bold text-blue-900 text-center mb-3 ">
        Contact Form
      </h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
          <label
            htmlFor="ID"
            className="block text-sm font-medium text-gray-600 md:text-lg"
          >
          ID
          </label>
          <input required
            type="number"
            id="id"
            name="ID"
            placeholder="Enter your name"
            value={id}
            onChange={(e) => setid(e.target.value)}
            className="w-full px-4 py-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600 md:text-lg"
          >
            Name
          </label>
          <input required
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="place"
            className="block text-sm font-medium text-gray-600 md:text-lg"
          >
            Place
          </label>
          <input required
            type="text"
            id="place"
            name="place"
            placeholder="Enter your place"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            className="w-full px-4 py-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-600 md:text-lg"
          >
            Phone Number
          </label>
          <input required
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            value={ph_no}
            onChange={(e) => setPhone(e.target.value) 
              }
            className="w-full px-4 py-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className=" w-full flex justify-start gap-5 md:gap-10">
          <button
            type="submit"
            className="md:px-8 md:py-3  px-4 py-2 font-bold bg-blue-500 text-white  rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
       <Link to='/'><button
            type="submit"
            className="md:px-8 md:py-3  px-4 py-2 font-bold bg-red-500 redtext-white  rounded-xl hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Back
          </button></Link>
        </div>
      </form>
    </div>
  );
};

export default Newdata;
