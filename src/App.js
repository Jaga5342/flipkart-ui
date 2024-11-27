import Header from "./Header";
import Navbar from  "./Navbar";
import Content from "./Content";
import Cards from "./Cards";
import './index.css';
import { useState } from "react";
function App() {
  const[search,setSearch]=useState('');
  return (
    <>
    <Header search={search} setSearch={setSearch} />
    <Navbar />
    <Content />
    <Cards />
    </>
  );
}

export default App;
