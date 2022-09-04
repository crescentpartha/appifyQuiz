import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import NotFound from './components/ShardPage/NotFound/NotFound';
import Header from './components/ShardPage/Header/Header';
import Footer from './components/ShardPage/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/notFound' element={<NotFound></NotFound>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;