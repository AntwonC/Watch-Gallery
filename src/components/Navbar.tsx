import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <img src='src/assets/star.png' alt="a yellow star"></img>
            <div className="navbar-elements">
                <div className="navbar-text">Home</div>
                <div className="navbar-text">Gallery</div>
            </div>
        </div>
    )
    
}

export default Navbar;