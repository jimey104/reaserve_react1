import { useLocation, useNavigate } from "react-router-dom";

function BookingSummaryPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const selectedSeats = location.state?.selectedSeats || [];

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>예매 정보 확인</h1>
            <p>선택한 좌석을 확인하고 결제하세요.</p>
            <h3>선택한 좌석:</h3>
            <p>{selectedSeats.length > 0 ? selectedSeats.join(", ") : "없음"}</p>
            <button onClick={() => navigate("/confirmation")}>결제하기</button>
        </div>
    );
}

export default BookingSummaryPage;
