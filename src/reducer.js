export const BlogAppReducer = (state, action) => {
  const { articles, loader } = { ...state };
  switch (action.type) {
    case "ALL_ARTICLES":
      localStorage.setItem(
        "blogAppAllArticles",
        JSON.stringify(action.payload)
      );
      return { ...state, articles: action.payload };
    case "HIDE_LOADER":
      return { ...state, loader: action.payload };
    default:
      return state;
  }
};
