import "./SecondPage.css";
import Card from "./Card";
import assets from "../assets/datas/assets.json";
function SecondPage() {
  return (
    <>
      <hr />
      <div className="project-list">
        {assets.projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>
    </>
  );
}

export default SecondPage;
