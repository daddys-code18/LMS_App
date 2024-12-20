import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import MainLayout from './layout/MainLayout'
import HeroSection from './pages/student/HeroSection'
import Courses from './pages/student/Courses'
import MyLearning from './pages/student/MyLearning'
import Profile from './pages/student/Profile'
import Sidebar from './pages/admin/Sidebar'
import Dashboard from './pages/admin/Dashboard'
import CourseTable from './pages/admin/course/CourseTable'
import AddCourse from './pages/admin/course/AddCourse'
import EditCourse from './pages/admin/course/EditCourse'
import CreateLecture from './pages/admin/lecture/Createlecture'
import EditLecture from './pages/admin/lecture/EditLecture'
import CourseDetail from './pages/student/CourseDetail'
import CourseProgress from './pages/student/CourseProgress'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (<>
          <HeroSection />
          <Courses />
        </>)
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "my-learning",
        element: <MyLearning />
      },
      {
        path: "profile",
        element: <Profile />
      },
      // {
      //   path: "course/search",
      //   element: (
      //     // <ProtectedRoute>
      //       // <SearchPage />
      //     // </ProtectedRoute>
      //   ),
      // },
      {
        path: "course-detail/:courseId",
        element: (
          // <ProtectedRoute>
          <CourseDetail />
          // </ProtectedRoute>
        ),
      },
      {
        path: "course-progress/:courseId",
        element: (
          // <ProtectedRoute>
          // <PurchaseCourseProtectedRoute>
          <CourseProgress />
          // </PurchaseCourseProtectedRoute>
          // </ProtectedRoute>
        ),
      },
      //Admin routes start from here
      {
        path: "admin",
        element: <Sidebar />,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />
          },
          {
            path: "course",
            element: <CourseTable />
          },
          {
            path: "course/create",
            element: <AddCourse />
          }, {
            path: "course/:courseId",
            element: <EditCourse />,
          },
          {
            path: "course/:courseId/lecture",
            element: <CreateLecture />,
          },
          {
            path: "course/:courseId/lecture/:lectureId",
            element: <EditLecture />,
          },

        ]
      }
    ]
  }
])
function App() {


  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

export default App
