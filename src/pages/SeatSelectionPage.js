import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SeatButton from "../components/SeatButton";
import SelectedSeatInfo from "../components/SelectedSeatInfo";

function SeatSelectionPage() {
    const navigate = useNavigate();
    const [selectedSeats, setSelectedSeats] = useState([]);

    const toggleSeat = (seat) => {
        setSelectedSeats((prev) =>
            prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
        );
    };

    const removeSeat = (seat) => {
        setSelectedSeats((prev) => prev.filter((s) => s !== seat));
    };

    return (
        <div style={styles.container}>
            {/* 좌석 선택 영역 */}
            <div style={styles.seatSelection}>
                <h1>좌석 선택</h1>
                <div style={styles.seatGrid}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((seat) => (
                        <SeatButton
                            key={seat}
                            seatNumber={seat}
                            isSelected={selectedSeats.includes(seat)}
                            onClick={toggleSeat}
                        />
                    ))}
                </div>
                {/* 추가 정보 출력 영역 */}
                <div style={styles.infoBox}>추후 정보 출력</div>
            </div>

            {/* 선택한 좌석 + 예매 버튼 */}
            <div style={styles.rightPanel}>
                <h3>선택한 좌석</h3>
                <div style={styles.selectedSeats}>
                    {selectedSeats.length > 0 ? (
                        selectedSeats.map((seat) => (
                            <SelectedSeatInfo key={seat} seatNumber={seat} onCancel={removeSeat} />
                        ))
                    ) : (
                        <p>선택된 좌석이 없습니다.</p>
                    )}
                </div>
                <button style={styles.bookButton} onClick={() => navigate("/summary", { state: { selectedSeats } })}>
                    예매하기
                </button>
            </div>
        </div>
    );
}

// 스타일 객체
const styles = {
    container: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        width: "80%",
        margin: "auto",
        marginTop: "50px",
    },
    seatSelection: {
        width: "65%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    seatGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: "10px",
        marginTop: "20px",
    },
    infoBox: {
        marginTop: "20px",
        width: "80%",
        height: "40px",
        border: "1px solid #ddd",
        textAlign: "center",
        lineHeight: "40px",
    },
    rightPanel: {
        width: "30%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        border: "1px solid #ddd",
    },
    selectedSeats: {
        width: "100%",
        minHeight: "100px",
        border: "1px solid #ccc",
        padding: "10px",
        textAlign: "center",
    },
    bookButton: {
        marginTop: "20px",
        width: "100%",
        padding: "10px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        cursor: "pointer",
        fontSize: "16px",
    },
};

export default SeatSelectionPage;
