import React from "react";
import Item from "./Item";

const ItemList = () => {
    let Items = [];
    for (var i = 0; i < 15; i++) {
        Items.push(<Item key={i}></Item>);
    }
    return (
        <div className="row tm-catalog-item-list">
            {Items}
        </div>
    )
}

export default ItemList;