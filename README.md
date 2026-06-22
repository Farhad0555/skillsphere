# SkillSphere

## Project Purpose

SkillSphere is an online learning platform where users can explore various courses, view detailed course information, discover trending learning opportunities, and manage their learning journey through a modern and responsive user interface built with Next.js.

## Live URL

https://your-live-site-url.vercel.app

## Features

* Browse all available courses from a remote API
* View detailed information for each course
* Dynamic routing using Next.js App Router
* Trending Courses section highlighting top-rated courses
* Learning Tips section for effective study habits
* Top Instructors showcase
* Responsive design for mobile, tablet, and desktop devices
* Loading spinner during data fetching
* Toast notifications for user actions
* Custom 404 Not Found page
* Authentication support
* Clean and organized App Router folder structure

## Technologies Used

* Next.js 15/16 (App Router)
* React
* Tailwind CSS
* DaisyUI
* JavaScript (ES6+)

## NPM Packages Used

* react
* react-dom
* next
* tailwindcss
* daisyui
* react-hot-toast
* better-auth
* mongodb
* @better-auth/mongo-adapter
* @better-auth/kysely-adapter
* @heroui/react
* @heroui/styles

## API Source

Course data is fetched from:

https://skillsphere-opal.vercel.app/data.json

## Installation

Clone the repository:

https://github.com/Farhad0555/skillsphere.git

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

## Folder Structure

```text
app/
├── page.jsx
├── layout.jsx
├── loading.jsx
├── not-found.jsx
├── courses/
│   ├── page.jsx
│   └── [id]/page.jsx
├── signin/
├── profile/

components/
├── Navbar.jsx
├── Footer.jsx
├── CourseCard.jsx
├── TrendingCourses.jsx
├── LearningTips.jsx
└── TopInstructors.jsx
```

## Author

Developed as part of the SkillSphere learning platform project using Next.js App Router.
