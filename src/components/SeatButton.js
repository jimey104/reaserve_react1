function SeatButton({ seatNumber, isSelected, onClick }) {
    return (
        <button
            onClick={() => onClick(seatNumber)}
            style={{
                width: "40px",
                height: "40px",
                margin: "5px",
                borderRadius: "5px",
                background: isSelected ? "green" : "gray",
                border: "none",
            }}
        />
    );
}

export default SeatButton;
