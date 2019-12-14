export const utcToDateFormat = d => {
  if (!d) {
    return;
  }
  let appDate = new Date(d);
  return appDate.toLocaleDateString();
};

export const subStringText = (str, length = 100) => {
  if (!str) {
    return;
  }
  return `${str.substring(0, length)}...`;
};

export const getSimilarArticlesIndex = (listOfArticles, index) => {
  let categoryName = listOfArticles[index]["category"];
  let similarCategoryIndexes = [];
  listOfArticles.forEach((article, index) => {
    if (article["category"] === categoryName) {
      similarCategoryIndexes.push(index);
    }
  });
  return similarCategoryIndexes;
};
