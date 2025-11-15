import React from "react";

function Pricing() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
        Our Pricing Plans
      </h2>

      <div className="flex flex-wrap justify-center gap-10 items-center">
        <div className="max-w-sm w-full p-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg hover:scale-105 transition-transform hover:shadow-xl">
          <h3 className="text-3xl font-bold text-indigo-700 dark:text-indigo-400 text-center mb-3">
            Free
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
            Basic features for individuals.
          </p>
          <div className="text-center mb-6">
            <span className="text-5xl font-extrabold text-gray-900 dark:text-white">
              $0
            </span>
            <span className="text-gray-500 dark:text-gray-400 text-lg">
              /month
            </span>
          </div>
          <ul className="text-gray-700 dark:text-gray-300 mb-8 space-y-2 text-center">
            <li>✅ Task management</li>
            <li>✅ 1 project</li>
            <li>🚫 No team features</li>
          </ul>
          <div className="flex justify-center">
            <button className="bg-indigo-100 hover:bg-indigo-200 text-indigo-700 font-semibold px-6 py-2 rounded-xl transition">
              Get Started
            </button>
          </div>
        </div>

        <div className="max-w-sm w-full p-8 bg-gradient-to-b from-indigo-600 to-indigo-800 text-white rounded-2xl shadow-2xl hover:scale-105 transition-transform hover:shadow-indigo-400/30 border border-transparent">
          <h3 className="text-3xl font-bold text-center mb-3">Pro</h3>
          <p className="text-indigo-100 text-center mb-6">
            Advanced tools for teams.
          </p>
          <div className="text-center mb-6">
            <span className="text-5xl font-extrabold">$12</span>
            <span className="text-indigo-200 text-lg">/month</span>
          </div>
          <ul className="mb-8 space-y-2 text-center text-indigo-100">
            <li>✅ Unlimited tasks</li>
            <li>✅ 10 team members</li>
            <li>✅ Priority support</li>
          </ul>
          <div className="flex justify-center">
            <button className="bg-white text-indigo-700 font-semibold px-6 py-2 rounded-xl hover:bg-gray-100 transition">
              Upgrade Now
            </button>
          </div>
        </div>

        <div className="max-w-sm w-full p-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg hover:scale-105 transition-transform hover:shadow-xl">
          <h3 className="text-3xl font-bold text-indigo-700 dark:text-indigo-400 text-center mb-3">
            Team
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
            Full power for large teams.
          </p>
          <div className="text-center mb-6">
            <span className="text-5xl font-extrabold text-gray-900 dark:text-white">
              $29
            </span>
            <span className="text-gray-500 dark:text-gray-400 text-lg">
              /month
            </span>
          </div>
          <ul className="text-gray-700 dark:text-gray-300 mb-8 space-y-2 text-center">
            <li>✅ Unlimited projects</li>
            <li>✅ Custom integrations</li>
            <li>✅ Dedicated support</li>
          </ul>
          <div className="flex justify-center">
            <button className="bg-indigo-700 hover:bg-indigo-800 text-white font-semibold px-6 py-2 rounded-xl transition">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
