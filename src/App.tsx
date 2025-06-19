// import { useState } from 'react'
// import SubComponent from './components/SubComponent'

import { Routes, Route } from 'react-router-dom'
import './App.css'
// import CSSStyle from './components/CSSStyle'
// import ClassBasedComponent from './components/ClassBasedComponents'
// import FunctionalComponent from './components/FunctionalComponent'
// import LogOutLogin from './components/LogOutLogin'
// import ListComponent from './components/ListComponent'
// import CounterApp from './components/CounterApp'
// import CounterWithReducer from './components/CounterWithReducer'
// import Forms2 from './components/Forms2'
// import CounterRP from './components/CounterRP'
// import CounterClickRP from "./components/CounterClickRP"
// import CourseContext from './components/contexts/courseContext'
// import ComponentOne from "./components/ComponentOne"
// import ComponentThree from './components/ComponentThree'
// import UseEffectLesson from './components/useEffectLesson'
// import Timer from './components/Timer'
// import Posts from './components/Posts'
// import UseCallBack from './components/UseCallBack'
// import PostsListWOReducer from './components/PostsListWOReducer'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import Navbar from './components/NavBar'
import OrderConfirmation from './components/OrderConfirmation'
import NotFound from './pages/NotFound'
import Posts from './components/Posts'
import PostDetail from './pages/PostDetail'

function App() {
  return (
    <div className='w-full'>
      {/* <p>The Root Component</p> */}
      {/* <SubComponent text="texts">
        <div>
          Here we go
        </div>
      </SubComponent>
      <ClassBasedComponent text="Textual Class">We are in a Class Component</ClassBasedComponent>

      <FunctionalComponent /> */}

      {/* <LogOutLogin /> */}

      {/* <ListComponent /> */}

      {/* <CounterApp /> */}

      {/* <Forms2 /> */}

      {/* <CounterRP render={(counter, handleIncrement) => <CounterClickRP counter={counter} handleIncrement={handleIncrement} />} /> */}

      {/* <CounterWithReducer /> */}

      {/* <CourseContext.Provider value={{ course : 'React'}}>
        <ComponentOne />
      </CourseContext.Provider> */}

      {/* <withInstitution /> */}

      {/* <UseEffectLesson /> */}
      {/* <Timer /> */}

      {/* <Posts /> */}

      {/* <UseCallBack /> */}

      {/* <PostsListWOReducer /> */}

      {/* <CSSStyle /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="about" element={<AboutPage />}></Route>
        <Route path="contact" element={<ContactPage />}></Route>
        <Route path="order-confirmation" element={<OrderConfirmation />} />
        <Route path="*" element={<NotFound />} />
        <Route path="posts" element={<Posts />} />
        <Route path="posts/:postId" element={<PostDetail />} />
      </Routes>
    </div>
  )
}

export default App
