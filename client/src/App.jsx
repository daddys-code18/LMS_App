import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import MainLayout from './layout/MainLayout'
import HeroSection from './pages/student/HeroSection'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HeroSection />
      },
      {
        path: "login",
        element: <Login />
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
