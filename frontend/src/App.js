import './App.css';
import Home from './pages/home/Home';
import List from './pages/list/List';
import Hotel from './pages/hotel/Hotel';
import Login from './pages/login/Login';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Profile from './pages/profile/Profile.jsx';
import Register from './pages/register/register.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoardAdmin from './pages/dashboardAdmin/dashBoardAdmin.jsx';
import ChangePassowrd from './pages/profile/changepassword/ChangePassword.jsx';
import Reviews from './pages/profile/reviews/Reviews.jsx';
import ChatPage from './pages/chat/chat.jsx';
import HostSection from './pages/becomeHost/becomeHost.jsx';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/hotels' element={<List/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/hotels/:id' element={<Hotel />} />
        <Route exact path='/chat' element={<ChatPage />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/profile/:id' element={<Profile />} />
        <Route exact path='/reviews/:id' element={<Reviews />} />
        <Route exact path='/dashBoardAdmin' element={<DashBoardAdmin />} />
        <Route exact path='/changepassword/:id' element={<ChangePassowrd />} />
        <Route exact path='/host' element={<HostSection/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
