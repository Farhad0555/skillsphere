import Image from "next/image";

export function TopInstructors() {
  const instructors = [
    {
      name: "Sarah Johnson",
      expertise: "Web Development",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",
    },
    {
      name: "David Miller",
      expertise: "Data Science",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
    },
    {
      name: "Emma Wilson",
      expertise: "UI/UX Design",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500",
    },
    {
      name: "Michael Brown",
      expertise: "Digital Marketing",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">
          Top Instructors
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-xl"
            >
              <figure>
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  width={300}
                  height={300}
                  className="h-65 w-full object-cover"
                />
              </figure>

              <div className="card-body text-center">
                <h3 className="font-bold text-xl">
                  {instructor.name}
                </h3>
                <p>{instructor.expertise}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}