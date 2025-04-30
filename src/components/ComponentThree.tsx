import CourseContext from "./contexts/courseContext"
import { useContext } from "react"

const ComponentThree = () => {
    const { course } = useContext(CourseContext)

    return (
        <div>
            <div>
                The Course we are studying is {course}
            </div>
        </div>
    )
}

export default ComponentThree