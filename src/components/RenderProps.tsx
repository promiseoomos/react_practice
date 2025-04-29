import { useState } from "react";


const RenderProps = ({ course } : { course : (text: string) => string  }) => {

    const [view, setView] = useState('');
    
    setView(course('view'));

    return (
        <div>
            <p>We are Rendering Props Here for {view} Course</p>
        </div>
    )
}

export default RenderProps