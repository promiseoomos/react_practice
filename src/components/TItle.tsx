import { memo } from "react";

const Title = () => {

    console.log("This is Title Component")

    return (
        <div>
            <p>This is the Title Component</p>
        </div>
    )
}

export default memo(Title);