import React from "react";
import { Row, Col } from "reactstrap";
import { useHistory } from "react-router-dom";

import { MainTitle } from "../../components/MainTitle";
import { ArticleList } from "../../components/ArticleList";
import { ArticleDetail } from "../../components/ArticleDetail";
import { useBlogAppValue } from "../../store.js";

const ArticleDetails = () => {
  let [
    {
      listing: { allArticles },
      details: { currentArticleIndex, similarArticlesIndex }
    },
    dispatch
  ] = useBlogAppValue();

  if (!allArticles.length) {
    const readFromLocalStorage = JSON.parse(
      localStorage.getItem("blogAppDetails")
    );
    const readAllArticles = JSON.parse(
      localStorage.getItem("blogAppAllArticles")
    );
    allArticles = readAllArticles;
    currentArticleIndex = readFromLocalStorage["currentArticleIndex"];
    similarArticlesIndex = readFromLocalStorage["similarArticlesIndex"];
  }

  const history = useHistory();

  const moveToDetailPage = index => {
    dispatch({ type: "SET_DETAILS_PAGE", payload: index });
    history.push(`/details/${index}`);
  };

  return (
    <>
      <Row
        className="hero-image"
        style={{
          backgroundImage: `url(${allArticles[currentArticleIndex]["imgs"]["large"]})`
        }}
      ></Row>
      <div className="hero-container">
        <Row>
          <Col sm="9">
            <ArticleDetail data={allArticles[currentArticleIndex]} />
          </Col>
          <Col sm="3"></Col>
        </Row>
        <Row>
          <Col>
            <MainTitle title="Similar Articles" />
          </Col>
        </Row>
        <Row>
          <Col>
            {similarArticlesIndex.map(articleIndex => (
              <Row
                key={articleIndex}
                onClick={e => moveToDetailPage(articleIndex)}
                className="article-list"
              >
                <ArticleList data={allArticles[articleIndex]} />
              </Row>
            ))}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ArticleDetails;
