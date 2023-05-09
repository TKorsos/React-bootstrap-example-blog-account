import React from "react";
import './App.css';
import 'bootstrap/dist/js/bootstrap';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Home from "./bootstrap/Home";
import Blog from "./bootstrap/Blog";
import Account from "./bootstrap/Account";
import Nav from "./bootstrap/Nav";
import SignIn from "./bootstrap/Account/SignIn";
import SignUp from "./bootstrap/Account/SignUp";
import Footer from "./bootstrap/Footer";

export default function App() {
  return <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route index element={ <Home /> } />
          <Route path="/blog" element={ <Blog /> } />
          <Route path="/account" element={ <Account /> } />
          <Route path="/account/signin" element={ <SignIn /> } />
          <Route path="/account/signup" element={ <SignUp /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
  </>
}