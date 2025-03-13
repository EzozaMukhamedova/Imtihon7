import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import AuthContext from "../context/AuthContext";

const PostDetails = () => {
  const { id } = useParams();
  const { token } = useContext(AuthContext);
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(
          `https://nt-devconnector.onrender.com/api/posts/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
              "x-auth-token": token || localStorage.getItem("token"),
            },
          }
        );
        setPost(res.data);
      } catch (error) {
        console.error("Postni yuklashda xatolik:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id, token]);

  if (loading) return <Loading />;
  if (!post) return <p className="text-center text-red-500">Post topilmadi!</p>;

  return (
    <>
      <Navbar />
      <div className="bg-white p-4 ml-[220px] rounded-lg">
        <h2 className="text-[#17a2b8] text-[50px] font-bold">Post Details</h2>
        <div className="flex items-center py-2">
          <img
            className="w-[50px] h-[50px] rounded-full mr-4"
            src={post?.avatar}
            alt="User avatar"
          />
          <h3 className="text-[24px] font-bold">{post.name}</h3>
        </div>
        <p className="text-gray-600">{post.text}</p>
        <p className="text-[#aaa] text-[14px]">
          Posted on {new Date(post.date).toLocaleDateString("uz-UZ")}
        </p>
      </div>
    </>
  );
};

export default PostDetails;
