import React from "react";
import ComponentA from "./ComponentA";

import { BlogProvider } from "../context/BlogContext";

const App = () => {

    return (
        <BlogProvider>
            <ComponentA />
        </BlogProvider>
    )
}

export default App;