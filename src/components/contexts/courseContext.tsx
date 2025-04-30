import { createContext } from "react";

export interface CourseType {
    course : string | null
}

const courseContext = createContext<CourseType>({course : null});

export default courseContext;