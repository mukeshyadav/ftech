import React, { createContext, useContext, useReducer } from "react";

export const BlogAppContext = createContext();

export const BlogAppProvider = ({ reducer, initialState, children }) => (
  <BlogAppContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </BlogAppContext.Provider>
);

export const useBlogAppValue = () => useContext(BlogAppContext);
