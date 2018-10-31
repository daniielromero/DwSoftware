import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/search_bar';
import axios from 'axios';
import ImageDetail from './components/image_detail';
import ImageList from './components/image_list';


const API_KEY_FLICKR = 'b5b00d16f3e70b5aa0157d79edaab8b5'
class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      images: [],
      selectedImage: null
    }
  }

  render() {    
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar onSearchTextChanged = {text => this.searchImage(text)} />
          <ImageDetail image = {this.state.selectedImage} />
          <ImageList 
            OnImageClick = {
              (selectedImage) => {
                this.setState({selectedImage})
              }
            }
            images = {this.state.images} />
          
        </header>
      </div>
    );
  }
  searchImage(text) {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY_FLICKR}&format=json&text=${text}&nojsoncallback=true&per_page=5&extras=url_s`).then(
        (response) => {
            console.log(response)
            if(response.data.photos){
              this.setState({
                images: response.data.photos.photo,
                selectedImage: response.data.photos.photo[0]
              })
            }else{
              this.setState({selectedImage: null})
            }
            //response.data.photos.
        }
    ).catch(
        (error) => {
            console.log(error)
        }
    )
}
}



export default App;
