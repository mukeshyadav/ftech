import React from "react";
import { Row, Col } from "reactstrap";
import { utcToDateFormat, subStringText } from "../../utils.js";

export const ArticleList = props => {
  const {
    title,
    description,
    author,
    likes = 0,
    published_date,
    imgs: { thumb },
    category
  } = props.data;
  return (
    <>
      <Col sm={{ size: 4, order: 2 }} className="justify-content-center d-flex">
        <img src={thumb} alt={title} />
      </Col>
      <Col sm={{ size: 8, order: 1 }}>
        <Row>
          <Col sm="8">
            {utcToDateFormat(published_date)}
            <strong className="ml-5">{category}</strong>
          </Col>
          <Col sm="4" className="text-sm-right">
            {likes > 1 ? `${likes} likes` : `${likes} like`}
          </Col>
        </Row>
        <h3 className="h4 mt-3 mb-3">{title}</h3>
        <p>{subStringText(description)}</p>
        <p className="h6">
          By:
          <strong className="font-italic ml-2">{author}</strong>
        </p>
      </Col>
    </>
  );
};
