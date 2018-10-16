import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import youtubeSearch from 'youtube-api-search';
import VideoDetail from './components/video_detail'
const API_KEY = 'AIzaSyCEy-JmrOHX9ppIcfKILphf5dalEePM5Js';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null,
        };
        youtubeSearch({key: API_KEY, term: 'usc'}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0],
            });
        });
    }
    render() {
        return (
            <div>
                <SearchBar/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    }

}

ReactDOM.render(<App />, document.getElementById('root'));