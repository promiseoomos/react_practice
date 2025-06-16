import { memo } from "react";

const showCounter = ({counter, title} : {counter : number | string, title : string}) => {

    console.log("This is title " + title + " For Counter " + counter )

    return (
        <div>
            <p>{title} value is: {counter}</p>
        </div>
    )
}

export default memo(showCounter);