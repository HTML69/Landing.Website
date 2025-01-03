import "./SecondPage.css";
import Card from "./Card";
import profile1 from "../assets/profile/1.jpg";
import profile2 from "../assets/profile/2.jpg";

const projects = [
  {
    title: "Project One",
    description: "A description of project one.",
    image: profile1,
  },
  {
    title: "Project Two",
    description: "A description of project two.",
    image: profile2,
  },
  {
    title: "Project Three",
    description: "A description of project three.",
    image: profile1,
  },
];
function SecondPage() {
  return (
    <>
      <hr />
      <div>
        <Card />
        <header>education</header>
        <body>mva</body>
      </div>
    </>
  );
}

export default SecondPage;
