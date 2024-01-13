import React from 'react'
import IndexPage from './Pages/IndexPage'
import LoginRegisterPage from './Pages/LoginRegisterPage'
import UserPage from './Pages/UserPage'
import UpdatePage from './Pages/UpdatePage'
import CreatePage from './Pages/CreatePage'
import BookingPage from './Pages/BookingPage'

const AirbnbAnalysis = () => {
  return (
    <div className='w-full h-screen bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center'>
        <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Airbnb Analysis
        </p>
        <p className='pt-4'>
          I have tried deploy this full-stack MERN project to many websites
          but they have said that my project violates their user guidances.
          So I'm thinking instead I will analysis my code to help you guys 
          understand what I did in this project!
        </p>
        <IndexPage />
        <LoginRegisterPage />
        <UserPage />
        <UpdatePage />
        <CreatePage />
        <BookingPage />
      </div>
    </div>
  )
}

export default AirbnbAnalysis