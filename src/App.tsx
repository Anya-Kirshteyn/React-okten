
import './App.css'
import {useFetch} from "./hooks/useFetch.tsx";

function App() {

 const users= useFetch<{id:number,name:string}[]>('https://jsonplaceholder.typicode.com/users')
  console.log(users)
  return (
    <>

    </>
  )
}

export default App
