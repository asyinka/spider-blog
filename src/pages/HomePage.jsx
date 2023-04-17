import { useState } from "react";
import Articles from "../components/Articles";
import useFetchData from "../hooks/useFetchData";

const Homepage = () => {
  const [year, setYear] = useState(2022);

  const { blogs, isPending, error } = useFetchData(
    "http://localhost:4000/blogs"
  );

  return (
    <div className="homePage">
      {isPending && <div className="alrtDisp"> Loading... </div>}
      {error && <div className="alrtDisp">{error}</div>}
      {blogs && <Articles blogs={blogs} year={year} />}
    </div>
  );
};

export default Homepage;
