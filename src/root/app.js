import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

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

    this.videoSearch('infinity war');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term}, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    // debounce making delay of function invoke. It's not going to be invoked oftener than interval
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
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
