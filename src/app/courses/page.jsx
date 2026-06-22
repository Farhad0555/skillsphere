"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function CoursesPage() {
    const [courses, setCourses] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        fetch("https://skillsphere-opal.vercel.app/data.json")
            .then((res) => res.json())
            .then((data) => setCourses(data));
    }, []);

    const filteredCourses = courses.filter((course) =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <h1 className="text-4xl font-bold text-center mb-10">
                All Courses
            </h1>

            {/* Search Input */}
            <div className="flex justify-center mb-8">
                <input
                    type="text"
                    placeholder="Search courses by title..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="input input-bordered w-full max-w-md border-2 border-blue-300"
                />
            </div>

            {/* No results message */}
            {filteredCourses.length === 0 && searchQuery && (
                <p className="text-center text-gray-500 mt-6">
                    No courses found for &quot;{searchQuery}&quot;.
                </p>
            )}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map((course) => (
                    <div
                        key={course.id}
                        className="card bg-base-100 shadow-xl border"
                    >
                        <figure>
                            <Image
                                src={course.image}
                                alt={course.title}
                                height={200}
                                width={200}
                                className="h-52 w-full object-cover"
                            />
                        </figure>

                        <div className="card-body">
                            <h2 className="card-title">{course.title}</h2>

                            <p>
                                <span className="font-semibold">Instructor:</span>{" "}
                                {course.instructor}
                            </p>

                            <p>
                                <span className="font-semibold">Duration:</span>{" "}
                                {course.duration}
                            </p>
                            <p>
                                <span className="font-semibold">Category:</span>{" "}
                                {course.category}
                            </p>

                            <div className="card-actions justify-end mt-4">
                                <Link
                                    href={`/courses/${course.id}`}
                                    className="btn btn-primary"
                                >
                                    Details
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}