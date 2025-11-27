import "./hero.css";
import {useNavigate} from "react-router-dom";

import Button from"../button"
const hero = () => {
  const navigate = useNavigate();
  return (

    <div>
      <div className="hero-content">
        <img src="" alt="hero-image" />
        <h1>UrbanMind</h1>
        <p>Report electricity issues instantly</p>
        <Button text="Report an Issue" onClick={()=> navigate("/report")} type="button"/>
      </div>

      <footer className="links">
        <ul>
          <li>Privacy Policy</li>
          <li>Terms of Services</li>
          <li>Contact Us</li>
        </ul>
        &copy;2025 UrbanMind.All rights reserved.
      </footer>
    </div>
  );
};

export default hero;
