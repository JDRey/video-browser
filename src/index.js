import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBjya8iNOZX2uYWvm2MXnRufErOWAg79es';

//  Create a new component.   This component should produce
//  some HTML
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

//  Tale this component's generate HTML and put it
//  on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));