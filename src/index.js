import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MAX_RESULT } from "./config.js";

import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

import { Container } from "reactstrap";

import ScrollToTop from "../src/components/ScrollToTop";
import Listing from "./pages/Listing";
import Details from "./pages/Details";

import { BlogAppProvider } from "./store.js";
import { BlogAppReducer } from "./reducer.js";

const blogAppIntialState = {
  loader: true,
  listing: {
    allArticles: [],
    showingNoOfArticle: MAX_RESULT,
    showingCurrentPagination: 1,
    showMoreButton: true
  },
  details: {
    currentArticleIndex: [],
    similarArticlesIndex: []
  },
  filters: {}
};

const BlogApp = () => {
  return (
    <BlogAppProvider reducer={BlogAppReducer} initialState={blogAppIntialState}>
      <Router>
        <Container>
          <ScrollToTop />
          <Route exact path="/">
            <Listing />
          </Route>
          <Route path="/details/:id">
            <Details />
          </Route>
        </Container>
      </Router>
    </BlogAppProvider>
  );
};

const rootElementToRenderApp = document.getElementById("root");
ReactDOM.render(<BlogApp />, rootElementToRenderApp);
