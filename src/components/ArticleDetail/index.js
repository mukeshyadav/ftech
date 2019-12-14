import React from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Button } from "reactstrap";
import { utcToDateFormat } from "../../utils.js";
import { useBlogAppValue } from "../../store.js";

export const ArticleDetail = props => {
  const {
    title,
    description,
    author,
    published_date,
    category,
    likes
  } = props.data;

  const [{}, dispatch] = useBlogAppValue();

  const { id } = useParams();

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
            <Col sm="3" className="text-sm-right">
              {utcToDateFormat(published_date)}
            </Col>
          </Row>
          <Row className="pt-3 pb-3">
            <Col>
              <p>{description}</p>
            </Col>
          </Row>
          <Row>
            <Col sm="6" className="pt-3 pb-3 detail-list">
              {likes > 1 ? `${likes} likes` : `${likes} like`}
            </Col>
            <Col sm="6" className="pt-3 pb-3 detail-list text-sm-right">
              <Button
                color="primary"
                onClick={e => dispatch({ type: "UPDATE_LIKE", payload: id })}
              >
                Like
              </Button>
            </Col>
          </Row>
        </Col>

        <Col sm="3"></Col>
      </Row>
    </>
  );
};
