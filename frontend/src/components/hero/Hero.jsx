import "./hero.css";
import Button from"../button"
const hero = () => {
  const handleClick = ()=>{
    alert("Report Button Clicked")
  }
  return (

    <div>
      <div className="hero-content">
        <img src="" alt="hero-image" />
        <h1>UrbanMind</h1>
        <p>Report electricity issues instantly</p>
        <Button text="Report an Issue" onClick={handleClick} type="button"/>
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
