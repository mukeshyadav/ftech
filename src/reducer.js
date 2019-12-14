import { MAX_RESULT } from "./config.js";
import { getSimilarArticlesIndex } from "./utils.js";

export const BlogAppReducer = (state, action) => {
  const { listing, details } = { ...state };
  switch (action.type) {
    case "ALL_ARTICLES":
      localStorage.setItem(
        "blogAppAllArticles",
        JSON.stringify(action.payload)
      );
      listing.allArticles = [...action.payload];
      listing.showingNoOfArticle = MAX_RESULT;
      return { ...state, listing };
    case "LOAD_MORE_ARTICLE":
      const totalPaging = Math.ceil(listing.allArticles.length / MAX_RESULT);
      listing.showingCurrentPagination = ++listing.showingCurrentPagination;
      listing.showingNoOfArticle =
        listing.showingCurrentPagination * MAX_RESULT;
      listing.showMoreButton =
        totalPaging <= listing.showingCurrentPagination ? false : true;
      return { ...state, listing };
    case "SET_DETAILS_PAGE":
      details.currentArticleIndex = action.payload;
      details.similarArticlesIndex = getSimilarArticlesIndex(
        listing.allArticles,
        action.payload
      );
      return { ...state, details };
    case "UPDATE_LIKE":
      listing.allArticles[action.payload]["likes"] = ++listing.allArticles[
        action.payload
      ]["likes"];
      return { ...state, listing };
    case "HIDE_LOADER":
      return { ...state, loader: action.payload };
    default:
      return { ...state };
  }
};
