import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <>
     <Navbar/>
     <Routes>
      <Route exact path='/' Component={Home}/>
      <Route exact path='/products' Component={Products}/>
      <Route exact path='/products/:id' Component={Product}/>
      <Route exact path='/cart' Component={Cart}/>
      <Route exact path='/login' Component={Login}/>
      <Route exact path='/register' Component={Register}/>
     </Routes>
    </>
  );
}

export default App;

// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Home from './components/Home';
// import Navbar from './components/Navbar';
// import Products from './components/Products';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Route exact path="/" component={Home} />
//       <Route exact path="/products" component={Products} />
//     </Router>
//   );
// }

// export default App;
