"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-blue-600 text-white py-4 px-6 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-semibold">
          <Link
            href="/"
            className="text-white">
            <span className="font-bold">Supply</span>Chain
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white">
            {isMenuOpen ? (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {/* Buyer and Seller Buttons */}
          <Link href="/buyer">
            <button className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">
              Buyer
            </button>
          </Link>
          <Link href="/seller">
            <button className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">
              Seller
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
          <Link href="/buyer">
            <button className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">
              Buyer
            </button>
          </Link>
          <Link href="/seller">
            <button className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">
              Seller
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}
