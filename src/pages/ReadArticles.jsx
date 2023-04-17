import { useHistory, useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";

// Functions should not start with capital letters except
// 1. react component function should 
// always start with Capital letter
const ReadArticles = () => {
  const { id } = useParams();

  const history = useHistory();

  function handleDelete() {
    fetch("http://localhost:4000/blogs/" + id, { method: "DELETE" });

    history.push("/");
    console.log("Deleted Blog article", id);
  }

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
          <button onClick={handleDelete} className="createFormButton">
            Delete Blog
          </button>
        </article>
      )}

    </div>
  );
};

export default ReadArticles;
