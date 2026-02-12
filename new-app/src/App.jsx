import { useState } from 'react'
import './App.css'
import { createContext } from 'react'
import { useContext } from 'react';
import DataProvider from './context/DataProvider.jsx';
import DataConsumer from './components/DataConsumer.jsx';


// Prop Drilling
// function Box({children}){
//   return(
//     <div style={{border: "2px solid blue", padding: "20px", margin: "10px"}}>
//       {children}
//     </div>
//   )
// }
// function App() {
//   const [user, setUser] = useState("Rishabh")

//   return (
//     <>
//       <Parent userr={user} />
//       <Box>
//         <h1>Hello</h1>
//       </Box>
//     </>
//   )

//   function Parent({userr}){
//       return <Child user={userr} />
//   }
//   function Child({user}){
//       return <GrandChild user={user} />
//   }
//   function GrandChild({user}){
//       return <h1>Hi my name is {user}</h1>
//   }
// }


// Context Api

//1. creating the context
// const userContext = createContext();

// function App(){
//   const [user, setUser] = useState("Rishabh")
// //2. Provide contexy
//   return (
//     <>
//       <userContext.Provider value={{user, setUser}}>
//         <Parent />
//       </userContext.Provider>
//     </>
//   )

//   function Parent(){
//       return <Child  />
//   }
//   function Child(){
//       return <GrandChild  />
//   }
//   function GrandChild(){
// //3. consuming the context
//     const consumer = useContext(userContext)
//       return <h1>Hi my name is {consumer.user}</h1>
//   }
// }



function App() {
  return (
    <>
    <DataProvider >
        <DataConsumer />
    </DataProvider >
  
    </>
  )
}

export default App
