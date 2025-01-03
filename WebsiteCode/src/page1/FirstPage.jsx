import "./FirstPage.css";
import ButtonCool from "./ButtonCool";
import Profile from "./Profile";

function FirstPage() {
  return (
    <>
      <div className="data">
        <span className="web">
          {" "}
          <Profile />
          WEB
        </span>
        <span className="designer">DESIGNER </span>
        <span className="and">
          &<ButtonCool />
        </span>
        <span className="developer">DEVELOPER</span>
      </div>
    </>
  );
}

export default FirstPage;
