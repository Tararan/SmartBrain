import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Signin from './components/Signin/Signin';
import Register from './components/Signin/Register';
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
      box: [],
      route:'signin',
      isSignedIn: false
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

    onRouteChange = (route) => {
      if(route === 'signout') {
        this.setState({ isSignedIn: false })
      } else if (route === 'home') {
        this.setState({ isSignedIn: true })
      }
      this.setState({route: route});
    }

  render() {
    const { isSignedIn, imageUrl, route, box } = this.state;
    return (
      <div className="App">
          <Navigation isSignedIn = {isSignedIn } onRouteChange = { this.onRouteChange }/>
      { route === 'home'
          ? <main className="main">
          <Rank />
          <ImageLinkForm 
            onInputChange = {this.onInputChange} 
            onSubmit = {this.onSubmit}
          />
          <FaceRecognition box = {box} imageUrl = {imageUrl}/>
        </main>
      : ( this.state.route === 'signin'
        ? <Signin onRouteChange= { this.onRouteChange }/>
        : <Register onRouteChange= { this.onRouteChange }/>
        )
      }
      </div>
    );
  }
}

export default App;
