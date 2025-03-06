"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function UsersPage() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Load users from localStorage on mount
        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
        setUsers(storedUsers);
    }, []);

    const handleDelete = (id) => {
        const updatedUsers = users.filter(user => user.id !== id);
        setUsers(updatedUsers);
        localStorage.setItem("users", JSON.stringify(updatedUsers));
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900">
            <h1 className="text-2xl font-bold mb-5">User List</h1>
            <div className="w-full max-w-2xl overflow-x-auto">
                <table className="w-full border border-gray-300 bg-white shadow-md rounded">
                    <thead>
                    <tr className="bg-gray-100 text-gray-900">
                        <th className="border border-gray-300 px-4 py-2">ID</th>
                        <th className="border border-gray-300 px-4 py-2">Name</th>
                        <th className="border border-gray-300 px-4 py-2">Email</th>
                        <th className="border border-gray-300 px-4 py-2">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.length === 0 ? (
                        <tr>
                            <td colSpan="4" className="text-center text-gray-500 py-4">
                                No users found
                            </td>
                        </tr>
                    ) : (
                        users.map(user => (
                            <tr key={user.id} className="text-gray-900 text-center bg-white hover:bg-gray-200">
                                <td className="border border-gray-300 px-4 py-2">{user.id}</td>
                                <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                                <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                                <td className="border border-gray-300 px-4 py-2 flex justify-center space-x-2">
                                    <Link href={`/users/edit/${user.id}`} className="bg-yellow-500 text-white px-3 py-1 rounded">
                                        Edit
                                    </Link>
                                    <button
                                        className="bg-red-500 text-white px-3 py-1 rounded"
                                        onClick={() => handleDelete(user.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                    </tbody>
                </table>
            </div><br/>
            <Link href="/users/add" className="bg-green-500 text-white px-4 py-2 rounded mb-5">
                Add User
            </Link>
        </div>

    );
}
