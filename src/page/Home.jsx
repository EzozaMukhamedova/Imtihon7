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
        console.log("Loading tugadi");
        setLoading(false);
      }
    }

    getItemPosts();
  }, [finalToken]);

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
        <form>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Create a post"
            rows="5"
            cols="109"
            required
            className="border border-[#ccc] text-[#ccc ]  text-[20px] pl-[10px] pt-[5px]"
          />
          <br />
          <button
            className="border cursor-pointer w-[100px] h-[40px] my-[20px] bg-[#343a40] text-white"
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
                    className="w-[47px] h-[32px] p-[7px] border-[#f4f4f4] border bg-[#f4f4f4]"
                    src={like}
                    alt=""
                  />
                  <img
                    className="w-[47px] h-[32px] p-[7px] border-[#f4f4f4] border bg-[#f4f4f4]"
                    src={dislike}
                    alt=""
                  />
                  <button className="w-[119px] bg-[#17a2b8] text-white h-[38.4px] p-[7px] border-[#17a2b8]">
                    Discussion
                  </button>
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
