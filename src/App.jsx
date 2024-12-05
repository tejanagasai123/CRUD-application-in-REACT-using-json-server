import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StuTable from './components/StuTable'
import View from './components/View'
import Newdata from './components/Newdata'
import Edit from './components/Edit'

const App = () => {
  return (
    <div className="mx-5 p-10 flex justify-center items-center">
  <BrowserRouter>
<Routes>
  <Route  path='/'  element={<StuTable/>}/>
  <Route  path='/student/Newdata'  element={<Newdata/>}/>
  <Route  path='/student/View/:stuid'  element={<View/>}/>
  <Route  path='/student/Edit/:studid'  element={<Edit/>}/>
  </Routes>
  </BrowserRouter>
  </div>

  )
}

export default App