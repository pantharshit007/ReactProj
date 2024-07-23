import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Otp from './pages/Otp'
import CourseList from './pages/CourseList'
import Batches from './pages/Batches'

function App() {

  return (
    <div className='w-screen h-screen bg-slate-900'>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/otp-form' element={<Otp />} />
        <Route path='/course-list' element={<CourseList />} />
        <Route path='/batches' element={<Batches />} />


      </Routes>
    </div>
  )
}

export default App
