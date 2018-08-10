import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyBjya8iNOZX2uYWvm2MXnRufErOWAg79es';

//  Create a new component.   This component should produce
//  some HTML
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({ key: API_KEY, term: 'Web Development', maxResults: 10, order: 'viewCount' }, (videos) => {
            this.setState({ videos });
            console.log('This is the "videos" data:      ');
            console.log(videos);
        });
    }

    // TODO: add failure to fetch video list data from Youtube API catch
    //
    // componentDidMount() {
    //     this.videos = setTimeout(
    //         () => this.videosLoadFail(), 10000
    //     );
    // }

    // videosLoadFail() {
    //     this.setState({ 
    //         videos: 'search query failed to load' 
    //     });
    // }

    render() {
        return (
            <div>
                <div className='row'>
                    <SearchBar />
                </div>
                <div>
                    <VideoList videos={this.state.videos} />
                </div>
            </div>
        );
    }
}

//  Tale this component's generate HTML and put it
//  on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));