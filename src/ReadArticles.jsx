import { useParams } from "react-router-dom";
import useFetchData from "./useFetchData/useFetchData";

const ReadArticles = () => {
  const { id } = useParams();

  const {
    blogs: blog,
    isPending,
    error,
  } = useFetchData("http://localhost:4000/blogs/" + id);

  return (
    <div className="BlogContainer">
      {isPending && <div>loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article className="fullBlog">
          <h2>{blog.Title}</h2>
          <span>{blog.Author}</span>
          <p>{blog.Body}</p>
        </article>
      )}
    </div>
  );
};

export default ReadArticles;
