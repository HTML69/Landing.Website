import "./FirstPage.css";
import ButtonCool from "./ButtonCool";
import Profile from "./profile";

function FirstPage() {
  return (
    <>
      <div className="data">
        <Profile />
        <span className="web">WEB</span>
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
