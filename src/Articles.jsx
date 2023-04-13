const Articles = (props) => {
  const blogs = props.blogs;
  const year = props.year;

  return (
    <article>
      <h2 className="blogsHeading">ALL BLOGS</h2>
      <span className="year">Latest {year} blogs</span>
      {blogs.map((blog) => (
        <div className="blogDetails" key={blog.id}>
          <a href={`/blogs/${blog.id}`} className="blogsData">
            <p>{blog.id}</p>
            <h2>{blog.Title}</h2>
            <p>Written By: {blog.Author}</p>
          </a>
        </div>
      ))}
    </article>
  );
};

export default Articles;
