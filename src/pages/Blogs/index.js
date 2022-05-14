import axios from "axios";
import { useEffect, useState } from "react";

export function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typiode.com/posts")
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {error && <span>Something went wrong</span>}
      {loading && <h1>Loading</h1>}
      {blogs.map((blog) => {
        return (
          <div key={blog.id}>
            {blog.userId} <br />
            {blog.id} <br />
            {blog.title} <br />
            {blog.body} <br />
          </div>
        );
      })}
    </>
  );
}
