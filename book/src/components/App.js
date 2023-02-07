import React, { useEffect } from "react";
import BookList from "./BookList";
import { BookContextProvider } from "../context/BookContext"


const App = (props) => {

    useEffect(() => {

    }, [])

    return (
        <BookContextProvider>
            <BookList />
        </BookContextProvider>
    )
}

export default App;