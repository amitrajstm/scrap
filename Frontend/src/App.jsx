import { useState } from "react";
import RandomCard from "./Pages/Home.jsx";
import "./App.css";

function App() {
  return (
    <>
      <p className="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800">
        Click on the Vite and React logos to learn more
      </p>
      <RandomCard></RandomCard>
    </>
  );
}

export default App;
