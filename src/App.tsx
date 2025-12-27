
import './App.css'
type coursesAndDurationType={title:string, monthDuration:number}
const coursesAndDurationArray:coursesAndDurationType[] = [
  {title: 'JavaScript Complex', monthDuration: 5},
  {title: 'Java Complex', monthDuration: 6},
  {title: 'Python Complex', monthDuration: 6},
  {title: 'QA Complex', monthDuration: 4},
  {title: 'FullStack', monthDuration: 7},
  {title: 'Frontend', monthDuration: 4}
];

function App() {


  return (
    <>
      {coursesAndDurationArray.map(course=>(
          <div key={course.title}>
            <h2>{course.title}</h2>
            <p>{course.monthDuration }</p>
          </div>
      ))}
    </>
  )
}

export default App
