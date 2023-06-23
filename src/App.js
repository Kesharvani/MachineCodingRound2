import "./styles.css";
import { Routes, Route } from "react-router-dom";

import { HabitArchivePage } from "./pages/index";
import { HabitListingPage } from "./pages/index";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HabitListingPage />} />
        <Route path="/archive" element={<HabitArchivePage />} />
      </Routes>
    </>
  );
}
