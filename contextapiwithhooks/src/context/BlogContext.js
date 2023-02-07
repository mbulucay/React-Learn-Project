import React from "react";

export const BlogContext = React.createContext({})

export const BlogProvider = (props) => {

    const [blogs, setBlogs] = React.useState(
        [
            {
                title: "First",
                content: "F Content",
                id:1
            },
            {
                title: "Second",
                content: "S Content",
                id:2
            },
            {
                title: "Third",
                content: "T Content",
                id:3
            }
        ]
    );

    return (
        <BlogContext.Provider value={[blogs]}>
            {props.children}
        </BlogContext.Provider>
    )
}