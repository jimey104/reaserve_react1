import { useNavigate } from "react-router-dom";

function ConfirmationPage() {
    const navigate = useNavigate();

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>예매 완료</h1>
            <p>예매가 완료되었습니다.</p>
            <button onClick={() => navigate("/")}>홈으로</button>
        </div>
    );
}

export default ConfirmationPage;
