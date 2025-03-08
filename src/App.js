import React from "react";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import Feed from "./Components/Feed";
import ArtistList from "./Components/ArtistList";
import ProductList from "./Components/ProductList";
import Footer from "./Components/Footer";
import "./styles.css";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="home-container">
          <Feed />
          <ProductList />
        </div>
      </div>
      <div class="sidebar-right">
        <button className="seller-btn">Become a Seller</button>
        <ArtistList />
        <Footer />
      </div>
    </div>
  );
}

export default App;
