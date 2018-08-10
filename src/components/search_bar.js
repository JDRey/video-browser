import React, { Component } from 'react';


class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.term}
                    onChange={evt => this.setState({ term: evt.target.value })}
                    placeholder='Search'
                    className='col-md-8 search-input' />
            </div>
        );
    }

    handleInputChange = (evt) => {

    }
};

export default SearchBar;