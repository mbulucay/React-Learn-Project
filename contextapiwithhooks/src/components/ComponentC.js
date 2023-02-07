import React from "react";
import { BlogContext } from "../context/BlogContext";


const ComponentC = () => {

    const [blogs] = React.useContext(BlogContext)

    return (
        <div>
            {
                blogs.map((blog, i) => {
                    return (
                        <div>
                            <h2> {blog.title} </h2>
                            <p> {blog.content} </p>
                        </div>
                    )

                })
            }
        </div>
    )
}

export default ComponentC;