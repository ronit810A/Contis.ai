import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../assets/images/Logo_1.png";
import Navbar from "../componets/navbar";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header-container row ">
                    <div className="col-md-2">
                        <div className="header-logo">
                            <Link to="/"> <img src={logo} alt="" /></Link>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className=" nav-bar">
                            <Navbar />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="header-btn">
                            <button className='header-btn-a'>Log in</button>
                            <button className='header-btn-b'>
                                <Link to="/signup">Sign up</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    );
}

export default Header;