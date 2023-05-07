import principaleData from "../data/principale.json";
import annexeData from "../data/annexe.json";
import { useParams } from "react-router-dom";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';


export const ProjectDetails = () => {
  const { id } = useParams();
  console.log(id) // Retrieve the project id from the URL
  var project;
  if (id < 9) {
    project = principaleData.departements[id - 1];
    console.log('principale') // Retrieve the specific project using the id

  }
  else {
    project = annexeData.departements[id - 9];
    console.log(project)

  }
  return (
    <section className="project-details">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
    </section>
  );
};
