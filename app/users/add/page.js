"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function AddUserPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState(""); // State for error message
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate inputs
        if (!name.trim()) {
            setError("Please enter a valid name.");
            return;
        }

        if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        // Clear errors if inputs are valid
        setError("");

        // Get existing users or initialize an empty array
        let users = JSON.parse(localStorage.getItem("users")) || [];

        // Add new user
        const newUser = { id: Date.now(), name, email };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));

        // Show success toast
        toast.success("User Added Successfully!", {
            duration: 3000, // Toast duration
            position: "top-right",
        });

        // Redirect after a short delay
        setTimeout(() => {
            router.push("/users");
        }, 1000);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white">
            <h1 className="text-2xl font-bold text-gray-800">Add User</h1>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md border border-gray-300">
                {error && <p className="text-red-500 mb-2">{error}</p>} {/* Display error message */}

                <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-2 border border-gray-300 rounded mb-2 text-gray-700 bg-white"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 border border-gray-300 rounded mb-2 text-gray-700 bg-white"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <button type="submit" className="w-full bg-green-500 text-white py-2 rounded">
                    Add User
                </button>
            </form>
        </div>
    );
}
