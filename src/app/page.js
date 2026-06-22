import Banner from "@/Component/Banner";
import { LearningTips } from "@/Component/LearningTips";
import PopularCourses from "@/Component/PopularCourses";
import { TopInstructors } from "@/Component/TopInstructors";

export default function Home() {
  return (
    <>
    <h1>HI</h1>

    <Banner></Banner>
    <PopularCourses></PopularCourses>
    <LearningTips></LearningTips>
    <TopInstructors></TopInstructors>
    </>
  );
}

