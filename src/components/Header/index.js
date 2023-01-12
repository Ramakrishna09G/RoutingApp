// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="header-container">
    <div className="wave-img-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        className="wave-logo-img"
        alt="wave"
      />
      <p className="wave-title">Wave</p>
    </div>
    <ul className="nav-menu">
      <li className="nav-item">
        <Link to="/" className="item-name">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/about" className="item-name">
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/contact" className="item-name">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
