import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProjectCard = ({ id, title, description, imgUrl }) => {
  
  return (
    <Col size={12} sm={6} md={4}>
      <Link to={`/project/${id}`} className="proj-link">
        <div className="proj-imgbx">
          <img src={imgUrl} />
          <div className="proj-txtx">
            <h4>{title}</h4>
          </div>
        </div>
      </Link>
    </Col>
  );
};
