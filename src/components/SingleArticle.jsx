import React from "react";
import { Link } from "react-router-dom";

const SingleArticle =  ({ blog }) => {
    return (
        <div className="blogDetails" key={blog.id}>
          <Link to={`/blogs/${blog.id}`} className="blogsData">
            <p>{blog.id}</p>
            <h2>{blog.Title}</h2>
            <p>Written By: {blog.Author}</p>
          </Link>
        </div>
    )
}

export default SingleArticle;