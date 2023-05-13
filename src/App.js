import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from "./components/nav-bar/NavBar"
import Photos from './pages/photos/Photos';
import Home from './pages/home/Home';
import Posts from './pages/posts/Posts';
import Contacts from './pages/contacts/Contacts';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path='posts' element={<Posts />}></Route>
        <Route path='photos' element={<Photos />}></Route>
        <Route path='contacts' element={<Contacts />}></Route>
      </Routes>
    </div>
  );
}

export default App;
