// import axios from "axios";
// import React, { useContext, useState, useEffect } from "react";
// import AuthContext from "../context/AuthContext";
// import Navbar from "../components/Navbar";
// import Loading from "../components/Loading";
// import { FaUser } from "react-icons/fa";
// import { toast } from "react-toastify";
// import likeIcon from "../assets/svg/like.svg";
// import dislikeIcon from "../assets/svg/dislike.svg";
// import { useNavigate } from "react-router-dom";

// const Posts = () => {
//   const navigate = useNavigate();
//   const [posts, setPosts] = useState([]);
//   const [userMe, setUserMe] = useState(null);
//   const { user, token } = useContext(AuthContext) || {};
//   const [loading, setLoading] = useState(true);
//   const [text, setText] = useState("");
//   const finalToken = token || localStorage.getItem("token");
//   // const [visibleCount, setVisibleCount] = useState(10);

//   async function getPosts() {
//     if (!finalToken) {
//       console.error("Token mavjud emas! Iltimos, login qiling.");
//       setLoading(false);
//       return;
//     }

//     try {
//       console.log("Token:", finalToken);
//       const res = await axios.get(
//         "https://nt-devconnector.onrender.com/api/posts",
//         {
//           headers: {
//             "Content-Type": "application/json",
//             "x-auth-token": finalToken,
//           },
//         }
//       );

//       console.log("Kelgan postlar:", res.data);
//       setPosts(res.data);
//     } catch (error) {
//       console.error("Xatolik yuz berdi:", error);
//       toast.error("Postlarni olishda xatolik yuz berdi!");
//     } finally {
//       setLoading(false);
//     }
//   }

//   ////

//   async function getMe() {
//     try {
//       const res = await axios.get(
//         "https://nt-devconnector.onrender.com/api/auth",
//         {
//           headers: {
//             "Content-Type": "application/json",
//             "x-auth-token": finalToken,
//           },
//         }
//       );
//       setUserMe(res?.data?._id);
//       console.log(res?.data?._id);
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   useEffect(() => {
//     getPosts();
//     getMe();
//   }, [finalToken]);
//   ////
//   // async function like(id) {
//   //   await axios.put(
//   //     `https://nt-devconnector.onrender.com/api/posts/like/${id}`,
//   //     {},
//   //     {
//   //       headers: {
//   //         // "Content-Type": "application/json",
//   //         "x-auth-token": finalToken,
//   //       },
//   //     }
//   //   );
//   // }

//   // async function dislike(id) {
//   //   await axios.put(
//   //     `https://nt-devconnector.onrender.com/api/posts/unlike/${id}`,
//   //     {},
//   //     {
//   //       headers: {
//   //         // "Content-Type": "application/json",
//   //         "x-auth-token": finalToken,
//   //       },
//   //     }
//   //   );
//   // }

//   async function like(id) {
//     try {
//       const res = await axios.put(
//         `https://nt-devconnector.onrender.com/api/posts/like/${id}`,
//         {},
//         { headers: { "x-auth-token": finalToken } }
//       );

//       setPosts((prevPosts) =>
//         prevPosts.map((post) =>
//           post._id === id ? { ...post, likes: res.data } : post
//         )
//       );

//       toast.success("Like bosildi!");
//     } catch (error) {
//       console.error("Like qilishda xatolik:", error);
//       toast.error("Like qilishda xatolik yuz berdi!");
//     }
//   }

//   async function dislike(id) {
//     try {
//       const res = await axios.put(
//         `https://nt-devconnector.onrender.com/api/posts/unlike/${id}`,
//         {},
//         { headers: { "x-auth-token": finalToken } }
//       );

//       setPosts((prevPosts) =>
//         prevPosts.map((post) =>
//           post._id === id ? { ...post, likes: res.data } : post
//         )
//       );

//       toast.success("Dislike qilindi!");
//     } catch (error) {
//       console.error("Dislike qilishda xatolik:", error);
//       toast.error("Dislike qilishda xatolik yuz berdi!");
//     }
//   }

//   useEffect(() => {
//     console.log(userMe);
//   }, [userMe]);
//   ///
//   ////
//   async function handleSubmit(e) {
//     e.preventDefault();

//     if (!text.trim()) {
//       toast.error("Post matni bo‘sh bo‘lishi mumkin emas!");
//       return;
//     }

//     try {
//       setLoading(true);
//       const res = await axios.post(
//         "https://nt-devconnector.onrender.com/api/posts",
//         { text },
//         {
//           headers: {
//             "Content-Type": "application/json",
//             "x-auth-token": finalToken,
//           },
//         }
//       );

//       console.log("Yangi post yaratildi:", res.data);

//       setPosts((prevPosts) => [res.data, ...prevPosts]);
//       setText(""); //aiteirunoha dame
//       toast.success("Post muvaffaqiyatli yaratildi!");
//     } catch (error) {
//       console.error("Post yaratishda xatolik:", error);
//       toast.error("Post yaratishda xatolik yuz berdi!");
//     } finally {
//       setLoading(false);
//     }
//   }

//   async function handleDelete(postId) {
//     const token = localStorage.getItem("token");
//     if (!window.confirm("Rostan ham ushbu postni o‘chirmoqchimisiz?")) {
//       return;
//     }

//     try {
//       await axios.delete(
//         `https://nt-devconnector.onrender.com/api/posts/${postId}`,
//         {
//           headers: {
//             "x-auth-token": token,
//           },
//         }
//       );

//       setPosts((prevPosts) => prevPosts.filter((post) => post._id !== postId));
//       toast.success("Post muvaffaqiyatli o‘chirildi!");
//     } catch (error) {
//       console.error("Postni o‘chirishda xatolik:", error);
//       toast.error("Postni o‘chirishda xatolik yuz berdi!");
//     }
//   }

//   // const showMore = () => {
//   //   setVisibleCount(posts.length);
//   // };

//   if (loading) return <Loading />;

//   return (
//     <>
//       <Navbar />
//       <div className="bg-white p-4 ml-[220px] rounded-lg">
//         <h2 className="text-[#17a2b8] text-[50px] font-bold">Posts</h2>
//         <div className="flex items-center py-2 ">
//           <FaUser className="w-6 h-6 mr-3" />
//           <h2 className="text-[24px] py-[16px]">Welcome to the community</h2>
//         </div>
//         <p className="bg-[#17a2b8] mb-[20px] w-[1036px] pl-[10px] flex items-center font-[700] h-[45px] text-white text-[19px] ">
//           Say Something...
//         </p>

//         <form onSubmit={handleSubmit}>
//           <textarea
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//             placeholder="Create a post"
//             rows="5"
//             cols="109"
//             required
//             className="border border-[#ccc] text-[#333] text-[20px] pl-[10px] pt-[5px] w-[1036px]"
//           />
//           <br />
//           <button
//             className="border cursor-pointer w-[100px] h-[40px] my-[20px] bg-[#343a40] text-white hover:bg-[#222]"
//             type="submit"
//           >
//             Submit
//           </button>
//         </form>

//         {posts.length === 0 ? (
//           <p className="text-center text-gray-500">
//             Hozircha hech qanday post yo‘q!
//           </p>
//         ) : (
//           posts.map((post) => (
//             <div
//               key={post._id}
//               className="border border-[#ccc] flex w-[1037.5px] h-[164.5px] mb-[16px] items-center"
//             >
//               <div className="w-[177px] h-[132px] m-[15px] flex flex-col items-center">
//                 <img
//                   className="w-[100px] h-[100px] rounded-[50px]"
//                   src={post?.avatar}
//                   alt="User avatar"
//                 />
//                 <p className="text-[#17a2b8] text-[18px] font-[700]">
//                   {post.name}
//                 </p>
//               </div>
//               <div className="w-[712px] h-[125px] m-[15px]">
//                 <h3 className="my-[16px]">{post.text}</h3>
//                 <p className="text-[#aaa] text-[14px] mb-[5px]">
//                   Posted on {new Date(post.date).toLocaleDateString("uz-UZ")}
//                 </p>
//                 <div className="flex gap-[8px]">
//                   {/* /// */}
//                   <button
//                     onClick={() => like(post?._id)}
//                     className="relative inline-flex items-center justify-center w-[57px] h-[32px] border border-[#f4f4f4] bg-[#f4f4f4] cursor-pointer"
//                   >
//                     <div className="flex"></div>
//                     <img
//                       className="w-[47px] h-[32px] p-[7px] border-[#f4f4f4] border bg-[#f4f4f4] cursor-pointer"
//                       src={likeIcon}
//                       alt="Like"
//                     />
//                     {post?.likes.length > 0 && (
//                       <span className="absolute text-[12px] font-semibold top-[50%] left-[70%] translate-x-[30%] translate-y-[-50%]">
//                         {post?.likes.length}
//                       </span>
//                     )}
//                     {/* tsuikasareta tokoro like dislike  */}
//                   </button>

//                   <button
//                     onClick={() => dislike(post?._id)}
//                     className="relative inline-flex items-center justify-center w-[57px] h-[32px] border border-[#f4f4f4] bg-[#f4f4f4] cursor-pointer"
//                   >
//                     <img
//                       className="w-[47px] h-[32px] p-[7px] border-[#f4f4f4] border bg-[#f4f4f4] cursor-pointer"
//                       src={dislikeIcon}
//                       alt="Dislike"
//                     />
//                   </button>

//                   {/* ////// */}
//                   <button
//                     className="w-[119px] cursor-pointer bg-[#17a2b8] text-white h-[38.4px] p-[7px] border-[#17a2b8]"
//                     onClick={() => navigate(`/post/${post._id}`)}
//                   >
//                     Discussion
//                   </button>
//                   {post?.user === userMe && (
//                     <button
//                       onClick={() => handleDelete(post?._id)}
//                       className="px-4 py-1 text-white transition-all duration-300 bg-red-500 cursor-pointer hover:bg-red-600"
//                     >
//                       X
//                     </button>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </>
//   );
// };

// export default Posts;

// RTK QUERY varianti

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";
import { FaUser } from "react-icons/fa";
import likeIcon from "../assets/svg/like.svg";
import dislikeIcon from "../assets/svg/dislike.svg";
import {
  useGetPostsQuery,
  useDeletePostMutation,
  useAddPostMutation,
  useLikePostMutation,
  useDislikePostMutation,
  useGetMeQuery,
} from "../redux/postsApi";

export default function Posts() {
  const navigate = useNavigate();
  const {
    data: userMe,
    error: userError,
    isLoading: userLoading,
  } = useGetMeQuery();
  const { data: posts = [], error, isLoading } = useGetPostsQuery();
  const [deletePost] = useDeletePostMutation();
  const [addPost] = useAddPostMutation();
  const [likePost] = useLikePostMutation();
  const [dislikePost] = useDislikePostMutation();
  const [text, setText] = useState("");

  if (isLoading) return <h3>Loading posts...</h3>;
  if (error) return <h3>Error loading posts</h3>;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) {
      toast.error("Post matni bo‘sh bo‘lishi mumkin emas!");
      return;
    }
    try {
      await addPost({ text }).unwrap();
      setText("");
      toast.success("Post muvaffaqiyatli yaratildi!");
    } catch (error) {
      toast.error("Post yaratishda xatolik yuz berdi!");
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-white p-4 ml-[220px] rounded-lg">
        <h2 className="text-[#17a2b8] text-[50px] font-bold">Posts</h2>
        <div className="flex items-center py-2 ">
          <FaUser className="w-6 h-6 mr-3" />
          <h2 className="text-[24px] py-[16px]">Welcome to the community</h2>
        </div>
        <p className="bg-[#17a2b8] mb-[20px] w-[1036px] pl-[10px] flex items-center font-[700] h-[45px] text-white text-[19px] ">
          Say Something...
        </p>

        <form onSubmit={handleSubmit}>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Create a post"
            rows="5"
            cols="109"
            required
            className="border border-[#ccc] text-[#333] text-[20px] pl-[10px] pt-[5px] w-[1036px]"
          />
          <br />
          <button
            className="border cursor-pointer w-[100px] h-[40px] my-[20px] bg-[#343a40] text-white hover:bg-[#222]"
            type="submit"
          >
            Submit
          </button>
        </form>

        {posts.length === 0 ? (
          <p className="text-center text-gray-500">
            Hozircha hech qanday post yo‘q!
          </p>
        ) : (
          posts.map((post) => (
            <div
              key={post._id}
              className="border border-[#ccc] flex w-[1037.5px] h-[164.5px] mb-[16px] items-center"
            >
              <div className="w-[177px] h-[132px] m-[15px] flex flex-col items-center">
                <img
                  className="w-[100px] h-[100px] rounded-[50px]"
                  src={post?.avatar}
                  alt="User avatar"
                />
                <p className="text-[#17a2b8] text-[18px] font-[700]">
                  {post.name}
                </p>
              </div>
              <div className="w-[712px] h-[125px] m-[15px]">
                <h3 className="my-[16px]">{post.text}</h3>
                <p className="text-[#aaa] text-[14px] mb-[5px]">
                  Posted on {new Date(post.date).toLocaleDateString("uz-UZ")}
                </p>
                <div className="flex gap-[8px]">
                  <button
                    onClick={() => likePost(post?._id)}
                    className="relative inline-flex items-center justify-center w-[57px] h-[32px] border border-[#f4f4f4] bg-[#f4f4f4] cursor-pointer"
                  >
                    <div className="flex"></div>
                    <img
                      className="w-[47px] h-[32px] p-[7px] border-[#f4f4f4] border bg-[#f4f4f4] cursor-pointer"
                      src={likeIcon}
                      alt="Like"
                    />
                    {post?.likes.length > 0 && (
                      <span className="absolute text-[12px] font-semibold top-[50%] left-[70%] translate-x-[30%] translate-y-[-50%]">
                        {post?.likes.length}
                      </span>
                    )}
                  </button>

                  <button
                    onClick={() => dislikePost(post?._id)}
                    className="relative inline-flex items-center justify-center w-[57px] h-[32px] border border-[#f4f4f4] bg-[#f4f4f4] cursor-pointer"
                  >
                    <img
                      className="w-[47px] h-[32px] p-[7px] border-[#f4f4f4] border bg-[#f4f4f4] cursor-pointer"
                      src={dislikeIcon}
                      alt="Dislike"
                    />
                  </button>
                  <button
                    className="w-[119px] cursor-pointer bg-[#17a2b8] text-white h-[38.4px] p-[7px] border-[#17a2b8]"
                    onClick={() => navigate(`/post/${post._id}`)}
                  >
                    Discussion
                  </button>
                  {/* {post?.user === userMe && ( */}
                  <button
                    onClick={() => deletePost(post?._id)}
                    className="px-4 py-1 text-white transition-all duration-300 bg-red-500 cursor-pointer hover:bg-red-600"
                  >
                    X
                  </button>
                  {/* )} */}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
