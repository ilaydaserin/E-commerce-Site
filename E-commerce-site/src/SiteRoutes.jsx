import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PagesNotFound from "./pages/PagesNotFound";
import { Product, ProductLayout, Products, SpecificCategory } from "./products";
import Login from "./pages/Login";
import Fav from "./pages/Fav";
import PrivateRoute from "./PrivateRoute";

function SiteRoutes({handleLogin, user}) {
  return (
    <Routes>
      <Route path="/" element={<Home user={user}/>} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products" element={<ProductLayout/>} >
        <Route index={true} element={<Products user={user}/>} /> 
        <Route path="category/:categoryName" element={<SpecificCategory user={user}/>} />
        <Route path="product/:productId" element={<Product user={user}/>} />
      </Route>
      <Route path="/login" element={<Login handleLogin={handleLogin}/>} />
      <Route path="/fav" element={<PrivateRoute user={user}><Fav user={user
      }/></PrivateRoute>} />
      <Route path="/*" element={<PagesNotFound />} />
    </Routes>
  );
}

export default SiteRoutes;
