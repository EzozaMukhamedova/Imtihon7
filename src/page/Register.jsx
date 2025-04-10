// import React, { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { register } from "../service/authService";
// import AuthContext from "../context/AuthContext";

// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     surname: "",
//     email: "",
//     password: "",
//   });
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [submitted, setSubmitted] = useState(false);
//   const { setUser, setToken } = useContext(AuthContext);
//   const navigate = useNavigate();

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();
//     if (submitted) return;
//     setIsLoading(true);
//     setSubmitted(true);

//     const body = {
//       name: formData.name.trim(),
//       surname: formData.surname.trim(),
//       email: formData.email.trim(),
//       password: formData.password.trim(),
//     };
//     const accessToken = "67dbc36eaf06d13e0cde0c21";

//     try {
//       const response = await register(body, accessToken);
//       if (response.data?.token) {
//         setToken(response.data.token);
//         setUser({});
//         localStorage.setItem("token", response.token);
//         localStorage.setItem("user", JSON.stringify({}));

//         toast.success("Registration completed successfully!", {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//         });
//         setIsLoading(false);

//         setTimeout(() => {
//           navigate("/login");
//         }, 3000);
//       } else {
//         setError("Ro‘yxatdan o‘tishda muammo yuz berdi.");
//         setSubmitted(false);
//       }
//     } catch (err) {
//       // setError("Xatolik! Qaytadan urinib ko‘ring.");
//       console.error("Register error:", err);
//       toast.error("Xatolik! Qaytadan urinib ko‘ring.", {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//       });
//       setSubmitted(false);
//     }
//   }

//   return (
//     <div className="flex flex-col bg-[#FCFAFA]  min-h-screen justify-center items-center">
//       <ToastContainer />
//       <h2 className="text-[#4F4F4F] text-center text-[36px] font-bold mb-[53px]">
//         Welcome, Sign up
//       </h2>
//       <div className="px-[130px] py-[70px] border border-blue-100 bg-white rounded-[4px] transition duration-300 ease-in-out hover:border-blue-200 hover:border-2">
//         <div className="text-center text-[#4F4F4F]">
//           {" "}
//           <span className="">
//             It is our great pleasure to have <br /> you on board!{" "}
//           </span>
//         </div>

//         {error && <p className="text-center text-red-500">{error}</p>}
//         <form onSubmit={handleSubmit} className="flex flex-col mt-4">
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full h-[42px] rounded-[4px] p-2 mb-4 border border-gray-300 outline-none hover:scale-105 transition-transform duration-300 hover:border-blue-300"
//             required
//           />

//           <input
//             type="text"
//             name="surname"
//             placeholder="Surname"
//             value={formData.surname}
//             onChange={handleChange}
//             className="w-full h-[42px] rounded-[4px] p-2 mb-4 border border-gray-300 outline-none hover:scale-105 transition-transform duration-300 hover:border-blue-300"
//             required
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Enter your Email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full h-[42px] rounded-[4px] p-2 mb-4 border border-gray-300 outline-none hover:scale-105 transition-transform duration-300 hover:border-blue-300"
//             required
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Create your Password"
//             value={formData.password}
//             onChange={handleChange}
//             className="w-full h-[42px] rounded-[4px] p-2 mb-4 border border-gray-300 outline-none hover:scale-105 transition-transform duration-300 hover:border-blue-300"
//             required
//           />

//           <button
//             type="submit"
//             disabled={submitted}
//             className="w-full h-[42px] rounded-[4px] bg-[#2D88D4] text-white py-2 cursor-pointer transition duration-300 ease-in-out transform hover:bg-[#1a6ca7] active:scale-95"
//           >
//             Sign Up
//             {/* {isLoading ? "Loading..." : "Sign Up"} */}
//           </button>
//         </form>
//         <div className="mt-4 text-center">
//           <p>
//             <span className="text-[#4F4F4F] mr-[10px]">
//               Already have an account?
//             </span>
//             <span
//               className="text-[#2D88D4] font-bold cursor-pointer hover:text-[#1a6ca7] hover:underline"
//               onClick={() => navigate("/login")}
//             >
//               Sign In
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;

import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { register } from "../service/authService";
import AuthContext from "../context/AuthContext";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { setUser, setToken } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (submitted) return;
    setSubmitted(true);

    try {
      const response = await register({
        name: formData.name.trim(),
        surname: formData.surname.trim(),
        email: formData.email.trim(),
        password: formData.password.trim(),
      });
      if (response.data?.token) {
        setToken(response.data.token);
        setUser({});
        localStorage.setItem("token", response.token);
        localStorage.setItem("user", JSON.stringify({}));
        toast.success("Registration completed successfully!");
        navigate("/login");
      } else {
        setError("There was a problem with registration.");
      }
    } catch (err) {
      setError("Error! Please try again.");
      console.error("Register error:", err);
      setSubmitted(false);
    }
  }

  return (
    <div className="flex flex-col bg-[#FCFAFA] min-h-screen justify-center items-center">
      <ToastContainer />
      <h2 className="text-[#4F4F4F]  text-center text-[36px] font-bold mb-[53px]">
        Welcome, Sign up
      </h2>
      <div className="px-[130px] py-[70px] border border-blue-100 rounded-lg shadow-lg bg-white transition duration-300 ease-in-out  hover:border  hover:shadow-xl hover:border-blue-100">
        <div className="text-center text-[#4F4F4F]">
          <span>
            It is our great pleasure to have <br /> you on board!
          </span>
        </div>

        {error && <p className="text-center text-red-500">{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col mt-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full h-[42px] rounded-[4px] p-2 mb-4 border border-gray-300 outline-none"
            required
          />

          <input
            type="text"
            name="surname"
            placeholder="Surname"
            value={formData.surname}
            onChange={handleChange}
            className="w-full h-[42px] rounded-[4px] p-2 mb-4 border border-gray-300 outline-none"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full h-[42px] rounded-[4px] p-2 mb-4 border border-gray-300 outline-none"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Create your Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full h-[42px] rounded-[4px] p-2 mb-4 border border-gray-300 outline-none"
            required
          />

          <button
            type="submit"
            disabled={submitted}
            aria-label={submitted ? "Submitting..." : "Sign Up"}
            className={`w-full h-[42px] rounded-[4px] bg-[#2D88D4] text-white py-2 cursor-pointer transition duration-300 ease-in-out transform ${
              submitted
                ? "bg-gray-400 cursor-not-allowed"
                : "hover:bg-[#1a6ca7] active:scale-95"
            }`}
          >
            {submitted ? "Submitting..." : "Sign Up"}
          </button>
        </form>
        <div className="mt-4 text-center">
          <p>
            <span className="text-[#4F4F4F] mr-[10px]">
              Already have an account?
            </span>
            <span
              className="text-[#2D88D4] font-bold cursor-pointer hover:text-[#1a6ca7] hover:underline"
              onClick={() => navigate("/login")}
            >
              Sign In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
