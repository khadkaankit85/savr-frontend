import { FormEvent, useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { backendUrl } from "../config/constants";
import axios from "axios";
import { useUser } from "../utils/hooks";

function Register() {
  const { user, setUser } = useUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post(
        `${backendUrl}api/user/register/ep`,
        {
          email,
          password,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        },
      );

      setUser(response.data);

      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("❌ Registration failed:", error.response?.data);

        setError(
          error.response?.data.error ||
            "Something went wrong. Please try again.",
        );
      } else {
        setError("Network error. Please check your connection.");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-semibold mb-5">Register</h1>

      {error && <p className="text-red-500 text-lg">{error}</p>}

      <form onSubmit={handleRegister} className="flex flex-col gap-5 mt-4 w-80">
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
          required
        />

        <div className="relative w-full">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none pr-10"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-black"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <div className="relative w-full">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none pr-10"
            required
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-black"
          >
            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <button
          type="submit"
          className="bg-white text-black border border-gray-400 shadow-md rounded-sm p-2 hover:bg-gray-100 transition"
        >
          REGISTER
        </button>

        <div className="flex items-center justify-center">
          <div className="w-full border-t border-gray-300"></div>
          <span className="px-3 text-gray-500">OR</span>
          <div className="w-full border-t border-gray-300"></div>
        </div>

        <button className="flex items-center justify-center gap-2 bg-white border border-gray-400 shadow-md rounded-sm p-2 hover:bg-gray-100 transition">
          <img src="/googleicon.jpg" alt="Google Logo" className="w-5 h-5" />
          Sign up with Google
        </button>
      </form>

      <p className="mt-4 text-gray-600">
        Already have an account?{" "}
        <a href="/login" className="text-blue-500 hover:underline">
          Login
        </a>
      </p>
    </div>
  );
}

export default Register;
