import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css"
import { FaUserCircle } from 'react-icons/fa';
const Header= ()=>(
    <header className="header">
        <div className="logo">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYt3pWcX4oGm1F8n1kKXl0b2r7b5k2kU8J4g&usqp=CAU" alt="logo" width="75px"/>
            <h2>React App</h2>
        </div>
        <div className="search-bar">
            <input type="text" placeholder="Search..."/>
            <button>Search🔍</button>
        </div>
        <div className="user-icon">
        <FaUserCircle size={30} />
      </div>
    </header>
)
const root =ReactDOM.createRoot(document.getElementById("root"))
root.render(<Header/>)