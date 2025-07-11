import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="rounded w-full flex justify-between flex-wrap">
        <Routes>
          <Route path="/" element={<MainContent />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
