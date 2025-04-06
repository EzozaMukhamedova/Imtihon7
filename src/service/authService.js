import axios from "axios";

const BASE_URL = "https://green-shop-backend.onrender.com/api";
// https://green-shop-backend.onrender.com/api/
// https://nt-devconnector.onrender.com/api

export async function register(userData) {
  try {
    console.log("Ro‘yxatdan o'tish ma'lumotlari:", userData);

    const response = await axios.post(
      `${BASE_URL}/user/sign-up?access_token=67dbc36eaf06d13e0cde0c21`,
      userData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    // /api/user/sign-up?access_token=67dbc36eaf06d13e0cde0c21
    console.log("Ro‘yxatdan o‘tish muvaffaqiyatli:", response.data);
    return response.data;
  } catch (error) {
    console.error("Register xatosi:", error.response?.data || error.message);
    throw error.response?.data || { message: "Ro‘yxatdan o‘tishda xatolik!" };
  }
}

export const login = async (formData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/user/sign-in?access_token=67dbc36eaf06d13e0cde0c21`,
      JSON.stringify(formData),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Serverdan qaytgan javob:", response.data);

    const token = response.data.data?.token;
    if (token) {
      return { token, user: response.data.data.user };
    } else {
      throw new Error("Login xatosi: Token qaytarilmadi.");
    }
  } catch (error) {
    console.error("Login xatosi:", error.response?.data || error.message);

    if (error.response) {
      console.error("Status kodi:", error.response.status);
      console.error("Xatolik tafsilotlari:", error.response.data);
    }

    throw error.response?.data || { message: "Login xatosi!" };
  }
};

export const logout = () => {
  console.log("Foydalanuvchi tizimdan chiqmoqda...");
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};
