import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

import { Container } from "reactstrap";

import Listing from "./pages/Listing";
import Details from "./pages/Details";

import { BlogAppProvider } from "./store.js";
import { BlogAppReducer } from "./reducer.js";

const blogAppIntialState = {
  loader: true,
  articles: [],
  listing: {
    articles: []
  }
};

const BlogApp = () => {
  return (
    <BlogAppProvider reducer={BlogAppReducer} initialState={blogAppIntialState}>
      <Router>
        <Container>
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
