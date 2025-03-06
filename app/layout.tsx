import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast"; // ✅ Import Toaster
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "User Management App",
    description: "A simple user management application built with Next.js",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`} // ✅ Ensures white background
        >
        <Toaster /> {/* ✅ Added Toaster for global toast notifications */}
        <main className="min-h-screen flex flex-col">{children}</main>
        </body>
        </html>
    );
}
