import './App.css'
import HomePage from "./pages/HomePage"
import SeatSelectionPage from "./pages/SeatSelectionPage";
import BookingSummaryPage from "./pages/BookingSummaryPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import {Route, BrowserRouter, Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/select-seat" element={<SeatSelectionPage />} />
            <Route path="/summary" element={<BookingSummaryPage />} />
            <Route path="/confirmation" element={<ConfirmationPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
