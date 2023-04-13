import { useState } from "react";
import Articles from "./Articles";

const Homepage = () => {
  const [year, setYear] = useState(2022);

  const [blogs, setBlogs] = useState([
    {
      Title: "War between Ukraine and Russia",
      Body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Libero illo rem culpa perferendis accusamus? Tenetur suscipit dolore, temporibus facere sequi possimus. In recusandae saepe nostrum id rerum sunt quibusdam",
      Author: "Anonymous",
      id: 1,
    },
    {
      Title: "Economic crisis and impending doom to Dollar Hegemony",
      Body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Libero illo rem culpa perferendis accusamus? Tenetur suscipit dolore, temporibus facere sequi possimus. In recusandae saepe nostrum id rerum sunt quibusdam",
      Author: "Mike",
      id: 2,
    },
    {
      Title: "Whirling Digital Revolution",
      Body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Libero illo rem culpa perferendis accusamus? Tenetur suscipit dolore, temporibus facere sequi possimus. In recusandae saepe nostrum id rerum sunt quibusdam",
      Author: "Roberts",
      id: 3,
    },
  ]);

  return (
    <div className="homePage">
      <h2>ALL BLOGS</h2>
      <Articles blogs={blogs} year={year} />
    </div>
  );
};

export default Homepage;
