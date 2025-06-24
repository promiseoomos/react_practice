import { useNavigate } from "react-router-dom";

const HomePage = () => {

    const navigate = useNavigate();
    // const handleNavigate = () => {
    //     navigate("order-confirmation")
    // }
    return (
        <div>
            <p>This is the Home Page</p>

            <button onClick={() => navigate("order-confirmation")}>Place your Order</button>
        </div>
    )
}

export default HomePage;