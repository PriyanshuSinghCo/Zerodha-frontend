import React from "react";
import { Link} from "react-router-dom";

function Navbar() {
  return (
 
      <nav class="navbar navbar-expand-lg border-bottom"
      style={{backgroundColor: "#fff"}}
      >
        <Link class="navbar-brand" to="/">
          <img src="media/images/logo.svg" style={{width:"25%"}} alt="Logo" />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse p-2" id="navbarNav">
            
         <form className="d-flex" role="search">
         <ul class="navbar-nav">
            <li class="nav-item active">
              <Link class="nav-link active" aria-current="page" to="/signup">
                Signup
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/about">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/product">
                Product
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="pricing">
                Pricing
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="support">
                Support
              </Link>
            </li>
          </ul>
         </form>
        </div>
      </nav>

  );
}

export default Navbar;
