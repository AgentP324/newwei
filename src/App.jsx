import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import New from './components/New'
import Lower from './components/Lower';
import Mid from './components/Mid';
import NewProduct from './components/NewProduct';
import './App.css'


const App = () => {
  return(
  <>
    <New />
    <Lower />
    <Mid />
    <NewProduct />
  </>
)};



export default App