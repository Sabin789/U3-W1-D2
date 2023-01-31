import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome';
import AllBooks from './components/AllBooks';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyNav />
    <Welcome />
    <AllBooks />
     <MyFooter />
  </React.StrictMode>
);

