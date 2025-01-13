import "./ButtonCool.css";

function ButtonCool() {
  const handleClick = () => {
    window.open("https://www.instagram.com/aaryan_boy12/", "_blank");
  };
  return (
    <>
      <button className="connect-button" onClick={handleClick}>
        <span className="online-dot"></span>
        Let's Connect
      </button>
    </>
  );
}

//jevjgusvjgjsveu
export default ButtonCool;
