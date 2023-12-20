import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Details from './pages/Details';
import Admin from './pages/Admin';
import { Routes, Route  } from 'react-router-dom';
import { Navbar } from './components/Navbar';





const App = () => {
	return (
		<>
			<Navbar color="white" textColor="#4F6F52" />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/admin" element={<Admin />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/productName" element={<Details />} />
			</Routes>
		</>
	);
};

export default App

