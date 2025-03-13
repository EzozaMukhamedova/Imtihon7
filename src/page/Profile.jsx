import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import AuthContext from "../context/AuthContext";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { token, setToken } = useContext(AuthContext);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken && !token) {
      setToken(storedToken);
    }
  }, [token, setToken]);

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      setError("");

      const storedToken = token || localStorage.getItem("token");
      if (!storedToken) {
        setError("Afsuski, token topilmadi. Iltimos qaytadan login qiling.");
        setLoading(false);
        return;
      }

      try {
        console.log("Token yuborilmoqda:", storedToken);

        const res = await axios.get(
          "https://nt-devconnector.onrender.com/api/profile/me",
          {
            headers: {
              Authorization: `Bearer ${storedToken}`,
            },
          }
        );

        setProfile(res.data);
      } catch (err) {
        console.error("Error:", err);
        setError(err.response?.data?.msg || "Serverda xatolik yuz berdi!");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [token]);

  if (loading) return <p>Yuklanmoqda...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!profile)
    return <p className="text-red-500">Profil ma'lumotlari mavjud emas!</p>;

  return (
    <div className="container">
      <h2>👤 Profil</h2>
      <p>{profile.user?.name}</p>
      <p>{profile.user?.email}</p>
      <p>{profile.company}</p>
      <p>{profile.location}</p>
      <p>{profile.status}</p>
      {profile.githubusername && (
        <p>
          <a href={`https://github.com/${profile.githubusername}`}>
            {profile.githubusername}
          </a>
        </p>
      )}
      {profile.website && (
        <p>
          <a href={profile.website}>{profile.website}</a>
        </p>
      )}
      <p>{profile.skills}</p>
      <p>{profile.bio}</p>
    </div>
  );
};

export default Profile;
