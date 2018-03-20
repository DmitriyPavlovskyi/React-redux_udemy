import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

import SearchBar from '../features/search_bar/index';
import VideoList from '../features/video_list/index';

const API_KEY = 'AIzaSyD31iFmLH-V4BVq8EDTRH8rY9Xd511eqrQ';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: []
    }

    YTSearch({key: API_KEY, term: 'infinity war'}, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
