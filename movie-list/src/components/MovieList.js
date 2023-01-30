import React from 'react'
import {Link} from 'react-router-dom'
class MovieList extends React.Component {

    deleteItem(event){ // default olan event ile ilgili veriler parametre olarak geliyor
        this.props.movies.remove()
    }

    setOverwiew(content , maxLength){
        if(!content) return null;
        if(content.lenght < maxLength) return content;
        return `${content.substring(0, maxLength)} ...`
    }


    render() {
        return (
            <div className='row'>
                {
                    this.props.movies.map((movie, i) => (
                            <div className='col-lg-4' key={i}>
                            <div className='card mb-4 shadow-sm'>
                                <img src= {movie.imageURL} className='card-img-top' alt="sample image"/>
                                <div className='card-body'>
                                    <h5 className='card-title'>{movie.name}</h5>
                                    <p className='card-text' >{this.setOverwiew(movie.overview, 100)}</p>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <button type="button" onClick={(event) => (this.props.delMovie(movie))} className='btn btn-md btn-outline-danger'>Delete</button>
                                        <Link type="button" to={`/edit/${movie.id}`} className='btn btn-md btn-outline-warning'>Edit</Link>
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