import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        // Get stored email and password from localStorage
        const storedEmail = localStorage.getItem('userEmail');
        const storedPassword = localStorage.getItem('userPassword');

        // Check if entered credentials match the stored ones
        if (data.Email === storedEmail && data.Password === storedPassword) {
            console.log("Successfully signed in");
            navigate("/"); // Navigate to the root page after successful sign-in
        } else {
            console.log("Invalid email or password");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen px-6">
            <div className="rounded-2xl overflow-hidden w-full max-w-5xl p-6 flex flex-col md:grid md:grid-cols-3 gap-8">

                {/* Video Animation Section */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="flex items-center justify-center rounded-2xl p-6"
                >
                    <video
                        autoPlay
                        loop
                        muted
                        className="mt-24 max-w-[320px] max-h-[400px] rounded-3xl shadow-xl shadow-white"
                    >
                        <source src="/src/assets/Fingerprint.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </motion.div>

                {/* Gap between video and form */}
                <div className="md:w-8"></div>

                {/* Sign In Form Section */}
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col justify-center items-center p-6"
                >
                    <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Sign In</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                        {/* Email Input */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold">Email</label>
                            <input
                                type="email"
                                placeholder="Email"
                                className={`w-full px-4 py-3 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300 ${errors.Email ? 'border-red-500' : ''}`}
                                {...register("Email", { required: "Email is required" })}
                            />
                            {errors.Email && <p className="text-red-500 text-sm">{errors.Email.message}</p>}
                        </div>

                        {/* Password Input */}
                        <div className="mb-6">
                            <label className="block text-gray-700 font-semibold">Password</label>
                            <input
                                type="password"
                                placeholder="Password"
                                className={`w-full px-4 py-3 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300 ${errors.Password ? 'border-red-500' : ''}`}
                                {...register("Password", {
                                    required: "Password is required",
                                    minLength: { value: 6, message: "Password must be at least 6 characters" },
                                    maxLength: { value: 10, message: "Password cannot be more than 10 characters" },
                                    pattern: { value: /^(?=.*[A-Z])(?=.*\d)(?=.*[a-z]).*$/, message: "Password must contain at least one uppercase letter, one number, and one lowercase letter" }
                                })}
                            />
                            {errors.Password && <p className="text-red-500 text-sm">{errors.Password.message}</p>}
                        </div>

                        {/* Sign In Button */}
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-green-400 to-green-600 text-white py-3 rounded-full font-semibold hover:from-green-500 hover:to-green-700 transition-all duration-300 shadow-lg"
                        >
                            Sign In
                        </button>

                        {/* Message below the button */}
                        <p className="text-blue-500 text-center mt-4">
                            You can't log in if you don't sign up first.
                        </p>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}
