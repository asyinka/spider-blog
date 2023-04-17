import React from "react";
import { Link } from "react-router-dom";

const SingleArticle =  ({ blog }) => {
    return (
        <div className="blogDetails">
          <Link to={`/blogs/${blog.id}`} className="blogsData">
            <p>{blog.id}</p>
            <h2>{blog.title}</h2>
            <p>Written By: {blog.author}</p>
          </Link>
        </div>
    )
}

export default SingleArticle;