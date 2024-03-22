const Header = () => {
      return (
            <header className="header">
                  <div >
                        <img className="logo" src="https://media.istockphoto.com/id/1342018470/vector/burger-king-vector-logo-design-burger-with-crown-and-mustache-icon-logo-concept.jpg?s=1024x1024&w=is&k=20&c=8yOJRXqVIDC2WlDUioWNk6oliWsg9idgH6uNhsoiK6E=" />
                  </div>
                  <div className="ul-items">
                        <nav className="navbar nav-items">
                              <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About us</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Cart</a></li>
                                    <li>
                                          <a href="#" type="btn">
                                                <button className="login-logout-btn">
                                                      <span class="icon">Login</span>
                                                </button>
                                          </a>
                                    </li>
                              </ul>
                        </nav>
                  </div>
            </header>
      )
};

export default Header;
