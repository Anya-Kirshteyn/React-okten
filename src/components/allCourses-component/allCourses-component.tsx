import styles from "./allCourses.module.css"
import {coursesArray} from "../../data/coursesArray.ts";
import {CourseComponent} from "../course-component/course-component.tsx";


export const AllCoursesComponent=()=>{
    return (
        <div className={styles.allCourses}>
            {coursesArray.map((courseVal,i)=>
                <CourseComponent course={courseVal} key={i}>
                    {courseVal.modules.map(modul=>(
                        <ul>
                            <li>{modul}</li>
                        </ul>
                    ))}
                    </CourseComponent>
            )}
        </div>
    )
}