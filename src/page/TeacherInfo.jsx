// import React from "react";

// import { Link, useNavigate } from "react-router-dom";
// import LeftWall from "./LeftWall";

// import Portfel from "../assets/svg/partfel.svg";
// import Tel from "../assets/svg/tel.svg";
// import Bakalavr from "../assets/svg/bakalvr.svg";

// const TeacherInfo = () => {
//   const handleRowClick = (teacherId) => {
//     navigate(`/teacher-info/${teacherId}`); // `teacherId` bu har bir o'qituvchining noyob identifikatori bo'lishi kerak
//   };
//   // const teachersData = [
//   //   {
//   //     name: "Kristin Watson",
//   //     subject: "Chemistry",
//   //     class: "JS 2",
//   //     email: "michelle.rivera@example.com",
//   //     gender: "Female",
//   //   },
//   //   {
//   //     name: "Marvin McKinney",
//   //     subject: "French",
//   //     class: "JS 3",
//   //     email: "debbie.baker@example.com",
//   //     gender: "Female",
//   //   },
//   //   {
//   //     name: "Jane Cooper",
//   //     subject: "Maths",
//   //     class: "JS 3",
//   //     email: "kenzi.lawson@example.com",
//   //     gender: "Female",
//   //   },
//   //   {
//   //     name: "Cody Fisher",
//   //     subject: "English",
//   //     class: "JS 3",
//   //     email: "nathan.roberts@example.com",
//   //     gender: "Female",
//   //   },
//   // ];

//   const navigate = useNavigate();
//   return (
//     <div className="border w-[1440px] mx-auto">
//       <div className="flex ">
//         <LeftWall />

//         <div className="flex overflow-hidden bg-white rounded-lg">
//           <div className="w-1/3">
//             <img
//               src="/path-to-image.jpg"
//               alt="Kristin Watson"
//               className="object-cover w-full h-full"
//             />
//           </div>
//           <div className="w-2/3 p-4">
//             <h1 className="text-xl font-semibold">Kristin Watson</h1>
//             <p>tim.jennings@example.com</p>
//             <div className="py-4">
//               <h2 className="font-semibold text-gray-800">About</h2>
//               <p className="text-sm text-gray-600 w-[335px]">
//                 Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
//                 ullamco cillum dolor. Voluptate exercitation incididunt aliquip
//                 deserunt reprehenderit elit laborum. Nulla Lorem mollit
//                 cupidatat irure. Laborum magna nulla duis ullamco cillum dolor.
//                 Voluptate exercitation incididunt aliquip deserunt reprehenderit
//                 elit laborum.
//               </p>
//             </div>
//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <div className="text-sm font-semibold">Subject</div>
//                 <div>English</div>
//               </div>
//               <div>
//                 <div className="text-sm font-semibold">Class</div>
//                 <div>JS 1</div>
//               </div>
//               <div>
//                 <div className="text-sm font-semibold">Age</div>
//                 <div>34</div>
//               </div>
//               <div>
//                 <div className="text-sm font-semibold">Gender</div>
//                 <div>Male</div>
//               </div>
//             </div>

//             <div className="flex mt-4 space-x-4">
//               <button className="p-2 transition duration-300 rounded-full hover:bg-gray-200">
//                 <img
//                   src={Portfel}
//                   alt="Dashboard Icon"
//                   className="w-[36px] h-[36px] mr-[20px] "
//                 />
//               </button>
//               <button className="p-2 transition duration-300 rounded-full hover:bg-gray-200">
//                 <img
//                   src={Tel}
//                   alt="Dashboard Icon"
//                   className="w-[36px] h-[36px] mr-[20px] "
//                 />
//               </button>
//               <button className="p-2 transition duration-300 rounded-full hover:bg-gray-200">
//                 <img
//                   src={Bakalavr}
//                   alt="Dashboard Icon"
//                   className="w-[36px] h-[36px] mr-[20px] "
//                 />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeacherInfo;

// // import React, { useEffect, useState } from "react";
// // import { useParams, useNavigate } from "react-router-dom";
// // import axios from "axios";
// // import LeftWall from "./LeftWall";

// // const TeacherInfo = () => {
// //   const { teacherId } = useParams();
// //   const [teacher, setTeacher] = useState(null);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const fetchTeacherDetails = async () => {
// //       try {
// //         const response =
// //           await axios.get(`https://green-shop-backend.onrender.com/api/flower/category/small-plants/${teacherId}`);
// //         setTeacher(response.data);
// //       } catch (error) {
// //         console.error("Error fetching teacher details:", error);
// //       }
// //     };

// //     fetchTeacherDetails();
// //   }, [teacherId]);

// //   if (!teacher) {
// //     return <p>Loading...</p>;
// //   }

// //   return (
// //     <div className="w-full mx-auto border">
// //       <div className="flex h-screen">
// //         <LeftWall />
// //         <div className="flex overflow-hidden bg-white rounded-lg">
// //           <div className="w-1/3">
// //             <img
// //               src={teacher.image || "/path-to-default-image.jpg"}
// //               alt={teacher.name}
// //               className="object-cover w-full h-full"
// //             />
// //           </div>
// //           <div className="w-2/3 p-4">
// //             <h1 className="text-xl font-semibold">{teacher.name}</h1>
// //             <p>{teacher.email}</p>
// //             <div className="py-4">
// //               <h2 className="font-semibold text-gray-800">About</h2>
// //               <p className="text-sm text-gray-600 w-[335px]">{teacher.about}</p>
// //             </div>
// //             <div className="grid grid-cols-2 gap-4">
// //               <div>
// //                 <div className="text-sm font-semibold">Subject</div>
// //                 <div>{teacher.subject}</div>
// //               </div>
// //               <div>
// //                 <div className="text-sm font-semibold">Class</div>
// //                 <div>{teacher.class}</div>
// //               </div>
// //               <div>
// //                 <div className="text-sm font-semibold">Age</div>
// //                 <div>{teacher.age}</div>
// //               </div>
// //               <div>
// //                 <div className="text-sm font-semibold">Gender</div>
// //                 <div>{teacher.gender}</div>
// //               </div>
// //             </div>
// //             {/* Additional info buttons */}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default TeacherInfo;

// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import LeftWall from "./LeftWall";

// const TeacherInfo = () => {
//   const { teacherId } = useParams(); // Get the ID from the URL
//   const [flower, setFlower] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchFlowerDetails = async () => {
//       try {
//         // Update this URL to your API endpoint that fetches the flower details by ID
//         const response = await axios.get(
//           `https://green-shop-backend.onrender.com/api/flowers/category/small-plants/${teacherId}?access_token=67dbc36eaf06d13e0cde0c21`
//         );
//         setFlower(response?.data);
//       } catch (error) {
//         console.error("Error fetching flower details:", error);
//       }
//     };

//     fetchFlowerDetails();
//   }, [teacherId]);

//   if (!flower) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="border w-[1440px] mx-auto">
//       <div className="flex">
//         <LeftWall />
//         <div className="flex overflow-hidden bg-white rounded-lg">
//           <div className="w-1/3">
//             <img
//               src={flower.image || "/default-image-path.jpg"}
//               alt={flower.name}
//               className="object-cover w-full h-full"
//             />
//           </div>
//           <div className="w-2/3 p-4">
//             <h1 className="text-xl font-semibold">{flower.name}</h1>
//             <p>{flower.email || "No email provided"}</p>
//             <div className="py-4">
//               <h2 className="font-semibold text-gray-800">About</h2>
//               <p className="text-sm text-gray-600 w-[335px]">
//                 {flower.description}
//               </p>
//             </div>
//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <div className="text-sm font-semibold">Category</div>
//                 <div>{flower.category}</div>
//               </div>
//               <div>
//                 <div className="text-sm font-semibold">Price</div>
//                 <div>${flower.price}</div>
//               </div>
//               {/* Additional details here */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeacherInfo;

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import LeftWall from "./LeftWall";

import Portfel from "../assets/svg/partfel.svg";
import Tel from "../assets/svg/tel.svg";
import Bakalavr from "../assets/svg/bakalvr.svg";
import Logout from "../components/Logout";

const TeacherInfo = () => {
  const { teacherId } = useParams(); // Get the dynamic parameter from the URL
  const [teacher, setTeacher] = useState(null); // State to store the fetched teacher
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTeacherDetails = async () => {
      try {
        const response = await axios.get(
          `https://green-shop-backend.onrender.com/api/flower/category/small-plants/${teacherId}?access_token=67dbc36eaf06d13e0cde0c21`
        );
        setTeacher(response.data.data); // Assuming the response structure has a `data` field containing the teacher info
      } catch (error) {
        console.error("Error fetching teacher details:", error);
      }
    };

    fetchTeacherDetails();
  }, [teacherId]);

  if (!teacher) {
    return <p>Loading...</p>; // Loading or error message handling
  }

  return (
    <div className="h-screen mx-auto bg-white ">
      <div className="flex h-full">
        <LeftWall />
        <div className="w-full ">
          <div className="mt-[30px]  ">
            <Logout />
          </div>

          <div className="flex w-full overflow-hidden bg-white  py-[90px] pl-[229px] items-center">
            <div className="flex flex-col items-center justify-center w-1/3 mx-auto ">
              <img
                src={teacher.main_image || "/default-image.jpg"}
                alt={teacher.title}
                className="object-cover w-[280px] h-[280px] rounded-full border border-blue-200 transition-transform duration-2000 hover:scale-125 cursor-pointer"
              />

              <h1 className="mt-10 text-2xl font-bold tracking-widest text-center text-gray-500 ">
                {teacher.title}
              </h1>

              <div className="flex items-center justify-center mt-4 space-x-4">
                <button className="p-2 transition duration-300 cursor-pointer hover:scale-110 ">
                  <img
                    src={Portfel}
                    alt="Dashboard Icon"
                    className="w-[60px] h-[60px] transition-transform duration-300"
                  />
                </button>

                <button className="p-2 transition duration-300 cursor-pointer hover:scale-110 ">
                  <img
                    src={Tel}
                    alt="Dashboard Icon"
                    className="w-[60px] h-[60px]"
                  />
                </button>

                <button className="p-2 transition duration-300 cursor-pointer hover:scale-110">
                  <img
                    src={Bakalavr}
                    alt="Dashboard Icon"
                    className="w-[60px] h-[60px]"
                  />
                </button>
              </div>
            </div>

            <div className="w-2/3 p-4">
              {/* <h1 className="mb-2 text-2xl font-bold text-gray-800">
                {teacher.title}
              </h1> */}
              <p className="mb-4 text-[28px] font-semibold text-blue-400">
                ${teacher.price}
              </p>

              <div className="py-4 border-t w-[400px] border-gray-300">
                <h2 className="mb-2 text-lg font-semibold text-gray-700">
                  Description
                </h2>
                <p className="text-base text-gray-600 w-[400px]">
                  {teacher.short_description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherInfo;
