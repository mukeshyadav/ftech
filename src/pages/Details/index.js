import React from "react";
import { Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";

import { MainTitle } from "../../components/MainTitle";
import { ArticleList } from "../../components/ArticleList";
import { ArticleDetail } from "../../components/ArticleDetail";
import { useBlogAppValue } from "../../store.js";

const ArticleDetails = () => {
  const { id } = useParams();
  const [{ articles }] = useBlogAppValue();

  return (
    <>
      <Row>
        <Col sm="9">
          <ArticleDetail data={articles[id]} />
        </Col>
        <Col sm="3"></Col>
      </Row>
      <Row>
        <Col>
          <MainTitle title="Similar Articles" />
        </Col>
      </Row>
      <Row>
        <Col sm="9">
          <a href="/details">
            <ArticleList
              data={{
                title: "Best beaches",
                description:
                  "This blog post lists some of the best beaches in the world. This is just some dummy text we put to fill the space. This is just some dummy text we put to fill the space. This is just some dummy text we put to fill the space. This is just some dummy text we put to fill the space. This is just some dummy text we put to fill the space.",
                author: "Forrest Gump",
                published_date: 1573112087000,
                imgs: {
                  thumb:
                    "https://cdn2.iconfinder.com/data/icons/iconslandtransport/PNG/256x256/CarGrey.png",
                  large:
                    "https://images.surfacemag.com/app/uploads/2017/11/09102819/Polestar1-black.jpg"
                },
                category: "travel",
                likes: 2
              }}
            />
          </a>
        </Col>
      </Row>
    </>
  );
};

export default ArticleDetails;
