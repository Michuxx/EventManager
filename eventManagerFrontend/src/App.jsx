import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import "./App.css";
import EventPage from "./components/EventPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/HomePage/:id" element={<EventPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
