
import { Link } from 'react-router-dom';
import './style.css';
import PropTypes from 'prop-types';
<link rel="stylesheet" href="path/to/font-awesome/css/all.min.css"></link>
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import the Font Awesome CSS
// import {cartItems} from './numar.jsx'

export const Navbar = (props) => {
	return (
		<div
			className="navbar shadow-md"
			style={{
				backgroundColor: props.color ?? 'transparent',
				color: props.textColor ?? 'black',
			}}
		>
			<div className="logo">
				 < img src='https://thumbs.dreamstime.com/b/logo-inscription-botanica-painted-leaves-227251739.jpg' style={{ width: '80px', height: 'auto' }} />
				 </div>
				 <div>
			<i className="fas fa-home"></i>

				<Link className="text-1xl" to="/">Home</Link>
				</div>
			
			<div className="menu">
				<div>
				<i className="fas fa-key"></i>
					<Link to="/admin">Admin</Link>
				</div>
				<div>
				<i className="fas fa-shopping-cart"></i>
				{/* // E simbolul de cos de cumparaturi imprtat prin FontAwesome// */}
					<Link to="/cart">Cart </Link>
					
				</div>
				<div></div>
			</div>
		</div>
	);
};

Navbar.propTypes = {
	color: PropTypes.string,
	textColor: PropTypes.string,

	//e string pt e o culoare si va bazai daca uiti sa scrii culoare Navbar color=(23)
};





const MyComponent = () => {
  return (
    <div>
      <i className="fas fa-shopping-cart"></i>
      {/* E simbolul de cos de cumparaturi imprtat prin FontAwesome*/}
    </div>
  );
};

export default MyComponent;