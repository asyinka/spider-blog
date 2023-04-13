const Articles = (props) => {
  const blogs = props.blogs;
  const year = props.year;
  console.log(props);

  return (
    <article>
      <span className="year">Latest {year} blogs</span>
      {blogs.map((blog) => (
        <div className="blogDetails" key={blog.id}>
          <p>{blog.id}</p>
          <h2>{blog.Title}</h2>
          <p>Written By: {blog.Author}</p>
        </div>
      ))}
    </article>
  );
};

export default Articles;
