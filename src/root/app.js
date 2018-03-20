import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

import SearchBar from '../features/search_bar/index';
import VideoDetail from '../features/video_detail/index';
import VideoList from '../features/video_list/index';

const API_KEY = 'AIzaSyD31iFmLH-V4BVq8EDTRH8rY9Xd511eqrQ';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    }

    YTSearch({key: API_KEY, term: 'infinity war'}, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
        />
      </div>
    );
  }
}

export default App;
