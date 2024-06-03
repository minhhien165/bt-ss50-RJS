<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
=======
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import Student from "./components/Student";
import Employee from "./components/Employee";
import Login from "./components/Login";
import Account from "./components/Account";
import PrivateRouter from "./components/PrivateRouter";
import TeamsIndex from "./components/TeamsIndex";
import Team from "./components/Team";
import PrivateRouterB8 from "./components/PrivateRouterB8";
import LazyLoadComp from "./components/LazyLoadComp";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/student/:name" element={<Student />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<PrivateRouter />}>
            <Route path="/account" element={<Account />} />
          </Route>
          <Route path="/" element={<TeamsIndex />} />
          <Route path="/:teamId" element={<Team />} />
          <Route path="/admin/*" element={<PrivateRouterB8 />} />
        </Routes>
      </Router>
      <LazyLoadComp />
    </div>
  );
};

export default App;
>>>>>>> f25027a42f754d047ad50bf25fd29962648e7e17
