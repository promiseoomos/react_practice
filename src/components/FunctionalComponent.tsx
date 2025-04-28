import { useState } from "react";

const FunctionalComponent = () => {
    const  [ course, setCourse ] = useState("React")

    const handleClick = (course : string) => {
        setCourse(course)
    }
    
    
    return (
        <div>
            We are in a Functional Component at the Moment Studying {course}

            <button onClick={() => handleClick('Vue')}>Change Course</button>

            {
                course == 'React' ? (<p>This is a React Course Page</p>) : course == 'Vue' ? (<p>This is a Vue Course Page</p>) : (<p>Please check your Options</p>)
            }
        </div>
    )
}

export default FunctionalComponent;