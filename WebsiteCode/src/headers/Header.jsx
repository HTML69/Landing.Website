import "./header.css";
import BurgerMenu from "./BurgerMenu";

function Header() {
  return (
    <>
      <div className="header1">
        <div className="place">
          <img src="./src/assets/logo.svg" alt="Icon" className="icon" />
          Bhaktaput Nepal
        </div>

        <div>
          <BurgerMenu />
        </div>
      </div>
      <hr />
    </>
  );
}

export default Header;
