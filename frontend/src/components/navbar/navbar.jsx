import "./navbar.css";
import Button from "../button";
import { useNavigate } from "react-router-dom";

const navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <header>
        <nav>
          <div className="logo">
            <img src="" alt="logo" />
            <p>UrbanMind</p>
          </div>

          <ul>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <Button
                text="Report Issue"
                onClick={() => navigate("/report")}
                type="button"
              />
            </li>
          </ul>
        </nav>
      </header>
      <div className="lineBreak"></div>
    </div>
  );
};

export default navbar;
