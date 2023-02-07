import React, { useEffect, useContext } from "react";
import Book from "./Book"
import "./BookList.css"
import { BookContext } from "../context/BookContext"

const BookList = (props) => {

    const [books] = useContext(BookContext)

    useEffect(() => {

    }, [])

    return (

        <BookContext.Consumer>
            {
                value => {
                    return (
                        <section className="page-section bg-light" id="portfolio">
                            <div className="container">
                                <div className="text-center">
                                    <h2 className="section-heading text-uppercase">BookFolio</h2>
                                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                                </div>
                                <div className="row">
                                    {
                                        value.map((book, i) => {
                                            return (
                                                <Book book={book} key={i} />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </section>
                    )
                }
            }

        </BookContext.Consumer>

        // Bu da olabilir ama 
        // <section className="page-section bg-light" id="portfolio">
        //     <div className="container">
        //         <div className="text-center">
        //             <h2 className="section-heading text-uppercase">BookFolio</h2>
        //             <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        //         </div>
        //         <div className="row">
        //             {
        //                 books.map((book, i) => {
        //                     return (
        //                         <Book book={book} key={i} />
        //                     )
        //                 })
        //             }
        //         </div>
        //     </div>
        // </section>

    )

}

export default BookList