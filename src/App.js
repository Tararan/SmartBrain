import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import './styles/App.scss';

const app = new Clarifai.App({
 apiKey: '5e809db9fc554c3c8e535cf15aa2f0c9'
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: []
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions.map( 
      (box) => { return box.region_info.bounding_box})
    
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    const box = clarifaiFace.map((face) => {
      return {
        leftCol: face.left_col * width,
        topRow: face.top_row * height,
        rightCol: width - (face.right_col * width),
        bottomRow: height - (face.bottom_row * height)
      }
    }
    
    );
    return box;
   }
    
    displayFaceBox = (box) => {
      this.setState({box: box});
      console.log('box');
      console.log(box);
      console.log(box[0]);
    }
    
  onInputChange = (e) => {
    this.setState({input: e.target.value});
  }

    onSubmit = () => {
      this.setState({imageUrl: this.state.input})
      app.models.predict(
        Clarifai.FACE_DETECT_MODEL,
       this.state.input)
       .then(response =>  this.displayFaceBox(this.calculateFaceLocation(response)))
       .catch(err => console.log(err));
    }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Rank />
        <ImageLinkForm 
          onInputChange = {this.onInputChange} 
          onSubmit = {this.onSubmit}
        />
        <FaceRecognition box = {this.state.box} imageUrl = {this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
