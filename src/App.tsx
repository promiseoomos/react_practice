// import { useState } from 'react'
// import SubComponent from './components/SubComponent'
import './App.css'
// import ClassBasedComponent from './components/ClassBasedComponents'
// import FunctionalComponent from './components/FunctionalComponent'
// import LogOutLogin from './components/LogOutLogin'
// import ListComponent from './components/ListComponent'
// import CounterApp from './components/CounterApp'
import CounterWithReducer from './components/CounterWithReducer'
import Forms2 from './components/Forms2'

function App() {
  return (
    <div className='w-full'>
      <p>The Root Component</p>
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

      <Forms2 />

      {/* <CounterWithReducer /> */}

      {/* <withInstitution /> */}
    </div>
  )
}

export default App
