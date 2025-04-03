import { useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>티켓 예매</h1>
            <button onClick={() => navigate("/select-seat")}>예매하기</button>
        </div>
    );
}

export default HomePage;
