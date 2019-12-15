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

export const getFilterCategories = listOfArticles => {
  const author = {};
  const category = {};
  const filters = { author: [], category: [] };

  listOfArticles.forEach(article => {
    const authorName = article["author"].replace(" ", "").toLowerCase();
    const categoryName = article["category"].replace(" ", "").toLowerCase();
    if (!author[authorName]) {
      author[authorName] = authorName;
      filters["author"].push(article["author"]);
    }

    if (!category[categoryName]) {
      category[categoryName] = categoryName;
      filters["category"].push(article["category"]);
    }
  });

  return filters;
};

export const getArticlesFilterBy = (listOfArticles, key, value) => {
  return listOfArticles.filter(
    article => article[key].toLowerCase() === value.toLowerCase()
  );
};

export const getArticlesSortBy = (listOfArticles, key) => {
  return listOfArticles.sort((article1, article2) =>
    article1[key] > article2[key] ? 1 : -1
  );
};
