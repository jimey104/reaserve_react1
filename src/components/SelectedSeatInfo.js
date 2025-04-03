function SelectedSeatInfo({ seatNumber, onCancel }) {
    return (
        <div style={{ display: "flex", alignItems: "center", margin: "5px" }}>
            <span style={{ marginRight: "10px" }}>좌석 {seatNumber}</span>
            <button onClick={() => onCancel(seatNumber)} style={{ background: "red", color: "white", border: "none", padding: "5px", cursor: "pointer" }}>
                취소
            </button>
        </div>
    );
}

export default SelectedSeatInfo;
