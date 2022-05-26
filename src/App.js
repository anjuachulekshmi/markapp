import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  'bootstrap/dist/js/bootstrap.bundle.min.js';
import Student from './Component/Student';
import View from './Component/View';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <div>
     <BrowserRouter>
     <Routes>
       <Route path="/" exact element={<Student/>}/>
       <Route path="/View" exact element={<View/>}/>
     </Routes>
     </BrowserRouter>
   </div>
  );
}

export default App;
