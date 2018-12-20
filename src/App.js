import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Signin from './components/Signin/Signin';
import Register from './components/Signin/Register';
import './styles/App.scss';

const initialState = {
  input: '',
  imageUrl: '',
  box: [],
  route:'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: [],
      route:'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    }
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
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
    }
    
  onInputChange = (e) => {
    this.setState({input: e.target.value});
  }

    onSubmit = () => {
      this.setState({imageUrl: this.state.input})
      fetch('https://serene-falls-16769.herokuapp.com/imageurl', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          input: this.state.input
        })
      })
      .then(response => response.json())
      .then(response =>  { 
        if(response) {
          fetch('https://serene-falls-16769.herokuapp.com/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
          .then(response => response.json())
          .then(count => {
            this.setState(Object.assign(this.state.user, { entries: count }))
          })
          .catch(console.log)
        }
         this.displayFaceBox(this.calculateFaceLocation(response)) })
       .catch(err => console.log(err));
    }

    onRouteChange = (route) => {
      if(route === 'signout') {
        this.setState(initialState);
      } else if (route === 'home') {
        this.setState({ isSignedIn: true })
      }
      this.setState({route: route});
    }

  render() {
    const { isSignedIn, imageUrl, route, box } = this.state;
    return (
      <div className="App">
          <Navigation isSignedIn = { isSignedIn } onRouteChange = { this.onRouteChange }/>
      { route === 'home'
          ? <main className="main">
          <Rank name = { this.state.user.name } entries = { this.state.user.entries }/>
          <ImageLinkForm 
            onInputChange = {this.onInputChange} 
            onSubmit = {this.onSubmit}
          />
          <FaceRecognition box = {box} imageUrl = {imageUrl}/>
        </main>
      : ( this.state.route === 'signin'
        ? <Signin loadUser = { this.loadUser } onRouteChange = { this.onRouteChange }/>
        : <Register loadUser = { this.loadUser } onRouteChange = { this.onRouteChange }/>
        )
      }
      </div>
    );
  }
}

export default App;
