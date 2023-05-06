import { Col } from "react-bootstrap";

export const ImageCard = ({ imageName, imgUrl }) => {
  
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-link">
        <div className="proj-imgbx">
          <img src={imgUrl} />
          <div className="proj-txtx">
            <h4>{imageName}</h4>
          </div>
        </div>
      </div>
    </Col>
  );
};
