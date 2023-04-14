const CreateForm = () => {
  return (
    <form className="createForm" action="">
      <h2>Create Post</h2>
      <label htmlFor="title">Title</label>
      <input className="createInput" type="text" name="title" />
      <label htmlFor="blog">Blog text</label>
      <textarea
        className="createInput"
        cols={50}
        rows={10}
        name=""
        id="blog"
      ></textarea>
      <label htmlFor="author">Written by:</label>
      <input className="createInput" type="text" name="author" />
      <button className="createFormButton">Click to Submit</button>
    </form>
  );
};

export default CreateForm;
