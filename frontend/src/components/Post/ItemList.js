import React from "react";
import Item from "./Item";
import { useSearchParams } from "react-router-dom";

const ItemList = () => {
    let Items = [];

    for (var i = 0; i < searchParams.get('categoryId'); i++) {
        Items.push(<Item key={i}></Item>);
    }
    return (
        <div className="row tm-catalog-item-list">
            {Items}
        </div>
    )
}

export default ItemList;