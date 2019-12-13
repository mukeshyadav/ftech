import React, { useEffect } from "react";
import { Button, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import { Loader } from "../../components/Loader";
import { MainTitle } from "../../components/MainTitle";
import { ArticleList } from "../../components/ArticleList";
import { useBlogAppValue } from "../../store.js";

const Listing = () => {
  const [{ articles, loader }, dispatch] = useBlogAppValue();
  const hasBlogAppArticleInStorage = localStorage.getItem("blogAppAllArticles")
    ? true
    : false;

  useEffect(() => {
    if (!hasBlogAppArticleInStorage) {
      fetch(`./blog.json`)
        .then(res => res.json())
        .then(resData => {
          dispatch({ type: "ALL_ARTICLES", payload: resData });
          dispatch({ type: "HIDE_LOADER", payload: false });
        });
    } else {
      dispatch({
        type: "ALL_ARTICLES",
        payload: JSON.parse(localStorage.getItem("blogAppAllArticles"))
      });
      dispatch({ type: "HIDE_LOADER", payload: false });
    }
  }, []);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <>
          <MainTitle title="Blog" />
          {articles.map((article, index) => (
            <Link to={`/details/${index}`} key={index}>
              <ArticleList data={article} />
            </Link>
          ))}
          <Row className="mb-5">
            <Col className="d-flex justify-content-center mb-5">
              <Button color="primary">More Articles</Button>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default Listing;
