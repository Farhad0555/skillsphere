import Image from "next/image";

export default async function CourseDetails({ params }) {
  const { id } = await params;

  const res = await fetch(
    "https://skillsphere-opal.vercel.app/data.json",
    {
      cache: "no-store",
    }
  );

  const courses = await res.json();

  const course = courses.find(
    (item) => item.id.toString() === id
  );

  if (!course) {
    return (
      <div className="text-center py-20">
        Course Not Found
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <Image
        src={course.image}
        alt={course.title}
        height={200}
        width={200}
        className="w-full h-[400px] object-cover rounded-lg"
      />

      <h1 className="text-4xl font-bold mt-6">
        {course.title}
      </h1>

      <p className="mt-4">
        <strong>Instructor:</strong> {course.instructor}
      </p>

      <p>
        <strong>Duration:</strong> {course.duration}
      </p>

      <p>
        <strong>Category:</strong> {course.category}
      </p>

      <p className="mt-6 text-lg">
        {course.description}
      </p>
    </div>
  );
}