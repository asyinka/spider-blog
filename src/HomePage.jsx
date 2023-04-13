import { useState } from "react";
import Articles from "./Articles";
import useFetchData from "./useFetchData/useFetchData";

const Homepage = () => {
  const [year, setYear] = useState(2022);

  const { blogs, isPending, error } = useFetchData(
    "http://localhost:4000/blogs"
  );

  return (
    <div className="homePage">
      {error && <div className="alrtDisp">{error}</div>}
      {isPending && <div className="alrtDisp"> Loading... </div>}
      {blogs && <Articles blogs={blogs} year={year} />}
    </div>
  );
};

export default Homepage;
