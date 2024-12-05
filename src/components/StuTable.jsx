


import React, { useEffect, useState } from 'react'
import { Link, useNavigate} from 'react-router-dom';

const StuTable = () => {
  const navigate =useNavigate();
  const [stu, setStu] = useState([]);
  const handelview = (id) =>
  {
    navigate(`/student/View/${id}`);
  }
  const handeledit = (id) =>
    {
      navigate("/student/Edit/"+id);
    }
    const handleDelete =  (id) => {
      if (window.confirm("Are you sure you want to delete this record?")) {
           fetch(`http://localhost:8000/student/${id}`, {
            method: "DELETE",
          }).then((res) =>{ alert("Student record deleted successfully!")
            window. location. reload()
          }).catch((err) =>{ alert(`Error: ${err.message}`)} )
        }
      }


  useEffect(() => {
    fetch("http://localhost:8000/student")
      .then((res) => res.json())
      .then((data) => setStu(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      className="w-full p-3 z-10  shadow-md shadow-gray-500  rounded-xl md:p-6 bg-transparent space-y-3 md:space-y-6  overflow-hidden mx-auto  "
     
    >
      <h1 className="text-lg  mb-2 text-center font-extrabold text-blue-500 md:text-xl ">STUDENT RECORDS</h1>

      <div className="overflow-scroll  w-full md:ml-36 rounded-xl" id="teja">
       <div className="w-full rounded-lg    h-72">
       <table className="rounded-lg">
          <thead className="bg-teal-700 border-b-2 sticky border-gray-200">
            <tr>
              <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left md:text-lg">S.NO</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left md:text-lg">NAME</th>
              <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left md:text-lg">PLACE</th>
              <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left md:text-lg">PH.NO</th>
              <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left md:text-lg">ACTION</th>
            </tr>
          </thead>
          <tbody className="  ">
            { stu && stu.map((item, index) => (
              <tr className="border-b-2 border-blue-400" key={ index }>
                <td className="p-3 md:p-5 text-sm md:text-xl text-slate-50 whitespace-nowrap">{index + 1}</td>
                <td className="p-3 md:p-5 text-sm  text-slate-50 md:text-xl whitespace-nowrap">{item.name}</td>
                <td className="p-3 md:p-5 text-sm text-slate-50 md:text-xl whitespace-nowrap">{item.place}</td>
                <td className="p-3 md:p-5 text-sm text-slate-50 md:text-xl whitespace-nowrap">{item.ph_no}</td>
                <td className="p-3 md:p-5 text-sm text-slate-50 md:text-xl space-x-3 md:space-x-5 whitespace-wrap">
                  <span className=" py-2 px-4 md:py-3  text-xs font-medium uppercase md:text-lg tracking-wider text-neutral-300 bg-green-300 hover:bg-green-600 hover:text-black cursor-pointer rounded-lg bg-opacity-50" onClick={() =>
                    {
                      handelview(item.id)
                    }
                  }>
                    View
                  </span>
                  <span className="py-2 px-4 md:py-3 cursor-pointer text-xs font-medium uppercase md:text-lg tracking-wider  text-neutral-300  bg-blue-300 hover:bg-blue-600 hover:text-black rounded-lg bg-opacity-50" onClick={() =>
                    {
                      handeledit(item.id)
                    }}>
                    Edit
                  </span>
                  <span className="py-2 px-4 md:py-3  hover:bg-red-800 cursor-pointer  text-xs font-medium uppercase md:text-lg tracking-wider  text-neutral-300  bg-red-400 hover:text-black rounded-lg bg-opacity-50" onClick
                  ={ ()=>
                    handleDelete(item.id)
                   }>
                    Delete
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
       </div>
      </div>
      <div className="text-center">
      <Link to='/student/Newdata'> 
      <button className="px-3 py-4 mt-4 md:mt-6 border-y-2 border-lime-600 text-neutral-200 hover:text-neutral-500 hover:border-lime-700 font-bold text-sm md:text-lg rounded-xl">
          Add New Student
        </button>
        </Link>
      </div>
    </div>
  )
}



export default StuTable;
