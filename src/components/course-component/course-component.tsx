import type {TypeCoursesArray} from "../../models/Type-coursesArray.ts";
import type {FC, ReactNode} from "react";
import styles from './course-component.module.css'

export type CourseComponentProps = {
    course:TypeCoursesArray;
    children?: ReactNode;
}

export const CourseComponent: FC<CourseComponentProps>=({course, children})=>{
    return (
        <div className={styles.oneCourseContainer}>
            <h1><b>{course.title}</b></h1>
         <div className={styles.timeDiv}>
             <p>Month duration of course:{course.monthDuration}</p>
             <p>Hour Duration:{course.hourDuration}</p>
         </div>
            {children}
        </div>
    )
}