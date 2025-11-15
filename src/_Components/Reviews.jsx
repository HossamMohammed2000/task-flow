import React from "react";

function Reviews() {
  const reviews = [
    {
      name: "Alex M",
      text: "TaskFlow changed how I plan my week!",
    },
    {
      name: "Nora L",
      text: "Best task management app ever!",
    },
    {
      name: "James K",
      text: "Makes teamwork so much smoother and organized!",
    },
  ];

  return (
    <section className="py-16 text-center bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <h2 className="text-4xl font-bold mb-12 text-white">Reviews</h2>

      <div className="flex flex-wrap justify-center gap-10 px-5">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="max-w-sm p-8 bg-white/90 dark:bg-gray-800 border border-gray-200 
                       dark:border-gray-700 rounded-2xl shadow-lg 
                       transition-transform transform hover:scale-105 hover:shadow-2xl 
                       backdrop-blur-sm"
          >
            <p className="text-lg italic text-gray-800 dark:text-gray-300 mb-4">
              “{review.text}”
            </p>
            <span className="font-semibold text-indigo-700 dark:text-indigo-400">
              — {review.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;
