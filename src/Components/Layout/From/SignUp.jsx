import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email, "Password:", password);
        navigate("/navbar");
    };

    return (
        <div className="flex items-center justify-center min-h-screen px-6">
            <div className="rounded-2xl overflow-hidden w-full max-w-5xl  p-6 flex flex-col md:grid md:grid-cols-3 gap-8">

                {/* Video Animation Section */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="flex items-center justify-center  rounded-2xl p-6"
                >
                    <video
                        autoPlay
                        loop
                        muted
                        className=" max-w-[700px] max-h-[800px] rounded-3xl shadow-xl shadow-white"
                    >
                        <source src="/src/assets/BookUp.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </motion.div>

                {/* Gap between video and form */}
                <div className="md:w-8"></div>

                {/* Signup Form Section */}
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col justify-center items-center p-6"
                >
                    <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Create Account</h2>
                    <form onSubmit={handleSubmit} className="w-full">
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold">Email</label>
                            <input
                                type="email"
                                className="w-full px-4 py-3 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 font-semibold">Password</label>
                            <input
                                type="password"
                                className="w-full px-4 py-3 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-green-400 to-green-600 text-white py-3 rounded-full font-semibold hover:from-green-500 hover:to-green-700 transition-all duration-300 shadow-lg"
                        >
                            Sign Up
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}
