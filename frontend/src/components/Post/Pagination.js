import React from "react"

const Pagination = () => {
  return (
    <div>
        <ul className="nav tm-paging-links">
            <li className="nav-item active"><a href="#" className="nav-link tm-paging-link">1</a></li>
            <li className="nav-item"><a href="#" className="nav-link tm-paging-link">2</a></li>
            <li className="nav-item"><a href="#" className="nav-link tm-paging-link">3</a></li>
            <li className="nav-item"><a href="#" className="nav-link tm-paging-link">4</a></li>
            <li className="nav-item"><a href="#" className="nav-link tm-paging-link"> &raquo; </a></li>
        </ul>
    </div>
  )
}

export default Pagination;