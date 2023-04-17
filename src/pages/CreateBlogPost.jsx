import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateBlogPost = () => {
  const [Title, setTitle] = useState("");
  const [Body, setBody] = useState("");
  const [Author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  function HandleSubmit(e) {
    e.preventDefault();

    setIsPending(true);

    const blogContent = { Title, Body, Author };

    fetch("http://localhost:4000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blogContent),
    })
      .then(() => console.log("blog added..."))
      .then(() => setIsPending(false))
      .then(() => {
        alert("blog added");
        history.push("/");
      })
      .catch((error) => {
        console.log(error.message, "fetch connection failed...");
      });
  }

  return (
    <form className="createForm" onSubmit={HandleSubmit}>
      <h2>Create Post</h2>
      <label htmlFor="title">Title</label>
      <input
        className="createInput"
        id="title"
        type="text"
        required
        name="title"
        defaultValue={Title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="blog">Blog text</label>
      <textarea
        className="createInput"
        id="blog"
        required
        value={Body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>
      <label htmlFor="Author">Written by:</label>
      <input
        className="createInput"
        type="text"
        value={Author}
        onChange={(e) => setAuthor(e.target.value)}
        name="Author"
      />
      {!isPending && (
        <button className="createFormButton">Click to Submit</button>
      )}
      {isPending && (
        <button className="createFormButton buttonLoading">Loading...</button>
      )}
    </form>
  );
};

export default CreateBlogPost;
