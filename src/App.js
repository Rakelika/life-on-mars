
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

//Pages: 
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import HouseFormPage from './pages/HouseFormPage/HouseFormPage';
import HousesPage from './pages/HousesPage/HousesPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import SingleHousePage from './pages/SingleHousePage/SingleHousePage';

//Components:
import NavComponent from './core/NavComponent/NavComponent'

function App() {

  const {user} = useSelector((state) => state.UserReducer);

  return (
    <div className="App">
    <NavComponent></NavComponent>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/about" element={<AboutPage />}></Route>
        <Route exact path="/contact" element={<ContactPage />}></Route>
        <Route exact path="/houses" element={<HousesPage />}></Route>
        <Route exact path="/login" element={<LoginPage />}></Route>
        <Route exact path="/signup" element={<SignUpPage />}></Route>
        <Route exact path="/profile" element= {user && user.id ? (<ProfilePage />) : (<Navigate to="/" replace></Navigate>)} ></Route>
        <Route exact path="/single-house" element={<SingleHousePage />}></Route>
        <Route exact path="/house-form" element={<HouseFormPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
