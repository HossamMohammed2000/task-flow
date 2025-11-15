import React from "react";

function Header() {
  return (
    <header className="bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-white py-24 px-6 text-center flex flex-col items-center justify-center">
      <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6">
        Organize Your <br />
        <span className="text-indigo-300">Life Effortlessly</span>
      </h1>
      <p className="text-lg sm:text-xl text-indigo-100 max-w-2xl mb-10">
        TaskFlow helps you manage your tasks, projects, and goals — all in one
        simple, intuitive workspace.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="bg-white text-indigo-700 font-semibold py-3 px-8 rounded-xl hover:bg-gray-100 transition shadow-md">
          Get Started
        </button>
        <button className="bg-transparent border border-white py-3 px-8 rounded-xl hover:bg-white hover:text-indigo-700 transition shadow-md">
          Learn More
        </button>
      </div>
    </header>
  );
}

export default Header;
