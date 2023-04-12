import { useState } from "react";

const Homepage = () => {
    const [year, setYear] = useState(2022);

    const blogs = [{
        Title: 'War between Ukraine and Russia',
        Body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Libero illo rem culpa perferendis accusamus? Tenetur suscipit dolore, temporibus facere sequi possimus. In recusandae saepe nostrum id rerum sunt quibusdam',
        Author: 'Anonymous',
        id: 1
    },
    {
        Title: 'Economic crisis and impending doom to Dollar Hegemony',
        Body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Libero illo rem culpa perferendis accusamus? Tenetur suscipit dolore, temporibus facere sequi possimus. In recusandae saepe nostrum id rerum sunt quibusdam',
        Author: 'Mike',
        id: 2
    },
    {
        Title: 'Whirling Digital Revolution',
        Body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Libero illo rem culpa perferendis accusamus? Tenetur suscipit dolore, temporibus facere sequi possimus. In recusandae saepe nostrum id rerum sunt quibusdam',
        Author: 'Roberts',
        id: 3
    }
]

    return ( 
        <div className="homePage">
            <h2>ALL BLOGS</h2>
            <span> { year } blogs</span>
            <article>
                <h2>Technology and Revolution</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus labore vitae corporis id beatae velit? Ad odio repudiandae deserunt nam consequuntur aperiam!</p>
                <p>Written by: Sam</p>       
            </article>
        </div>
     );
}
 
export default Homepage;