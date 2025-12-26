
import './App.css'

function App() {

 const coursesTitleArray:string[] = [
    'JavaScript Complex',
    'Java Complex',
    'Python Complex',
    'QA Complex',
    'Fullstack',
    'Frontend'
  ];
  return (
    <ul>
      {coursesTitleArray.map((course, i) => {
        return (
            <li className='coursesTitleArrayClass' key={i}>{course}</li>
        )
      })}
    </ul>
  )
}

export default App
