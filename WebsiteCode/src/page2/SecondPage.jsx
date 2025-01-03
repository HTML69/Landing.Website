import "./SecondPage.css";
import Card from "./Card";
import { projects } from "../assets/datas/assets";

function SecondPage() {
  return (
    <>
      <hr />
      <div>
        <header>education</header>
        <div className="project-list">
          {projects.map((project, index) => (
            <Card
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default SecondPage;
