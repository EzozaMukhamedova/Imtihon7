// import React, { useEffect, useState, useContext } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import Navbar from "../components/Navbar";
// import Loading from "../components/Loading";
// import AuthContext from "../context/AuthContext";
// import likeIcon from "../assets/svg/like.svg";
// import dislikeIcon from "../assets/svg/dislike.svg";
// import {
//   useGetPostByIdQuery,
//   useAddCommentMutation,
//   useDeleteCommentMutation,
// } from "../redux/postsApi";

// const PostDetails = () => {
// const { id } = useParams();
// const navigate = useNavigate();
// const { token, user } = useContext(AuthContext);
// const [post, setPost] = useState(null);
// const [loading, setLoading] = useState(true);
// const [comment, setComment] = useState("");
// const [comments, setComments] = useState([]);

// useEffect(() => {
//   const fetchPost = async () => {
//     try {
//       const res = await axios.get(
//         `https://nt-devconnector.onrender.com/api/posts/${id}`,
//         {
//           headers: { "x-auth-token": token || localStorage.getItem("token") },
//         }
//       );
//       setPost(res.data);
//       setComments(res.data.comments);
//     } catch (error) {
//       console.error("Error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   fetchPost();
// }, [id, token]);

// const addComment = async () => {
//   if (!comment.trim()) return;

//   try {
//     const res = await axios.post(
//       `https://nt-devconnector.onrender.com/api/posts/comment/${id}`,
//       { text: comment },
//       {
//         headers: { "x-auth-token": token || localStorage.getItem("token") },
//       }
//     );

//     setComments(res.data);
//     setComment("");
//   } catch (error) {
//     console.error("Comment qo'shishda xatolik:", error);
//   }
// };

// const deleteComment = async (commentId) => {
//   try {
//     const res = await axios.delete(
//       `https://nt-devconnector.onrender.com/api/posts/comment/${id}/${commentId}`,
//       {
//         headers: { "x-auth-token": token || localStorage.getItem("token") },
//       }
//     );

//     setComments(res.data);
//   } catch (error) {
//     console.error("Comment o'chirishda xatolik:", error);
//   }
// };

// if (loading) return <Loading />;

import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import {
  useGetPostByIdQuery,
  useAddCommentMutation,
  useDeleteCommentMutation,
} from "../redux/postApi";
import likeIcon from "../assets/svg/like.svg";
import dislikeIcon from "../assets/svg/dislike.svg";

const PostDetails = () => {
  const { id } = useParams();
  const [state, setState] = useState(false);
  const navigate = useNavigate();
  const { data: post, error, isLoading } = useGetPostByIdQuery(id);
  const [addComment, { isLoading: isAdding }] = useAddCommentMutation();
  const [deleteComment] = useDeleteCommentMutation();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(post ? post.comments : []);

  const handleAddComment = async () => {
    if (!comment.trim()) return;
    try {
      const newComments = await addComment({ postId: id, comment }).unwrap();
      setComments(newComments);
      setComment("");
    } catch (error) {
      console.error("Comment qo'shishda xatolik:", error);
    }
  };

  const handleDeleteComment = async (commentId) => {
    try {
      const updatedComments = await deleteComment({
        postId: id,
        commentId,
      }).unwrap();
      setComments(updatedComments);
    } catch (error) {
      console.error("Comment o'chirishda xatolik:", error);
    }
  };

  if (isLoading) return <Loading />;
  if (error) return <p>Error loading post: {error.message}</p>;

  return (
    <>
      <Navbar />
      <div className="p-4 mx-auto bg-white rounded-lg w-[1036px]">
        <button
          onClick={() => navigate(-1)}
          className="bg-[#f4f4f4] px-4 py-2 mb-4 cursor-pointer"
        >
          Back To Posts
        </button>

        <div className="p-4 mb-4 border">
          <div className="flex">
            <div className="flex-row items-center text-center">
              <img
                className="w-[100px] h-[100px] rounded-full"
                src={post.avatar}
                alt="Avatar"
              />
              <p className="text-[#17a2b8] font-bold ">{post.name}</p>
            </div>

            <div className="ml-4">
              <p>{post.text}</p>
              <small className="text-gray-400">
                Posted on {new Date(post.date).toLocaleDateString()}
              </small>
              <div className="flex gap-2 mt-2">
                <button className="px-5 py-1 bg-gray-200 cursor-pointer ">
                  <img
                    className="w-[15px] h-[15px] "
                    src={likeIcon}
                    alt="like"
                  />
                </button>
                <button className="px-5 py-1 bg-gray-200 cursor-pointer">
                  <img
                    className="w-[15px] h-[15px]"
                    src={dislikeIcon}
                    alt="dislike"
                  />
                </button>
                <button className="bg-[#17a2b8] px-2 py-1 text-white cursor-pointer">
                  Discussion {comments.length}
                  {/* komentono nagasa wo hakaru */}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#17a2b8] text-white p-2 mb-[16px]">
          Leave a Comment
        </div>
        <textarea
          className="w-full h-32 p-2 border"
          placeholder="Comment the post"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          onClick={handleAddComment}
          className="bg-[#343a40] text-white px-4 py-2 mt-2 cursor-pointer hover:bg-gray-600 transition duration-300"
        >
          Submit
        </button>

        {comments.map((comment) => (
          <div
            key={comment._id}
            className="flex items-center justify-between p-4 my-4 border"
          >
            <div className="flex items-center">
              <div className="items-center font-bold text-center">
                <img
                  src={post.avatar}
                  className="mr-4 rounded-full w-[100px] h-[100px]"
                  alt="User avatar"
                />
                <p className="text-[#17a2b8]">{post?.name}</p>
              </div>

              <div className="flex flex-col">
                <p>{comment.text}</p>
                <small className="text-gray-400">
                  Posted on {new Date(comment.date).toLocaleDateString()}
                  <div className="">
                    {" "}
                    <button
                      onClick={() => handleDeleteComment(comment._id)}
                      className="px-2 py-[6px] text-white bg-red-500 w-[52px] h-[39px] my-[16px] font-bold cursor-pointer hover:bg-red-600 transition duration-300"
                    >
                      X
                    </button>
                  </div>
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PostDetails;
