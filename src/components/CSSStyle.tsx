import { useState } from "react"
import classes from "../assets/css/test.module.css"

const CSSStyle = () => {

    const [color, setColor] = useState(false)

    const handleColorChange = () => {
        setColor(() => !color)
    }
    return (
        // <div style={{ color : "red", backgroundColor: "black" }}>
        //     Background CSS
        // </div>

        <div className={color ? classes.container : classes.containter1}>
            <p className={color? classes.text : classes.text1}>CSS Styling with Modules</p>

            <button onClick={handleColorChange}>Change Color</button>
        </div>
    )
}

export default CSSStyle