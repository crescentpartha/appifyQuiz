import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import NotFound from './components/ShardPage/NotFound/NotFound';
import Header from './components/ShardPage/Header/Header';
import Footer from './components/ShardPage/Footer/Footer';
import Login from './components/Authentication/Login/Login';
import Register from './components/Authentication/Register/Register';
import RequireAuth from './components/Authentication/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Register></Register>}></Route>
        <Route path='/notFound' element={
          <RequireAuth>
            <NotFound></NotFound>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;