import "./SecondPage.css";
import Card from "./Card";
import profile1 from "../assets/profile/1.jpg";
import profile2 from "../assets/profile/2.jpg";

const projects = [
  {
    title: "Project One",
    description:
      "A description of project lorem onefsdklfjlaskjfklsdajfksdjfksjdkfsdlfjlskdfjksd skfj skdfs jk jk kj jk jk kj kj  kj jkl kj kj k kjh jk jk hgj hj b j huj  hgj hgj hjk jhk hgj gh.",
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
        <header>education</header>
        <body>mva</body>
      </div>
    </>
  );
}

export default SecondPage;
