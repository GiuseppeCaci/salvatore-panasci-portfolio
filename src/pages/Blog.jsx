import React from "react";
import { useEffect } from "react";

const Blog = () => {
    useEffect(() => {
        document.title = "Blog | Salvatore Panasci";
      }, []);
  return (
    <>
      <div className="h-base d-flex justify-content-start align-items-center flex-column">
        <section className="py-5 container-blog-hero container-blog-logo">
          <div className="container my-1 px-4">
            <h4 className="display-4">Blog Neuroscienze</h4>
            <p className="lead fw-normal">
              Riflessioni e scoperte sul mondo della Neuropsicologia
            </p>
          </div>
        </section>
        <section className="py-4 d-flex justify-content-center align-items-center flex-column">
          <div className="card w-75 mb-3 border-0">
            <div className="card-body container-card-post">
              <h5 className="card-title">Card title</h5>
              <p>titolo post del blog</p>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content. With supporting text below...
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;
