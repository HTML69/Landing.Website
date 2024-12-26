import "./header.css";
import BurgerMenu from "./BurgerMenu";

function Header() {
  return (
    <>
      <div className="header1">
        <div className="place">Bhaktaput Nepal</div>
        {/* <div className="main">
          <ul className="menu">
            <li>Home</li>
            <li>My Projects</li>
            <li>About me</li>
          </ul>
        </div> */}
        <div>
          <BurgerMenu />
        </div>
      </div>
      <hr />
    </>
  );
}

export default Header;
