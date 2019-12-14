import React, { useEffect } from "react";
import { Button, Row, Col } from "reactstrap";
import { useHistory } from "react-router-dom";

import { Loader } from "../../components/Loader";
import { MainTitle } from "../../components/MainTitle";
import { ArticleList } from "../../components/ArticleList";
import { SortAndFilter } from "../../components/SortAndFilter";
import { useBlogAppValue } from "../../store.js";

const Listing = () => {
  const [
    {
      listing: {
        allArticles,
        showingNoOfArticle,
        showMoreButton,
        showingCurrentPagination
      },
      loader
    },
    dispatch
  ] = useBlogAppValue();
  const hasBlogAppArticleInStorage = localStorage.getItem("blogAppAllArticles")
    ? true
    : false;

  const history = useHistory();

  useEffect(() => {
    // if (!hasBlogAppArticleInStorage) {
    fetch(`./blog.json`)
      .then(res => res.json())
      .then(resData => {
        dispatch({ type: "ALL_ARTICLES", payload: resData });
        dispatch({ type: "HIDE_LOADER", payload: false });
      });
    // } else {
    //   dispatch({
    //     type: "ALL_ARTICLES",
    //     payload: JSON.parse(localStorage.getItem("blogAppAllArticles"))
    //   });
    //   dispatch({ type: "HIDE_LOADER", payload: false });
    // }
  }, []);

  const moveToDetailPage = index => {
    dispatch({ type: "SET_DETAILS_PAGE", payload: index });
    history.push(`/details/${index}`);
  };

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <>
          <MainTitle title="Blog" />
          <SortAndFilter />
          {allArticles.slice(0, showingNoOfArticle).map((article, index) => (
            <Row
              key={index}
              onClick={e => moveToDetailPage(index)}
              className="article-list"
            >
              <ArticleList data={article} />
            </Row>
          ))}
          <Row className="mb-5">
            <Col className="d-flex justify-content-center mb-5">
              {showMoreButton ? (
                <Button
                  color="primary"
                  onClick={e =>
                    dispatch({
                      type: "LOAD_MORE_ARTICLE",
                      payload: showingCurrentPagination
                    })
                  }
                >
                  More Articles
                </Button>
              ) : null}
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default Listing;
