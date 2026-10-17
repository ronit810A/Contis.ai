import 'bootstrap/dist/css/bootstrap.min.css'
import logo from "../assets/images/Logo_1.png"


function Header(){
    return(
        <header className="header">
            <div className="container">
                <div className="header-container row ">
                    <div className="col-md-2">
                        <div className="header-logo">
                            <img src={logo} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className=" nav-bar">
                            <ul className='nav'>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="header-btn">
                            <button className='header-btn-a'>Loog in</button>
                            <button className='header-btn-b'>Sign up</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    );
}

export default Header;