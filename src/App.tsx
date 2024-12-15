import "./App.css";
import { useEffect, useState } from "react";
import SearchDataFun from "./SearchDataFun.jsx";
import MyForm from './MyForm';

function App() {

  return (
    <>
      <div className="container">
        <header>
          <h1 className="header">Forms. Task #5.</h1>
        </header>
        <main>
          <MyForm />
        </main>
      </div>
    </>
  );
}

export default App;
