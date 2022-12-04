import { CategoryItem } from "./CategoryItem";

import React from "react";
function CategoryList(props) {
    const { catalog } = props;
   
    return (
        <React.Fragment>
            
            <div className="list">
                {catalog.map((el) => (
                    <CategoryItem key={el.idCategory} {...el} />
                ))}
            </div>
        </React.Fragment>
    );
}
export { CategoryList };
