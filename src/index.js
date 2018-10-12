import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import youtubeSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyCEy-JmrOHX9ppIcfKILphf5dalEePM5Js';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = { videos: [] };
        youtubeSearch({key: API_KEY, term: 'usc'}, (videos) => {
            this.setState({ videos }); // videos : videos
        });
    }
    render() {
        return (
            <div>
                <SearchBar/>
                <VideoList videos={this.state.videos} />
            </div>
        );
    }

}

ReactDOM.render(<App />, document.getElementById('root'));