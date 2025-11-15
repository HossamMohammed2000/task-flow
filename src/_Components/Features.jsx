import React from "react";
import { Bell, Users, BarChart3, Quote } from "lucide-react";

function Features() {
  const features = [
    {
      title: "Smart Reminders",
      text: "Never forget an important task again with intelligent notifications.",
      icon: (
        <Bell className="w-12 h-12 mx-auto text-indigo-600 dark:text-indigo-400 mb-5" />
      ),
    },
    {
      title: "Team Collaboration",
      text: "Share tasks and manage projects easily with your team.",
      icon: (
        <Users className="w-12 h-12 mx-auto text-indigo-600 dark:text-indigo-400 mb-5" />
      ),
    },
    {
      title: "Progress Tracking",
      text: "See your achievements and stay motivated as you complete tasks.",
      icon: (
        <BarChart3 className="w-12 h-12 mx-auto text-indigo-600 dark:text-indigo-400 mb-5" />
      ),
    },
  ];

  const testimonials = [
    {
      name: "Sarah",
      quote: "TaskFlow changed the way I organize my week!",
    },
    {
      name: "Omar",
      quote: "Best productivity app I've ever used!",
    },
    {
      name: "Layla",
      quote: "Perfect for managing my personal and team projects!",
    },
  ];

  return (
    <div className="text-center px-5 py-16 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
     
      <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">
        Features
      </h2>

      <div className="flex flex-wrap justify-center gap-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="max-w-sm p-8 bg-white border border-gray-200 rounded-2xl shadow-lg 
                       dark:bg-gray-800 dark:border-gray-700 transition-transform 
                       hover:scale-105 hover:shadow-xl"
          >
            {feature.icon}
            <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">{feature.text}</p>
          </div>
        ))}
      </div>

      
      <div className="mt-20">
        <h3 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">
          What Users Say
        </h3>

        <div className="flex flex-wrap justify-center gap-10">
          {testimonials.map((user, index) => (
            <div
              key={index}
              className="max-w-sm p-8 bg-white border border-gray-200 rounded-2xl shadow-lg 
                         dark:bg-gray-800 dark:border-gray-700 transition-transform 
                         hover:scale-105 hover:shadow-xl"
            >
              <Quote className="w-8 h-8 mx-auto text-indigo-600 dark:text-indigo-400 mb-4" />
              <p className="text-lg text-gray-600 dark:text-gray-400 italic mb-3">
                “{user.quote}”
              </p>
              <span className="font-semibold text-gray-800 dark:text-gray-300">
                — {user.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
