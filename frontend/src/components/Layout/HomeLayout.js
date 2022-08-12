import React from "react";
import Header from "./Header/Header";
import Category from "../Post/Category";
import ItemList from "../Post/ItemList";
import Pagination from "../Post/Pagination";
import Footer from "./Footer/Footer";

const HomeLayout = () => {
  return (
    <div className="tm-page-wrap mx-auto">
      <Header></Header>
      <div className="container-fluid">
            <div id="content" className="mx-auto tm-content-container">
                <main>
                    <Category></Category>
                    <ItemList></ItemList>
                    <Pagination></Pagination>
                </main>

                <div className="row mt-5 pt-3">
                    <div className="col-xl-6 col-lg-12 mb-4">
                        <div className="tm-bg-gray p-5 h-100">
                            <h3 className="tm-text-primary mb-3">Do you want to get our latest updates?</h3>
                            <p className="mb-5">
                                Please subscribe our newsletter for upcoming new videos and latest information about our
                                work. Thank you.
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-12 mb-4">
                        <div className="p-5 tm-bg-gray">
                            <form action="" method="GET" className="tm-subscribe-form">
                                <input type="text" name="email" placeholder="Your Email..." required />
                                <button type="submit" className="btn rounded-0 btn-primary tm-btn-small">Subscribe</button>
                            </form>    
                        </div>                        
                    </div>
                </div>

                <Footer></Footer>
            </div>
        </div>
    </div>
  )
}

export default HomeLayout;