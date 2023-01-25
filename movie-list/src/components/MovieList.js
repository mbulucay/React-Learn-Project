import { render } from '@testing-library/react'
import React from 'react'
import Movie from './Movie'

class MovieList extends React.Component {

    render() {
        return (
            <div>
                Movie List
                <Movie />
                <Movie />
            </div>
        )
    }


}

export default MovieList;