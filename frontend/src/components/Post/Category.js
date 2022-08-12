import React from "react"

const Category = () => {
  return (
    <div className="row">
        <div className="col-12">
            <h2 className="tm-page-title mb-4">Our Video Catalog</h2>
            <div className="tm-categories-container mb-5">
                <h3 className="tm-text-primary tm-categories-text">Categories:</h3>
                <ul className="nav tm-category-list">
                    <li className="nav-item tm-category-item"><a href="#" className="nav-link tm-category-link active">All</a></li>
                    <li className="nav-item tm-category-item"><a href="#" className="nav-link tm-category-link">Drone Shots</a></li>
                    <li className="nav-item tm-category-item"><a href="#" className="nav-link tm-category-link">Nature</a></li>
                    <li className="nav-item tm-category-item"><a href="#" className="nav-link tm-category-link">Actions</a></li>
                    <li className="nav-item tm-category-item"><a href="#" className="nav-link tm-category-link">Featured</a></li>
                </ul>
            </div>        
        </div>
    </div>
  )
}

export default Category;