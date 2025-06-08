import './navbar.css'

const Navbar = () => {
  return (
    <div id="navbar_container">
      
        <img src='../Images/brand_logo.png' id="brand_logo"/>

        <ul id="navbar_options">
            <li>MENU</li>
            <li>LOCATION</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
        </ul>

        <button id="navbar_button">Login</button>
      
    </div>
  )
}

export default Navbar;
