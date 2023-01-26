import { render } from '@testing-library/react'
import React from 'react'

class MovieList extends React.Component {

    deleteItem(event){ // default olan event ile ilgili veriler parametre olarak geliyor
        this.props.movies.remove()
    }

    render() {
        return (
            <div className='row'>
                {
                    this.props.movies.map((movie) => (
                            <div className='col-lg-4' key={movie.id}>
                            <div className='card mb-4 shadow-sm'>
                                <img src= {movie.imageURL} className='card-img-top' alt="sample image"/>
                                <div className='card-body'>
                                    <h5 className='card-title'>{movie.name}</h5>
                                    <p className='card-text' >{movie.overview}</p>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <button type="button" onClick={(event) => (this.props.delMovie(movie))} className='btn btn-md btn-outline-danger'>Delete</button>
                                        <h2><span className='badge text-bg-info'> {movie.rating} </span></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default MovieList;