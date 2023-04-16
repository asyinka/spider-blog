import { useEffect, useState } from "react";

const useFetchData = (url) => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (!resp.ok) {
          throw Error("Could not fetch resource");
        }
        return resp.json();
      })
      .then((actResp) => setBlogs(actResp))
      .then(() => {
        setIsPending(false);
      })
      .catch((error) => {
        if (error === "AbortError") {
          setError("fetch process failed");
        }
        console.log(error.message);
        setError(error.message);
      });
  }, []);

  return { blogs, isPending, error };
};

export default useFetchData;
