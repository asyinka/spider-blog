const Articles = ({ blogs }) => {
  return (
    <article>
      {blogs.map((blog) => (
        <div className="blogDetails" key={blog.id}>
          {/* <p>{blog.id}</p> */}
          <h2>{blog.Title}</h2>
          <p>Written By: {blog.Author}</p>
        </div>
      ))}
    </article>
  );
};

export default Articles;
