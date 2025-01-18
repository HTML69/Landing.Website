import "./header.css";
import BurgerMenu from "./BurgerMenu";

function Header({ homeRef, projectRef, educationRef, aboutmeRef }) {
  return (
    <>
      <div className="header1">
        <div className="place">
          <img src="./src/assets/logo.svg" alt="Icon" className="icon" />
          Bhaktaput Nepal.
        </div>

        <div>
          <BurgerMenu
            homeRef={homeRef}
            projectRef={projectRef}
            educationRef={educationRef}
            aboutmeRef={aboutmeRef}
          />
        </div>
      </div>
      <hr />
    </>
  );
}

export default Header;
