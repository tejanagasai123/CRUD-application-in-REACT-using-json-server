import React, {  useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const {studid}=useParams();
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [ph_no, setPhone] = useState("");
  const [id, setid] = useState("");
  const navigate =useNavigate();
 useEffect(() =>
  {  
    fetch(`http://localhost:8000/student/${studid}`).then((res) =>
      
        res.json()
      ).then((data)=>
      {
        setid(data.id)
      setName(data.name)
      setPlace(data.place)
      setPhone(data.ph_no)}
      
      ).catch((err) =>console.log(err.message))
},[])

   const handleSubmit = (e) => {

    e.preventDefault();
   
    const studet ={id,name,place,ph_no}

    fetch("http://localhost:8000/student/"+studid,{method:"PUT", headers:{
      'Content-Type': 'application/json'
    },body: JSON.stringify(studet)}).then((res) =>{alert("changes are updated succesfully")
      navigate("/");

    }).catch((err) =>console.log(err.message))
   

   };
  return (
    <div className="container  shadow-lg rounded-2xl w-full md:w-2/3 md:mx-auto p-8 border-2 border-gray-300">
      <h2 className="text-2xl font-bold text-blue-900 text-center mb-6 ">
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
            value={ph_no}
            onChange={(e) => setPhone(e.target.value) 
              }
            className="w-full px-4 py-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className=" w-full flex justify-around">
          <button
            type="submit"
            className="md:px-8 md:py-3  px-4 py-2 font-bold bg-blue-500 text-white  rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500" 
          >
            Update
          </button>
         <Link to='/'><button
            
            className="md:px-8 md:py-3  px-4 py-2 font-bold bg-red-500 text-white  rounded-xl hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Back
          </button></Link>
        </div>
      </form>
    </div>
)

}
export default Edit