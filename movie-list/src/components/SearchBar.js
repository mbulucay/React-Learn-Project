import { render } from '@testing-library/react'
import React from 'react'

class SearchBar extends React.Component {

    state = {
        searchQuery: ""
    }

    // setQuery = (value) => {
    //     this.setState({searchQuery: value})
    // }


    render() {
        return (
            <div>
                <form onSubmit={(event) => (event.preventDefault())}>
                    <div className='form-row mb-5'>

                    <div className="col-12">
                        <input type="search" className="form-control rounded" 
                                placeholder="Search" aria-label="Search" aria-describedby="search-addon"
                                onChange={(event) => (
                                    this.setState({searchQuery: event.target.value}),
                                    this.props.filterMov(event.target.value)
                                )} 
                                value = {this.state.searchQuery}
                        />
                    </div>
                    </div>
                </form>
            </div>
        )
    }


}

export default SearchBar;