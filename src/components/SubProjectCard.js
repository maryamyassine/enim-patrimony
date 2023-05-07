import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const SubProjectCard = ({ id,id1, title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <Link to={`/subproject/${id1}/${id}`} className="proj-link">
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
