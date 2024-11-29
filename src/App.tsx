import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TestPage } from "./pages/TestPage/TestPage";
import { Results } from "./pages/Results/Results";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TestPage />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
