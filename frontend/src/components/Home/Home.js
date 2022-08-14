import React from "react"
import Category from "../Post/Category";
import ItemList from "../Post/ItemList";
import Pagination from "../Post/Pagination";

const Content = () => {
  return (
    <div className="mx-auto tm-about-text-container px-3">
      <Category></Category>
      <ItemList></ItemList>
      <Pagination></Pagination>
    </div>
  )
}

export default Content;