import React from 'react'
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie'
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditMovie from './EditMovie';

class App extends React.Component {

    state = {
        movies: [],
        searchQuery: ""
    }

    // router = createBrowserRouter([
    //     {
    //         path: "/",
    //         element: <div>Hello world!</div>,
    //     },
    // ]);

    async componentDidMount() {

        const baseURL = "http://localhost:3002/movies";

        // fetch way
        // const response = await fetch(baseURL)
        // const data = await response.json()
        // console.log(data)
        // this.setState({movies: data})


        // axios way
        try {
            const response = await axios.get(baseURL);
            console.log(response.data);
            this.setState({ movies: response.data })
        } catch (error) {
            console.error(error);
        }
    }


    deleteMovie = async (movie) => {

        // fetch way
        // const baseURL = `http://localhost:3002/movies/${movie.id}`;
        // const response = fetch(baseURL, {
        //     method: "DELETE"
        // })

        // axios way
        axios.delete(`http://localhost:3002/movies/${movie.id}`)

        let newList = this.state.movies.filter(m => (m.id !== movie.id))
        // this.setState({
        //     movies: newList
        // })

        this.setState(
            state => ({ movies: newList })
        )
    }


    filterMovie = (keyword) => {
        this.setState({ searchQuery: keyword })
    }


    addMovie = async (movie) => {
        await axios.post(`http://localhost:3002/movies/`, movie)
        this.setState(
            state => (
                {movies: this.state.movies.concat([movie])}
            )
        )
    }

    render() {

        let newList = this.state.movies.filter(
            m => (
                m.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
            )
        ).sort( (a, b) => {
            return a.id <= b.id ? 1 : -1;
        });




        return (
            <Router>

                <Routes>

                    <Route path="/" exact element={
                        <div className='row'>
                            <div className='col-lg-12'>
                                <SearchBar
                                    filterMov={this.filterMovie}
                                />

                            </div>
                            <MovieList
                                movies={newList}
                                delMovie={this.deleteMovie}
                            />
                        </div>
                    }/>

                    <Route path="/add" element={
                        <AddMovie 
                            addMov = {
                                (movie) => {
                                    this.addMovie(movie)
                                }
                            }
                        />
                    }/>

                    <Route path="/edit/:id" element={
                        <EditMovie></EditMovie>
                    }/>

                </Routes>

            </Router>

        )
    }
}

export default App;
