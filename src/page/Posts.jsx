import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import { FaUser } from "react-icons/fa";
import { toast } from "react-toastify";
import like from "../assets/svg/like.svg";
import dislike from "../assets/svg/dislike.svg";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const { user, token } = useContext(AuthContext) || {};
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("");
  const finalToken = token || localStorage.getItem("token");

  useEffect(() => {
    async function getItemPosts() {
      if (!finalToken) {
        console.error("Token mavjud emas! Iltimos, login qiling.");
        setLoading(false);
        return;
      }

      try {
        console.log("Token:", finalToken);
        const res = await axios.get(
          "https://nt-devconnector.onrender.com/api/posts",
          {
            headers: {
              "Content-Type": "application/json",
              "x-auth-token": finalToken,
            },
          }
        );

        console.log("Kelgan postlar:", res.data);
        setPosts(res.data);
      } catch (error) {
        console.error("Xatolik yuz berdi:", error);
        toast.error("Postlarni olishda xatolik yuz berdi!");
      } finally {
        setLoading(false);
      }
    }

    getItemPosts();
  }, [finalToken]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!text.trim()) {
      toast.error("Post matni bo‘sh bo‘lishi mumkin emas!");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post(
        "https://nt-devconnector.onrender.com/api/posts",
        { text },
        {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": finalToken,
          },
        }
      );

      console.log("Yangi post yaratildi:", res.data);

      setPosts((prevPosts) => [res.data, ...prevPosts]);
      setText("");
      toast.success("Post muvaffaqiyatli yaratildi!");
    } catch (error) {
      console.error("Post yaratishda xatolik:", error);
      toast.error("Post yaratishda xatolik yuz berdi!");
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(postId) {
    const token = localStorage.getItem("token");
    if (!window.confirm("Rostan ham ushbu postni o‘chirmoqchimisiz?")) {
      return;
    }

    try {
      await axios.delete(
        `https://nt-devconnector.onrender.com/api/posts/${postId}`,
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );

      setPosts((prevPosts) => prevPosts.filter((post) => post._id !== postId));
      toast.success("Post muvaffaqiyatli o‘chirildi!");
    } catch (error) {
      console.error("Postni o‘chirishda xatolik:", error);
      toast.error("Postni o‘chirishda xatolik yuz berdi!");
    }
  }

  if (loading) return <Loading />;

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
                  <img
                    className="w-[47px] h-[32px] p-[7px] border-[#f4f4f4] border bg-[#f4f4f4] cursor-pointer "
                    src={like}
                    alt="Like"
                  />
                  <img
                    className="w-[47px] h-[32px] p-[7px] border-[#f4f4f4] border bg-[#f4f4f4] cursor-pointer"
                    src={dislike}
                    alt="Dislike"
                  />
                  <button className="w-[119px] cursor-pointer bg-[#17a2b8] text-white h-[38.4px] p-[7px] border-[#17a2b8]">
                    Discussion
                  </button>

                  {/* {(post.user?._id || post.user) === user._id && ( */}
                  <button
                    onClick={() => handleDelete(post._id)}
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
};

export default Posts;
