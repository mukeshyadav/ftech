import React from "react";
import { Row, Col } from "reactstrap";

export const ArticleDetail = props => {
  console.log(props);
  const {
    title,
    description,
    author,
    published_date,
    imgs,
    category,
    likes
  } = props.data;

  return (
    <>
      <Row>
        <Col sm="9">
          <Row>
            <Col>
              <h2 className="h2">{title}</h2>
            </Col>
          </Row>
          <Row>
            <Col sm="9">
              {author} <br /> {category}
            </Col>
            <Col sm="3">{published_date}</Col>
          </Row>
          <Row>
            <Col>
              <p>{description}</p>
            </Col>
          </Row>
          <Row>
            <Col sm="6"></Col>
            <Col sm="6"></Col>
          </Row>
        </Col>

        <Col sm="3"></Col>
      </Row>
    </>
  );
};
