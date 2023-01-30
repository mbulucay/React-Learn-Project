import React from 'react'
import { Link } from 'react-router-dom'

class SearchBar extends React.Component {

    state = {
        searchQuery: ""
    }

    // setQuery = (value) => {
    //     this.setState({searchQuery: value})
    // }


    render() {
        return (
            <form onSubmit={(event) => (event.preventDefault())}>
                <div className='form-row mb-5'>

                    <div className="col-9">
                        <input type="search" className="form-control rounded"
                            placeholder="Search" aria-label="Search" aria-describedby="search-addon"
                            onChange={(event) => (
                                this.setState({ searchQuery: event.target.value }),
                                this.props.filterMov(event.target.value)
                            )}
                            value={this.state.searchQuery}
                        />
                    </div>

                    <div className='col-2'>
                        <Link to="/add"  
                            type="button"
                            className='btn btn-md btn-danger'
                            style={{ float: 'right' }}> Add Movie
                        </Link>
                    </div>

                </div>
            </form>
        )
    }


}

export default SearchBar;