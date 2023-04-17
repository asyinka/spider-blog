import { useHistory, useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";

const ReadArticles = () => {
  const { id } = useParams();

  const history = useHistory();

  function HandleDelete() {
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
          <button onClick={HandleDelete} className="createFormButton">
            Delete Blog
          </button>
        </article>
      )}
    </div>
  );
};

export default ReadArticles;
