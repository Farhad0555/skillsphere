import Banner from "@/Component/Banner";
import { LearningTips } from "@/Component/LearningTips";
import PopularCourses from "@/Component/PopularCourses";
import { TopInstructors } from "@/Component/TopInstructors";
import TrendingCourses from "@/Component/TrendingCourses";

export default async  function Home() {
  const res = await fetch("https://skillsphere-opal.vercel.app/data.json", {
    cache: "no-store",
  });

  const courses = await res.json();
  return (
    <>
    <Banner></Banner>
    <PopularCourses></PopularCourses>
    <LearningTips></LearningTips>
    <TopInstructors></TopInstructors>
    <TrendingCourses courses={courses} />
    </>
  );
}

