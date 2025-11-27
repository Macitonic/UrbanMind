import "./navbar.css";
import Button from "../button";

const navbar = () => {
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
              <a href="#">
                <Button
                  text="Report Issue"
                  onClick={console.log("navbar clicked")}
                  type="button"
                />
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="lineBreak"></div>
    </div>
  );
};

export default navbar;
