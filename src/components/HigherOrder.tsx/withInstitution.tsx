import { ComponentState, useState } from "react";

const withInstitution = (Component : ComponentState) => {

    const NewComponent = () => {
        const [institution, setInstitution] = useState("")
        
        const handleCategoryChange = (event : string) => {
            setInstitution(event)
        }

        return (
            <Component institution={institution} handleCategoryChange={handleCategoryChange} />
        )
    }

    return NewComponent;
}

export default withInstitution;