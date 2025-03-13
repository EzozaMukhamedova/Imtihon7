
import axios from "axios";

const BASE_URL = "https://nt-devconnector.onrender.com/api";

export async function register(userData) {
  try {
    console.log("Ro‘yxatdan o'tish ma'lumotlari:", userData);

    const response = await axios.post(`${BASE_URL}/users`, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("Ro‘yxatdan o‘tish muvaffaqiyatli:", response.data);
    return response.data;
  } catch (error) {
    console.error("Register xatosi:", error.response?.data || error.message);
    throw error.response?.data || { message: "Ro‘yxatdan o‘tishda xatolik!" };
  }
}

export const login = async (formData) => {
  try {
    console.log("Login so‘rovi yuborilmoqda:", formData);

    const response = await axios.post(
      `${BASE_URL}/auth`,
      JSON.stringify(formData),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Serverdan qaytgan javob:", response.data);

    if (!response.data?.token) {
      throw new Error("Login xatosi: Token qaytarilmadi.");
    }

    return response.data;
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
