import React, { Component } from 'react';

//Styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-svg-core'
import '@fortawesome/react-fontawesome'
import '@fortawesome/free-solid-svg-icons'

//Components
import ProgressBar from './components/ProgressBar'
import MessageList from './components/MessageList'
import Toolbar from './components/Toolbar'
import Compose from './components/Compose'

class App extends Component {

  state = {

  }

  componentDidMount = async () => {
    const response = await
      fetch('http://localhost:8082/api/messages')
      const json = await response.json()
      this.setState({ messages: json})
  }








  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
