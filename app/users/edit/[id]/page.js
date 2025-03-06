"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

export default function EditUserPage() {
    const router = useRouter();
    const { id } = useParams(); // Get user ID from URL
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        // Fetch user data from localStorage
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find((u) => u.id === Number(id));

        if (user) {
            setName(user.name);
            setEmail(user.email);
        }
    }, [id]);

    const handleUpdate = (e) => {
        e.preventDefault();

        let users = JSON.parse(localStorage.getItem("users")) || [];
        const updatedUsers = users.map((user) =>
            user.id === Number(id) ? { ...user, name, email } : user
        );

        localStorage.setItem("users", JSON.stringify(updatedUsers));
        alert("User Updated Successfully!");
        router.push("/users"); // Redirect to user list
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900">
            <h1 className="text-2xl font-bold text-black">Edit User</h1>
            <form onSubmit={handleUpdate} className="bg-white p-6 rounded shadow-md w-full max-w-md">
                <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-2 border rounded mb-2 text-black"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 border rounded mb-2 text-black"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
                    Update User
                </button>
            </form>
        </div>
    );
}
