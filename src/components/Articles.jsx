import { Link } from "react-router-dom";
import SingleArticle from "./SingleArticle";

const Articles = (props) => {
  const blogs = props.blogs;
  const year = props.year;

  return (
    <article>
      <h2 className="blogsHeading">ALL BLOGS</h2>
      <span className="year">Latest {year} blogs</span>
      {blogs.map((blog) => (
        <SingleArticle blog={blog} />
      ))}
    </article>
  );
};

export default Articles;
