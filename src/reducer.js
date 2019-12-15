import { MAX_RESULT } from "./config.js";
import {
  getSimilarArticlesIndex,
  getFilterCategories,
  getArticlesFilterBy,
  getArticlesSortBy
} from "./utils.js";

export const BlogAppReducer = (state, action) => {
  let { listing, details, filterby } = { ...state };
  if (!listing.allArticles.length) {
    listing.allArticles = JSON.parse(
      localStorage.getItem("blogAppAllArticles")
    );
  }
  switch (action.type) {
    case "ALL_ARTICLES":
      localStorage.setItem(
        "blogAppAllArticles",
        JSON.stringify(action.payload)
      );
      listing.allArticles = [...action.payload];
      listing.showingNoOfArticle = MAX_RESULT;
      return {
        ...state,
        listing,
        filterby: getFilterCategories([...action.payload])
      };
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
      console.log(details);
      localStorage.setItem("blogAppDetails", JSON.stringify(details));
      return { ...state, details };
    case "UPDATE_LIKE":
      listing.allArticles[action.payload]["likes"] = ++listing.allArticles[
        action.payload
      ]["likes"];
      return { ...state, listing };
    case "FILTER_BY_AUTHOR":
      listing.allArticles = getArticlesFilterBy(
        [...listing.allArticles],
        "author",
        action.payload
      );
      return { ...state };
    case "FILTER_BY_CATEGORY":
      listing.allArticles = getArticlesFilterBy(
        [...listing.allArticles],
        "category",
        action.payload
      );
      return { ...state };
    case "SORT_BY":
      listing.allArticles = getArticlesSortBy(
        [...listing.allArticles],
        action.payload
      );
      return { ...state };
    case "HIDE_LOADER":
      return { ...state, loader: action.payload };
    default:
      return { ...state };
  }
};
