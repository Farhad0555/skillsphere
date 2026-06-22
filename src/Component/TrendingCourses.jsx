// components/TrendingCourses.jsx

import Image from "next/image";

export default function TrendingCourses({ courses }) {
  const trending = [...courses]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  return (
    <section className="my-16">
      <h2 className="text-3xl font-bold mb-8 text-center">
        🔥 Trending Courses
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {trending.map((course) => (
          <div
            key={course.id}
            className="card bg-base-100 shadow-lg"
          >
            <Image
              src={course.image}
              alt={course.title}
              height={200}
              width={200}
              className="h-40 object-cover"
            />

            <div className="card-body">
              <h3 className="font-bold">
                {course.title}
              </h3>

              <p>⭐ {course.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}