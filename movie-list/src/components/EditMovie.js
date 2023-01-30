import React, { useState, useEffect } from 'react';
import serialize from "form-serialize";
import { useNavigate } from 'react-router-dom'
import axios from 'axios';


const EditMovie = (props) => {

    let [name, setNameState] = useState()
    let [rating, setRatingState] = useState()
    let [overview, setOverviewState] = useState()
    let [imageURL, setUrlState] = useState()

    const navigate = useNavigate()
    const movieHandler = (e) => {
        e.preventDefault()
        navigate("/")

        console.log(name)
        console.log(rating)        
        console.log(overview)        
        console.log(imageURL)        
    }


    useEffect(() => {

        async function getData(){

            const id = window.location.pathname.replace("/edit", "")
            const response = await axios.get(`http://localhost:3002/movies${id}`)

            setNameState(response.data.name)
            setRatingState(response.data.rating)
            setOverviewState(response.data.overview)
            setUrlState(response.data.imageURL)

        }
        getData()
    },[])

    // const navigate = useNavigate()
    // async function handleSubmit(e) {
    //     e.preventDefault()
    //     navigate("/")
    // }

    return (
        <div className="container" >
            <form className="mt-5" onSubmit={movieHandler}>
                <input className="form-control" id="disabledInput" type="text" placeholder="Fill The Form To Add A Movie.." disabled />
                <div className="form-row">
                    <div className="form-group col-md-10">
                        <label htmlFor="inputName">Name</label>
                        <input type="text"
                            className="form-control"
                            name="name" 
                            onChange={(event)=>{
                                setNameState(name=event.target.value)
                            }}
                            defaultValue={name}
                            />
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="inputRating">Rating</label>
                        <input
                            type="text"
                            className="form-control"
                            name="rating" 
                            onChange={(event)=>{
                                setRatingState(rating=event.target.value)
                            }}
                            defaultValue={rating}
                            />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputImage">Image URL</label>
                        <input
                            type="text"
                            className="form-control"
                            name="imageURL" 
                            onChange={(event)=>{
                                setOverviewState(imageURL=event.target.value)
                            }}
                            defaultValue={imageURL}
                            />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="overviewTextarea">Overview</label>
                        <textarea
                            className="form-control"
                            name="overview" rows="5"
                            onChange={(event)=>{
                                setUrlState(overview=event.target.value)
                            }}
                            defaultValue={overview}
                            ></textarea>
                    </div>
                </div>
                <input type="submit" className="btn btn-danger btn-block" value="Add Movie" />
            </form>
        </div>
    )
}

export default EditMovie;