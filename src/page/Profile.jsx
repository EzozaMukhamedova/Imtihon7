import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import { ImCheckmark } from "react-icons/im";
import { FaGlobe } from "react-icons/fa";

const Profile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      setError("");

      try {
        const res = await axios.get(
          `https://nt-devconnector.onrender.com/api/profile/user/${id}`
        );
        setProfile(res.data);
      } catch (err) {
        console.error("Xatolik:", err);
        setError(err.response?.data?.msg || "Serverda xatolik yuz berdi!");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [id]);

  if (loading) return <p>Yuklanmoqda...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!profile) return <p className="text-red-500">Profil topilmadi!</p>;

  return (
    <>
      <Navbar />
      <div className="w-[1036px] p-4 mx-auto mt-10">
        <button
          onClick={() => navigate("/dev")}
          className="px-4 py-2 text-[16px] bg-gray-100 rounded cursor-pointer hover:bg-gray-200"
        >
          Back To Profiles
        </button>

        <div className="bg-[#0fa3b1] h-[567px]  text-white text-center p-10  mt-4">
          <img
            className="w-[250px] h-[250px] rounded-full mx-auto border-white"
            src={profile.user.avatar}
            alt={profile.user.name}
          />
          <h2 className="mt-2 text-[48px] font-bold">
            {profile.user.name || "No Name"}
          </h2>
          <p className="text-[24px]">
            {profile.status} at {profile.company || "N/A"}
          </p>
          <p className="text-[16px]">{profile.location || "N/A"}</p>
          {profile.website && (
            <a
              href={profile.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-white"
            >
              <FaGlobe className="inline-block mr-2 w-[32px] h-[32px] text-white hover:text-gray-600 transition-colors duration-300" />
            </a>
          )}
        </div>

        <div className="p-6 mt-6 text-center bg-gray-100">
          <h3 className="text-[24px] font-semibold text-[#0fa3b1]">nos Bio</h3>
          <p className="mt-2 text-gray-600">
            {profile.bio || "No bio available"}
          </p>
          <hr className="my-4" />
          <h3 className="text-[24px] font-semibold text-[#0fa3b1]">
            Skill Set
          </h3>
          <ul className="flex flex-wrap justify-center gap-2 mt-2">
            {profile.skills.map((skill, index) => (
              <li
                key={index}
                className="bg-[#0fa3b1] text-white px-3 py-1 rounded-full text-sm flex items-center"
              >
                <ImCheckmark className="mr-2" /> {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-2">
          <div className="p-4 text-center border border-gray-300">
            <h3 className="text-[24px] font-bold text-[#0fa3b1]">Experience</h3>
            {profile.experience && profile.experience.length > 0 ? (
              profile.experience.map((exp, index) => (
                <p key={index} className="text-gray-600">
                  {exp.title} at {exp.company}
                </p>
              ))
            ) : (
              <p className="text-gray-500">No experience credentials</p>
            )}
          </div>

          <div className="p-4 text-center border border-gray-300">
            <h3 className="text-[24px] font-bold text-[#0fa3b1]">Education</h3>
            {profile.education && profile.education.length > 0 ? (
              profile.education.map((edu, index) => (
                <p key={index} className="text-gray-600">
                  {edu.degree} at {edu.school}
                </p>
              ))
            ) : (
              <p className="text-gray-500">No education credentials</p>
            )}
          </div>
        </div>

        {profile.githubusername && (
          <div className="mt-6">
            <h3 className="text-[24px] font-bold text-[#0fa3b1]">
              GitHub Repos
            </h3>
            <a
              href={`https://github.com/${profile.githubusername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0fa3b1] font-semibold"
            >
              {profile.githubusername}
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default Profile;
