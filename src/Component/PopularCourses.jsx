"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function PopularCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("https://skillsphere-opal.vercel.app/data.json")
      .then((res) => res.json())
      .then((data) => {
        const topCourses = [...data]
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 3);

        setCourses(topCourses);
      });
  }, []);

  return (
    <section className="py-16 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10">
        Popular Courses
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="card bg-base-100 shadow-xl border"
          >
            <figure>
              <Image
                src={course.image}
                alt={course.title}
                width={500}
                height={300}
                className="h-56 w-full object-cover"
              />
            </figure>

            <div className="card-body">
              <h3 className="card-title">{course.title}</h3>

              <p>
                <strong>Instructor:</strong> {course.instructor}
              </p>

              <p>
                ⭐ <strong>{course.rating}</strong>
              </p>

              <div className="card-actions justify-end">
                <Link
                  href={`/course/${course.id}`}
                  className="btn btn-primary"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}