import { useNavigate } from "react-router-dom"

const NotFound = () => {

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/")
    }
    return (
        <div>
            <p><b>404 Error!</b> Page you are looking for is not in this Website</p>

            <button onClick={handleNavigate}>Go Home</button>
        </div>
    )
}

export default NotFound;