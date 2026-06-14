import { createApp } from 'mettle';
import Router from './router/index';
import 'picnic/releases/picnic.min.css';
import Navbar from './components/navbar';
import './style.css';

function App() {
  return <>
    <Navbar></Navbar>
    <div class='container'>
      <div id='router'><Router></Router></div>
      <p>Copyright (c) 2026 LapisNet</p>
    </div>
  </>;
}

createApp(<App />, '#app');
